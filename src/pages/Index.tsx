
import React from 'react';
import { Header } from '@/components/Header';
import { LinkedInLookup } from '@/components/LinkedInLookup';

const Index = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Find Anyone's Contact Info
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Extract email addresses and phone numbers from LinkedIn profiles instantly using advanced AI-powered lookup technology.
            </p>
          </div>

          <div className="flex justify-center">
            <LinkedInLookup />
          </div>

          <footer className="mt-24 text-center text-sm text-muted-foreground">
            <p className="animate-pulse-glow">
              Powered by SignalHire API • Built with React & TypeScript
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
