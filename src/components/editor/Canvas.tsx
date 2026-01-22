import React, { useRef, useCallback, useEffect, useState } from 'react';
import { CanvasElement, ResizeHandle, DragState, ResizeState, RotateState } from '@/types/editor';
import { CanvasElementComponent } from './CanvasElement';

interface CanvasProps {
  elements: CanvasElement[];
  selectedElementId: string | null;
  canvasWidth: number;
  canvasHeight: number;
  onSelectElement: (id: string | null) => void;
  onMoveElement: (id: string, x: number, y: number) => void;
  onResizeElement: (id: string, x: number, y: number, width: number, height: number) => void;
  onRotateElement: (id: string, rotation: number) => void;
  onDeleteElement: (id: string) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  elements,
  selectedElementId,
  canvasWidth,
  canvasHeight,
  onSelectElement,
  onMoveElement,
  onResizeElement,
  onRotateElement,
  onDeleteElement,
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  
  const [dragState, setDragState] = useState<DragState>({
    isDragging: false,
    startX: 0,
    startY: 0,
    elementStartX: 0,
    elementStartY: 0,
  });

  const [resizeState, setResizeState] = useState<ResizeState>({
    isResizing: false,
    handle: null,
    startX: 0,
    startY: 0,
    elementStartX: 0,
    elementStartY: 0,
    elementStartWidth: 0,
    elementStartHeight: 0,
  });

  const [rotateState, setRotateState] = useState<RotateState>({
    isRotating: false,
    centerX: 0,
    centerY: 0,
    startAngle: 0,
    elementStartRotation: 0,
  });

  const selectedElement = elements.find(el => el.id === selectedElementId);

  const handleCanvasClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSelectElement(null);
    }
  }, [onSelectElement]);

  const handleDragStart = useCallback((e: React.MouseEvent, elementId: string) => {
    const element = elements.find(el => el.id === elementId);
    if (!element) return;

    setDragState({
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      elementStartX: element.x,
      elementStartY: element.y,
    });
  }, [elements]);

  const handleResizeStart = useCallback((e: React.MouseEvent, handle: ResizeHandle, elementId: string) => {
    const element = elements.find(el => el.id === elementId);
    if (!element) return;

    setResizeState({
      isResizing: true,
      handle,
      startX: e.clientX,
      startY: e.clientY,
      elementStartX: element.x,
      elementStartY: element.y,
      elementStartWidth: element.width,
      elementStartHeight: element.height,
    });
  }, [elements]);

  const handleRotateStart = useCallback((e: React.MouseEvent, elementId: string) => {
    const element = elements.find(el => el.id === elementId);
    if (!element || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const centerX = rect.left + element.x + element.width / 2;
    const centerY = rect.top + element.y + element.height / 2;
    
    const startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);

    setRotateState({
      isRotating: true,
      centerX,
      centerY,
      startAngle,
      elementStartRotation: element.rotation,
    });
  }, [elements]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!selectedElementId) return;

      if (dragState.isDragging) {
        const deltaX = e.clientX - dragState.startX;
        const deltaY = e.clientY - dragState.startY;
        onMoveElement(
          selectedElementId,
          dragState.elementStartX + deltaX,
          dragState.elementStartY + deltaY
        );
      }

      if (resizeState.isResizing && resizeState.handle) {
        const deltaX = e.clientX - resizeState.startX;
        const deltaY = e.clientY - resizeState.startY;

        let newX = resizeState.elementStartX;
        let newY = resizeState.elementStartY;
        let newWidth = resizeState.elementStartWidth;
        let newHeight = resizeState.elementStartHeight;

        switch (resizeState.handle) {
          case 'se':
            newWidth = resizeState.elementStartWidth + deltaX;
            newHeight = resizeState.elementStartHeight + deltaY;
            break;
          case 'sw':
            newX = resizeState.elementStartX + deltaX;
            newWidth = resizeState.elementStartWidth - deltaX;
            newHeight = resizeState.elementStartHeight + deltaY;
            break;
          case 'ne':
            newY = resizeState.elementStartY + deltaY;
            newWidth = resizeState.elementStartWidth + deltaX;
            newHeight = resizeState.elementStartHeight - deltaY;
            break;
          case 'nw':
            newX = resizeState.elementStartX + deltaX;
            newY = resizeState.elementStartY + deltaY;
            newWidth = resizeState.elementStartWidth - deltaX;
            newHeight = resizeState.elementStartHeight - deltaY;
            break;
        }

        onResizeElement(selectedElementId, newX, newY, newWidth, newHeight);
      }

      if (rotateState.isRotating) {
        const currentAngle = Math.atan2(
          e.clientY - rotateState.centerY,
          e.clientX - rotateState.centerX
        ) * (180 / Math.PI);
        
        const deltaAngle = currentAngle - rotateState.startAngle;
        onRotateElement(selectedElementId, rotateState.elementStartRotation + deltaAngle);
      }
    };

    const handleMouseUp = () => {
      setDragState(prev => ({ ...prev, isDragging: false }));
      setResizeState(prev => ({ ...prev, isResizing: false, handle: null }));
      setRotateState(prev => ({ ...prev, isRotating: false }));
    };

    if (dragState.isDragging || resizeState.isResizing || rotateState.isRotating) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [
    dragState,
    resizeState,
    rotateState,
    selectedElementId,
    onMoveElement,
    onResizeElement,
    onRotateElement,
  ]);

  // Keyboard handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedElementId || !selectedElement) return;

      // Ignore if focus is in an input
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case 'Delete':
        case 'Backspace':
          e.preventDefault();
          onDeleteElement(selectedElementId);
          break;
        case 'ArrowUp':
          e.preventDefault();
          onMoveElement(selectedElementId, selectedElement.x, selectedElement.y - 5);
          break;
        case 'ArrowDown':
          e.preventDefault();
          onMoveElement(selectedElementId, selectedElement.x, selectedElement.y + 5);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          onMoveElement(selectedElementId, selectedElement.x - 5, selectedElement.y);
          break;
        case 'ArrowRight':
          e.preventDefault();
          onMoveElement(selectedElementId, selectedElement.x + 5, selectedElement.y);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedElementId, selectedElement, onMoveElement, onDeleteElement]);

  return (
    <div className="flex-1 overflow-auto bg-background p-8 flex items-center justify-center">
      <div
        ref={canvasRef}
        className="relative bg-canvas canvas-grid rounded-lg shadow-2xl"
        style={{
          width: canvasWidth,
          height: canvasHeight,
          minWidth: canvasWidth,
          minHeight: canvasHeight,
        }}
        onClick={handleCanvasClick}
        tabIndex={0}
      >
        {elements
          .sort((a, b) => a.zIndex - b.zIndex)
          .map((element) => (
            <CanvasElementComponent
              key={element.id}
              element={element}
              isSelected={selectedElementId === element.id}
              onSelect={() => onSelectElement(element.id)}
              onDragStart={(e) => handleDragStart(e, element.id)}
              onResizeStart={(e, handle) => handleResizeStart(e, handle, element.id)}
              onRotateStart={(e) => handleRotateStart(e, element.id)}
            />
          ))}

        {elements.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center text-muted-foreground">
              <p className="text-lg mb-2">Empty Canvas</p>
              <p className="text-sm">Add rectangles or text from the toolbar</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
