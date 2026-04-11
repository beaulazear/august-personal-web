import React, { useState } from 'react';

// Import personal photos
import BeauAndHornbill from '../images/BeauAndHornbill.jpeg';
import BeauReykaMangoRu from '../images/BeauReykaMangoRu.jpeg';
import Marmoset from '../images/Marmoset.jpeg';
import BeauAndRu from '../images/BeauAndRu.JPG';

const AboutWindow = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    { src: BeauAndRu, alt: 'Beau with Ru' },
    { src: BeauAndHornbill, alt: 'Beau with a Hornbill' },
    { src: BeauReykaMangoRu, alt: 'Beau with Reyka, Mango, and Ru' },
    { src: Marmoset, alt: 'Marmoset' },
  ];

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
            <span className="text-terminal-amber font-bold">&gt;</span> Co-Founder of Voxxy AI Inc.
          </p>
          <p>
            <span className="text-terminal-amber font-bold">&gt;</span> Founder of Beau's Animal Care
          </p>
          <p>
            <span className="text-terminal-amber font-bold">&gt;</span> Freelance full-stack developer (React, Rails, React Native)
          </p>
        </div>

        <div className="border-t border-window-border pt-4 mt-6">
          <div className="text-sm text-gray-400 font-semibold mb-3">
            <span className="text-terminal-green">$</span>
            <span className="ml-2">cat about_me.txt</span>
          </div>
          <div className="pl-4 space-y-3 text-base leading-relaxed">
            <p>
              I moved to Brooklyn, NYC in 2016 immediatly following my highschool graduation. I started working young, having three jobs by my senior year. Currently, I am maintaining my own animal care business and working part time as a software developer.
            </p>
            <p>
              My love for animals led me down the zookeeping and animal care route, where I eventually grew and maintained my own animal care business. It was while building a website for that business—using nothing but HTML and CSS in Notepad, that I fell in love with coding.
            </p>
            <p>
              That spark led me to a coding bootcamp, where I gained hands-on experience in both front-end and back-end development. Since then, I've built full-stack applications with React, Rails, and React Native, and co-founded Voxxy AI Inc.
            </p>
            <p>
              Along the way, I've explored various paths: real estate (licensed agent), modeling (signed to an agency), massage therapy, and roles in hospitality and doggy daycare management. Each experience taught me something new about connecting with people and solving problems creatively.
            </p>
            <p>
              Today, I bring that same hustle and curiosity to building software that makes people's lives easier.
            </p>
          </div>
        </div>

        <div className="border-t border-window-border pt-4 mt-6">
          <div className="text-sm text-gray-400 font-semibold mb-3">
            <span className="text-terminal-green">$</span>
            <span className="ml-2">ls skills/</span>
          </div>

          {/* Development */}
          <div className="pl-4 mb-4">
            <div className="text-terminal-amber font-semibold text-sm mb-2">Development</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm md:text-base font-medium">
              <div className="text-terminal-blue">• React & React Native</div>
              <div className="text-terminal-blue">• Ruby on Rails</div>
              <div className="text-terminal-blue">• TypeScript & JavaScript</div>
              <div className="text-terminal-blue">• PostgreSQL</div>
            </div>
          </div>

          {/* Infrastructure & Deployment */}
          <div className="pl-4 mb-4">
            <div className="text-terminal-amber font-semibold text-sm mb-2">Infrastructure & Deployment</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm md:text-base font-medium">
              <div className="text-terminal-blue">• Render (web services, databases)</div>
              <div className="text-terminal-blue">• AWS</div>
              <div className="text-terminal-blue">• Redis & background jobs</div>
              <div className="text-terminal-blue">• System architecture</div>
            </div>
          </div>

          {/* Tools & Services */}
          <div className="pl-4">
            <div className="text-terminal-amber font-semibold text-sm mb-2">Tools & Services</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm md:text-base font-medium">
              <div className="text-terminal-blue">• AI Agents (Claude Code)</div>
              <div className="text-terminal-blue">• SendGrid (email & analytics)</div>
              <div className="text-terminal-blue">• Git & version control</div>
              <div className="text-terminal-blue">• API design & integration</div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="border-t border-window-border pt-4 mt-6">
          <div className="text-sm text-gray-400 font-semibold mb-3">
            <span className="text-terminal-green">$</span>
            <span className="ml-2">ls photos/</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => window.open(photo.src, '_blank')}
                className="border-2 border-window-border rounded-lg overflow-hidden hover:border-terminal-green transition-colors aspect-square bg-window-bg-light"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center font-medium">
            Click photos to view full size
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
