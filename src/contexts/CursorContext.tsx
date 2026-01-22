import React, { createContext, useContext, useState, useCallback } from 'react';

export type CursorMode = 
  | 'default' 
  | 'pointer' 
  | 'grab' 
  | 'grabbing' 
  | 'nw-resize' 
  | 'ne-resize' 
  | 'sw-resize' 
  | 'se-resize' 
  | 'rotate' 
  | 'pan' 
  | 'text';

interface CursorContextType {
  cursorMode: CursorMode;
  setCursorMode: (mode: CursorMode) => void;
  isPanning: boolean;
  setIsPanning: (panning: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cursorMode, setCursorModeState] = useState<CursorMode>('default');
  const [isPanning, setIsPanning] = useState(false);

  const setCursorMode = useCallback((mode: CursorMode) => {
    setCursorModeState(mode);
  }, []);

  return (
    <CursorContext.Provider value={{ cursorMode, setCursorMode, isPanning, setIsPanning }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
