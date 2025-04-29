
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface DashboardHeaderProps {
  userName?: string;
  role?: 'member' | 'admin';
}

const DashboardHeader = ({ userName = 'Gebruiker', role = 'member' }: DashboardHeaderProps) => {
  return (
    <header className="w-full h-16 border-b bg-background/95 backdrop-blur-sm flex items-center px-6 justify-between">
      <div className="flex items-center gap-4 w-full max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Zoeken..." 
            className="pl-10 bg-secondary/50"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-muted-foreground capitalize">{role}</p>
          </div>
          <Button variant="ghost" size="icon" className="rounded-full bg-secondary">
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
