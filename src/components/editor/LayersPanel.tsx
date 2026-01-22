import React from 'react';
import { ChevronUp, ChevronDown, Square, Type, Layers } from 'lucide-react';
import { CanvasElement } from '@/types/editor';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface LayersPanelProps {
  elements: CanvasElement[];
  selectedElementId: string | null;
  onSelectElement: (id: string) => void;
  onMoveUp: (id: string) => void;
  onMoveDown: (id: string) => void;
}

export const LayersPanel: React.FC<LayersPanelProps> = ({
  elements,
  selectedElementId,
  onSelectElement,
  onMoveUp,
  onMoveDown,
}) => {
  // Sort by zIndex descending (highest on top)
  const sortedElements = [...elements].sort((a, b) => b.zIndex - a.zIndex);

  return (
    <aside className="w-64 bg-panel border-r border-border flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Layers className="w-4 h-4 text-muted-foreground" />
          Layers
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1">
          {sortedElements.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No elements yet
            </div>
          ) : (
            sortedElements.map((element) => (
              <div
                key={element.id}
                className={`layer-item group ${
                  selectedElementId === element.id ? 'selected' : ''
                }`}
                onClick={() => onSelectElement(element.id)}
              >
                <div
                  className="w-4 h-4 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: element.styles.backgroundColor || '#4F46E5' }}
                />
                
                {element.type === 'rect' ? (
                  <Square className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <Type className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                )}
                
                <span className="text-sm truncate flex-1 text-foreground">
                  {element.type === 'text' ? element.text || 'Text' : `Rectangle`}
                </span>

                <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      onMoveUp(element.id);
                    }}
                    aria-label="Move layer up"
                  >
                    <ChevronUp className="w-3.5 h-3.5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      onMoveDown(element.id);
                    }}
                    aria-label="Move layer down"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      <div className="p-3 border-t border-border">
        <div className="text-xs text-muted-foreground">
          {elements.length} element{elements.length !== 1 ? 's' : ''}
        </div>
      </div>
    </aside>
  );
};
