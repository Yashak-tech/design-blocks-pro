import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, Save, Check, Download, FileJson, FileCode } from 'lucide-react';
import { useEditorState } from '@/hooks/useEditorState';
import { useExport } from '@/hooks/useExport';
import { Toolbar } from '@/components/editor/Toolbar';
import { LayersPanel } from '@/components/editor/LayersPanel';
import { PropertiesPanel } from '@/components/editor/PropertiesPanel';
import { Canvas } from '@/components/editor/Canvas';
import { HelpPanel } from '@/components/editor/HelpPanel';
import { CursorProvider, useCursor } from '@/contexts/CursorContext';
import { PageTransition } from '@/components/layout/PageTransition';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const EditorContent: React.FC = () => {
  const {
    state,
    selectedElement,
    addElement,
    selectElement,
    updateElement,
    moveElement,
    resizeElement,
    rotateElement,
    deleteElement,
    moveLayerUp,
    moveLayerDown,
    toggleSnapToGrid,
  } = useEditorState();

  const { exportJSON, exportHTML } = useExport(
    state.elements,
    state.canvasWidth,
    state.canvasHeight
  );

  const { cursorMode } = useCursor();

  const [showHelp, setShowHelp] = useState(false);
  const [projectName, setProjectName] = useState('Untitled Project');
  const [saveStatus, setSaveStatus] = useState<'saved' | 'saving'>('saved');
  const [isEditing, setIsEditing] = useState(false);

  // Show help on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('visual-editor-visited');
    if (!hasVisited) {
      setShowHelp(true);
      localStorage.setItem('visual-editor-visited', 'true');
    }
  }, []);

  // Simulate save indicator
  useEffect(() => {
    setSaveStatus('saving');
    const timer = setTimeout(() => setSaveStatus('saved'), 500);
    return () => clearTimeout(timer);
  }, [state.elements]);

  // Cursor style mapping
  const getCursorClass = () => {
    switch (cursorMode) {
      case 'grab': return 'cursor-grab';
      case 'grabbing': return 'cursor-grabbing';
      case 'nw-resize': return 'cursor-nwse-resize';
      case 'ne-resize': return 'cursor-nesw-resize';
      case 'sw-resize': return 'cursor-nesw-resize';
      case 'se-resize': return 'cursor-nwse-resize';
      case 'text': return 'cursor-text';
      case 'pointer': return 'cursor-pointer';
      default: return 'cursor-default';
    }
  };

  return (
    <div className={`h-screen flex flex-col bg-background overflow-hidden ${getCursorClass()}`}>
      {/* Top Bar - App Shell */}
      <div className="h-12 bg-toolbar border-b border-border flex items-center justify-between px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Editor</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          {isEditing ? (
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsEditing(false)}
              className="bg-transparent border-b border-primary text-foreground outline-none px-1 text-sm w-40"
              autoFocus
            />
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {projectName}
            </button>
          )}
        </div>

        {/* Save Status & Export */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {saveStatus === 'saving' ? (
              <>
                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span>Saved</span>
              </>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Export
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={exportJSON} className="gap-2 cursor-pointer">
                <FileJson className="w-4 h-4" />
                Export as JSON
              </DropdownMenuItem>
              <DropdownMenuItem onClick={exportHTML} className="gap-2 cursor-pointer">
                <FileCode className="w-4 h-4" />
                Export as HTML
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Editor Toolbar */}
      <Toolbar
        onAddRect={() => addElement('rect')}
        onAddText={() => addElement('text')}
        onExportJSON={exportJSON}
        onExportHTML={exportHTML}
        snapToGrid={state.snapToGrid}
        onToggleSnap={toggleSnapToGrid}
        onShowHelp={() => setShowHelp(true)}
      />

      {/* Main Editor Area */}
      <div className="flex-1 flex overflow-hidden">
        <LayersPanel
          elements={state.elements}
          selectedElementId={state.selectedElementId}
          onSelectElement={selectElement}
          onMoveUp={moveLayerUp}
          onMoveDown={moveLayerDown}
        />

        <Canvas
          elements={state.elements}
          selectedElementId={state.selectedElementId}
          canvasWidth={state.canvasWidth}
          canvasHeight={state.canvasHeight}
          onSelectElement={selectElement}
          onMoveElement={moveElement}
          onResizeElement={resizeElement}
          onRotateElement={rotateElement}
          onDeleteElement={deleteElement}
        />

        <PropertiesPanel
          element={selectedElement}
          onUpdate={updateElement}
          onDelete={deleteElement}
        />
      </div>

      {/* Status Bar */}
      <div className="h-8 bg-toolbar border-t border-border flex items-center justify-between px-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span>Canvas: {state.canvasWidth} × {state.canvasHeight}</span>
          <span className="text-border">|</span>
          <span>Elements: {state.elements.length}</span>
          <span className="text-border">|</span>
          <span>Snap: {state.snapToGrid ? 'On (8px)' : 'Off'}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="capitalize">Cursor: {cursorMode}</span>
          <span className="text-border">|</span>
          <span>Zoom: 100%</span>
        </div>
      </div>

      <HelpPanel isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
};

const Editor: React.FC = () => {
  return (
    <PageTransition>
      <CursorProvider>
        <EditorContent />
      </CursorProvider>
    </PageTransition>
  );
};

export default Editor;
