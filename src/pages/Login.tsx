
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrbBackground from '../components/OrbBackground';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

type UserRole = 'member' | 'student' | 'ouder' | 'freelancer' | 'ondernemer' | 'admin' | 'affiliated';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>('member');
  const [isLoading, setIsLoading] = useState(false);

  // Mock login function (will be replaced with Supabase integration)
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Login mislukt",
        description: "Vul alle velden in om in te loggen.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // This will be replaced with actual Supabase authentication
      console.log('Logging in with:', { email, password, role });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect based on role
      if (role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/member/dashboard');
      }
      
      toast({
        title: "Ingelogd",
        description: "U bent succesvol ingelogd.",
      });
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login mislukt",
        description: "Controleer uw inloggegevens en probeer het opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <OrbBackground className="opacity-50" />
      <NavBar />
      
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Inloggen bij InvestbotIQ</CardTitle>
            <CardDescription className="text-center">
              Kies uw rol en log in met uw gegevens
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="role">Rol</Label>
                <Select
                  value={role}
                  onValueChange={(value) => setRole(value as UserRole)}
                >
                  <SelectTrigger id="role" className="w-full">
                    <SelectValue placeholder="Selecteer uw rol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="ouder">Ouder</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="ondernemer">Ondernemer</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="affiliated">Affiliated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mailadres</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="uw@email.nl"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Wachtwoord</Label>
                  <a href="#" className="text-sm text-investbot-purple hover:underline">
                    Wachtwoord vergeten?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-investbot-purple hover:bg-investbot-darkPurple"
                disabled={isLoading}
              >
                {isLoading ? "Inloggen..." : "Inloggen"}
              </Button>
            </form>
          </CardContent>
          
          <CardFooter className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
            <p>
              Geen account? Registratie verloopt via administrator.
            </p>
            <p>
              <a href="#" className="text-investbot-purple hover:underline">
                Neem contact op voor meer informatie
              </a>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Login;
