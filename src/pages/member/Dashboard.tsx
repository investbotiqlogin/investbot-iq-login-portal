
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Mock data for charts
const cashflowData = [
  { month: 'Jan', amount: 1200 },
  { month: 'Feb', amount: 1400 },
  { month: 'Mar', amount: 1300 },
  { month: 'Apr', amount: 1500 },
  { month: 'Mei', amount: 1700 },
  { month: 'Jun', amount: 2000 },
];

const progressData = [
  { month: 'Jan', completed: 5, total: 10 },
  { month: 'Feb', completed: 7, total: 12 },
  { month: 'Mar', completed: 9, total: 15 },
  { month: 'Apr', completed: 12, total: 15 },
  { month: 'Mei', completed: 14, total: 16 },
  { month: 'Jun', completed: 16, total: 18 },
];

const MemberDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Totale Opbouw
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€24.500</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              +12% t.o.v. vorige maand
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Actieve Flowlutas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              +2 in laatste kwartaal
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Maandelijkse Cashflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€2.340</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              +€240 sinds vorige maand
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Openstaande BEL-leningen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€12.600</div>
            <p className="text-xs text-amber-500 flex items-center mt-1">
              Volgende betaling: 15 juli
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Cashflow Ontwikkeling</CardTitle>
            <CardDescription>Maandelijkse cashflow in euro's</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashflowData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7E69AB" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#7E69AB" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#7E69AB" 
                  fillOpacity={1} 
                  fill="url(#colorAmount)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Maandelijkse Voortgang</CardTitle>
            <CardDescription>Voltooide vs. totale taken</CardDescription>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="total"
                  name="Totaal"
                  stroke="#4F46E5"
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="completed" 
                  name="Voltooid"
                  stroke="#7E69AB" 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MemberDashboard;
