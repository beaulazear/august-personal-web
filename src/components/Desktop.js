import React, { useState, useEffect } from 'react';
import { User, FolderOpen, FileText, Mail, Image } from 'lucide-react';
import Window from './Window';
import Dock from './Dock';
import AboutWindow from './AboutWindow';
import ProjectsWindow from './ProjectsWindow';
import ResumeWindow from './ResumeWindow';
import ContactWindow from './ContactWindow';
import ImagesWindow from './ImagesWindow';
import AsciiArt from './AsciiArt';

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]); // Start with empty desktop
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [windowZIndices, setWindowZIndices] = useState({});
  const [maxZIndex, setMaxZIndex] = useState(10);

  const windows = [
    {
      id: 'about',
      icon: User,
      label: 'About',
      title: 'about.txt',
      component: AboutWindow,
      initialX: window.innerWidth / 2 - 300,
      initialY: 100,
      width: 600,
      height: 500,
    },
    {
      id: 'projects',
      icon: FolderOpen,
      label: 'Projects',
      title: 'projects/',
      component: ProjectsWindow,
      initialX: 150,
      initialY: 150,
      width: 700,
      height: 600,
    },
    {
      id: 'resume',
      icon: FileText,
      label: 'Resume',
      title: 'resume.txt',
      component: ResumeWindow,
      initialX: 200,
      initialY: 120,
      width: 650,
      height: 550,
    },
    {
      id: 'contact',
      icon: Mail,
      label: 'Contact',
      title: 'contact.sh',
      component: ContactWindow,
      initialX: 250,
      initialY: 140,
      width: 600,
      height: 500,
    },
    {
      id: 'images',
      icon: Image,
      label: 'Images',
      title: 'images/',
      component: ImagesWindow,
      initialX: 180,
      initialY: 100,
      width: 700,
      height: 600,
    },
  ];

  const handleOpenWindow = (windowId) => {
    const isMobile = window.innerWidth < 768;

    if (!openWindows.includes(windowId)) {
      // Window not open, open it
      if (isMobile) {
        // On mobile, close all other windows and open only this one
        setOpenWindows([windowId]);
        setMinimizedWindows([]);
      } else {
        setOpenWindows([...openWindows, windowId]);
      }
      handleFocusWindow(windowId);
    } else if (minimizedWindows.includes(windowId)) {
      // Window is minimized, restore it
      if (isMobile) {
        // On mobile, close all other windows and restore only this one
        setOpenWindows([windowId]);
        setMinimizedWindows([]);
      } else {
        setMinimizedWindows(minimizedWindows.filter(id => id !== windowId));
      }
      handleFocusWindow(windowId);
    } else {
      // Window is open and visible, minimize it
      handleMinimizeWindow(windowId);
    }
  };

  const handleCloseWindow = (windowId) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
    setMinimizedWindows(minimizedWindows.filter(id => id !== windowId));
  };

  const handleMinimizeWindow = (windowId) => {
    if (!minimizedWindows.includes(windowId)) {
      setMinimizedWindows([...minimizedWindows, windowId]);
    }
  };

  const handleFocusWindow = (windowId) => {
    const newZIndex = maxZIndex + 1;
    setWindowZIndices({ ...windowZIndices, [windowId]: newZIndex });
    setMaxZIndex(newZIndex);
  };

  // ASCII art positions for decoration
  const [asciiDecorations, setAsciiDecorations] = useState([]);

  useEffect(() => {
    // Add some random ASCII art decorations on the desktop
    const decorations = [
      { type: 'dog', x: 50, y: 50 },
      { type: 'coffee', x: window.innerWidth - 150, y: 100 },
      { type: 'code', x: 100, y: window.innerHeight - 200 },
    ];
    setAsciiDecorations(decorations);
  }, []);

  return (
    <div className="w-screen h-screen bg-desktop-bg overflow-hidden relative">
      {/* ASCII Art Decorations */}
      {asciiDecorations.map((dec, i) => (
        <div
          key={i}
          className="absolute opacity-10 pointer-events-none select-none hidden md:block"
          style={{ left: `${dec.x}px`, top: `${dec.y}px` }}
        >
          <AsciiArt type={dec.type} className="text-terminal-green" />
        </div>
      ))}

      {/* Home screen - always visible as wallpaper */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none w-11/12 md:w-auto px-2 md:px-0">
        <div className="text-terminal-green font-mono opacity-80">
          <div className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Hello, I'm Beau</div>
          <div className="text-sm md:text-lg font-semibold text-terminal-amber mb-4 md:mb-8">
            <span className="text-window-text">$</span> Software Developer • Entrepreneur • Animal Lover
          </div>
          <AsciiArt type="terminal" className="text-terminal-green mb-4 md:mb-8 opacity-60 hidden md:block" />
          <div className="text-sm md:text-base text-gray-400 font-medium">
            Click an icon in the dock to explore
            <span className="animate-blink ml-1">█</span>
          </div>
          <AsciiArt type="dog" className="text-terminal-amber mt-4 md:mt-6 opacity-70" />
        </div>
      </div>

      {/* Windows */}
      {windows.map((windowConfig) => {
        const isOpen = openWindows.includes(windowConfig.id);
        const isMinimized = minimizedWindows.includes(windowConfig.id);
        const Component = windowConfig.component;

        if (!isOpen) return null;

        return (
          <Window
            key={windowConfig.id}
            title={windowConfig.title}
            initialX={windowConfig.initialX}
            initialY={windowConfig.initialY}
            initialWidth={windowConfig.width}
            initialHeight={windowConfig.height}
            onClose={() => handleCloseWindow(windowConfig.id)}
            onMinimize={() => handleMinimizeWindow(windowConfig.id)}
            isMinimized={isMinimized}
            zIndex={windowZIndices[windowConfig.id] || 1}
            onFocus={() => handleFocusWindow(windowConfig.id)}
          >
            <Component />
          </Window>
        );
      })}

      {/* Dock */}
      <Dock
        windows={windows}
        onOpenWindow={handleOpenWindow}
        activeWindows={openWindows.filter(id => !minimizedWindows.includes(id))}
      />
    </div>
  );
};

export default Desktop;
