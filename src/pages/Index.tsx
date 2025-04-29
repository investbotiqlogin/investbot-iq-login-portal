
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import OrbBackground from '../components/OrbBackground';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <OrbBackground />
      <NavBar />
      
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <div className="w-full max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-investbot-purple to-investbot-indigo">
            Automatisch maandelijkse cashflow opbouwen met Investbotiq.
          </h1>
          
          <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
            De slimme manier om je inkomsten te laten groeien: automatisering, transparantie en resultaat – zonder gedoe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-investbot-purple hover:bg-investbot-darkPurple text-white">
              <Link to="/inlog">
                Inloggen
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-investbot-purple text-investbot-purple hover:bg-investbot-light">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Bekijk hoe het werkt
              </a>
            </Button>
          </div>
        </div>
      </main>
      
      <footer className="py-6 px-6 text-center text-sm text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} InvestbotIQ. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
};

export default Index;
