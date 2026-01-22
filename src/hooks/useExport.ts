import { useCallback } from 'react';
import { CanvasElement } from '@/types/editor';

export const useExport = (elements: CanvasElement[], canvasWidth: number, canvasHeight: number) => {
  const exportJSON = useCallback(() => {
    const data = JSON.stringify(elements, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design-export.json';
    a.click();
    URL.revokeObjectURL(url);
  }, [elements]);

  const exportHTML = useCallback(() => {
    const elementsHtml = elements
      .sort((a, b) => a.zIndex - b.zIndex)
      .map(el => {
        const baseStyles = `
          position: absolute;
          left: ${el.x}px;
          top: ${el.y}px;
          width: ${el.width}px;
          height: ${el.height}px;
          transform: rotate(${el.rotation}deg);
          transform-origin: center center;
          background-color: ${el.styles.backgroundColor};
          color: ${el.styles.color};
          font-size: ${el.styles.fontSize}px;
          ${el.type === 'text' ? 'display: flex; align-items: center; justify-content: center;' : ''}
          box-sizing: border-box;
        `.replace(/\s+/g, ' ').trim();

        if (el.type === 'text') {
          return `<div style="${baseStyles}">${el.text}</div>`;
        }
        return `<div style="${baseStyles}"></div>`;
      })
      .join('\n    ');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Design Export</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      display: flex; 
      justify-content: center; 
      align-items: center; 
      min-height: 100vh; 
      background: #1a1a1a;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .canvas {
      position: relative;
      width: ${canvasWidth}px;
      height: ${canvasHeight}px;
      background: #252525;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    }
  </style>
</head>
<body>
  <div class="canvas">
    ${elementsHtml}
  </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'design-export.html';
    a.click();
    URL.revokeObjectURL(url);
  }, [elements, canvasWidth, canvasHeight]);

  return { exportJSON, exportHTML };
};
