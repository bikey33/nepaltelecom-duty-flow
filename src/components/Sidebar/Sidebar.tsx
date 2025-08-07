import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Home, 
  Calendar, 
  Users, 
  BarChart3, 
  Settings, 
  ClipboardList,
  Clock,
  FileText
} from 'lucide-react';
import { ROUTES } from '@/utils/constants';
import { NavItem } from '@/types';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const navigationItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: ROUTES.DASHBOARD,
    icon: 'Home'
  },
  {
    title: 'Duty Chart',
    href: ROUTES.DUTY_CHART,
    icon: 'Calendar'
  },
  {
    title: 'Schedule',
    href: ROUTES.SCHEDULE,
    icon: 'Clock'
  },
  {
    title: 'Employees',
    href: ROUTES.EMPLOYEES,
    icon: 'Users'
  },
  {
    title: 'Reports',
    href: ROUTES.REPORTS,
    icon: 'BarChart3'
  },
  {
    title: 'Settings',
    href: ROUTES.SETTINGS,
    icon: 'Settings'
  }
];

const iconMap = {
  Home,
  Calendar,
  Users,
  BarChart3,
  Settings,
  ClipboardList,
  Clock,
  FileText
};

export const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  return (
    <aside
      className={cn(
        "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r bg-[hsl(var(--sidebar-bg))] transition-transform duration-200 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <ScrollArea className="h-full px-4 py-6">
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start gap-3 text-[hsl(var(--sidebar-foreground))] hover:bg-primary/10 hover:text-primary"
                onClick={onClose}
              >
                {IconComponent && <IconComponent className="h-5 w-5" />}
                {item.title}
              </Button>
            );
          })}
        </nav>

        {/* Quick Stats Section */}
        <div className="mt-8 space-y-4">
          <h4 className="text-sm font-medium text-muted-foreground px-3">Quick Stats</h4>
          <div className="space-y-3">
            <div className="rounded-lg bg-primary/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Active Duties</span>
                <span className="text-lg font-bold text-primary">24</span>
              </div>
            </div>
            <div className="rounded-lg bg-accent/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">On Leave</span>
                <span className="text-lg font-bold text-accent">3</span>
              </div>
            </div>
            <div className="rounded-lg bg-success/5 p-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Completed</span>
                <span className="text-lg font-bold text-success">156</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};