import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Plus, Search, Filter } from 'lucide-react';

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "Ram Sharma",
      position: "Network Engineer",
      department: "Technical",
      employeeId: "EMP001",
      status: "active",
      phone: "+977-9841234567",
      email: "ram.sharma@ntc.net.np"
    },
    {
      id: 2,
      name: "Sita Karki",
      position: "Customer Service Representative",
      department: "Customer Service",
      employeeId: "EMP002",
      status: "active",
      phone: "+977-9841234568",
      email: "sita.karki@ntc.net.np"
    },
    {
      id: 3,
      name: "Hari Thapa",
      position: "Field Technician",
      department: "Maintenance",
      employeeId: "EMP003",
      status: "on_leave",
      phone: "+977-9841234569",
      email: "hari.thapa@ntc.net.np"
    },
    {
      id: 4,
      name: "Maya Gurung",
      position: "Supervisor",
      department: "Operations",
      employeeId: "EMP004",
      status: "active",
      phone: "+977-9841234570",
      email: "maya.gurung@ntc.net.np"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'on_leave': return 'bg-warning text-warning-foreground';
      case 'inactive': return 'bg-muted text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Employees</h1>
          <p className="text-muted-foreground">Manage employee records and information</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Employee
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <div className="text-2xl font-bold text-primary">127</div>
                <p className="text-xs text-muted-foreground">Total Employees</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-success">124</div>
            <p className="text-xs text-muted-foreground">Active</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-warning">3</div>
            <p className="text-xs text-muted-foreground">On Leave</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-muted-foreground">0</div>
            <p className="text-xs text-muted-foreground">Inactive</p>
          </CardContent>
        </Card>
      </div>

      {/* Employee List */}
      <Card>
        <CardHeader>
          <CardTitle>Employee Directory</CardTitle>
          <CardDescription>
            Complete list of all employees with their details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {employees.map((employee) => (
              <Card key={employee.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {getInitials(employee.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium truncate">{employee.name}</h3>
                        <Badge className={getStatusColor(employee.status)}>
                          {employee.status.replace('_', ' ')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{employee.position}</p>
                      <p className="text-xs text-muted-foreground mb-2">{employee.department}</p>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground">ID: {employee.employeeId}</p>
                        <p className="text-xs text-muted-foreground">{employee.phone}</p>
                        <p className="text-xs text-muted-foreground truncate">{employee.email}</p>
                      </div>
                      <div className="flex gap-1 mt-3">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Edit</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Employees;