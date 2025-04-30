
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./layouts/DashboardLayout";
import MemberDashboard from "./pages/member/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/inlog" element={<Login />} />

            {/* Member routes */}
            <Route 
              path="/member" 
              element={
                <ProtectedRoute allowedRoles={['member', 'student', 'ouder', 'freelancer', 'ondernemer', 'affiliated']}>
                  <DashboardLayout role="member" />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/member/dashboard" replace />} />
              <Route path="dashboard" element={<MemberDashboard />} />
              <Route path="tasks" element={<div className="p-4">Taken pagina (nog te implementeren)</div>} />
              <Route path="profile" element={<div className="p-4">Profiel pagina (nog te implementeren)</div>} />
              <Route path="progress" element={<div className="p-4">Voortgang pagina (nog te implementeren)</div>} />
              <Route path="ai-running" element={<div className="p-4">AI Processen (nog te implementeren)</div>} />
              <Route path="referrals" element={<div className="p-4">Referrals pagina (nog te implementeren)</div>} />
            </Route>

            {/* Admin routes */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <DashboardLayout role="admin" />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<div className="p-4">Gebruikers pagina (nog te implementeren)</div>} />
              <Route path="tasks" element={<div className="p-4">Taken pagina (nog te implementeren)</div>} />
              <Route path="leads" element={<div className="p-4">Leads pagina (nog te implementeren)</div>} />
              <Route path="settings" element={<div className="p-4">Instellingen pagina (nog te implementeren)</div>} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
