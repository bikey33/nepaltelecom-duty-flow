import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const Schedule = () => {
  const currentWeek = [
    { day: 'Mon', date: '15', isToday: false },
    { day: 'Tue', date: '16', isToday: true },
    { day: 'Wed', date: '17', isToday: false },
    { day: 'Thu', date: '18', isToday: false },
    { day: 'Fri', date: '19', isToday: false },
    { day: 'Sat', date: '20', isToday: false },
    { day: 'Sun', date: '21', isToday: false },
  ];

  const timeSlots = [
    '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
  ];

  const scheduleData = {
    'Mon-06:00': { employee: 'Ram Sharma', status: 'scheduled' },
    'Mon-14:00': { employee: 'Sita Karki', status: 'scheduled' },
    'Mon-22:00': { employee: 'Hari Thapa', status: 'scheduled' },
    'Tue-06:00': { employee: 'Maya Gurung', status: 'scheduled' },
    'Tue-14:00': { employee: 'Ram Sharma', status: 'scheduled' },
    'Tue-22:00': { employee: 'Sita Karki', status: 'scheduled' },
    'Wed-06:00': { employee: 'Hari Thapa', status: 'scheduled' },
    'Wed-14:00': { employee: 'Maya Gurung', status: 'scheduled' },
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'bg-primary text-primary-foreground';
      case 'completed': return 'bg-success text-success-foreground';
      case 'missed': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-primary">Schedule</h1>
          <p className="text-muted-foreground">Weekly schedule overview and management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            View Month
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Schedule
          </Button>
        </div>
      </div>

      {/* Week Navigation */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Weekly Schedule
              </CardTitle>
              <CardDescription>January 15 - 21, 2024</CardDescription>
            </div>
            <div className="flex gap-1">
              <Button variant="outline" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Week Days Header */}
          <div className="grid grid-cols-8 gap-2 mb-4">
            <div className="p-2"></div> {/* Empty cell for time column */}
            {currentWeek.map((day) => (
              <div 
                key={day.day} 
                className={`text-center p-2 rounded-lg ${
                  day.isToday ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}
              >
                <div className="font-medium">{day.day}</div>
                <div className="text-sm">{day.date}</div>
              </div>
            ))}
          </div>

          {/* Schedule Grid */}
          <div className="space-y-2">
            {timeSlots.map((time) => (
              <div key={time} className="grid grid-cols-8 gap-2">
                <div className="p-2 text-sm font-medium text-muted-foreground text-right">
                  {time}
                </div>
                {currentWeek.map((day) => {
                  const scheduleKey = `${day.day}-${time}`;
                  const schedule = scheduleData[scheduleKey as keyof typeof scheduleData];
                  
                  return (
                    <div 
                      key={`${day.day}-${time}`} 
                      className="min-h-[60px] border rounded-lg p-2 hover:bg-muted/50 cursor-pointer"
                    >
                      {schedule && (
                        <div className="space-y-1">
                          <Badge className={getStatusColor(schedule.status)}>
                            {schedule.employee}
                          </Badge>
                          <div className="text-xs text-muted-foreground">
                            {time} - {String(parseInt(time.split(':')[0]) + 8).padStart(2, '0')}:00
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Schedule Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">42</div>
            <p className="text-sm text-muted-foreground">Total Shifts This Week</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-success">38</div>
            <p className="text-sm text-muted-foreground">Covered Shifts</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-warning">4</div>
            <p className="text-sm text-muted-foreground">Open Positions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;