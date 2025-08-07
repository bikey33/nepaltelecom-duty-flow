import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: "Total Employees",
      value: "127",
      description: "Active staff members",
      icon: Users,
      trend: "+2 this month"
    },
    {
      title: "Today's Duties",
      value: "24",
      description: "Scheduled shifts",
      icon: Calendar,
      trend: "6 completed"
    },
    {
      title: "Pending Approvals",
      value: "8",
      description: "Shift requests",
      icon: Clock,
      trend: "2 urgent"
    },
    {
      title: "Coverage Rate",
      value: "96%",
      description: "Last 30 days",
      icon: CheckCircle,
      trend: "+3% improvement"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: "Duty assigned",
      employee: "Ram Sharma",
      time: "2 minutes ago",
      status: "success"
    },
    {
      id: 2,
      action: "Leave requested",
      employee: "Sita Karki",
      time: "15 minutes ago",
      status: "pending"
    },
    {
      id: 3,
      action: "Shift completed",
      employee: "Hari Thapa",
      time: "1 hour ago",
      status: "success"
    },
    {
      id: 4,
      action: "Schedule updated",
      employee: "Maya Gurung",
      time: "2 hours ago",
      status: "info"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Nepal Telecom Duty Chart Management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <IconComponent className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
                <Badge variant="secondary" className="mt-2 text-xs">
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-success' :
                    activity.status === 'pending' ? 'bg-warning' :
                    'bg-primary'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.employee}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Today's Alerts</CardTitle>
            <CardDescription>Important notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Understaffed Shift</p>
                  <p className="text-xs text-muted-foreground">Night shift (10 PM - 6 AM) needs 2 more operators</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/10">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Shift Change Reminder</p>
                  <p className="text-xs text-muted-foreground">Evening shift starts in 30 minutes</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-success/10">
                <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <p className="text-sm font-medium">All Morning Shifts Covered</p>
                  <p className="text-xs text-muted-foreground">100% attendance for morning duties</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;