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
    <div className="space-y-6">
      {/* Main content */}
      <div className="space-y-6 text-window-text">
        <div>
          <span className="text-terminal-green font-extrabold text-lg">$</span>
          <span className="ml-3 text-3xl font-extrabold tracking-tight">Hello, I'm Beau! 👋</span>
        </div>

        <div className="pl-6 space-y-4 text-lg leading-relaxed font-semibold">
          <p>
            <span className="text-terminal-amber font-extrabold text-xl">&gt;</span> <span className="font-bold">Technical Support Engineer at Viafoura</span>
          </p>
          <p>
            <span className="text-terminal-amber font-extrabold text-xl">&gt;</span> <span className="font-bold">Co-Founder of Voxxy AI Inc.</span>
          </p>
          <p>
            <span className="text-terminal-amber font-extrabold text-xl">&gt;</span> <span className="font-bold">Former Support Engineer at OpenWeb</span>
          </p>
          <p>
            <span className="text-terminal-amber font-extrabold text-xl">&gt;</span> <span className="font-bold">Former Founder of Beau's Animal Care (2020-2026)</span>
          </p>
        </div>

        <div className="border-t-2 border-window-border pt-6 mt-8">
          <div className="text-base text-gray-300 font-bold mb-4">
            <span className="text-terminal-green font-extrabold text-lg">$</span>
            <span className="ml-3">cat about_me.txt</span>
          </div>
          <div className="pl-6 space-y-4 text-lg leading-relaxed font-medium">
            <p>
              I moved to Brooklyn, NYC in 2016 immediately following my high school graduation. I started working young, having three jobs by my senior year. Currently, I work full-time as a Technical Support Engineer at Viafoura, where I help media publishers build engaged communities through comments, live blogs, and real-time engagement tools, while also co-founding Voxxy AI.
            </p>
            <p>
              At Viafoura, I work at the intersection of support and engineering: diagnosing technical issues for publisher partners, collaborating with developers on product fixes, and turning recurring problems into better documentation and processes. Before Viafoura, I was a Support Engineer at OpenWeb, working with major publishers like WSJ, IGN, and CNN. I was promoted from Tech Support Specialist within three months, took on deeper technical ownership, and built internal tools that helped our team work more efficiently.
            </p>
            <p>
              My love for animals led me down the zookeeping and animal care route, where I eventually founded and grew Beau's Animal Care from the ground up to 50+ clients and $80K+ in annual revenue (2020-2026). It was while building a website for that business using nothing but HTML and CSS in Notepad, that I fell in love with coding.
            </p>
            <p>
              That spark led me to a coding bootcamp, where I gained hands-on experience in both front-end and back-end development. Since then, I've built full-stack applications with React, Rails, and React Native, and co-founded Voxxy AI Inc.
            </p>
            <p>
              Along the way, I've explored various paths: real estate (licensed agent), modeling (signed to an agency), massage therapy, and roles in hospitality and doggy daycare management. Each experience taught me something new about connecting with people and solving problems creatively.
            </p>
            <p>
              Today, I bring that same hustle and curiosity to my work at Viafoura and in building software that makes people's lives easier.
            </p>
          </div>
        </div>

        <div className="border-t-2 border-window-border pt-6 mt-8">
          <div className="text-base text-gray-300 font-bold mb-4">
            <span className="text-terminal-green font-extrabold text-lg">$</span>
            <span className="ml-3">ls skills/</span>
          </div>

          {/* Development */}
          <div className="pl-6 mb-6">
            <div className="text-terminal-amber font-bold text-lg mb-3">Development</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base md:text-lg font-semibold">
              <div className="text-terminal-blue">• React & React Native</div>
              <div className="text-terminal-blue">• Ruby on Rails</div>
              <div className="text-terminal-blue">• TypeScript & JavaScript</div>
              <div className="text-terminal-blue">• PostgreSQL</div>
            </div>
          </div>

          {/* Infrastructure & Deployment */}
          <div className="pl-6 mb-6">
            <div className="text-terminal-amber font-bold text-lg mb-3">Infrastructure & Deployment</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base md:text-lg font-semibold">
              <div className="text-terminal-blue">• Render (web services, databases)</div>
              <div className="text-terminal-blue">• AWS</div>
              <div className="text-terminal-blue">• Redis & background jobs</div>
              <div className="text-terminal-blue">• System architecture</div>
            </div>
          </div>

          {/* Tools & Services */}
          <div className="pl-6">
            <div className="text-terminal-amber font-bold text-lg mb-3">Tools & Services</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-base md:text-lg font-semibold">
              <div className="text-terminal-blue">• Salesforce & Jira</div>
              <div className="text-terminal-blue">• AI Agents (Claude Code)</div>
              <div className="text-terminal-blue">• SendGrid (email & analytics)</div>
              <div className="text-terminal-blue">• Git & version control</div>
              <div className="text-terminal-blue">• API design & integration</div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="border-t-2 border-window-border pt-6 mt-8">
          <div className="text-base text-gray-300 font-bold mb-4">
            <span className="text-terminal-green font-extrabold text-lg">$</span>
            <span className="ml-3">ls photos/</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
          <div className="text-sm text-gray-400 mt-3 text-center font-semibold">
            Click photos to view full size
          </div>
        </div>

        <div className="pt-6 text-base text-gray-300 font-semibold">
          <span className="text-terminal-green font-extrabold text-lg">$</span>
          <span className="ml-3">echo "Check out my other windows for more!"</span>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;
