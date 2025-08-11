import { useMemo } from "react";
import { format } from "date-fns";
import { DutyRosterTable, RosterData, Person } from "@/components/DutyRosterTable";

const DutyChart = () => {
  const monday = getMonday(new Date());
  const weekDays = useMemo(
    () => Array.from({ length: 7 }, (_, i) => new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i)),
    [monday]
  );

  const persons: Person[] = [
    { id: 1, name: "Ram Sharma", phone: "9841000001" },
    { id: 2, name: "Sita Karki", phone: "9841000002" },
    { id: 3, name: "Hari Thapa", phone: "9841000003" },
    { id: 4, name: "Maya Gurung", phone: "9841000004" },
  ];

  const networks = ["GSM", "FTTH", "Transmission", "Power"] as const;

  const data: RosterData = networks.reduce((acc, net, nIdx) => {
    const byDate: Record<string, Person[]> = {};
    weekDays.forEach((d, i) => {
      const key = format(d, "yyyy-MM-dd");
      // create 1-3 people per cell pseudo-randomly
      const count = ((i + nIdx) % 3) + 1;
      byDate[key] = Array.from({ length: count }, (_, k) => persons[(i + nIdx + k) % persons.length]);
    });
    acc[net] = byDate;
    return acc;
  }, {} as RosterData);

  return (
    <div
      className="min-h-screen bg-[hsl(var(--page-bg))]"
      style={{
        ["--page-bg" as any]: "220 14% 96%", // #F3F4F6
        ["--title" as any]: "222 47% 11%", // #111827
        ["--muted-text" as any]: "215 20% 65%", // #6B7280
        ["--gray-200" as any]: "220 14% 94%", // #E5E7EB
        ["--gray-300" as any]: "220 9% 87%", // #D1D5DB
        ["--gray-700" as any]: "215 19% 35%", // #374151
        ["--person-1-bg" as any]: "345 100% 95%", // #FFE4EB approx
        ["--person-2-bg" as any]: "213 97% 85%", // #DBEAFE
        ["--person-3-bg" as any]: "146 73% 93%", // #DCFCE7
        ["--person-4-bg" as any]: "258 100% 95%", // #EDE9FE
      }}
    >
      <div className="px-6 pt-8 pb-4">
        <h1 className="text-xl font-bold text-[hsl(var(--title))]">Weekly Duty Roster</h1>
        <p className="mt-1 text-sm text-[hsl(var(--muted-text))]">Nepal Telecom • Integrated Network Operation Center</p>
      </div>

      <div className="px-6 pb-8">
        <DutyRosterTable startDate={monday} data={data} />
      </div>
    </div>
  );
};

export default DutyChart;

function getMonday(d: Date) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
}
