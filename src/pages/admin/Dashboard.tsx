
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Mock data for charts
const userActivityData = [
  { name: 'Ma', active: 40, new: 5 },
  { name: 'Di', active: 35, new: 3 },
  { name: 'Wo', active: 42, new: 4 },
  { name: 'Do', active: 38, new: 6 },
  { name: 'Vr', active: 45, new: 7 },
  { name: 'Za', active: 20, new: 2 },
  { name: 'Zo', active: 15, new: 1 },
];

const userRolesData = [
  { name: 'Member', value: 45 },
  { name: 'Student', value: 20 },
  { name: 'Ouder', value: 15 },
  { name: 'Freelancer', value: 10 },
  { name: 'Ondernemer', value: 25 },
  { name: 'Affiliated', value: 5 },
];

const COLORS = ['#7E69AB', '#4F46E5', '#9b87f5', '#6E59A5', '#1A1F2C', '#D6BCFA'];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Actieve Gebruikers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">120</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              +15 deze maand
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Totale Cashflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€186.420</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              +12% t.o.v. vorige maand
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Nieuwe Registraties
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              +8 sinds vorige week
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Waarschuwingen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-amber-500 flex items-center mt-1">
              Actie vereist
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Gebruikersactiviteit</CardTitle>
            <CardDescription>Actieve gebruikers en nieuwe registraties per dag</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={userActivityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="active" name="Actieve gebruikers" fill="#7E69AB" />
                <Bar dataKey="new" name="Nieuwe registraties" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Gebruikersrollen</CardTitle>
            <CardDescription>Verdeling van gebruikers per rol</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userRolesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {userRolesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
