import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UserCard, UserData } from "@/components/UserCard";
import { Users, Plus, Search, Filter } from 'lucide-react';

const Employees = () => {
  const employees: UserData[] = [
    {
      id: 1,
      name: "Ram Sharma",
      position: "Network Engineer",
      department: "Technical",
      employeeId: "EMP001",
      status: "active",
      phone: "+977-9841234567",
      email: "ram.sharma@ntc.net.np",
      location: "Central Office",
      joinDate: "Jan 2022"
    },
    {
      id: 2,
      name: "Sita Karki",
      position: "Customer Service Representative",
      department: "Customer Service",
      employeeId: "EMP002",
      status: "active",
      phone: "+977-9841234568",
      email: "sita.karki@ntc.net.np",
      location: "Call Center",
      joinDate: "Mar 2021"
    },
    {
      id: 3,
      name: "Hari Thapa",
      position: "Field Technician",
      department: "Maintenance",
      employeeId: "EMP003",
      status: "on_leave",
      phone: "+977-9841234569",
      email: "hari.thapa@ntc.net.np",
      location: "Field Office",
      joinDate: "Jul 2020"
    },
    {
      id: 4,
      name: "Maya Gurung",
      position: "Supervisor",
      department: "Operations",
      employeeId: "EMP004",
      status: "active",
      phone: "+977-9841234570",
      email: "maya.gurung@ntc.net.np",
      location: "Main Office",
      joinDate: "Sep 2019"
    }
  ];


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
              <UserCard
                key={employee.id}
                user={employee}
                onView={(id) => console.log('View employee', id)}
                onEdit={(id) => console.log('Edit employee', id)}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Employees;