import React from 'react';
import { ResizeHandle } from '@/types/editor';

interface SelectionHandlesProps {
  width: number;
  height: number;
  onResizeStart: (e: React.MouseEvent, handle: ResizeHandle) => void;
  onRotateStart: (e: React.MouseEvent) => void;
}

export const SelectionHandles: React.FC<SelectionHandlesProps> = ({
  width,
  height,
  onResizeStart,
  onRotateStart,
}) => {
  const handleSize = 10;
  const offset = -handleSize / 2;

  const handles: { id: ResizeHandle; x: number; y: number; cursor: string }[] = [
    { id: 'nw', x: offset, y: offset, cursor: 'nw-resize' },
    { id: 'ne', x: width + offset, y: offset, cursor: 'ne-resize' },
    { id: 'sw', x: offset, y: height + offset, cursor: 'sw-resize' },
    { id: 'se', x: width + offset, y: height + offset, cursor: 'se-resize' },
  ];

  return (
    <>
      {/* Selection outline */}
      <div 
        className="absolute inset-0 pointer-events-none selection-outline rounded-sm"
        style={{ margin: '-1px' }}
      />

      {/* Corner handles */}
      {handles.map((handle) => (
        <div
          key={handle.id}
          className="corner-handle handle-animate"
          style={{
            left: handle.x,
            top: handle.y,
            width: handleSize,
            height: handleSize,
            cursor: handle.cursor,
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            onResizeStart(e, handle.id);
          }}
        />
      ))}

      {/* Rotation handle */}
      <div
        className="rotation-handle handle-animate"
        style={{
          left: width / 2 - 8,
          top: -32,
          cursor: 'grab',
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onRotateStart(e);
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-3 h-3 absolute inset-0 m-auto text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      </div>

      {/* Line connecting rotation handle to element */}
      <div
        className="absolute w-px bg-selection handle-animate"
        style={{
          left: width / 2,
          top: -24,
          height: 24,
        }}
      />
    </>
  );
};
