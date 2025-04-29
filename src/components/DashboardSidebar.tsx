
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { 
  LayoutDashboard, 
  CheckSquare, 
  User, 
  LineChart, 
  Cpu, 
  Users,
  Settings,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  isActive: boolean;
}

const SidebarItem = ({ icon, title, href, isActive }: SidebarItemProps) => (
  <Link
    to={href}
    className={cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
      isActive ? 
        "bg-investbot-purple text-white" : 
        "text-foreground/70 hover:text-foreground hover:bg-investbot-light"
    )}
  >
    <div className="w-5 h-5">{icon}</div>
    <span>{title}</span>
  </Link>
);

interface DashboardSidebarProps {
  role?: 'member' | 'admin';
}

const DashboardSidebar = ({ role = 'member' }: DashboardSidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const memberItems = [
    { icon: <LayoutDashboard size={18} />, title: 'Dashboard', href: '/member/dashboard' },
    { icon: <CheckSquare size={18} />, title: 'Taken', href: '/member/tasks' },
    { icon: <User size={18} />, title: 'Profiel', href: '/member/profile' },
    { icon: <LineChart size={18} />, title: 'Voortgang', href: '/member/progress' },
    { icon: <Cpu size={18} />, title: 'AI Processen', href: '/member/ai-running' },
    { icon: <Users size={18} />, title: 'Referrals', href: '/member/referrals' },
  ];

  const adminItems = [
    { icon: <LayoutDashboard size={18} />, title: 'Dashboard', href: '/admin/dashboard' },
    { icon: <Users size={18} />, title: 'Gebruikers', href: '/admin/users' },
    { icon: <CheckSquare size={18} />, title: 'Taken', href: '/admin/tasks' },
    { icon: <Settings size={18} />, title: 'Instellingen', href: '/admin/settings' },
  ];

  const items = role === 'admin' ? adminItems : memberItems;

  return (
    <div className="h-screen w-64 bg-background border-r flex flex-col">
      <div className="p-6">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      
      <div className="px-3 mt-6 flex-1">
        <div className="space-y-1">
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              title={item.title}
              href={item.href}
              isActive={currentPath === item.href}
            />
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t mt-auto">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-investbot-light transition-colors"
        >
          <div className="w-5 h-5">
            <LogOut size={18} />
          </div>
          <span>Uitloggen</span>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSidebar;
