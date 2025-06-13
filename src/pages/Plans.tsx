
import React from 'react';
import { Header } from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Users } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individual professionals',
      icon: <Zap className="h-6 w-6" />,
      features: [
        '50 LinkedIn lookups per month',
        'Basic contact information',
        'Email support',
        'Standard search speed'
      ],
      popular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$29',
      period: '/month',
      description: 'Best for growing businesses',
      icon: <Crown className="h-6 w-6" />,
      features: [
        '500 LinkedIn lookups per month',
        'Advanced contact details',
        'Priority email support',
        'Fast search speed',
        'Export to CSV',
        'API access'
      ],
      popular: true,
      buttonText: 'Most Popular'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large teams and organizations',
      icon: <Users className="h-6 w-6" />,
      features: [
        'Unlimited LinkedIn lookups',
        'Complete contact profiles',
        '24/7 priority support',
        'Instant search results',
        'Advanced analytics',
        'Team management',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen bg-background cyber-grid">
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/50">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unlock the power of professional networking with our flexible pricing plans. 
              Find the perfect solution for your contact discovery needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative glass-card transition-all duration-300 hover:scale-105 animate-fade-in ${
                  plan.popular 
                    ? 'neon-border ring-2 ring-primary/20 shadow-2xl shadow-primary/10' 
                    : 'border-border/50 hover:border-primary/30'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-primary to-neon-purple text-primary-foreground px-4 py-1 rounded-full text-sm font-medium animate-pulse-glow">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-primary to-neon-purple animate-glow' 
                        : 'bg-muted'
                    }`}>
                      {plan.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full mt-6 transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-neon-purple hover:from-primary/90 hover:to-neon-purple/90'
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              All plans include a 14-day free trial • No setup fees • Cancel anytime
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>✓ SSL Security</span>
              <span>✓ GDPR Compliant</span>
              <span>✓ 99.9% Uptime</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Plans;
