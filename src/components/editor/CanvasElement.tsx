import React from 'react';
import { CanvasElement as CanvasElementType, ResizeHandle } from '@/types/editor';
import { SelectionHandles } from './SelectionHandles';

interface CanvasElementProps {
  element: CanvasElementType;
  isSelected: boolean;
  onSelect: () => void;
  onDragStart: (e: React.MouseEvent) => void;
  onResizeStart: (e: React.MouseEvent, handle: ResizeHandle) => void;
  onRotateStart: (e: React.MouseEvent) => void;
}

export const CanvasElementComponent: React.FC<CanvasElementProps> = ({
  element,
  isSelected,
  onSelect,
  onDragStart,
  onResizeStart,
  onRotateStart,
}) => {
  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect();
    onDragStart(e);
  };

  return (
    <div
      className="canvas-element absolute cursor-move"
      style={{
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        transform: `rotate(${element.rotation}deg)`,
        transformOrigin: 'center center',
        zIndex: element.zIndex,
        backgroundColor: element.styles.backgroundColor,
        color: element.styles.color,
        fontSize: element.styles.fontSize,
        borderRadius: '4px',
        display: 'flex',
        alignItems: element.type === 'text' ? 'center' : 'stretch',
        justifyContent: element.type === 'text' ? 'center' : 'stretch',
        textAlign: 'center',
        padding: element.type === 'text' ? '8px' : 0,
        overflow: 'hidden',
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
    >
      {element.type === 'text' && (
        <span style={{ 
          wordBreak: 'break-word',
          lineHeight: 1.3,
        }}>
          {element.text}
        </span>
      )}

      {isSelected && (
        <SelectionHandles
          width={element.width}
          height={element.height}
          onResizeStart={onResizeStart}
          onRotateStart={onRotateStart}
        />
      )}
    </div>
  );
};
