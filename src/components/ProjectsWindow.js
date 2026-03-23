import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectItem = ({ name, role, description, tech, links }) => {
  return (
    <div className="border border-window-border rounded-lg p-5 hover:border-terminal-green transition-colors">
      <div className="mb-3">
        <div className="text-terminal-green font-bold text-xl">{name}</div>
        <div className="text-terminal-amber text-sm font-semibold">{role}</div>
      </div>

      <p className="text-window-text text-base mt-2 mb-3 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t, i) => (
          <span key={i} className="text-sm px-3 py-1 bg-window-bg-light border border-window-border rounded text-terminal-blue font-medium">
            {t}
          </span>
        ))}
      </div>

      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-terminal-green hover:text-terminal-green-dim flex items-center gap-1 transition-colors font-semibold"
            >
              <ExternalLink size={14} />
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectsWindow = () => {
  const projects = [
    {
      name: "Voxxy AI",
      role: "Co-Founder & CTO",
      description: "Building a platform company with two products. Developed the backend API and mobile infrastructure.",
      tech: ["React", "Rails", "React Native", "AWS"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/voxxy/id6746337878" },
        { label: "Website", url: "https://www.heyvoxxy.com/#/" }
      ]
    },
    {
      name: "Voxxy Presents",
      role: "Event Management Platform",
      description: "The Operating System for Recurring Event Producers. Tools that help producers manage vendor relationships and scale efficiently.",
      tech: ["React", "TypeScript", "Rails API"],
      links: [
        { label: "Request Beta Access", url: "https://www.voxxypresents.com/" }
      ]
    },
    {
      name: "Scoopers",
      role: "Independent Dog Walking Software",
      description: "Full-stack platform for independent dog walkers. React Native iOS app for walk management (live in TestFlight), Rails API backend, and React web app for client acquisition. Features optional pet waste removal add-on service.",
      tech: ["React Native", "Rails API", "React", "PostgreSQL"],
      links: [
        { label: "Visit Website", url: "https://www.scoopersnyc.com" }
      ]
    },
    {
      name: "Aria Design Consultants",
      role: "Client Work",
      description: "Full-stack web development for design consultancy. Custom CMS and portfolio showcase.",
      tech: ["React", "Node.js"],
      links: [
        { label: "Visit Site", url: "https://www.ariadesignco.com/" }
      ]
    }
  ];

  return (
    <div className="space-y-4">
      {/* Terminal header */}
      <div className="text-terminal-green mb-6 text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-terminal-amber">beau@portfolio</span>
          <span className="text-window-text">:</span>
          <span className="text-terminal-blue">~/projects</span>
          <span className="text-window-text">$</span>
          <span className="ml-2">ls -la</span>
        </div>
      </div>

      {/* Projects list */}
      <div className="space-y-4">
        {projects.map((project, i) => (
          <ProjectItem key={i} {...project} />
        ))}
      </div>

      {/* Footer */}
      <div className="pt-4 text-sm text-gray-400 border-t border-window-border font-medium">
        <span className="text-terminal-green font-bold">$</span>
        <span className="ml-2">{projects.length} projects found</span>
      </div>
    </div>
  );
};

export default ProjectsWindow;
