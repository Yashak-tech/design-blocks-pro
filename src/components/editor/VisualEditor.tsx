import React, { useState, useEffect } from 'react';
import { useEditorState } from '@/hooks/useEditorState';
import { useExport } from '@/hooks/useExport';
import { Toolbar } from './Toolbar';
import { LayersPanel } from './LayersPanel';
import { PropertiesPanel } from './PropertiesPanel';
import { Canvas } from './Canvas';
import { HelpPanel } from './HelpPanel';

export const VisualEditor: React.FC = () => {
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

  const [showHelp, setShowHelp] = useState(false);

  // Show help on first visit
  useEffect(() => {
    const hasVisited = localStorage.getItem('visual-editor-visited');
    if (!hasVisited) {
      setShowHelp(true);
      localStorage.setItem('visual-editor-visited', 'true');
    }
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Toolbar
        onAddRect={() => addElement('rect')}
        onAddText={() => addElement('text')}
        onExportJSON={exportJSON}
        onExportHTML={exportHTML}
        snapToGrid={state.snapToGrid}
        onToggleSnap={toggleSnapToGrid}
        onShowHelp={() => setShowHelp(true)}
      />

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

      <HelpPanel isOpen={showHelp} onClose={() => setShowHelp(false)} />
    </div>
  );
};
