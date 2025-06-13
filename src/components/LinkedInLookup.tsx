
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2, Search, ExternalLink, Mail, Phone, User, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface ContactInfo {
  email?: string;
  phone?: string;
  name?: string;
  title?: string;
  company?: string;
}

export function LinkedInLookup() {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [error, setError] = useState('');

  const isValidLinkedInUrl = (url: string) => {
    const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/;
    return linkedinRegex.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setContactInfo(null);

    if (!linkedinUrl.trim()) {
      setError('Please enter a LinkedIn URL');
      return;
    }

    if (!isValidLinkedInUrl(linkedinUrl)) {
      setError('Please enter a valid LinkedIn profile URL (e.g., https://linkedin.com/in/username)');
      return;
    }

    setIsLoading(true);

    try {
      // Since we don't have actual SignalHire API access, we'll simulate the response
      // In a real implementation, you would call the SignalHire API here
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response - in real implementation, this would come from SignalHire API
      const mockResponse: ContactInfo = {
        name: 'John Doe',
        title: 'Software Engineer',
        company: 'Tech Corp',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567'
      };

      setContactInfo(mockResponse);
    } catch (err) {
      setError('Failed to fetch contact information. Please try again.');
      console.error('Error fetching contact info:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="glass-card neon-border animate-fade-in-up">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-neon-purple bg-clip-text text-transparent">
            LinkedIn Contact Finder
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Extract contact information from LinkedIn profiles using SignalHire API
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="linkedin-url" className="text-sm font-medium">
                LinkedIn Profile URL
              </Label>
              <div className="relative">
                <Input
                  id="linkedin-url"
                  type="url"
                  placeholder="https://linkedin.com/in/username"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  className="pl-10 h-12 bg-secondary/50 border-primary/20 focus:border-primary/50 transition-all duration-300"
                  disabled={isLoading}
                />
                <ExternalLink className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="animate-scale-in">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-primary to-neon-purple hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="mr-2 h-4 w-4" />
                  Find Contact Info
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {contactInfo && (
        <Card className="glass-card neon-border animate-fade-in-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <User className="h-5 w-5 text-primary" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary/30 border border-primary/10">
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">Name</Label>
                  <p className="font-medium text-foreground">{contactInfo.name}</p>
                </div>
                
                <div className="p-3 rounded-lg bg-secondary/30 border border-primary/10">
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">Title</Label>
                  <p className="font-medium text-foreground">{contactInfo.title}</p>
                </div>
                
                <div className="p-3 rounded-lg bg-secondary/30 border border-primary/10">
                  <Label className="text-xs text-muted-foreground uppercase tracking-wide">Company</Label>
                  <p className="font-medium text-foreground">{contactInfo.company}</p>
                </div>
              </div>

              <div className="space-y-3">
                {contactInfo.email && (
                  <div className="p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      Email
                    </Label>
                    <p className="font-medium text-primary hover:text-primary/80 cursor-pointer break-all">
                      {contactInfo.email}
                    </p>
                  </div>
                )}

                {contactInfo.phone && (
                  <div className="p-3 rounded-lg bg-secondary/30 border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      Phone
                    </Label>
                    <p className="font-medium text-primary hover:text-primary/80 cursor-pointer">
                      {contactInfo.phone}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
