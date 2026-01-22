import React from 'react';
import { X, Square, Type, Move, Maximize2, RotateCw, Layers, Download, Keyboard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HelpPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const HelpSection: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children,
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2 text-sm font-medium text-foreground">
      {icon}
      {title}
    </div>
    <div className="text-sm text-muted-foreground pl-6">{children}</div>
  </div>
);

export const HelpPanel: React.FC<HelpPanelProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col animate-fade-in">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Help & Documentation</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 p-6">
          <div className="space-y-6">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <h3 className="text-sm font-medium text-primary mb-2">Welcome to Visual Designer!</h3>
              <p className="text-sm text-muted-foreground">
                A DOM-based visual design editor. Create, position, resize, and rotate elements 
                on a canvas. Your work is automatically saved to localStorage.
              </p>
            </div>

            <HelpSection icon={<Square className="w-4 h-4 text-primary" />} title="Adding Elements">
              Click <strong>Rectangle</strong> or <strong>Text</strong> in the toolbar to add new elements 
              to the canvas. Elements appear in the center and can be immediately edited.
            </HelpSection>

            <HelpSection icon={<Move className="w-4 h-4 text-primary" />} title="Selection & Dragging">
              Click any element to select it. A cyan outline with corner handles appears. 
              Drag the element body (not handles) to move it. Click the canvas background to deselect.
            </HelpSection>

            <HelpSection icon={<Maximize2 className="w-4 h-4 text-primary" />} title="Resizing">
              Drag any of the four corner handles to resize the selected element. 
              Minimum size is 40×40 pixels. Elements stay within canvas bounds.
            </HelpSection>

            <HelpSection icon={<RotateCw className="w-4 h-4 text-primary" />} title="Rotation">
              Drag the circular handle above the element to rotate it. 
              You can also use the rotation slider in the Properties panel for precise control.
            </HelpSection>

            <HelpSection icon={<Layers className="w-4 h-4 text-primary" />} title="Layers Panel">
              The left panel shows all elements ordered by z-index (top = front). 
              Click a layer to select it. Use ↑/↓ buttons to reorder layers.
            </HelpSection>

            <HelpSection icon={<Keyboard className="w-4 h-4 text-primary" />} title="Keyboard Shortcuts">
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li><kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Delete</kbd> / <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Backspace</kbd> — Remove selected element</li>
                <li><kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Arrow Keys</kbd> — Move selected element by 5px</li>
              </ul>
            </HelpSection>

            <HelpSection icon={<Download className="w-4 h-4 text-primary" />} title="Export">
              <strong>JSON:</strong> Downloads the complete state (all element data) as a .json file.
              <br />
              <strong>HTML:</strong> Generates a standalone HTML file that visually reproduces your canvas.
            </HelpSection>

            <div className="border-t border-border pt-4 mt-6">
              <h3 className="text-sm font-medium text-foreground mb-3">Data Model</h3>
              <pre className="bg-muted p-3 rounded-lg text-xs overflow-x-auto">
{`{
  id: "el_12345",
  type: "rect" | "text",
  x: 150,
  y: 120,
  width: 200,
  height: 120,
  rotation: 0,
  zIndex: 3,
  styles: {
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    fontSize: 16
  },
  text: "Hello"  // only for text elements
}`}
              </pre>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border">
          <Button onClick={onClose} className="w-full">Got it!</Button>
        </div>
      </div>
    </div>
  );
};
