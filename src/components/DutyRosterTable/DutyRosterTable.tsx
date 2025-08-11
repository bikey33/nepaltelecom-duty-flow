import { addDays, format } from "date-fns";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface Person {
  id: number;
  name: string;
  phone: string;
}

export type RosterData = Record<string, Record<string, Person[]>>; // network -> date(yyyy-MM-dd) -> persons

interface DutyRosterTableProps {
  startDate?: Date; // Monday of the week
  data: RosterData;
}

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const personBgClass = (id: number) => {
  const key = ((id - 1) % 4) + 1;
  switch (key) {
    case 1:
      return "bg-[hsl(var(--person-1-bg))]";
    case 2:
      return "bg-[hsl(var(--person-2-bg))]";
    case 3:
      return "bg-[hsl(var(--person-3-bg))]";
    case 4:
    default:
      return "bg-[hsl(var(--person-4-bg))]";
  }
};

export const DutyRosterTable: React.FC<DutyRosterTableProps> = ({ startDate, data }) => {
  const [monday, setMonday] = useState(() => startDate ?? getMonday(new Date()));
  const [query, setQuery] = useState("");

  const weekDays = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(monday, i)),
    [monday]
  );

  const rangeLabel = `${format(weekDays[0], "MMMM d")}–${format(weekDays[6], "d, yyyy")}`;
  const networks = Object.keys(data);

  const handleDownload = () => {
    const rows: string[] = ["Network,Date,Day,Name,Phone"]; 
    networks.forEach((net) => {
      weekDays.forEach((d) => {
        const key = format(d, "yyyy-MM-dd");
        const persons = data[net]?.[key] ?? [];
        if (persons.length === 0) {
          rows.push(`${net},${key},${dayNames[d.getDay()]},,`);
        } else {
          persons.forEach((p) => rows.push(`${net},${key},${dayNames[d.getDay()]},${p.name},${p.phone}`));
        }
      });
    });
    const csv = rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `weekly-roster-${format(weekDays[0], "yyyy-MM-dd")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const goPrev = () => setMonday(addDays(monday, -7));
  const goNext = () => setMonday(addDays(monday, 7));

  return (
    <section className="bg-[hsl(var(--card))] rounded-lg shadow-md">
      {/* Header row */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-6 border-b border-[hsl(var(--border))]">
        <h3 className="font-bold text-[hsl(var(--foreground))]">{rangeLabel}</h3>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search name or phone"
              className="pl-8 w-56"
            />
          </div>
          <Button onClick={handleDownload} className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-hover))]">
            <Download className="h-4 w-4 mr-2" />
            Download Roster
          </Button>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={goPrev}
              className="h-9 w-9 rounded-md bg-[hsl(var(--gray-200,220_14%_94%))] hover:bg-[hsl(var(--gray-300,220_9%_87%))] grid place-items-center"
              aria-label="Previous week"
            >
              <ChevronLeft className="h-4 w-4 text-[hsl(var(--gray-700,215_19%_35%))]" />
            </button>
            <button
              onClick={goNext}
              className="h-9 w-9 rounded-md bg-[hsl(var(--gray-200,220_14%_94%))] hover:bg-[hsl(var(--gray-300,220_9%_87%))] grid place-items-center"
              aria-label="Next week"
            >
              <ChevronRight className="h-4 w-4 text-[hsl(var(--gray-700,215_19%_35%))]" />
            </button>
          </div>
        </div>
      </div>

      {/* Table wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[960px]">
          <thead className="bg-white">
            <tr>
              <th className="sticky left-0 z-20 bg-white px-4 py-2 text-left text-sm font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))]">
                Network
              </th>
              {weekDays.map((d) => (
                <th
                  key={d.toISOString()}
                  className="sticky top-0 z-10 bg-white px-4 py-2 text-left text-sm font-semibold text-[hsl(var(--foreground))] border-b border-[hsl(var(--border))]"
                >
                  <div className="flex flex-col">
                    <span>{dayNames[d.getDay()]}</span>
                    <span className="text-xs text-[hsl(var(--muted-foreground))]">{format(d, "MMM d")}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {networks.map((net) => (
              <tr key={net} className="border-b border-[hsl(var(--border))] align-top">
                <td className="sticky left-0 z-10 bg-white px-4 py-2 font-semibold text-[hsl(var(--foreground))]">
                  {net}
                </td>
                {weekDays.map((d) => {
                  const key = format(d, "yyyy-MM-dd");
                  const persons = (data[net]?.[key] ?? []).filter(
                    (p) =>
                      p.name.toLowerCase().includes(query.toLowerCase()) ||
                      p.phone.includes(query)
                  );
                  return (
                    <td key={key} className="px-4 py-2">
                      <div className="flex flex-col gap-2">
                        {persons.map((p) => (
                          <div
                            key={p.id + p.phone}
                            className={`rounded-md shadow-sm ${personBgClass(p.id)} px-3 py-2 text-[hsl(var(--title,222_47%_11%))]`}
                          >
                            <div className="text-sm font-semibold leading-tight">{p.name}</div>
                            <div className="text-xs leading-tight opacity-90">{p.phone}</div>
                          </div>
                        ))}
                        {persons.length === 0 && <div className="min-h-[40px]" />}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

function getMonday(d: Date) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}
