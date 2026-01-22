import React from 'react';
import { Settings, Trash2, RotateCw } from 'lucide-react';
import { CanvasElement } from '@/types/editor';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PropertiesPanelProps {
  element: CanvasElement | null;
  onUpdate: (id: string, updates: Partial<CanvasElement>) => void;
  onDelete: (id: string) => void;
}

export const PropertiesPanel: React.FC<PropertiesPanelProps> = ({
  element,
  onUpdate,
  onDelete,
}) => {
  if (!element) {
    return (
      <aside className="w-72 bg-panel border-l border-border flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Settings className="w-4 h-4 text-muted-foreground" />
            Properties
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <p className="text-sm text-muted-foreground text-center">
            Select an element to<br />view its properties
          </p>
        </div>
      </aside>
    );
  }

  const handleChange = (field: string, value: string | number) => {
    if (field.startsWith('styles.')) {
      const styleField = field.replace('styles.', '');
      onUpdate(element.id, {
        styles: { ...element.styles, [styleField]: value },
      });
    } else {
      onUpdate(element.id, { [field]: value });
    }
  };

  return (
    <aside className="w-72 bg-panel border-l border-border flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Settings className="w-4 h-4 text-muted-foreground" />
          Properties
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
          onClick={() => onDelete(element.id)}
          aria-label="Delete element"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Element Type */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider">
              Type
            </Label>
            <div className="text-sm font-medium text-foreground capitalize">
              {element.type}
            </div>
          </div>

          {/* Dimensions */}
          <div className="space-y-3">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider">
              Size
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="width" className="text-xs text-muted-foreground">
                  Width
                </Label>
                <Input
                  id="width"
                  type="number"
                  value={element.width}
                  onChange={(e) => handleChange('width', parseInt(e.target.value) || 40)}
                  min={40}
                  className="property-input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="height" className="text-xs text-muted-foreground">
                  Height
                </Label>
                <Input
                  id="height"
                  type="number"
                  value={element.height}
                  onChange={(e) => handleChange('height', parseInt(e.target.value) || 40)}
                  min={40}
                  className="property-input"
                />
              </div>
            </div>
          </div>

          {/* Position */}
          <div className="space-y-3">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider">
              Position
            </Label>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="x" className="text-xs text-muted-foreground">
                  X
                </Label>
                <Input
                  id="x"
                  type="number"
                  value={Math.round(element.x)}
                  onChange={(e) => handleChange('x', parseInt(e.target.value) || 0)}
                  className="property-input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="y" className="text-xs text-muted-foreground">
                  Y
                </Label>
                <Input
                  id="y"
                  type="number"
                  value={Math.round(element.y)}
                  onChange={(e) => handleChange('y', parseInt(e.target.value) || 0)}
                  className="property-input"
                />
              </div>
            </div>
          </div>

          {/* Rotation */}
          <div className="space-y-3">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <RotateCw className="w-3 h-3" />
              Rotation
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={Math.round(element.rotation)}
                onChange={(e) => handleChange('rotation', parseInt(e.target.value) || 0)}
                className="property-input flex-1"
              />
              <span className="text-xs text-muted-foreground">°</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              value={element.rotation}
              onChange={(e) => handleChange('rotation', parseInt(e.target.value))}
              className="w-full h-2 bg-input rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>

          {/* Background Color */}
          <div className="space-y-3">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider">
              Background
            </Label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={element.styles.backgroundColor || '#4F46E5'}
                onChange={(e) => handleChange('styles.backgroundColor', e.target.value)}
                className="w-10 h-10 rounded-md border border-border cursor-pointer bg-transparent"
              />
              <Input
                type="text"
                value={element.styles.backgroundColor || '#4F46E5'}
                onChange={(e) => handleChange('styles.backgroundColor', e.target.value)}
                className="property-input flex-1"
              />
            </div>
          </div>

          {/* Text Content (only for text elements) */}
          {element.type === 'text' && (
            <>
              <div className="space-y-3">
                <Label className="text-xs text-muted-foreground uppercase tracking-wider">
                  Text Content
                </Label>
                <textarea
                  value={element.text}
                  onChange={(e) => handleChange('text', e.target.value)}
                  className="property-input min-h-[80px] resize-none"
                  placeholder="Enter text..."
                />
              </div>

              <div className="space-y-3">
                <Label className="text-xs text-muted-foreground uppercase tracking-wider">
                  Text Color
                </Label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={element.styles.color || '#FFFFFF'}
                    onChange={(e) => handleChange('styles.color', e.target.value)}
                    className="w-10 h-10 rounded-md border border-border cursor-pointer bg-transparent"
                  />
                  <Input
                    type="text"
                    value={element.styles.color || '#FFFFFF'}
                    onChange={(e) => handleChange('styles.color', e.target.value)}
                    className="property-input flex-1"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label className="text-xs text-muted-foreground uppercase tracking-wider">
                  Font Size
                </Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={element.styles.fontSize}
                    onChange={(e) => handleChange('styles.fontSize', parseInt(e.target.value) || 16)}
                    min={8}
                    max={200}
                    className="property-input flex-1"
                  />
                  <span className="text-xs text-muted-foreground">px</span>
                </div>
              </div>
            </>
          )}

          {/* Element ID (read-only) */}
          <div className="space-y-2 pt-4 border-t border-border">
            <Label className="text-xs text-muted-foreground uppercase tracking-wider">
              Element ID
            </Label>
            <code className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded block truncate">
              {element.id}
            </code>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};
