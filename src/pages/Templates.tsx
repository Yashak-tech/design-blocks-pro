import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Eye, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/layout/PageTransition';
import { Footer } from '@/components/layout/Footer';
import { CanvasElement } from '@/types/editor';

interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  elements: CanvasElement[];
}

const generateId = (): string => {
  return `el_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const templates: Template[] = [
  {
    id: 'minimal-card',
    name: 'Minimal Card',
    description: 'A clean card layout with text and a background element.',
    thumbnail: 'from-blue-500/20 to-cyan-500/20',
    elements: [
      {
        id: generateId(),
        type: 'rect',
        x: 400,
        y: 250,
        width: 400,
        height: 300,
        rotation: 0,
        zIndex: 1,
        styles: { backgroundColor: '#1E293B', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 440,
        y: 300,
        width: 320,
        height: 50,
        rotation: 0,
        zIndex: 2,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 28 },
        text: 'Card Title',
      },
      {
        id: generateId(),
        type: 'text',
        x: 440,
        y: 360,
        width: 320,
        height: 80,
        rotation: 0,
        zIndex: 3,
        styles: { backgroundColor: 'transparent', color: '#94A3B8', fontSize: 16 },
        text: 'This is a minimal card with clean typography and subtle styling.',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 440,
        y: 460,
        width: 120,
        height: 40,
        rotation: 0,
        zIndex: 4,
        styles: { backgroundColor: '#3B82F6', color: '#FFFFFF', fontSize: 14 },
        text: '',
      },
    ],
  },
  {
    id: 'hero-section',
    name: 'Hero Section',
    description: 'Bold hero layout with headline and CTA elements.',
    thumbnail: 'from-purple-500/20 to-pink-500/20',
    elements: [
      {
        id: generateId(),
        type: 'rect',
        x: 100,
        y: 100,
        width: 1000,
        height: 600,
        rotation: 0,
        zIndex: 1,
        styles: { backgroundColor: '#0F172A', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 150,
        y: 200,
        width: 500,
        height: 80,
        rotation: 0,
        zIndex: 2,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 48 },
        text: 'Build Something Great',
      },
      {
        id: generateId(),
        type: 'text',
        x: 150,
        y: 300,
        width: 400,
        height: 60,
        rotation: 0,
        zIndex: 3,
        styles: { backgroundColor: 'transparent', color: '#64748B', fontSize: 18 },
        text: 'Create stunning designs with our visual editor.',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 150,
        y: 400,
        width: 160,
        height: 50,
        rotation: 0,
        zIndex: 4,
        styles: { backgroundColor: '#8B5CF6', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 700,
        y: 200,
        width: 300,
        height: 300,
        rotation: 12,
        zIndex: 5,
        styles: { backgroundColor: '#6366F1', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
    ],
  },
  {
    id: 'dashboard-widget',
    name: 'Dashboard Widget',
    description: 'Stats cards for dashboard interfaces.',
    thumbnail: 'from-emerald-500/20 to-teal-500/20',
    elements: [
      {
        id: generateId(),
        type: 'rect',
        x: 100,
        y: 200,
        width: 280,
        height: 160,
        rotation: 0,
        zIndex: 1,
        styles: { backgroundColor: '#10B981', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 120,
        y: 220,
        width: 200,
        height: 30,
        rotation: 0,
        zIndex: 2,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 14 },
        text: 'Total Revenue',
      },
      {
        id: generateId(),
        type: 'text',
        x: 120,
        y: 260,
        width: 200,
        height: 50,
        rotation: 0,
        zIndex: 3,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 36 },
        text: '$48,290',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 420,
        y: 200,
        width: 280,
        height: 160,
        rotation: 0,
        zIndex: 4,
        styles: { backgroundColor: '#3B82F6', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 440,
        y: 220,
        width: 200,
        height: 30,
        rotation: 0,
        zIndex: 5,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 14 },
        text: 'Active Users',
      },
      {
        id: generateId(),
        type: 'text',
        x: 440,
        y: 260,
        width: 200,
        height: 50,
        rotation: 0,
        zIndex: 6,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 36 },
        text: '12,847',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 740,
        y: 200,
        width: 280,
        height: 160,
        rotation: 0,
        zIndex: 7,
        styles: { backgroundColor: '#8B5CF6', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 760,
        y: 220,
        width: 200,
        height: 30,
        rotation: 0,
        zIndex: 8,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 14 },
        text: 'Conversion Rate',
      },
      {
        id: generateId(),
        type: 'text',
        x: 760,
        y: 260,
        width: 200,
        height: 50,
        rotation: 0,
        zIndex: 9,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 36 },
        text: '24.8%',
      },
    ],
  },
  {
    id: 'creative-layout',
    name: 'Creative Layout',
    description: 'Rotated elements for a dynamic, artistic feel.',
    thumbnail: 'from-orange-500/20 to-red-500/20',
    elements: [
      {
        id: generateId(),
        type: 'rect',
        x: 200,
        y: 150,
        width: 250,
        height: 200,
        rotation: -8,
        zIndex: 1,
        styles: { backgroundColor: '#F97316', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 400,
        y: 250,
        width: 300,
        height: 220,
        rotation: 5,
        zIndex: 2,
        styles: { backgroundColor: '#EF4444', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 650,
        y: 180,
        width: 200,
        height: 200,
        rotation: 15,
        zIndex: 3,
        styles: { backgroundColor: '#EC4899', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 300,
        y: 500,
        width: 400,
        height: 60,
        rotation: -3,
        zIndex: 4,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 32 },
        text: 'Think Different',
      },
    ],
  },
  {
    id: 'profile-card',
    name: 'Profile Card',
    description: 'User profile card with avatar placeholder.',
    thumbnail: 'from-cyan-500/20 to-blue-500/20',
    elements: [
      {
        id: generateId(),
        type: 'rect',
        x: 400,
        y: 180,
        width: 400,
        height: 440,
        rotation: 0,
        zIndex: 1,
        styles: { backgroundColor: '#1E293B', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 520,
        y: 220,
        width: 160,
        height: 160,
        rotation: 0,
        zIndex: 2,
        styles: { backgroundColor: '#0EA5E9', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 450,
        y: 410,
        width: 300,
        height: 40,
        rotation: 0,
        zIndex: 3,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 24 },
        text: 'John Doe',
      },
      {
        id: generateId(),
        type: 'text',
        x: 450,
        y: 455,
        width: 300,
        height: 30,
        rotation: 0,
        zIndex: 4,
        styles: { backgroundColor: 'transparent', color: '#64748B', fontSize: 16 },
        text: 'Product Designer',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 480,
        y: 520,
        width: 240,
        height: 45,
        rotation: 0,
        zIndex: 5,
        styles: { backgroundColor: '#0EA5E9', color: '#FFFFFF', fontSize: 14 },
        text: '',
      },
    ],
  },
  {
    id: 'pricing-table',
    name: 'Pricing Table',
    description: 'Simple pricing card layout.',
    thumbnail: 'from-violet-500/20 to-purple-500/20',
    elements: [
      {
        id: generateId(),
        type: 'rect',
        x: 150,
        y: 150,
        width: 300,
        height: 400,
        rotation: 0,
        zIndex: 1,
        styles: { backgroundColor: '#1E293B', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 200,
        y: 180,
        width: 200,
        height: 35,
        rotation: 0,
        zIndex: 2,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 20 },
        text: 'Starter',
      },
      {
        id: generateId(),
        type: 'text',
        x: 200,
        y: 230,
        width: 200,
        height: 50,
        rotation: 0,
        zIndex: 3,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 40 },
        text: '$9/mo',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 500,
        y: 120,
        width: 320,
        height: 460,
        rotation: 0,
        zIndex: 4,
        styles: { backgroundColor: '#8B5CF6', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 550,
        y: 150,
        width: 220,
        height: 35,
        rotation: 0,
        zIndex: 5,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 20 },
        text: 'Pro (Popular)',
      },
      {
        id: generateId(),
        type: 'text',
        x: 550,
        y: 200,
        width: 220,
        height: 50,
        rotation: 0,
        zIndex: 6,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 40 },
        text: '$29/mo',
      },
      {
        id: generateId(),
        type: 'rect',
        x: 870,
        y: 150,
        width: 300,
        height: 400,
        rotation: 0,
        zIndex: 7,
        styles: { backgroundColor: '#1E293B', color: '#FFFFFF', fontSize: 16 },
        text: '',
      },
      {
        id: generateId(),
        type: 'text',
        x: 920,
        y: 180,
        width: 200,
        height: 35,
        rotation: 0,
        zIndex: 8,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 20 },
        text: 'Enterprise',
      },
      {
        id: generateId(),
        type: 'text',
        x: 920,
        y: 230,
        width: 200,
        height: 50,
        rotation: 0,
        zIndex: 9,
        styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 40 },
        text: '$99/mo',
      },
    ],
  },
];

const Templates: React.FC = () => {
  const navigate = useNavigate();

  const loadTemplate = (template: Template) => {
    // Save template elements to localStorage
    const state = {
      elements: template.elements.map((el, index) => ({
        ...el,
        id: `el_${Date.now()}_${index}_${Math.random().toString(36).substr(2, 5)}`,
      })),
      selectedElementId: null,
      snapToGrid: true,
      gridSize: 8,
      canvasWidth: 1200,
      canvasHeight: 800,
    };
    localStorage.setItem('visual-editor-state', JSON.stringify(state));
    navigate('/editor');
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-24">
        {/* Header */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Start with a{' '}
              <span className="text-primary">Template</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of pre-built designs. 
              Each template loads directly into the editor for customization.
            </p>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-8 pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {templates.map((template) => (
                <div 
                  key={template.id}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Preview */}
                  <div className={`h-48 bg-gradient-to-br ${template.thumbnail} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <Layers className="w-16 h-16 text-foreground/20" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <Button
                        size="sm"
                        onClick={() => loadTemplate(template)}
                        className="gap-2"
                      >
                        <ArrowRight className="w-4 h-4" />
                        Use Template
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        Preview
                      </Button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {template.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {template.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{template.elements.length} elements</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-b from-background to-card/50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Or Start From Scratch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Create your own design from a blank canvas with full creative freedom.
            </p>
            <Link to="/editor">
              <Button size="lg" className="px-8">
                Open Blank Editor
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Templates;
