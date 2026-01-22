import React from 'react';
import { Square, Type, Download, FileJson, Grid3X3, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface ToolbarProps {
  onAddRect: () => void;
  onAddText: () => void;
  onExportJSON: () => void;
  onExportHTML: () => void;
  snapToGrid: boolean;
  onToggleSnap: () => void;
  onShowHelp: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onAddRect,
  onAddText,
  onExportJSON,
  onExportHTML,
  snapToGrid,
  onToggleSnap,
  onShowHelp,
}) => {
  return (
    <header className="h-14 bg-toolbar border-b border-border flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 mr-4">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">VD</span>
          </div>
          <span className="font-semibold text-foreground ml-2">Visual Designer</span>
        </div>

        <div className="h-6 w-px bg-border mx-2" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onAddRect}
              className="toolbar-btn"
              aria-label="Add Rectangle"
            >
              <Square className="w-4 h-4" />
              <span className="hidden sm:inline">Rectangle</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add Rectangle (Ctrl+R)</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onAddText}
              className="toolbar-btn"
              aria-label="Add Text"
            >
              <Type className="w-4 h-4" />
              <span className="hidden sm:inline">Text</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Add Text (Ctrl+T)</TooltipContent>
        </Tooltip>

        <div className="h-6 w-px bg-border mx-2" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleSnap}
              className={`toolbar-btn ${snapToGrid ? 'bg-accent/20 text-accent' : ''}`}
              aria-label="Toggle Snap to Grid"
            >
              <Grid3X3 className="w-4 h-4" />
              <span className="hidden sm:inline">Snap</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Snap to Grid ({snapToGrid ? 'On' : 'Off'})</TooltipContent>
        </Tooltip>
      </div>

      <div className="flex items-center gap-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onExportJSON}
              className="toolbar-btn"
              aria-label="Export JSON"
            >
              <FileJson className="w-4 h-4" />
              <span className="hidden sm:inline">JSON</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Export as JSON</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onExportHTML}
              className="toolbar-btn"
              aria-label="Export HTML"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">HTML</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Export as HTML</TooltipContent>
        </Tooltip>

        <div className="h-6 w-px bg-border mx-2" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              onClick={onShowHelp}
              className="toolbar-btn"
              aria-label="Help"
            >
              <HelpCircle className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Help & Documentation</TooltipContent>
        </Tooltip>
      </div>
    </header>
  );
};
