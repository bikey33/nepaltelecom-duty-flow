import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScheduleTable, ScheduleData } from "@/components/ScheduleTable";
import { Calendar, Plus, Filter, Download } from 'lucide-react';

const DutyChart = () => {
  const shifts: ScheduleData[] = [
    {
      id: 1,
      employee: "Ram Sharma",
      employeeId: "EMP001",
      position: "Network Engineer",
      shift: "Morning",
      startTime: "6:00 AM",
      endTime: "2:00 PM",
      date: "2024-01-15",
      status: "scheduled",
      location: "Central Office"
    },
    {
      id: 2,
      employee: "Sita Karki",
      employeeId: "EMP002",
      position: "Customer Service",
      shift: "Evening",
      startTime: "2:00 PM",
      endTime: "10:00 PM",
      date: "2024-01-15",
      status: "completed",
      location: "Call Center"
    },
    {
      id: 3,
      employee: "Hari Thapa",
      employeeId: "EMP003",
      position: "Field Technician",
      shift: "Night",
      startTime: "10:00 PM",
      endTime: "6:00 AM",
      date: "2024-01-15",
      status: "scheduled",
      location: "Maintenance Unit"
    },
    {
      id: 4,
      employee: "Maya Gurung",
      employeeId: "EMP004",
      position: "Supervisor",
      shift: "Morning",
      startTime: "6:00 AM",
      endTime: "2:00 PM",
      date: "2024-01-16",
      status: "scheduled",
      location: "Central Office"
    }
  ];


  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Duty Chart</h1>
          <p className="text-muted-foreground">Manage and monitor duty assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Duty
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">Today's Duties</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-success">18</div>
            <p className="text-xs text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-warning">6</div>
            <p className="text-xs text-muted-foreground">Pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-accent">2</div>
            <p className="text-xs text-muted-foreground">Missed</p>
          </CardContent>
        </Card>
      </div>

      {/* Duty Chart Table */}
      <ScheduleTable
        data={shifts}
        title="Current Week Schedule"
        onEdit={(id) => console.log('Edit shift', id)}
        onSwap={(id) => console.log('Swap shift', id)}
      />
    </div>
  );
};

export default DutyChart;