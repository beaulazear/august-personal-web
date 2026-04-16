import React, { useState } from 'react';
import { ExternalLink, Folder, ArrowLeft } from 'lucide-react';

// Import Voxxy Mobile screenshots
import VoxxyHomeScreen from '../images/voxxy-home-screen.png';
import VoxxyActivityCreation from '../images/voxxy-activity-creation.png';
import VoxxyPreferences from '../images/voxxy-preferences.png';
import VoxxyRecommendations from '../images/voxxy-recommendations.png';
import VoxxyMapView from '../images/voxxy-map-view.png';
import VoxxyCommunityFeed from '../images/voxxy-community-feed.png';

// Import Frontend Development screenshots
import Washtenaw from '../images/Washtenaw.png';
import BeausAnimalCareLanding from '../images/BeausAnimalCareLanding.png';
import AriaLanding from '../images/AriaLanding.png';
import FlippingAces from '../images/Aces.png';

const ProjectFolderItem = ({ name, description, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border border-window-border rounded-lg p-4 hover:border-terminal-green transition-colors text-left w-full"
    >
      <div className="flex items-center gap-3 mb-2">
        <Folder size={32} className="text-terminal-amber" />
        <div>
          <div className="text-terminal-green font-bold text-lg">{name}</div>
          <div className="text-gray-400 text-sm">{description}</div>
        </div>
      </div>
    </button>
  );
};

const ImageThumbnail = ({ src, alt, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border-2 border-window-border rounded-lg overflow-hidden hover:border-terminal-green transition-colors aspect-square bg-window-bg-light"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </button>
  );
};

const ProjectDetailView = ({ project, onBack }) => {
  return (
    <div className="space-y-4">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-terminal-green hover:text-terminal-green-dim transition-colors font-semibold"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </button>

      {/* Project Header */}
      <div className="border-b border-window-border pb-4">
        <div className="text-terminal-green font-bold text-2xl mb-2">{project.name}</div>
        <div className="text-terminal-amber text-base font-semibold">{project.role}</div>
      </div>

      {/* Description */}
      <div className="text-base leading-relaxed">
        {typeof project.description === 'string' ? (
          <p className="text-window-text">{project.description}</p>
        ) : (
          project.description
        )}
      </div>

      {/* Tech Stack */}
      <div>
        <div className="text-terminal-green font-semibold mb-2">Tech Stack:</div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span key={i} className="text-sm px-3 py-1 bg-window-bg-light border border-window-border rounded text-terminal-blue font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {project.links && project.links.length > 0 && (
        <div>
          <div className="text-terminal-green font-semibold mb-2">Links:</div>
          <div className="flex flex-wrap gap-2">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-terminal-green hover:text-terminal-green-dim flex items-center gap-1 transition-colors font-semibold border border-window-border px-3 py-2 rounded hover:border-terminal-green"
              >
                <ExternalLink size={14} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Screenshots */}
      {project.images && project.images.length > 0 && (
        <div>
          <div className="text-terminal-green font-semibold mb-3">Screenshots:</div>
          <div className="grid grid-cols-3 gap-3">
            {project.images.map((image, i) => (
              <ImageThumbnail
                key={i}
                src={image.src}
                alt={image.alt}
                onClick={() => window.open(image.src, '_blank')}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsWindow = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const projects = {
    'voxxy-mobile': {
      id: 'voxxy-mobile',
      name: "Voxxy Mobile V1",
      role: "Full-Stack Mobile Developer",
      shortDesc: "AI-powered social coordination app",
      description: "AI-powered social coordination app for group activities. Built complete React Native application with hybrid recommendation engine combining Google Places API and custom dietary filtering achieving 95% accuracy. Features multi-step activity creation, intelligent preference collection, dual view modes (card/map), and social discovery. Deployed to iOS App Store and Google Play Store.",
      tech: ["React Native", "Expo", "TypeScript", "React Navigation", "Google Places API", "Rails API", "PostgreSQL", "JWT Auth"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/voxxy/id6746337878" }
      ],
      images: [
        { src: VoxxyHomeScreen, alt: 'Home Screen - Dashboard with activities and community feed' },
        { src: VoxxyActivityCreation, alt: 'Activity Creation - Multi-step modal interface' },
        { src: VoxxyPreferences, alt: 'Preference Collection - Cuisine and dietary requirements' },
        { src: VoxxyRecommendations, alt: 'AI Recommendations - Card view with venue details' },
        { src: VoxxyMapView, alt: 'Map View - Interactive map with venue markers' },
        { src: VoxxyCommunityFeed, alt: 'Community Feed - Friends favorite venues' },
      ]
    },
    'voxxy-presents': {
      id: 'voxxy-presents',
      name: "Voxxy Presents",
      role: "Event Management Platform",
      shortDesc: "Operating System for Event Producers",
      description: "The Operating System for Recurring Event Producers. Tools that help producers manage vendor relationships and scale efficiently. Built with React, TypeScript, and Rails API to streamline event production workflows.",
      tech: ["React", "TypeScript", "Rails API"],
      links: [
        { label: "Request Beta Access", url: "https://www.voxxypresents.com/" }
      ],
      images: []
    },
    'scoopers': {
      id: 'scoopers',
      name: "Scoopers",
      role: "Independent Dog Walking Software",
      shortDesc: "Full-stack platform for dog walkers",
      description: "Full-stack platform for independent dog walkers. React Native iOS app for walk management (live in TestFlight), Rails API backend, and React web app for client acquisition. Features optional pet waste removal add-on service.",
      tech: ["React Native", "Rails API", "React", "PostgreSQL"],
      links: [
        { label: "Visit Website", url: "https://www.scoopersnyc.com" }
      ],
      images: []
    },
    'frontend-dev': {
      id: 'frontend-dev',
      name: "Frontend Development",
      role: "Agency & Independent Work",
      shortDesc: "WordPress agency + React applications",
      description: (
        <div className="space-y-4">
          <div>
            <div className="text-terminal-green font-semibold mb-2">Catch Drive (Part-Time Agency Work)</div>
            <p className="text-window-text">
              Part-time frontend developer at Catch Drive, a frontend development agency. Using WordPress, Breakdance page builder, CSS/HTML, and browser developer tools to create, edit, and maintain websites for clients across varied industries. Work includes custom styling, responsive design implementation, and ongoing site maintenance.
            </p>
          </div>
          <div>
            <div className="text-terminal-green font-semibold mb-2">Independent React Development</div>
            <p className="text-window-text">
              Building custom React applications for contract jobs, personal portfolios, and client projects. Specializing in modern, responsive web applications with clean UI/UX and maintainable code. Projects include design consultancies, animal care services, and community organizations.
            </p>
          </div>
        </div>
      ),
      tech: ["React", "WordPress", "Breakdance", "JavaScript", "HTML/CSS", "Browser DevTools"],
      links: [
        { label: "Aria Design", url: "https://www.ariadesignco.com/" },
        { label: "Beau's Animal Care", url: "https://www.beausanimalcare.com/" }
      ],
      images: [
        { src: FlippingAces, alt: 'Flipping Aces - Restaurant website built with WordPress and Breakdance' },
        { src: AriaLanding, alt: 'Aria Design Consultants - React-based design consultancy website' },
        { src: BeausAnimalCareLanding, alt: "Beau's Animal Care - React-based pet care services landing page" },
        { src: Washtenaw, alt: 'Washtenaw - Community organization website' },
      ]
    }
  };

  const projectList = Object.values(projects);

  const handleFolderClick = (projectId) => {
    setCurrentProject(projectId);
  };

  const handleBackClick = () => {
    setCurrentProject(null);
  };

  return (
    <div className="space-y-4">
      {/* Terminal header */}
      <div className="text-terminal-green text-lg font-semibold">
        <div className="flex items-center gap-2">
          <span className="text-terminal-amber">beau@portfolio</span>
          <span className="text-window-text">:</span>
          <span className="text-terminal-blue">
            ~/projects{currentProject ? `/${currentProject}` : ''}
          </span>
          <span className="text-window-text">$</span>
          <span className="ml-2">ls -la</span>
        </div>
      </div>

      {/* Content */}
      {!currentProject ? (
        // Show project folders
        <>
          <div className="space-y-3">
            {projectList.map((project) => (
              <ProjectFolderItem
                key={project.id}
                name={project.name}
                description={project.shortDesc}
                onClick={() => handleFolderClick(project.id)}
              />
            ))}
          </div>

          {/* Footer */}
          <div className="pt-4 text-sm text-gray-400 border-t border-window-border font-medium">
            <span className="text-terminal-green font-bold">$</span>
            <span className="ml-2">{projectList.length} projects found</span>
          </div>
        </>
      ) : (
        // Show project details
        <ProjectDetailView
          project={projects[currentProject]}
          onBack={handleBackClick}
        />
      )}
    </div>
  );
};

export default ProjectsWindow;
