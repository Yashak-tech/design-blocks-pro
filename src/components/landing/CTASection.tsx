import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Ready to Create?</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Start Designing with{' '}
          <span className="text-primary">Pure DOM</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Experience the power of visual design without the complexity of canvas rendering. 
          Your designs, your way, with technology you understand.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/editor">
            <Button 
              size="lg" 
              className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group"
            >
              Launch Editor
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/templates">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-10 py-7 border-border hover:bg-secondary"
            >
              Browse Templates
            </Button>
          </Link>
        </div>

        {/* Bottom Stats */}
        <div className="flex items-center justify-center gap-8 mt-16 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Free to use</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span>No sign-up required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span>Export anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
