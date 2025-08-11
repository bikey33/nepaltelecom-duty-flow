import { Clock } from "lucide-react";
import { useState } from "react";

interface ShiftTime {
  start: string;
  end: string;
}

interface DutyHoursCardProps {
  initial?: {
    morning: ShiftTime;
    afternoon: ShiftTime;
    night: ShiftTime;
  };
  onChange?: (value: { morning: ShiftTime; afternoon: ShiftTime; night: ShiftTime }) => void;
}

export const DutyHoursCard: React.FC<DutyHoursCardProps> = ({
  initial = {
    morning: { start: "06:00", end: "14:00" },
    afternoon: { start: "14:00", end: "22:00" },
    night: { start: "22:00", end: "06:00" },
  },
  onChange,
}) => {
  const [value, setValue] = useState(initial);

  const update = (key: keyof typeof value, part: keyof ShiftTime, v: string) => {
    const next = { ...value, [key]: { ...value[key], [part]: v } } as typeof value;
    setValue(next);
    onChange?.(next);
  };

  const inputClass =
    "w-full rounded-md border text-sm px-[10px] py-[6px] bg-[hsl(var(--card-bg))] border-[hsl(var(--gray-300))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--blue-200))] focus:border-[hsl(var(--inoc-blue))]";

  const labelClass = "text-sm font-medium text-[hsl(var(--title))]";
  const sublabelClass = "text-xs text-[hsl(var(--muted-text))]";

  const ShiftColumn = ({ name, k }: { name: string; k: keyof typeof value }) => (
    <div className="flex-1 min-w-[240px]">
      <div className="mb-3">
        <div className={labelClass}>{name}</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className={sublabelClass}>Start Time</div>
          <div className="relative mt-1">
            <input
              type="time"
              value={value[k].start}
              onChange={(e) => update(k, "start", e.target.value)}
              className={inputClass}
            />
            <Clock className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--gray-400))] pointer-events-none" />
          </div>
        </div>
        <div>
          <div className={sublabelClass}>End Time</div>
          <div className="relative mt-1">
            <input
              type="time"
              value={value[k].end}
              onChange={(e) => update(k, "end", e.target.value)}
              className={inputClass}
            />
            <Clock className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--gray-400))] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-[hsl(var(--card-bg))] rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-[hsl(var(--title))]">Duty Hours</h2>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        <ShiftColumn name="Morning Shift" k="morning" />
        <ShiftColumn name="Afternoon Shift" k="afternoon" />
        <ShiftColumn name="Night Shift" k="night" />
      </div>
    </section>
  );
};
