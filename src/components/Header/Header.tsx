import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bell, User, Settings, LayoutDashboard, Calendar, Users, FileText, Clipboard } from 'lucide-react';
import { COMPANY_NAME, APP_NAME, ROUTES } from '@/utils/constants';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--header-bg))] text-[hsl(var(--header-foreground))]">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left side - Logo */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-[hsl(var(--header-foreground))] hover:bg-[hsl(var(--primary-hover))] lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--header-foreground))] text-[hsl(var(--header-bg))] font-bold">
              NT
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold">Duty Manager</h1>
              <p className="text-xs opacity-90">{COMPANY_NAME}</p>
            </div>
          </div>
        </div>

        {/* Center - Navigation Links (hidden on mobile) */}
        <nav className="hidden lg:flex items-center space-x-1">
          <NavLink
            to={ROUTES.DASHBOARD}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[hsl(var(--primary-hover))] text-[hsl(var(--header-foreground))]'
                  : 'text-[hsl(var(--header-foreground))]/80 hover:bg-[hsl(var(--primary-hover))]/50 hover:text-[hsl(var(--header-foreground))]'
              }`
            }
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </NavLink>
          
          <NavLink
            to={ROUTES.SCHEDULE}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[hsl(var(--primary-hover))] text-[hsl(var(--header-foreground))]'
                  : 'text-[hsl(var(--header-foreground))]/80 hover:bg-[hsl(var(--primary-hover))]/50 hover:text-[hsl(var(--header-foreground))]'
              }`
            }
          >
            <Calendar className="h-4 w-4" />
            Schedule
          </NavLink>
          
          <NavLink
            to={ROUTES.DUTY_CHART}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[hsl(var(--primary-hover))] text-[hsl(var(--header-foreground))]'
                  : 'text-[hsl(var(--header-foreground))]/80 hover:bg-[hsl(var(--primary-hover))]/50 hover:text-[hsl(var(--header-foreground))]'
              }`
            }
          >
            <Clipboard className="h-4 w-4" />
            Roster
          </NavLink>
          
          <NavLink
            to={ROUTES.EMPLOYEES}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[hsl(var(--primary-hover))] text-[hsl(var(--header-foreground))]'
                  : 'text-[hsl(var(--header-foreground))]/80 hover:bg-[hsl(var(--primary-hover))]/50 hover:text-[hsl(var(--header-foreground))]'
              }`
            }
          >
            <Users className="h-4 w-4" />
            Personnel
          </NavLink>
          
          <NavLink
            to={ROUTES.REPORTS}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[hsl(var(--primary-hover))] text-[hsl(var(--header-foreground))]'
                  : 'text-[hsl(var(--header-foreground))]/80 hover:bg-[hsl(var(--primary-hover))]/50 hover:text-[hsl(var(--header-foreground))]'
              }`
            }
          >
            <FileText className="h-4 w-4" />
            Reports
          </NavLink>
        </nav>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-[hsl(var(--header-foreground))] hover:bg-[hsl(var(--primary-hover))]"
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-[hsl(var(--header-foreground))] hover:bg-[hsl(var(--primary-hover))]"
          >
            <Settings className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="text-[hsl(var(--header-foreground))] hover:bg-[hsl(var(--primary-hover))]"
          >
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};