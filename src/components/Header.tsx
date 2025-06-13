
import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="w-full border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-neon-purple animate-glow"></div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
            LinkLeaks Lookup
          </h1>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
