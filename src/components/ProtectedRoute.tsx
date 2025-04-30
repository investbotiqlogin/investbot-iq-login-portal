
import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import type { UserRole } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  allowedRoles = [] 
}) => {
  const { user, userRole, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    // Toon loading state terwijl we controleren of gebruiker is ingelogd
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-investbot-purple/30 mb-4"></div>
          <div className="h-4 w-32 bg-investbot-purple/30 rounded"></div>
        </div>
      </div>
    );
  }

  // Als gebruiker niet is ingelogd, redirect naar login pagina
  if (!user) {
    return <Navigate to="/inlog" state={{ from: location }} replace />;
  }

  // Als er geen specifieke rollen zijn opgegeven, of als de gebruiker de juiste rol heeft
  if (allowedRoles.length === 0 || (userRole && allowedRoles.includes(userRole))) {
    return <>{children}</>;
  }

  // Als gebruiker niet de juiste rol heeft, redirect naar dashboard
  return <Navigate to={userRole === 'admin' ? '/admin' : '/member'} replace />;
};

export default ProtectedRoute;
