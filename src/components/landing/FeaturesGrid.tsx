import React from 'react';
import { 
  Move, 
  Maximize2, 
  RotateCw, 
  Layers, 
  Save, 
  Download, 
  Grid3X3, 
  Keyboard,
  Palette,
  Type,
  MousePointer,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: MousePointer,
    title: 'Single Selection',
    description: 'Click any element to select it. Clean selection outline with corner handles for precise control.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Move,
    title: 'Smooth Dragging',
    description: 'Drag elements freely within canvas boundaries. Optional 8px grid snapping for perfect alignment.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Maximize2,
    title: 'Corner Resizing',
    description: 'Resize from any corner handle. Minimum size enforced, position updated correctly for all handles.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: RotateCw,
    title: 'Free Rotation',
    description: 'Rotate elements to any angle with the rotation handle. CSS transforms for smooth, real-time rotation.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Layers,
    title: 'Layer Management',
    description: 'Visual layers panel shows z-order. Move elements up/down in the stack with one click.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Palette,
    title: 'Properties Panel',
    description: 'Edit size, colors, text, and rotation in real-time. Changes appear instantly on canvas.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Type,
    title: 'Text Elements',
    description: 'Add and edit text boxes with custom fonts, sizes, and colors. Full inline editing support.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Grid3X3,
    title: 'Snap to Grid',
    description: 'Toggle 8px grid snapping for pixel-perfect designs. Grid visualization on canvas.',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Keyboard,
    title: 'Keyboard Shortcuts',
    description: 'Delete removes selection. Arrow keys move 5px per press. Professional editing flow.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Save,
    title: 'Auto-Save',
    description: 'Your work persists automatically via localStorage. Refresh and continue where you left off.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Download,
    title: 'Export Options',
    description: 'Download as JSON for project files or HTML for standalone preview. Full fidelity export.',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Zero Dependencies',
    description: 'No canvas, no SVG, no external render libraries. Pure DOM magic with HTML/CSS/JS only.',
    color: 'from-yellow-500 to-amber-500',
  },
];

export const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything You Need,{' '}
            <span className="text-primary">Nothing You Don't</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete visual design toolkit built with DOM elements. 
            Every feature works seamlessly without canvas or SVG complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
