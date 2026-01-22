import { useState, useCallback, useEffect } from 'react';
import { CanvasElement, EditorState } from '@/types/editor';

const STORAGE_KEY = 'visual-editor-state';
const MIN_SIZE = 40;

const generateId = (): string => {
  return `el_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

const getDefaultState = (): EditorState => ({
  elements: [],
  selectedElementId: null,
  snapToGrid: true,
  gridSize: 8,
  canvasWidth: 1200,
  canvasHeight: 800,
});

const createSampleElements = (): CanvasElement[] => [
  {
    id: generateId(),
    type: 'rect',
    x: 100,
    y: 100,
    width: 200,
    height: 150,
    rotation: 0,
    zIndex: 1,
    styles: { backgroundColor: '#3B82F6', color: '#FFFFFF', fontSize: 16 },
    text: '',
  },
  {
    id: generateId(),
    type: 'rect',
    x: 350,
    y: 150,
    width: 180,
    height: 120,
    rotation: 15,
    zIndex: 2,
    styles: { backgroundColor: '#10B981', color: '#FFFFFF', fontSize: 16 },
    text: '',
  },
  {
    id: generateId(),
    type: 'text',
    x: 150,
    y: 320,
    width: 300,
    height: 60,
    rotation: 0,
    zIndex: 3,
    styles: { backgroundColor: 'transparent', color: '#FFFFFF', fontSize: 24 },
    text: 'Visual Design Editor',
  },
  {
    id: generateId(),
    type: 'rect',
    x: 550,
    y: 300,
    width: 150,
    height: 150,
    rotation: 45,
    zIndex: 4,
    styles: { backgroundColor: '#8B5CF6', color: '#FFFFFF', fontSize: 16 },
    text: '',
  },
];

export const useEditorState = () => {
  const [state, setState] = useState<EditorState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...getDefaultState(), ...parsed };
      }
    } catch (e) {
      console.error('Failed to load editor state:', e);
    }
    // Return default state with sample elements
    return { ...getDefaultState(), elements: createSampleElements() };
  });

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Failed to save editor state:', e);
    }
  }, [state]);

  const snapValue = useCallback((value: number): number => {
    if (!state.snapToGrid) return value;
    return Math.round(value / state.gridSize) * state.gridSize;
  }, [state.snapToGrid, state.gridSize]);

  const addElement = useCallback((type: 'rect' | 'text') => {
    const maxZ = state.elements.reduce((max, el) => Math.max(max, el.zIndex), 0);
    const newElement: CanvasElement = {
      id: generateId(),
      type,
      x: snapValue(state.canvasWidth / 2 - (type === 'rect' ? 100 : 150)),
      y: snapValue(state.canvasHeight / 2 - (type === 'rect' ? 60 : 30)),
      width: type === 'rect' ? 200 : 300,
      height: type === 'rect' ? 120 : 60,
      rotation: 0,
      zIndex: maxZ + 1,
      styles: {
        backgroundColor: type === 'rect' ? '#4F46E5' : 'transparent',
        color: '#FFFFFF',
        fontSize: type === 'text' ? 20 : 16,
      },
      text: type === 'text' ? 'New Text' : '',
    };

    setState(prev => ({
      ...prev,
      elements: [...prev.elements, newElement],
      selectedElementId: newElement.id,
    }));
  }, [state.elements, state.canvasWidth, state.canvasHeight, snapValue]);

  const selectElement = useCallback((id: string | null) => {
    setState(prev => ({ ...prev, selectedElementId: id }));
  }, []);

  const updateElement = useCallback((id: string, updates: Partial<CanvasElement>) => {
    setState(prev => ({
      ...prev,
      elements: prev.elements.map(el => 
        el.id === id ? { ...el, ...updates } : el
      ),
    }));
  }, []);

  const moveElement = useCallback((id: string, x: number, y: number) => {
    setState(prev => {
      const element = prev.elements.find(el => el.id === id);
      if (!element) return prev;

      // Constrain to canvas bounds
      const newX = Math.max(0, Math.min(snapValue(x), prev.canvasWidth - element.width));
      const newY = Math.max(0, Math.min(snapValue(y), prev.canvasHeight - element.height));

      return {
        ...prev,
        elements: prev.elements.map(el =>
          el.id === id ? { ...el, x: newX, y: newY } : el
        ),
      };
    });
  }, [snapValue]);

  const resizeElement = useCallback((
    id: string, 
    x: number, 
    y: number, 
    width: number, 
    height: number
  ) => {
    setState(prev => {
      const element = prev.elements.find(el => el.id === id);
      if (!element) return prev;

      // Enforce minimum size
      const newWidth = Math.max(MIN_SIZE, width);
      const newHeight = Math.max(MIN_SIZE, height);

      // Constrain to canvas
      const newX = Math.max(0, Math.min(snapValue(x), prev.canvasWidth - newWidth));
      const newY = Math.max(0, Math.min(snapValue(y), prev.canvasHeight - newHeight));

      return {
        ...prev,
        elements: prev.elements.map(el =>
          el.id === id ? { 
            ...el, 
            x: newX, 
            y: newY, 
            width: snapValue(newWidth), 
            height: snapValue(newHeight) 
          } : el
        ),
      };
    });
  }, [snapValue]);

  const rotateElement = useCallback((id: string, rotation: number) => {
    setState(prev => ({
      ...prev,
      elements: prev.elements.map(el =>
        el.id === id ? { ...el, rotation: rotation % 360 } : el
      ),
    }));
  }, []);

  const deleteElement = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      elements: prev.elements.filter(el => el.id !== id),
      selectedElementId: prev.selectedElementId === id ? null : prev.selectedElementId,
    }));
  }, []);

  const moveLayerUp = useCallback((id: string) => {
    setState(prev => {
      const sorted = [...prev.elements].sort((a, b) => a.zIndex - b.zIndex);
      const index = sorted.findIndex(el => el.id === id);
      if (index === -1 || index === sorted.length - 1) return prev;

      // Swap zIndex with the element above
      const current = sorted[index];
      const above = sorted[index + 1];

      return {
        ...prev,
        elements: prev.elements.map(el => {
          if (el.id === current.id) return { ...el, zIndex: above.zIndex };
          if (el.id === above.id) return { ...el, zIndex: current.zIndex };
          return el;
        }),
      };
    });
  }, []);

  const moveLayerDown = useCallback((id: string) => {
    setState(prev => {
      const sorted = [...prev.elements].sort((a, b) => a.zIndex - b.zIndex);
      const index = sorted.findIndex(el => el.id === id);
      if (index === -1 || index === 0) return prev;

      // Swap zIndex with the element below
      const current = sorted[index];
      const below = sorted[index - 1];

      return {
        ...prev,
        elements: prev.elements.map(el => {
          if (el.id === current.id) return { ...el, zIndex: below.zIndex };
          if (el.id === below.id) return { ...el, zIndex: current.zIndex };
          return el;
        }),
      };
    });
  }, []);

  const toggleSnapToGrid = useCallback(() => {
    setState(prev => ({ ...prev, snapToGrid: !prev.snapToGrid }));
  }, []);

  const selectedElement = state.elements.find(el => el.id === state.selectedElementId) || null;

  return {
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
  };
};
