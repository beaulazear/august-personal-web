import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';

const Window = ({
  title = "Window",
  children,
  initialX = 100,
  initialY = 100,
  initialWidth = 600,
  initialHeight = 400,
  onClose,
  onMinimize,
  isMinimized = false,
  zIndex = 1,
  onFocus,
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [size] = useState({ width: initialWidth, height: initialHeight });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isMinimizing, setIsMinimizing] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [previousState, setPreviousState] = useState(null);
  const windowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Handle minimize animation
  useEffect(() => {
    if (isMinimized) {
      setIsMinimizing(true);
    } else {
      setIsMinimizing(false);
    }
  }, [isMinimized]);

  const handleMouseDown = (e) => {
    // Only allow dragging from the title bar
    if (e.target.closest('.window-controls')) return;
    // Don't allow dragging when fullscreen
    if (isFullscreen) return;

    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDragging(true);
    if (onFocus) onFocus();
  };

  const handleToggleFullscreen = () => {
    if (isFullscreen) {
      // Restore previous size and position
      if (previousState) {
        setPosition(previousState.position);
      }
      setIsFullscreen(false);
    } else {
      // Save current state and go fullscreen
      setPreviousState({
        position: { ...position },
      });
      setIsFullscreen(true);
    }
  };

  // Don't render if minimized and animation is complete
  if (isMinimized && !isMinimizing) return null;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div
      ref={windowRef}
      className={`absolute bg-window-bg border-2 border-window-border rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
        isMinimizing ? 'animate-window-minimize' : (!isMinimized ? 'animate-window-open' : 'opacity-0 invisible')
      }`}
      style={isFullscreen || isMobile ? {
        left: isMobile ? '10px' : '20px',
        top: isMobile ? '10px' : '20px',
        width: isMobile ? 'calc(100vw - 20px)' : 'calc(100vw - 40px)',
        height: isMobile ? 'calc(100vh - 150px)' : 'calc(100vh - 160px)',
        zIndex: zIndex + 1000,
      } : {
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        minHeight: `${size.height}px`,
        zIndex: zIndex,
      }}
      onClick={() => onFocus && onFocus()}
      onAnimationEnd={() => {
        if (isMinimizing) {
          setIsMinimizing(false);
        }
      }}
    >
      {/* Title Bar */}
      <div
        className="bg-window-bg-light border-b border-window-border px-4 py-3 cursor-move flex items-center justify-between select-none"
        onMouseDown={handleMouseDown}
      >
        {/* macOS Window Controls */}
        <div className="flex items-center gap-2 window-controls">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group"
          >
            <X size={8} className="opacity-0 group-hover:opacity-100 text-red-900" />
          </button>
          <button
            onClick={onMinimize}
            className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center group"
          >
            <Minus size={8} className="opacity-0 group-hover:opacity-100 text-yellow-900" />
          </button>
          <button
            onClick={handleToggleFullscreen}
            className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center group"
          >
            <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-green-900" />
          </button>
        </div>

        {/* Window Title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-window-text text-base font-mono font-semibold">
          {title}
        </div>

        {/* Empty space for balance */}
        <div className="w-20"></div>
      </div>

      {/* Window Content */}
      <div className="p-4 md:p-6 text-window-text font-mono text-sm md:text-base overflow-auto" style={isFullscreen || isMobile ? { height: isMobile ? 'calc(100vh - 210px)' : 'calc(100vh - 220px)' } : { maxHeight: `${size.height - 100}px` }}>
        {children}
      </div>
    </div>
  );
};

export default Window;
