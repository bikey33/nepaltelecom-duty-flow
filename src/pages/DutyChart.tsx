import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Filter, Download } from 'lucide-react';

const DutyChart = () => {
  const shifts = [
    {
      id: 1,
      employee: "Ram Sharma",
      position: "Network Engineer",
      shift: "Morning (6 AM - 2 PM)",
      date: "2024-01-15",
      status: "scheduled",
      location: "Central Office"
    },
    {
      id: 2,
      employee: "Sita Karki",
      position: "Customer Service",
      shift: "Evening (2 PM - 10 PM)",
      date: "2024-01-15",
      status: "completed",
      location: "Call Center"
    },
    {
      id: 3,
      employee: "Hari Thapa",
      position: "Field Technician",
      shift: "Night (10 PM - 6 AM)",
      date: "2024-01-15",
      status: "scheduled",
      location: "Maintenance Unit"
    },
    {
      id: 4,
      employee: "Maya Gurung",
      position: "Supervisor",
      shift: "Morning (6 AM - 2 PM)",
      date: "2024-01-16",
      status: "scheduled",
      location: "Central Office"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'scheduled': return 'bg-primary text-primary-foreground';
      case 'missed': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

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
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Current Week Schedule
          </CardTitle>
          <CardDescription>
            Overview of duty assignments for the current week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Employee</th>
                  <th className="text-left p-3 font-medium">Position</th>
                  <th className="text-left p-3 font-medium">Shift</th>
                  <th className="text-left p-3 font-medium">Date</th>
                  <th className="text-left p-3 font-medium">Location</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {shifts.map((shift) => (
                  <tr key={shift.id} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <div>
                        <div className="font-medium">{shift.employee}</div>
                        <div className="text-sm text-muted-foreground">ID: EMP{shift.id.toString().padStart(3, '0')}</div>
                      </div>
                    </td>
                    <td className="p-3 text-sm">{shift.position}</td>
                    <td className="p-3 text-sm">{shift.shift}</td>
                    <td className="p-3 text-sm">{shift.date}</td>
                    <td className="p-3 text-sm">{shift.location}</td>
                    <td className="p-3">
                      <Badge className={getStatusColor(shift.status)}>
                        {shift.status}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm">Swap</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DutyChart;