
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardHeader from '@/components/DashboardHeader';
import { useAuth } from '@/contexts/AuthContext';
import type { UserRole } from '@/contexts/AuthContext';

interface DashboardLayoutProps {
  role: 'member' | 'admin'; // This remains as is since we only have two dashboard types
}

const DashboardLayout = ({ role }: DashboardLayoutProps) => {
  const { user, userRole, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-investbot-purple/30 mb-4"></div>
          <div className="h-4 w-32 bg-investbot-purple/30 rounded"></div>
        </div>
      </div>
    );
  }
  
  // Redirect naar login als gebruiker niet is ingelogd
  if (!user) {
    return <Navigate to="/inlog" replace />;
  }
  
  // Voor de admin dashboard, controleer of gebruiker admin is
  if (role === 'admin' && userRole !== 'admin') {
    return <Navigate to="/member/dashboard" replace />;
  }
  
  // Voor de member dashboard, controleer of gebruiker geen admin is
  // Beschouw alle niet-admin rollen als member voor dashboard toegang
  if (role === 'member' && userRole === 'admin') {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar role={role} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader 
          userName={user?.user_metadata?.name || "Gebruiker"} 
          role={role} 
        />
        
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
