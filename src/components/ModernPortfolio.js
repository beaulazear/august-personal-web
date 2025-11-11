import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Linkedin, Github, Mail, FileText, ArrowRight,
  Heart, Building, FolderOpen, PawPrint, Rocket,
  Code, Sparkles, Star, Coffee, TrendingUp,
  Smartphone, Database, Cloud, Blocks, Users, Lightbulb
} from 'lucide-react';
import BeauPic from '../images/BeauPic.jpg';
import VoxxyLogo from '../images/header.svg';
import AriaLogo from '../images/Aria_header.svg';
import BeausAnimalCareLogo from '../images/BeausAnimalCare.svg';
import PocketWalksLogo from '../images/PocketWalks.svg';
import VoxxyPresentsLogo from '../images/VoxxyPresents.svg';

const ModernPortfolio = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.observe-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll timeline
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.5;
    let animationFrameId;

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to start when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  const projects = [
    {
      title: "Voxxy AI",
      subtitle: "Co-Founder & CTO",
      description: "Building a platform company with two products. Developed the backend API and mobile infrastructure. Leading community engagement efforts including bank-sponsored local events.",
      technologies: ["React", "Rails", "React Native", "AWS"],
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/voxxy/id6746337878" },
        { label: "Website", url: "https://www.heyvoxxy.com/#/" }
      ],
      highlight: "Co-Founded",
      highlightIcon: Rocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Voxxy Presents",
      subtitle: "Event Management Platform",
      description: "The Operating System for Recurring Event Producers. Event coordination tools that help producers manage vendor relationships, automate logistics, and scale without burning out.",
      technologies: ["React", "TypeScript", "Rails API"],
      links: [
        { label: "Request Paid Beta Access", url: "https://www.voxxypresents.com/" }
      ],
      highlight: "Product Launch",
      highlightIcon: Sparkles,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Pocket Walks",
      subtitle: "Business Management App",
      description: "Custom scheduling and client management app I built for my pet care business. Streamlines bookings for 50+ regular clients.",
      technologies: ["React", "Rails", "PostgreSQL", "AWS"],
      links: [{ label: "Live Site", url: "https://www.pocket-walks.com" }],
      highlight: "Daily Use",
      highlightIcon: Smartphone,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Aria Design Consultants",
      subtitle: "Client Portfolio Website",
      description: "A modern, responsive portfolio website for an interior design consultant. Example of a basic landing page utilizing React and design libraries, hosted on Render.",
      technologies: ["React", "TailwindCSS", "Render", "Responsive Design"],
      links: [{ label: "Live Site", url: "https://aria-design-consultants.com" }],
      highlight: "Client Work",
      highlightIcon: Users,
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Beau's Animal Care",
      subtitle: "Pet Care Service",
      description: "Professional pet care service I founded in 2019, serving 50+ families in Brooklyn. Built a dedicated website to showcase services.",
      technologies: ["React", "Customer Service", "Operations"],
      links: [{ label: "View Site", url: "/animal-care", isInternal: true }],
      highlight: "Founder",
      highlightIcon: PawPrint,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const timelineHighlights = [
    {
      year: '2014-2017',
      title: 'Started Working Young',
      description: 'Talented & Gifted program, played basketball, worked three jobs starting at age 15.',
      icon: Rocket,
      color: 'bg-gradient-to-br from-orange-400 to-red-500'
    },
    {
      year: '2017-2019',
      title: 'Prospect Park Zoo',
      description: 'From intern to full-time zookeeper. Handled everything from animal care to public education.',
      icon: PawPrint,
      color: 'bg-gradient-to-br from-green-400 to-emerald-500'
    },
    {
      year: '2019',
      title: 'ASPCA Emergency Care',
      description: 'Promoted to lead during transition. Trained new people and solved problems under pressure.',
      icon: Heart,
      color: 'bg-gradient-to-br from-pink-400 to-rose-500'
    },
    {
      year: '2019-2023',
      title: 'Growing My Business',
      description: 'Built Beau\'s Animal Care from the ground up to 50+ regular clients. Managed all aspects of operations while teaching myself web development.',
      icon: TrendingUp,
      color: 'bg-gradient-to-br from-teal-400 to-cyan-500'
    },
    {
      year: '2023-Present',
      title: 'Transitioning to Tech',
      description: 'Completed Flatiron bootcamp, got AWS certified. Built apps and landed first client contract.',
      icon: Code,
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500'
    },
    {
      year: '2024-Present',
      title: 'Building Multiple Ventures',
      description: 'CTO at Voxxy, front-end dev at Catch Drive, consulting, and running my pet care business.',
      icon: Sparkles,
      color: 'bg-gradient-to-br from-purple-400 to-violet-500'
    }
  ];

  const skillCategories = [
    {
      icon: Smartphone,
      title: "Frontend Development",
      description: "Building responsive web and mobile apps that users love. From complex dashboards to sleek mobile experiences.",
      technologies: ["React", "React Native", "JavaScript", "TailwindCSS", "Styled Components"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "Crafting robust server-side logic and APIs. Built the entire backend for Voxxy's mobile app from scratch.",
      technologies: ["Ruby on Rails", "PostgreSQL", "RESTful APIs", "ActiveRecord"],
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploying and managing applications in the cloud. AWS certified and experienced with modern deployment workflows.",
      technologies: ["AWS", "Render", "Git", "GitHub Actions"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Blocks,
      title: "WordPress & No-Code",
      description: "Creating professional sites for clients quickly. Expert with WordPress, Breakdance builder, and custom theme development.",
      technologies: ["WordPress", "Breakdance Builder", "PHP", "Custom Themes"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Client Relations",
      description: "Managing 50+ pet care clients and multiple dev projects. I know how to communicate, set expectations, and deliver.",
      technologies: ["Communication", "Project Management", "Scheduling", "Customer Service"],
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Whether it's a tricky bug or a business challenge, I love figuring things out. Self-taught developer who learns fast.",
      technologies: ["Debugging", "Creative Solutions", "Fast Learning", "Adaptability"],
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section - Bento Grid */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">

            {/* Large Hero Card - Spans most of the width */}
            <div className="md:col-span-8 glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden group hover-lift observe-animate border border-white/60">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-purple-500/10 to-brand-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden ring-4 ring-white shadow-xl">
                      <img
                        src={BeauPic}
                        alt="Beau Lazear"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full ring-4 ring-white flex items-center justify-center">
                      <span className="text-xs">🐾</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-3">
                      Hi, I'm Beau
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-medium mb-2">
                      Animal Lover • Software Developer • Problem Solver
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Small business owner and full-stack developer building web and mobile applications with React, Rails, and WordPress.
                  Running{' '}
                  <button
                    onClick={() => navigate('/animal-care')}
                    className="inline-flex items-center hover:opacity-80 transition-opacity align-middle px-2 py-0 -mx-2 -my-1"
                  >
                    <img src={BeausAnimalCareLogo} alt="Beau's Animal Care" className="h-10 md:h-16 align-middle p-0" />
                  </button>{' '}
                  (50+ clients), co-founding{' '}
                  <button
                    onClick={() => window.open('https://www.heyvoxxy.com/#/', '_blank')}
                    className="inline-flex items-center hover:opacity-80 transition-opacity align-middle"
                  >
                    <img src={VoxxyLogo} alt="Voxxy" className="h-5 align-middle" />
                  </button>
                  , and building websites for clients at Catch Drive.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-gradient-to-r from-brand-500 to-brand-pink-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <Mail size={18} />
                    Let's Work Together
                  </button>
                  <button
                    onClick={() => document.querySelector('#projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white/80 backdrop-blur-sm text-brand-600 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-brand-200"
                  >
                    <FolderOpen size={18} />
                    View My Work
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Card - Vertical */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <div className="glass-effect rounded-3xl p-6 hover-lift observe-animate border border-white/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Star className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-brand-600">50+</div>
                    <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-3xl p-6 hover-lift observe-animate border border-white/60">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Coffee className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">10+</div>
                    <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass-effect rounded-3xl p-4 observe-animate border border-white/60">
                <p className="text-xs font-semibold text-gray-600 mb-2">Connect</p>
                <div className="flex gap-2">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/beau-lazear", color: "from-blue-500 to-blue-600" },
                    { icon: Github, href: "https://github.com/beaulazear", color: "from-gray-700 to-gray-800" },
                    { icon: FileText, action: () => navigate('/resume'), color: "from-brand-500 to-purple-500" }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={i}
                        onClick={item.action || (() => window.open(item.href, '_blank'))}
                        className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon size={18} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Timeline Highlights - Auto-scrolling */}
            <div className="md:col-span-12 observe-animate">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-800 mb-4 px-2">
                My Journey
              </h2>
              <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
                style={{ scrollBehavior: 'auto' }}
              >
                {timelineHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="w-[280px] md:w-[320px] flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-3xl p-6 hover-lift shadow-md hover:shadow-xl border border-white/60 transition-all duration-300"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onTouchStart={() => setIsPaused(true)}
                      onTouchEnd={() => setTimeout(() => setIsPaused(false), 500)}
                    >
                      <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="text-xs font-bold text-brand-600 mb-1">{item.year}</div>
                      <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
                {/* Duplicate cards for infinite scroll effect */}
                {timelineHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={`duplicate-${index}`}
                      className="w-[280px] md:w-[320px] flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-3xl p-6 hover-lift shadow-md hover:shadow-xl border border-white/60 transition-all duration-300"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onTouchStart={() => setIsPaused(true)}
                      onTouchEnd={() => setTimeout(() => setIsPaused(false), 500)}
                    >
                      <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="text-xs font-bold text-brand-600 mb-1">{item.year}</div>
                      <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white/50 to-brand-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 observe-animate">
            <div className="inline-block bg-brand-100 text-brand-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FEATURED WORK
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Projects I'm Proud Of
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From startups to client work, here's what I've been building
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-effect rounded-3xl p-8 hover-lift group observe-animate relative overflow-hidden border-2 border-white/70 shadow-sm"
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-xs font-bold text-brand-600 bg-brand-100 px-3 py-1 rounded-full flex items-center gap-1.5">
                      {React.createElement(project.highlightIcon, { size: 14 })}
                      {project.highlight}
                    </div>
                    <Building className="text-gray-400 group-hover:text-brand-500 transition-colors" size={20} />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">
                    {project.title === "Voxxy AI" ? (
                      <img src={VoxxyLogo} alt="Voxxy AI" className="h-8 inline-block" />
                    ) : project.title === "Aria Design Consultants" ? (
                      <img src={AriaLogo} alt="Aria Design Consultants" className="h-8 inline-block" />
                    ) : project.title === "Beau's Animal Care" ? (
                      <img src={BeausAnimalCareLogo} alt="Beau's Animal Care" className="h-24 inline-block" />
                    ) : project.title === "Pocket Walks" ? (
                      <img src={PocketWalksLogo} alt="Pocket Walks" className="h-20 inline-block" />
                    ) : project.title === "Voxxy Presents" ? (
                      <img src={VoxxyPresentsLogo} alt="Voxxy Presents" className="h-20 inline-block" />
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="text-sm text-brand-600 font-semibold mb-3">{project.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-lg font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-2">
                    {project.links.map((link, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (link.isInternal) {
                            navigate(link.url);
                          } else {
                            window.open(link.url, '_blank');
                          }
                        }}
                        className="text-brand-600 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                      >
                        {link.label}
                        <ArrowRight size={16} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 observe-animate">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-lg text-gray-600">
              Skills built through real experience, not just tutorials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="glass-effect rounded-3xl p-8 hover-lift observe-animate group relative overflow-hidden border-2 border-white/70 shadow-sm"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">
                      {category.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {category.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 text-center observe-animate relative overflow-hidden group border border-white/60">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
                Let's Build Something Together
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you need a developer, a problem solver, or someone who genuinely cares about the work—I'm here to help.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-brand-500 to-brand-pink-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:scale-105 transition-all duration-300 mx-auto"
              >
                <Mail size={20} />
                Get In Touch
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ModernPortfolio;
