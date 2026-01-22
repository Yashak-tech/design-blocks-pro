import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  MousePointer,
  Move,
  Maximize2,
  RotateCw,
  Layers,
  Trash2,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Download,
  Grid3X3,
  HelpCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/layout/PageTransition';
import { Footer } from '@/components/layout/Footer';

const Docs: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background pt-24">
        {/* Header */}
        <section className="py-16 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn how to use DesignDOM's visual editor effectively.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              
              {/* Getting Started */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  Getting Started
                </h2>
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <p className="text-muted-foreground">
                    DesignDOM is a visual design editor built entirely with DOM elements. 
                    Unlike traditional design tools that use Canvas or SVG, every element 
                    you create is a real HTML div with CSS styling.
                  </p>
                  <div className="flex gap-3">
                    <Link to="/editor">
                      <Button>
                        Open Editor
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/templates">
                      <Button variant="outline">
                        Start with Template
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Creating Elements */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Creating Elements</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                      <div className="w-5 h-5 rounded bg-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-2">Rectangle</h3>
                    <p className="text-sm text-muted-foreground">
                      Click "Add Rectangle" in the toolbar. Creates a colored box 
                      that can be resized, rotated, and styled.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 text-purple-500 font-bold">
                      T
                    </div>
                    <h3 className="font-semibold mb-2">Text</h3>
                    <p className="text-sm text-muted-foreground">
                      Click "Add Text" in the toolbar. Creates an editable text 
                      box with customizable font size and color.
                    </p>
                  </div>
                </div>
              </div>

              {/* Selection */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <MousePointer className="w-6 h-6 text-primary" />
                  Selection
                </h2>
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span><strong>Select:</strong> Click on any element to select it. A cyan outline and corner handles will appear.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span><strong>Deselect:</strong> Click on the canvas background to deselect the current element.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span><strong>Layers:</strong> Click on a layer in the left panel to select that element.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dragging */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Move className="w-6 h-6 text-primary" />
                  Dragging
                </h2>
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Click and drag anywhere on a selected element to move it. 
                    The element will follow your cursor while staying within canvas boundaries.
                  </p>
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                    <Grid3X3 className="w-5 h-5 text-primary" />
                    <span className="text-sm">
                      Toggle "Snap to Grid" for 8px alignment snapping
                    </span>
                  </div>
                </div>
              </div>

              {/* Resizing */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Maximize2 className="w-6 h-6 text-primary" />
                  Resizing
                </h2>
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <p className="text-muted-foreground">
                    When an element is selected, four corner handles appear. 
                    Drag any corner to resize the element.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Minimum size: 40×40 pixels</li>
                    <li>• Resizing from top/left corners updates position correctly</li>
                    <li>• Elements stay within canvas boundaries</li>
                    <li>• Grid snapping applies to size changes</li>
                  </ul>
                </div>
              </div>

              {/* Rotation */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <RotateCw className="w-6 h-6 text-primary" />
                  Rotation
                </h2>
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Two ways to rotate elements:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full border-2 border-primary shrink-0 mt-0.5" />
                      <span>Drag the circular handle above the selected element</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded border border-primary shrink-0 mt-0.5" />
                      <span>Enter a specific degree value in the Properties panel</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Layers */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Layers className="w-6 h-6 text-primary" />
                  Layer Management
                </h2>
                <div className="bg-card border border-border rounded-xl p-6 space-y-4">
                  <p className="text-muted-foreground">
                    The Layers panel on the left shows all elements ordered by z-index 
                    (top = front, bottom = back).
                  </p>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowUp className="w-4 h-4" />
                      <span>Bring Forward</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <ArrowDown className="w-4 h-4" />
                      <span>Send Backward</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Keyboard Shortcuts */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Keyboard Shortcuts</h2>
                <div className="bg-card border border-border rounded-xl overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-secondary/50">
                      <tr>
                        <th className="text-left px-6 py-3 text-sm font-semibold">Key</th>
                        <th className="text-left px-6 py-3 text-sm font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="px-6 py-3">
                          <kbd className="px-2 py-1 bg-secondary rounded text-sm">Delete</kbd> / <kbd className="px-2 py-1 bg-secondary rounded text-sm">Backspace</kbd>
                        </td>
                        <td className="px-6 py-3 text-muted-foreground flex items-center gap-2">
                          <Trash2 className="w-4 h-4" /> Delete selected element
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3">
                          <kbd className="px-2 py-1 bg-secondary rounded text-sm">↑</kbd>
                        </td>
                        <td className="px-6 py-3 text-muted-foreground">Move up 5px</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3">
                          <kbd className="px-2 py-1 bg-secondary rounded text-sm">↓</kbd>
                        </td>
                        <td className="px-6 py-3 text-muted-foreground">Move down 5px</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3">
                          <kbd className="px-2 py-1 bg-secondary rounded text-sm">←</kbd>
                        </td>
                        <td className="px-6 py-3 text-muted-foreground">Move left 5px</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-3">
                          <kbd className="px-2 py-1 bg-secondary rounded text-sm">→</kbd>
                        </td>
                        <td className="px-6 py-3 text-muted-foreground">Move right 5px</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Exporting */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Download className="w-6 h-6 text-primary" />
                  Exporting
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Export JSON</h3>
                    <p className="text-sm text-muted-foreground">
                      Downloads the complete state as a JSON file. 
                      This includes all element positions, sizes, rotations, and styles. 
                      Perfect for project backup or sharing.
                    </p>
                  </div>
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold mb-2">Export HTML</h3>
                    <p className="text-sm text-muted-foreground">
                      Downloads a standalone HTML file that visually reproduces 
                      your canvas. Uses inline styles for maximum compatibility. 
                      Open in any browser.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Model */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Data Model</h2>
                <div className="bg-card border border-border rounded-xl p-6">
                  <p className="text-muted-foreground mb-4">
                    Each element is stored as a JSON object with the following structure:
                  </p>
                  <pre className="bg-toolbar p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "id": "el_1234567890_abc123",
  "type": "rect" | "text",
  "x": 100,
  "y": 100,
  "width": 200,
  "height": 120,
  "rotation": 0,
  "zIndex": 1,
  "styles": {
    "backgroundColor": "#4F46E5",
    "color": "#FFFFFF",
    "fontSize": 16
  },
  "text": "Hello World"  // only for text elements
}`}
                  </pre>
                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Docs;
