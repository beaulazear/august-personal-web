import React from 'react';

const DockIcon = ({ icon: Icon, label, onClick, isActive }) => {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className={`
          w-14 h-14 rounded-xl flex items-center justify-center
          transition-all duration-200 ease-out
          ${isActive
            ? 'bg-window-bg-light border-2 border-terminal-green shadow-lg shadow-terminal-green/50'
            : 'bg-window-bg border-2 border-window-border hover:border-terminal-green-dim'
          }
          hover:scale-110 hover:-translate-y-2
        `}
      >
        <Icon
          size={28}
          className={isActive ? 'text-terminal-green' : 'text-window-text'}
        />
      </button>

      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-window-bg-light border border-window-border rounded px-3 py-1 text-xs font-mono text-window-text whitespace-nowrap">
          {label}
        </div>
      </div>

      {/* Active indicator dot */}
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-terminal-green"></div>
      )}
    </div>
  );
};

const Dock = ({ windows, onOpenWindow, activeWindows = [] }) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-window-bg/80 backdrop-blur-xl border-2 border-window-border rounded-2xl px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-3">
          {windows.map((window) => (
            <DockIcon
              key={window.id}
              icon={window.icon}
              label={window.label}
              onClick={() => onOpenWindow(window.id)}
              isActive={activeWindows.includes(window.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Dock, DockIcon };
export default Dock;
