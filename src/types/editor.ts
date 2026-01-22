export interface ElementStyles {
  backgroundColor: string;
  color: string;
  fontSize: number;
}

export interface CanvasElement {
  id: string;
  type: 'rect' | 'text';
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  zIndex: number;
  styles: ElementStyles;
  text: string;
}

export interface EditorState {
  elements: CanvasElement[];
  selectedElementId: string | null;
  snapToGrid: boolean;
  gridSize: number;
  canvasWidth: number;
  canvasHeight: number;
}

export type ResizeHandle = 'nw' | 'ne' | 'sw' | 'se';

export interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  elementStartX: number;
  elementStartY: number;
}

export interface ResizeState {
  isResizing: boolean;
  handle: ResizeHandle | null;
  startX: number;
  startY: number;
  elementStartX: number;
  elementStartY: number;
  elementStartWidth: number;
  elementStartHeight: number;
}

export interface RotateState {
  isRotating: boolean;
  centerX: number;
  centerY: number;
  startAngle: number;
  elementStartRotation: number;
}
