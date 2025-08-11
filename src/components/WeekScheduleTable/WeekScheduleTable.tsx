import { ChevronLeft, ChevronRight } from "lucide-react";
import { addDays, format } from "date-fns";
import { useMemo, useState } from "react";

export type NetworkKey = "Network A" | "Network B" | "Network C";

interface Assignment {
  employee: string;
  network: NetworkKey;
}

interface WeekScheduleTableProps {
  startDate?: Date; // Monday of the week
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const networkClasses: Record<NetworkKey, string> = {
  "Network A": "bg-[hsl(var(--net-a-bg))] text-[hsl(var(--net-a-text))]",
  "Network B": "bg-[hsl(var(--net-b-bg))] text-[hsl(var(--net-b-text))]",
  "Network C": "bg-[hsl(var(--net-c-bg))] text-[hsl(var(--net-c-text))]",
};

export const WeekScheduleTable: React.FC<WeekScheduleTableProps> = ({ startDate }) => {
  const [monday, setMonday] = useState(() => startDate ?? getMonday(new Date()));

  const weekDays = useMemo(() =>
    Array.from({ length: 7 }, (_, i) => addDays(monday, i)),
  [monday]);

  const rangeLabel = `${format(weekDays[0], "MMMM d")}–${format(weekDays[6], "d, yyyy")}`;

  // Placeholder assignments
  const assignments: Record<string, { morning?: Assignment; afternoon?: Assignment; night?: Assignment }> = useMemo(() => ({
    [format(weekDays[0], 'yyyy-MM-dd')]: {
      morning: { employee: 'Ram Sharma', network: 'Network A' },
      afternoon: { employee: 'Sita Karki', network: 'Network B' },
      night: { employee: 'Hari Thapa', network: 'Network C' },
    },
    [format(weekDays[1], 'yyyy-MM-dd')]: {
      morning: { employee: 'Maya Gurung', network: 'Network B' },
      afternoon: { employee: 'Ram Sharma', network: 'Network A' },
    },
    [format(weekDays[2], 'yyyy-MM-dd')]: {
      night: { employee: 'Sita Karki', network: 'Network C' },
    },
  }), [weekDays]);

  const goPrev = () => setMonday(addDays(monday, -7));
  const goNext = () => setMonday(addDays(monday, 7));

  return (
    <section className="bg-[hsl(var(--card-bg))] rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-[hsl(var(--gray-200))]">
        <h3 className="font-bold text-[hsl(var(--title))]">{rangeLabel}</h3>
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            className="h-9 w-9 rounded-md bg-[hsl(var(--gray-200))] hover:bg-[hsl(var(--gray-300))] grid place-items-center"
            aria-label="Previous week"
          >
            <ChevronLeft className="h-4 w-4 text-[hsl(var(--gray-700))]" />
          </button>
          <button
            onClick={goNext}
            className="h-9 w-9 rounded-md bg-[hsl(var(--gray-200))] hover:bg-[hsl(var(--gray-300))] grid place-items-center"
            aria-label="Next week"
          >
            <ChevronRight className="h-4 w-4 text-[hsl(var(--gray-700))]" />
          </button>
        </div>
      </div>

      {/* Table wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px]">
          <thead>
            <tr className="border-b border-[hsl(var(--gray-200))]">
              <th className="text-left text-sm font-semibold text-[hsl(var(--title))] px-4 py-2">Day</th>
              <th className="text-left text-sm font-semibold text-[hsl(var(--title))] px-4 py-2">Morning Shift (06:00–14:00)</th>
              <th className="text-left text-sm font-semibold text-[hsl(var(--title))] px-4 py-2">Afternoon Shift (14:00–22:00)</th>
              <th className="text-left text-sm font-semibold text-[hsl(var(--title))] px-4 py-2">Night Shift (22:00–06:00)</th>
            </tr>
          </thead>
          <tbody>
            {weekDays.map((d) => {
              const key = format(d, 'yyyy-MM-dd');
              const a = assignments[key] ?? {};
              return (
                <tr key={key} className="border-b border-[hsl(var(--gray-200))]">
                  {/* Day column sticky on small screens */}
                  <td className="px-4 py-2 align-top bg-[hsl(var(--card-bg))] sticky left-0">
                    <div className="font-semibold text-[hsl(var(--title))]">{dayNames[d.getDay()]}</div>
                    <div className="text-sm text-[hsl(var(--muted-text))]">{format(d, 'MMM d')}</div>
                  </td>

                  {/* Morning */}
                  <td className="px-4 py-2">
                    {a.morning ? (
                      <div className={`inline-flex flex-col rounded-md px-3 py-1.5 ${networkClasses[a.morning.network]} hover:brightness-105 min-h-[40px] justify-center`}>
                        <span className="font-semibold leading-tight">{a.morning.employee}</span>
                        <span className="text-xs leading-tight opacity-90">{a.morning.network}</span>
                      </div>
                    ) : (
                      <div className="min-h-[40px]" />
                    )}
                  </td>

                  {/* Afternoon */}
                  <td className="px-4 py-2">
                    {a.afternoon ? (
                      <div className={`inline-flex flex-col rounded-md px-3 py-1.5 ${networkClasses[a.afternoon.network]} hover:brightness-105 min-h-[40px] justify-center`}>
                        <span className="font-semibold leading-tight">{a.afternoon.employee}</span>
                        <span className="text-xs leading-tight opacity-90">{a.afternoon.network}</span>
                      </div>
                    ) : (
                      <div className="min-h-[40px]" />
                    )}
                  </td>

                  {/* Night */}
                  <td className="px-4 py-2">
                    {a.night ? (
                      <div className={`inline-flex flex-col rounded-md px-3 py-1.5 ${networkClasses[a.night.network]} hover:brightness-105 min-h-[40px] justify-center`}>
                        <span className="font-semibold leading-tight">{a.night.employee}</span>
                        <span className="text-xs leading-tight opacity-90">{a.night.network}</span>
                      </div>
                    ) : (
                      <div className="min-h-[40px]" />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

function getMonday(d: Date) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(date.setDate(diff));
}
