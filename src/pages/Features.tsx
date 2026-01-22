import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  MousePointer,
  Move,
  Maximize2,
  RotateCw,
  Layers,
  Palette,
  Save,
  Download,
  Keyboard,
  Grid3X3,
  Zap,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/layout/PageTransition';
import { Footer } from '@/components/layout/Footer';

const featuresDetailed = [
  {
    icon: MousePointer,
    title: 'Precision Selection',
    description: 'Single-click selection with a clear cyan outline and 4 corner handles. Only one element selected at a time for focused editing.',
    details: [
      'Click element to select',
      'Click canvas to deselect',
      'Visible selection outline',
      'Corner resize handles'
    ]
  },
  {
    icon: Move,
    title: 'Fluid Dragging',
    description: 'Drag elements anywhere on the canvas with smooth mouse tracking. Constrained to canvas boundaries to prevent element loss.',
    details: [
      'Drag from element center',
      'Canvas boundary enforcement',
      'Optional grid snapping',
      'Real-time position updates'
    ]
  },
  {
    icon: Maximize2,
    title: 'Smart Resizing',
    description: 'Resize from any corner with proper position calculation. Minimum size enforced to prevent invisible elements.',
    details: [
      'All 4 corners functional',
      '40px minimum size',
      'Position correction for top/left',
      'Boundary constraints'
    ]
  },
  {
    icon: RotateCw,
    title: 'Rotation Control',
    description: 'Free rotation via handle or properties panel. CSS transforms for smooth, hardware-accelerated rotation.',
    details: [
      'Circular rotation handle',
      'Degree-based input',
      'CSS transform: rotate()',
      'Preserved on save/load'
    ]
  },
  {
    icon: Layers,
    title: 'Layer Management',
    description: 'Visual layer list showing all elements. Z-index control with move up/down buttons. Click layer to select element.',
    details: [
      'Ordered layer panel',
      'Move up/down controls',
      'Click to select',
      'Z-index visualization'
    ]
  },
  {
    icon: Palette,
    title: 'Properties Panel',
    description: 'Real-time editing of element properties. Width, height, colors, text content, and rotation all editable.',
    details: [
      'Numeric inputs for size',
      'Color picker for background',
      'Text content editing',
      'Rotation degree input'
    ]
  },
  {
    icon: Grid3X3,
    title: 'Grid Snapping',
    description: 'Toggle 8px grid snapping for precise alignment. Visual grid pattern on canvas for reference.',
    details: [
      '8px grid increments',
      'Toggle on/off',
      'Visual grid lines',
      'Works with resize/move'
    ]
  },
  {
    icon: Keyboard,
    title: 'Keyboard Shortcuts',
    description: 'Professional keyboard controls for power users. Delete removes selection, arrows move 5px.',
    details: [
      'Delete/Backspace removes',
      'Arrow keys move 5px',
      'Canvas boundary respect',
      'Active only when selected'
    ]
  },
  {
    icon: Save,
    title: 'Auto-Persistence',
    description: 'Automatic save to localStorage on every change. Full state reconstruction on page reload.',
    details: [
      'localStorage persistence',
      'Atomic state saves',
      'Full state recovery',
      'No manual save needed'
    ]
  },
  {
    icon: Download,
    title: 'Export Options',
    description: 'Download your design as JSON for project files or HTML for standalone preview.',
    details: [
      'JSON state export',
      'HTML preview export',
      'Inline styles in HTML',
      'Full visual fidelity'
    ]
  },
  {
    icon: Eye,
    title: 'WYSIWYG Editing',
    description: 'What you see is what you get. All changes reflected immediately on the canvas.',
    details: [
      'Real-time updates',
      'No render delay',
      'Accurate preview',
      'DOM-native display'
    ]
  },
  {
    icon: Zap,
    title: 'Pure DOM Architecture',
    description: 'No canvas API, no SVG, no external libraries. Everything is a real HTML element.',
    details: [
      'Standard div elements',
      'CSS transforms',
      'Native browser rendering',
      'Zero dependencies'
    ]
  },
];

const Features: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-24">
        {/* Hero */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Powerful Features,{' '}
              <span className="text-primary">Simple Execution</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Every feature you'd expect from a professional design tool, 
              implemented with pure DOM technology. No compromises.
            </p>
            <Link to="/editor">
              <Button size="lg" className="px-8">
                Try It Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Features List */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuresDetailed.map((feature, index) => (
                <div 
                  key={index}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-background to-card/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The best way to understand these features is to try them yourself.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/editor">
                <Button size="lg" className="px-8">
                  Open Editor
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="px-8">
                  Browse Templates
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Features;
