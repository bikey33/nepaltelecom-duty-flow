import { useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { DutyHoursCard } from "@/components/DutyHoursCard";
import { WeekScheduleTable } from "@/components/WeekScheduleTable";

const Schedule = () => {
  // SEO
  useEffect(() => {
    document.title = "Schedule Management | INOC Duty Roster";
    const meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = "Modify shift times and assign personnel for the upcoming week.";
      document.head.appendChild(m);
    } else {
      meta.setAttribute("content", "Modify shift times and assign personnel for the upcoming week.");
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Section 1: Page Header */}
      <PageHeader
        title="Schedule Management"
        subtitle="Modify shift times and assign personnel for the upcoming week."
      />

      {/* Section 2: Duty Hours */}
      <div className="px-6">
        <DutyHoursCard />
      </div>

      {/* Section 3: Week Schedule Table */}
      <div className="px-6 pb-8">
        <WeekScheduleTable />
      </div>
    </div>
  );
};

export default Schedule;
