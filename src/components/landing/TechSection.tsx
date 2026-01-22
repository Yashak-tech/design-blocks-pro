import React from 'react';
import { Code2, Box, Paintbrush, FileCode } from 'lucide-react';

const techStack = [
  {
    icon: FileCode,
    name: 'HTML',
    description: 'Semantic markup for every element. Accessible and SEO-friendly structure.',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Paintbrush,
    name: 'CSS',
    description: 'Transforms, transitions, and Tailwind utilities for styling and animations.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Code2,
    name: 'JavaScript',
    description: 'React for component architecture. Event handling for all interactions.',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
  },
  {
    icon: Box,
    name: 'DOM API',
    description: 'Native browser APIs for element manipulation. No canvas abstraction needed.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
];

export const TechSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Built Different,{' '}
              <span className="text-primary">On Purpose</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              While other design tools rely on Canvas or SVG for rendering, 
              DesignDOM proves that powerful visual editors can be built 
              using only standard web technologies.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Export-Ready Output</h4>
                  <p className="text-sm text-muted-foreground">
                    Because elements are actual DOM nodes, the HTML export is already 
                    standard markup with inline styles — no conversion needed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Browser-Native Performance</h4>
                  <p className="text-sm text-muted-foreground">
                    Leveraging CSS transforms for rotation and movement means 
                    hardware-accelerated animations out of the box.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Inspectable Elements</h4>
                  <p className="text-sm text-muted-foreground">
                    Open DevTools and see real divs. Debug styles directly. 
                    No proprietary render tree to decode.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Tech Cards */}
          <div className="grid grid-cols-2 gap-4">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${tech.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tech.icon className={`w-7 h-7 ${tech.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
