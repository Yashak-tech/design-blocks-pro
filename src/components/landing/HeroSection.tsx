import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>Pure DOM Technology</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-slide-in">
          <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
            Design Without
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
            Canvas Limits
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 animate-fade-in delay-100">
          The first visual design editor built entirely with DOM elements. 
          No canvas APIs, no SVG complexity — just pure HTML, CSS, and JavaScript 
          creating a Figma-like experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in delay-200">
          <Link to="/editor">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group"
            >
              Open Editor
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/features">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-border hover:bg-secondary group"
            >
              <Play className="w-5 h-5 mr-2" />
              See Features
            </Button>
          </Link>
        </div>

        {/* Editor Mockup */}
        <div className="relative max-w-5xl mx-auto animate-scale-in delay-300">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-2xl" />
          <div className="relative bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            {/* Fake Window Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-toolbar border-b border-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-sm text-muted-foreground">DesignDOM Editor</span>
              </div>
            </div>
            
            {/* Fake Editor Interface */}
            <div className="flex h-[400px] sm:h-[500px]">
              {/* Left Panel */}
              <div className="w-16 sm:w-48 bg-panel border-r border-border hidden sm:flex flex-col p-3 gap-2">
                <div className="text-xs font-semibold text-muted-foreground mb-2">LAYERS</div>
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className={`h-8 rounded-md ${i === 1 ? 'bg-primary/20 border border-primary/50' : 'bg-secondary'} animate-pulse`}
                    style={{ animationDelay: `${i * 150}ms` }}
                  />
                ))}
              </div>
              
              {/* Canvas Area */}
              <div className="flex-1 bg-canvas p-8 flex items-center justify-center canvas-grid">
                <div className="relative">
                  {/* Fake Elements */}
                  <div 
                    className="absolute w-40 h-28 rounded-lg bg-blue-500/80 shadow-lg"
                    style={{ top: '20px', left: '30px', transform: 'rotate(-5deg)' }}
                  />
                  <div 
                    className="absolute w-32 h-24 rounded-lg bg-emerald-500/80 shadow-lg"
                    style={{ top: '80px', left: '120px', transform: 'rotate(8deg)' }}
                  />
                  <div 
                    className="absolute w-36 h-10 rounded-md bg-transparent border-2 border-primary flex items-center justify-center text-sm font-medium"
                    style={{ top: '160px', left: '60px' }}
                  >
                    Visual Editor
                  </div>
                  <div 
                    className="absolute w-28 h-28 rounded-lg bg-purple-500/80 shadow-lg"
                    style={{ top: '60px', left: '220px', transform: 'rotate(45deg)' }}
                  />
                  
                  {/* Selection Outline */}
                  <div 
                    className="absolute border-2 border-primary rounded-lg"
                    style={{ 
                      top: '76px', 
                      left: '116px', 
                      width: '140px', 
                      height: '100px',
                      transform: 'rotate(8deg)'
                    }}
                  >
                    {/* Corner Handles */}
                    <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-primary rounded-sm" />
                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-primary rounded-sm" />
                    <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-primary rounded-sm" />
                    <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-primary rounded-sm" />
                    {/* Rotation Handle */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Right Panel */}
              <div className="w-16 sm:w-56 bg-panel border-l border-border hidden sm:flex flex-col p-3 gap-3">
                <div className="text-xs font-semibold text-muted-foreground mb-2">PROPERTIES</div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="flex-1 h-8 rounded-md bg-secondary" />
                    <div className="flex-1 h-8 rounded-md bg-secondary" />
                  </div>
                  <div className="h-8 rounded-md bg-secondary" />
                  <div className="h-20 rounded-md bg-gradient-to-br from-blue-500 to-purple-500" />
                  <div className="h-8 rounded-md bg-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mt-16 animate-fade-in delay-400">
          {[
            { value: '0', label: 'Canvas APIs' },
            { value: '0', label: 'External Libraries' },
            { value: '100%', label: 'DOM Based' },
            { value: '∞', label: 'Possibilities' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
