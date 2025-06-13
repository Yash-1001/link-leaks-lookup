
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-neon-purple animate-glow"></div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
              LinkLeaks Lookup
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/plans" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive('/plans') ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            Plans
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button size="sm" asChild className="bg-gradient-to-r from-primary to-neon-purple hover:from-primary/90 hover:to-neon-purple/90">
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
