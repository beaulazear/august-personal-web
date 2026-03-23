import React from 'react';

const AboutWindow = () => {
  return (
    <div className="space-y-4">
      {/* Terminal-style intro */}
      <div className="text-terminal-green text-lg font-semibold">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-terminal-amber">beau@portfolio</span>
          <span className="text-window-text">:</span>
          <span className="text-terminal-blue">~</span>
          <span className="text-window-text">$</span>
          <span className="ml-2">cat intro.txt</span>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-4 text-window-text">
        <div>
          <span className="text-terminal-green font-bold">$</span>
          <span className="ml-2 text-2xl font-bold">Hello, I'm Beau! 👋</span>
        </div>

        <div className="pl-4 space-y-3 text-base leading-relaxed font-medium">
          <p>
            <span className="text-terminal-amber font-bold">&gt;</span> Software developer & entrepreneur
          </p>
          <p>
            <span className="text-terminal-amber font-bold">&gt;</span> Co-Founder & CTO at Voxxy AI
          </p>
          <p>
            <span className="text-terminal-amber font-bold">&gt;</span> Building products with React, Rails & React Native
          </p>
          <p>
            <span className="text-terminal-amber font-bold">&gt;</span> Animal lover & owner of Beau's Animal Care
          </p>
        </div>

        <div className="border-t border-window-border pt-4 mt-6">
          <div className="text-sm text-gray-400 font-semibold">
            <span className="text-terminal-green">$</span>
            <span className="ml-2">ls skills/</span>
          </div>
          <div className="pl-4 mt-2 grid grid-cols-1 md:grid-cols-2 gap-1 text-sm md:text-base font-medium">
            <div className="text-terminal-blue">• React</div>
            <div className="text-terminal-blue">• Ruby on Rails</div>
            <div className="text-terminal-blue">• React Native</div>
            <div className="text-terminal-blue">• TypeScript</div>
            <div className="text-terminal-blue">• PostgreSQL</div>
            <div className="text-terminal-blue">• AWS</div>
          </div>
        </div>

        <div className="pt-4 text-sm text-gray-400 font-medium">
          <span className="text-terminal-green font-bold">$</span>
          <span className="ml-2">echo "Check out my other windows for more!"</span>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
