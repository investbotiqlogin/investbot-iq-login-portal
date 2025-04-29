
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';

interface DashboardLayoutProps {
  role?: 'member' | 'admin';
}

const DashboardLayout = ({ role = 'member' }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar role={role} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader role={role} />
        
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
