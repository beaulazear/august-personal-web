import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactWindow = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <span className="text-terminal-green font-bold text-2xl">$</span>
        <span className="ml-2 text-2xl font-bold text-window-text">Let's Connect</span>
      </div>

      <div className="pl-4 space-y-3 text-base leading-relaxed font-medium text-window-text">
        <p>
          <span className="text-terminal-amber font-bold">&gt;</span> Available for freelance work and full-time opportunities
        </p>
      </div>

      {/* Contact Buttons */}
      <div className="border-t border-window-border pt-6 mt-6">
        <div className="text-sm text-gray-400 font-semibold mb-4">
          <span className="text-terminal-green">$</span>
          <span className="ml-2">contact --all</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <a
            href="tel:7186141878"
            className="bg-terminal-green hover:bg-terminal-green-dim text-black px-6 py-4 rounded-lg font-bold flex items-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300 text-base"
          >
            <Phone size={20} />
            (718) 614-1878
          </a>

          <a
            href="mailto:beaulazear@gmail.com"
            className="bg-terminal-blue hover:opacity-90 text-white px-6 py-4 rounded-lg font-bold flex items-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300 text-base"
          >
            <Mail size={20} />
            beaulazear@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/beaulazear/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-lg font-bold flex items-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300 text-base"
          >
            <Linkedin size={20} />
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/beaulazear"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white px-6 py-4 rounded-lg font-bold flex items-center gap-3 hover:shadow-lg hover:scale-105 transition-all duration-300 text-base"
          >
            <Github size={20} />
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 text-sm text-gray-400 border-t border-window-border font-medium">
        <span className="text-terminal-green font-bold">$</span>
        <span className="ml-2">Looking forward to hearing from you!</span>
      </div>
    </div>
  );
};

export default ContactWindow;
