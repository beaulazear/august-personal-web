import React from 'react';

const DockIcon = ({ icon: Icon, label, onClick, isActive }) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <button
        onClick={onClick}
        className={`
          w-14 h-14 rounded-xl flex items-center justify-center
          transition-all duration-200 ease-out
          ${isActive
            ? 'bg-window-bg-light border-2 border-terminal-green shadow-lg shadow-terminal-green/50'
            : 'bg-window-bg border-2 border-window-border hover:border-terminal-green-dim'
          }
          hover:scale-110 hover:-translate-y-1
        `}
      >
        <Icon
          size={28}
          className={isActive ? 'text-terminal-green' : 'text-window-text'}
        />
      </button>

      {/* Label below icon */}
      <div className={`text-xs font-mono font-semibold transition-colors ${
        isActive ? 'text-terminal-green' : 'text-gray-400'
      }`}>
        {label}
      </div>
    </div>
  );
};

const Dock = ({ windows, onOpenWindow, activeWindows = [] }) => {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-window-bg/80 backdrop-blur-xl border-2 border-window-border rounded-2xl px-6 py-4 shadow-2xl">
        <div className="flex items-start gap-6">
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
