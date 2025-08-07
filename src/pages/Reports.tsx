import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Download, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const Reports = () => {
  const reportMetrics = [
    {
      title: "Attendance Rate",
      value: "96.5%",
      change: "+2.3%",
      trend: "up",
      description: "Last 30 days"
    },
    {
      title: "Average Response Time",
      value: "4.2 min",
      change: "-0.8 min",
      trend: "up",
      description: "Customer service calls"
    },
    {
      title: "Duty Coverage",
      value: "98.1%",
      change: "+1.2%",
      trend: "up",
      description: "Scheduled vs actual"
    },
    {
      title: "Employee Satisfaction",
      value: "4.6/5",
      change: "+0.3",
      trend: "up",
      description: "Monthly survey"
    }
  ];

  const departmentStats = [
    {
      department: "Technical Support",
      employees: 45,
      attendance: 97,
      avgHours: 42,
      efficiency: 94
    },
    {
      department: "Customer Service",
      employees: 38,
      attendance: 95,
      avgHours: 40,
      efficiency: 96
    },
    {
      department: "Field Operations",
      employees: 32,
      attendance: 98,
      avgHours: 44,
      efficiency: 92
    },
    {
      department: "Maintenance",
      employees: 12,
      attendance: 94,
      avgHours: 38,
      efficiency: 89
    }
  ];

  const recentReports = [
    {
      title: "Monthly Attendance Report",
      type: "Attendance",
      generated: "2024-01-15",
      status: "completed"
    },
    {
      title: "Duty Coverage Analysis",
      type: "Coverage",
      generated: "2024-01-14",
      status: "completed"
    },
    {
      title: "Employee Performance Review",
      type: "Performance",
      generated: "2024-01-13",
      status: "processing"
    },
    {
      title: "Overtime Hours Summary",
      type: "Overtime",
      generated: "2024-01-12",
      status: "completed"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Reports & Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights and performance metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Custom Report
          </Button>
          <Button size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reportMetrics.map((metric) => (
          <Card key={metric.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
              <TrendingUp className={`h-4 w-4 ${
                metric.trend === 'up' ? 'text-success' : 'text-destructive'
              }`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{metric.value}</div>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant={metric.trend === 'up' ? 'default' : 'destructive'} className="text-xs">
                  {metric.change}
                </Badge>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Department Performance
            </CardTitle>
            <CardDescription>Performance metrics by department</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {departmentStats.map((dept) => (
                <div key={dept.department} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">{dept.department}</h4>
                    <Badge variant="outline">{dept.employees} employees</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Attendance</div>
                      <div className="font-medium text-primary">{dept.attendance}%</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Avg Hours</div>
                      <div className="font-medium">{dept.avgHours}h</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Efficiency</div>
                      <div className="font-medium text-success">{dept.efficiency}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Recent Reports
            </CardTitle>
            <CardDescription>Latest generated reports and analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentReports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {report.status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <Clock className="h-5 w-5 text-warning" />
                    )}
                    <div>
                      <p className="font-medium text-sm">{report.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {report.type} • {report.generated}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant={report.status === 'completed' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {report.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;