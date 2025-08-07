import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Bell, User, Settings } from 'lucide-react';
import { COMPANY_NAME, APP_NAME } from '@/utils/constants';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header = ({ onMenuClick }: HeaderProps) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[hsl(var(--header-bg))] text-[hsl(var(--header-foreground))]">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-[hsl(var(--header-foreground))] hover:bg-[hsl(var(--primary-hover))] md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--header-foreground))] text-[hsl(var(--header-bg))] font-bold">
              NT
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold">{COMPANY_NAME}</h1>
              <p className="text-sm opacity-90">{APP_NAME}</p>
            </div>
          </div>
        </div>

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