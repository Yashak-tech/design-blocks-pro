import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code2, 
  Layers, 
  Github, 
  Heart,
  Trophy,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/layout/PageTransition';
import { Footer } from '@/components/layout/Footer';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-24">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Trophy className="w-4 h-4" />
              <span>Competition Entry</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              About{' '}
              <span className="text-primary">DesignDOM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A Figma-style visual design editor built entirely with DOM elements. 
              No canvas. No SVG. Just pure HTML, CSS, and JavaScript.
            </p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
            <div className="bg-card border border-border rounded-xl p-8 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Modern design tools like Figma, Sketch, and Adobe XD rely heavily on 
                Canvas or SVG for their rendering engines. This project proves that 
                a fully functional visual design editor can be built using only 
                standard DOM elements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using actual HTML divs for each design element, the output is 
                already standard markup — no conversion needed for export. 
                CSS transforms handle rotation and movement with hardware acceleration.
              </p>
            </div>
          </div>
        </section>

        {/* Features Checklist */}
        <section className="py-16 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Implementation Checklist</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Element creation (Rectangle & Text)',
                'Single element selection',
                'Drag to move with canvas bounds',
                'Corner-only resizing (4 handles)',
                'Free rotation via handle & input',
                'Layers panel with z-order control',
                'Properties panel (size, color, text)',
                'Keyboard shortcuts (Delete, Arrows)',
                '8px grid snapping (toggleable)',
                'localStorage auto-persistence',
                'Export to JSON',
                'Export to standalone HTML',
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-card border border-border rounded-xl p-6">
                <Code2 className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">React + TypeScript</h3>
                <p className="text-sm text-muted-foreground">
                  Component-based architecture with full type safety.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <Layers className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-sm text-muted-foreground">
                  Utility-first styling with custom design tokens.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">DOM</span>
                </div>
                <h3 className="font-semibold mb-2">Pure DOM</h3>
                <p className="text-sm text-muted-foreground">
                  No canvas or SVG — real HTML elements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Built with Passion
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              This project represents a love for web technology and a belief that 
              sometimes the simplest approach is the most powerful.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/editor">
                <Button size="lg" className="px-8">
                  Try the Editor
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="px-8">
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
