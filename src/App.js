import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Linkedin, Github, Mail, FileText, ArrowRight, CheckCircle, Heart, Building, FolderOpen, PawPrint, Rocket, TrendingUp, Code, Sparkles, Target } from 'lucide-react';
import BeauPic from './images/BeauPic.jpg';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import AnimalCare from './components/AnimalCare.js';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Comfortaa:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  
  * { box-sizing: border-box; }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes morphing {
    0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  }
  
  @keyframes slideInFromLeft {
    from { opacity: 0; transform: translateX(-50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInFromRight {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    animation-fill-mode: both;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.8s ease-out;
  }
  
  .hover-lift {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-lift:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.25), 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .hover-pulse:hover {
    animation: pulse 0.3s ease;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .glass-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 250, 251, 0.95) 100%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.15), 0 2px 10px rgba(0, 0, 0, 0.08);
    position: relative;
    overflow: hidden;
  }
  
  .glass-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
    pointer-events: none;
  }
  
  .primary-button {
    background: linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%);
    border: none;
    border-radius: 16px;
    color: white;
    font-weight: 600;
    padding: 16px 32px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }
  
  .primary-button::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .primary-button:hover::after {
    opacity: 1;
  }
  
  .primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  .secondary-button {
    background: transparent;
    border: 2px solid #667eea;
    border-radius: 16px;
    color: #667eea;
    font-weight: 600;
    padding: 14px 30px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }
  
  .secondary-button:hover {
    background: linear-gradient(135deg, #5a67d8 0%, #805ad5 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(128, 90, 213, 0.4);
  }
  
  @media (max-width: 1024px) {
    .timeline-desktop { display: none !important; }
    .timeline-mobile { display: flex !important; }
  }
  
  @media (min-width: 1025px) {
    .timeline-desktop { display: flex !important; }
    .timeline-mobile { display: none !important; }
  }

  /* Mobile-first responsive styles */
  @media (max-width: 480px) {
    .hero-title { 
      font-size: 2rem !important; 
      line-height: 1.2 !important;
    }
    .hero-subtitle { 
      font-size: 1.1rem !important; 
    }
    .section-title { 
      font-size: 1.75rem !important; 
    }
    .hero-description {
      font-size: 1rem !important;
      padding: 0 10px;
    }
    .primary-button, .secondary-button { 
      padding: 14px 24px !important;
      font-size: 15px !important;
      width: 100%;
      justify-content: center;
    }
  }
  
  @media (max-width: 768px) {
    .hero-title { 
      font-size: 2.5rem !important; 
    }
    .hero-subtitle { 
      font-size: 1.25rem !important; 
    }
    .section-title { 
      font-size: 2rem !important; 
    }
    .card-grid { 
      grid-template-columns: 1fr !important; 
      gap: 24px !important; 
    }
    .skills-grid {
      grid-template-columns: 1fr !important;
    }
    .project-grid {
      grid-template-columns: 1fr !important;
      padding: 0 10px;
    }
    .hero-buttons { 
      flex-direction: column !important; 
      align-items: stretch !important; 
      gap: 12px !important; 
      width: 100%;
      max-width: 300px;
      margin: 0 auto;
    }
    .primary-button, .secondary-button { 
      justify-content: center; 
    }
    .glass-card {
      border-radius: 16px !important;
    }
    .hover-lift:hover {
      transform: none !important;
    }
    .section-padding {
      padding: 60px 16px !important;
    }
    .hero-image {
      width: 140px !important;
      height: 140px !important;
    }
  }
`;

const ModernPortfolio = () => {
  const navigate = useNavigate();
  
  const timelineData = [
    {
      year: '2016-2017',
      title: 'Started Working Young',
      subtitle: 'High School → NYC at 18',
      description: 'Talented & Gifted program, played basketball, worked three jobs. Moved to NYC alone at 18 to chase bigger opportunities.',
      image: null,
      icon: Rocket,
      side: 'left'
    },
    {
      year: '2017-2018',
      title: 'Found My Path',
      subtitle: 'Real Estate → Animal Care',
      description: 'Started in real estate, then took unpaid zoo internships. Dog walked on the side to pay bills while learning the field I loved.',
      image: null,
      icon: Target,
      side: 'right'
    },
    {
      year: '2017-2019',
      title: 'Prospect Park Zoo',
      subtitle: 'Intern → Full Zookeeper',
      description: 'After two internships, earned part-time then full-time keeper role. Handled everything from animal care to public education while running a dog daycare on weekends.',
      image: null,
      icon: PawPrint,
      side: 'left'
    },
    {
      year: '2019',
      title: 'ASPCA Emergency Care',
      subtitle: 'Assistant → Lead Role',
      description: 'Worked in emergency animal care, often making quick decisions in tough situations. Got promoted to lead during a transition because I was good at training new people and solving problems.',
      image: null,
      icon: Heart,
      side: 'right'
    },
    {
      year: '2019-Present',
      title: 'Started My Own Business',
      subtitle: 'Beau\'s Animal Care',
      description: 'Built a pet care business from scratch, now serving 50+ regular clients. Taught myself to code to build our website, which led to discovering I really enjoy programming.',
      image: null,
      icon: TrendingUp,
      side: 'left'
    },
    {
      year: '2023-Present',
      title: 'Learning to Code',
      subtitle: 'Bootcamp → Real Projects',
      description: 'Completed Flatiron bootcamp and got AWS certified while still running my business. Built apps for myself and friends, then landed my first client contract with www.ariadesignconsultants.com.',
      image: null,
      icon: Code,
      side: 'right'
    },
    {
      year: '2024-Present',
      title: 'Growing My Career',
      subtitle: 'Multiple Contract Roles + CTO',
      description: "Co-founded Voxxy AI as CTO while taking on contract work at Catch Drive (front-end dev with WordPress) and United Advisors (building workflow automations and CRM integrations). Balancing multiple projects while continuing to run my pet care business.",
      image: null,
      icon: Sparkles,
      side: 'left'
    }
  ];

  const projects = [
    {
      title: "Voxxy AI",
      subtitle: "Co-Founder & Developer",
      description: "Building an AI-powered platform that revolutionizes group decision-making. We're combining thoughtful UX with machine learning to help teams collaborate more effectively.",
      technologies: ["React", "Rails", "OpenAI", "React Native", "AWS", "Git", "Google Cloud", "Mixpanel"],
      links: [
        { label: "Live Site", url: "https://www.heyvoxxy.com/#/" }
      ],
      highlight: "🚀 Co-Founded"
    },
    {
      title: "Pocket Walks",
      subtitle: "Business Management App",
      description: "Custom scheduling and client management app I built for my pet care business. Streamlines bookings, tracks walks, manages client information, and handles invoicing for 50+ regular clients.",
      technologies: ["React", "Rails", "PostgreSQL", "AWS"],
      links: [
        { label: "Live Site", url: "https://www.pocket-walks.com" }
      ],
      highlight: "📱 Daily Use"
    },
    {
      title: "Beau's Animal Care",
      subtitle: "Pet Care Service Business",
      description: "Professional pet care service I founded in 2019, serving 50+ families in Brooklyn. Built a dedicated website to showcase services and connect with clients. Click to view our site!",
      technologies: ["React", "Customer Service", "Business Operations"],
      links: [
        { label: "View Site", url: "/animal-care", isInternal: true }
      ],
      highlight: "🐕 Founder"
    },
    {
      title: "Aria Design Co",
      subtitle: "Website & Digital Support",
      description: "Ongoing partnership helping a talented design consultant showcase their work online. I handle the technical side so they can focus on creating beautiful spaces for their clients.",
      technologies: ["React", "Bootstrap"],
      links: [
        { label: "Live Site", url: "https://www.ariadesignconsultants.com/#/" }
      ],
      highlight: "💼 Client"
    }
  ];

  const skills = [
    {
      category: "Technical Skills",
      items: ["React & React Native", "Ruby on Rails", "PostgreSQL", "WordPress & Breakdance", "API Integration", "Workflow Automation"]
    },
    {
      category: "Business Experience",
      items: ["Running My Own Company", "Client Management", "Service Operations", "Project Planning", "Problem Solving", "CRM Integration"]
    },
    {
      category: "What I'm Good At",
      items: ["Learning New Things", "Working Independently", "Team Collaboration", "Adapting to Change", "Attention to Detail"]
    },
    {
      category: "Background",
      items: ["8+ Years Animal Care", "50+ Business Clients", "Self-Taught Developer", "Bootcamp Graduate", "AWS Certified"]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)',
      fontFamily: 'Quicksand, sans-serif'
    }}>
      <style>{globalStyles}</style>

      {/* Hero Section */}
      <section style={{ 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 25%, #ddd6fe 50%, #f3e8ff 75%, #fce7f3 100%)'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, #667eea 0%, #9f7aea 100%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.3,
          animation: 'morphing 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'linear-gradient(135deg, #ed64a6 0%, #ec4899 100%)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          opacity: 0.25,
          animation: 'morphing 8s ease-in-out infinite reverse'
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(159, 122, 234, 0.1) 0%, transparent 70%)',
          animation: 'float 6s ease-in-out infinite'
        }} />
        
        <div style={{ 
          maxWidth: '900px',
          margin: '0 auto',
          padding: '40px 20px',
          position: 'relative',
          zIndex: 2,
          width: '100%'
        }}>
          {/* Main Content */}
          <div style={{
            textAlign: 'center',
            animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            {/* Profile Image - Now above title */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '32px'
            }}>
              <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%)',
                padding: '3px',
                boxShadow: '0 20px 40px rgba(159, 122, 234, 0.3)',
                animation: 'morphing 8s ease-in-out infinite'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  overflow: 'hidden',
                  background: 'white'
                }}>
                  <img
                    src={BeauPic}
                    alt="Beau Lazear"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'brightness(1.05) contrast(1.08)'
                    }}
                  />
                </div>
              </div>
            </div>
            
            <h1 style={{
              fontSize: window.innerWidth > 768 ? '4.5rem' : '3rem',
              fontWeight: '900',
              margin: '0 0 24px 0',
              lineHeight: '1.1',
              fontFamily: 'Inter, sans-serif'
            }}>
              <span style={{
                background: 'linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%)',
                backgroundSize: '400% 400%',
                animation: 'pulse 4s ease-in-out infinite',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Hi, I'm Beau</span>
            </h1>
            
            <div style={{
              fontSize: '1.5rem',
              color: '#6b7280',
              marginBottom: '32px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'center'
            }}>
              <span>Animal Lover</span>
              <span style={{ color: '#d1d5db' }}>•</span>
              <span>Software Developer</span>
              <span style={{ color: '#d1d5db' }}>•</span>
              <span>Problem Solver</span>
            </div>
            
            <p style={{
              fontSize: '1.125rem',
              color: '#4b5563',
              maxWidth: '650px',
              margin: '0 auto 40px',
              lineHeight: '1.8',
              fontWeight: '400'
            }}>
              Full-stack developer specializing in React, Rails, WordPress, and workflow automation.
              Co-founder of <span style={{
                fontWeight: '700',
                color: '#667eea',
                borderBottom: '2px solid #667eea',
                paddingBottom: '1px',
                cursor: 'pointer'
              }} onClick={() => window.open('https://www.heyvoxxy.com/#/', '_blank')}>Voxxy AI</span>, building front-end at <span style={{
                fontWeight: '700',
                color: '#667eea',
                borderBottom: '2px solid #667eea',
                paddingBottom: '1px',
                cursor: 'pointer'
              }} onClick={() => window.open('https://catchdrive.co/', '_blank')}>Catch Drive</span>, creating automations for <span style={{
                fontWeight: '700',
                color: '#667eea',
                borderBottom: '2px solid #667eea',
                paddingBottom: '1px',
                cursor: 'pointer'
              }} onClick={() => window.open('https://unitedadvisors.com/', '_blank')}>United Advisors</span>, and supporting <span style={{
                fontWeight: '700',
                color: '#667eea',
                borderBottom: '2px solid #667eea',
                paddingBottom: '1px',
                cursor: 'pointer'
              }} onClick={() => window.open('https://www.ariadesignconsultants.com/#/', '_blank')}>Aria Design Co</span>. Small business owner of <span style={{
                fontWeight: '700',
                color: '#667eea',
                borderBottom: '2px solid #667eea',
                paddingBottom: '1px',
                cursor: 'pointer'
              }} onClick={() => navigate('/animal-care')}>Beau's Animal Care</span>.
            </p>
            
            {/* Stats Row */}
            <div style={{
              display: 'flex',
              gap: '40px',
              marginBottom: '40px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#667eea',
                  marginBottom: '4px'
                }}>50+</div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>Happy Clients</div>
              </div>
              <div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: '#9f7aea',
                  marginBottom: '4px'
                }}>10+</div>
                <div style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>Years Experience</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <button 
                onClick={() => navigate('/contact')}
                style={{
                  background: 'linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  fontWeight: '700',
                  padding: '18px 36px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(99, 102, 241, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 102, 241, 0.3)';
                }}
              >
                <Mail size={20} />
                Let's Work Together
              </button>
              
              <button 
                onClick={() => {
                  const projectsSection = document.querySelector('#projects-section');
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#667eea',
                  fontWeight: '700',
                  padding: '18px 36px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                }}
              >
                <FolderOpen size={20} />
                View My Work
              </button>
            </div>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '16px',
              marginTop: '40px',
              justifyContent: 'center'
            }}>
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/beau-lazear" },
                { icon: Github, href: "https://github.com/beaulazear" },
                { icon: FileText, action: () => navigate('/resume') }
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={item.action || (() => window.open(item.href, '_blank'))}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    color: '#6b7280',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #5a67d8, #9f7aea)';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <item.icon size={18} />
                </button>
              ))}
            </div>
          </div>
          
        </div>
      </section>

      {/* My Story Section */}
      <section className="section-padding" style={{ 
        padding: '80px 20px',
        background: 'linear-gradient(135deg, rgba(237, 242, 255, 0.6) 0%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#667eea',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '12px'
            }}>
              From Ground Up
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              margin: '0 0 16px 0',
              color: '#2d3748'
            }} className="section-title">
              Experience-Driven Growth
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Every role taught me something essential for building better software
            </p>
          </div>
          
          {/* Desktop Timeline */}
          <div className="timeline-desktop" style={{
            maxWidth: '1000px',
            margin: '0 auto',
            flexDirection: 'column',
            gap: '32px'
          }}>
            {timelineData.map((item, index) => (
              <DesktopTimelineItem key={index} item={item} index={index} />
            ))}
          </div>
          
          {/* Mobile Timeline */}
          <div className="timeline-mobile" style={{
            maxWidth: '600px',
            margin: '0 auto',
            flexDirection: 'column',
            gap: '20px',
            display: 'none',
            padding: '0 10px'
          }}>
            {timelineData.map((item, index) => (
              <MobileTimelineItem key={index} item={item} />
            ))}
          </div>
          
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects-section" className="section-padding" style={{ 
        padding: '80px 20px'
      }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              margin: '0 0 16px 0',
              color: '#2d3748'
            }} className="section-title">
              Featured Projects
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              Real businesses and applications I've built from the ground up
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }} className="card-grid project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding" style={{ 
        padding: '80px 20px',
        background: 'linear-gradient(135deg, rgba(237, 242, 255, 0.6) 0%, rgba(219, 234, 254, 0.5) 100%)'
      }}>
        <div style={{ 
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            margin: '0 0 64px 0',
            color: '#2d3748'
          }} className="section-title">
            Skills & Experience
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }} className="card-grid skills-grid">
            {skills.map((skillGroup, index) => (
              <SkillCard key={index} skillGroup={skillGroup} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ 
        padding: '80px 20px',
        textAlign: 'center'
      }}>
        <div style={{ 
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '700',
            margin: '0 0 24px 0',
            color: '#2d3748',
            lineHeight: '1.3'
          }}>
            Let's Work Together
          </h2>
          
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: '#6b7280',
            margin: '0 0 48px 0',
            lineHeight: '1.7',
            padding: '0 10px'
          }}>
            I'm looking for opportunities where I can contribute and keep learning. 
            If you need someone who works hard and genuinely cares about doing good work, let's talk.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button 
              onClick={() => navigate('/contact')}
              className="primary-button hover-pulse"
            >
              <Mail size={20} />
              Get In Touch
            </button>
            
            <a 
              href="https://www.linkedin.com/in/beau-lazear"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button hover-pulse"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section style={{ 
        padding: 'clamp(30px, 5vw, 40px) 20px',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(16px, 3vw, 24px)',
          marginBottom: '24px'
        }}>
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/beau-lazear", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/beaulazear", label: "GitHub" },
            { icon: Mail, action: () => navigate('/contact'), label: "Email" }
          ].map((item, i) => (
            <button
              key={i}
              onClick={item.action || (() => window.open(item.href, '_blank'))}
              style={{
                width: 'clamp(40px, 5vw, 48px)',
                height: 'clamp(40px, 5vw, 48px)',
                borderRadius: '12px',
                border: '2px solid #667eea',
                background: 'transparent',
                color: '#667eea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              className="hover-pulse"
              onMouseEnter={(e) => {
                e.target.style.background = '#667eea';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#667eea';
              }}
            >
              <item.icon size={20} />
            </button>
          ))}
        </div>
        
        <p style={{
          color: '#9ca3af',
          margin: 0,
          fontSize: '14px'
        }}>
          © 2024 Beau Lazear. Built with React.
        </p>
      </section>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="glass-card hover-lift" style={{
      padding: 'clamp(20px, 3vw, 32px)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      {project.highlight && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: 'linear-gradient(135deg, #10b981, #059669)',
          color: 'white',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600'
        }}>
          {project.highlight}
        </div>
      )}
      
      <h3 style={{
        fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
        fontWeight: '700',
        margin: '0 0 8px 0',
        color: '#2d3748'
      }}>
        {project.title}
      </h3>
      
      <p style={{
        fontSize: '1rem',
        color: '#667eea',
        margin: '0 0 16px 0',
        fontWeight: '600'
      }}>
        {project.subtitle}
      </p>
      
      <p style={{
        color: '#6b7280',
        lineHeight: '1.6',
        margin: '0 0 24px 0',
        flex: '1'
      }}>
        {project.description}
      </p>
      
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '24px'
      }}>
        {project.technologies.map((tech, i) => (
          <span key={i} style={{
            background: 'rgba(102, 126, 234, 0.1)',
            color: '#667eea',
            padding: '4px 12px',
            borderRadius: '16px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {tech}
          </span>
        ))}
      </div>
      
      <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        {project.links.map((link, i) => (
          link.disabled ? (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#9ca3af',
                fontSize: '14px',
                fontWeight: '600',
                padding: '8px 16px',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                background: '#f9fafb',
                cursor: 'not-allowed'
              }}
            >
              <Building size={16} />
              {link.label}
            </span>
          ) : link.isInternal ? (
            <button
              key={i}
              onClick={() => navigate(link.url)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#667eea',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                padding: '8px 16px',
                border: '1px solid #667eea',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                background: 'transparent',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#667eea';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#667eea';
              }}
            >
              <PawPrint size={16} />
              {link.label}
            </button>
          ) : (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#667eea',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '600',
                padding: '8px 16px',
                border: '1px solid #667eea',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#667eea';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#667eea';
              }}
            >
              <ArrowRight size={16} />
              {link.label}
            </a>
          )
        ))}
      </div>
    </div>
  );
};

const DesktopTimelineItem = ({ item, index }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    gap: '24px',
    alignItems: 'center',
    position: 'relative',
    minHeight: '120px'
  }}>
    {/* Timeline Line */}
    {index !== 6 && (
      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '60px',
        bottom: '-32px',
        width: '2px',
        background: 'linear-gradient(180deg, #667eea, rgba(102, 126, 234, 0.3))',
        zIndex: 1
      }} />
    )}
    
    {/* Left Content */}
    <div style={{
      gridColumn: '1',
      textAlign: 'right',
      paddingRight: '16px'
    }}>
      {item.side === 'left' && (
        <div className="glass-card hover-lift" style={{
          padding: '24px',
          marginLeft: 'auto',
          maxWidth: '350px'
        }}>
          <TimelineContent item={item} />
        </div>
      )}
    </div>
    
    {/* Center Timeline Dot */}
    <div style={{
      gridColumn: '2',
      display: 'flex',
      justifyContent: 'center',
      zIndex: 2
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #5a67d8, #9f7aea, #ed64a6)',
        border: '4px solid white',
        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <item.icon size={20} color="white" />
      </div>
    </div>
    
    {/* Right Content */}
    <div style={{
      gridColumn: '3',
      textAlign: 'left',
      paddingLeft: '16px'
    }}>
      {item.side === 'right' && (
        <div className="glass-card hover-lift" style={{
          padding: '24px',
          maxWidth: '350px'
        }}>
          <TimelineContent item={item} />
        </div>
      )}
    </div>
    
  </div>
);

const MobileTimelineItem = ({ item }) => (
  <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start'
  }}>
    {/* Timeline Dot */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexShrink: 0
    }}>
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #5a67d8, #9f7aea, #ed64a6)',
        border: '3px solid white',
        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '8px'
      }}>
        <item.icon size={14} color="white" />
      </div>
    </div>
    
    {/* Content */}
    <div className="glass-card" style={{
      padding: '16px',
      flex: 1
    }}>
      <TimelineContent item={item} />
    </div>
  </div>
);

const TimelineContent = ({ item }) => (
  <>
    <div style={{
      fontSize: '11px',
      fontWeight: '600',
      color: '#667eea',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '6px'
    }}>
      {item.year}
    </div>
    <h3 style={{
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: '700',
      color: '#2d3748',
      margin: '0 0 6px 0',
      lineHeight: '1.3',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
      <item.icon size={18} style={{ color: '#667eea', flexShrink: 0 }} />
      {item.title}
    </h3>
    <p style={{
      fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
      fontWeight: '600',
      color: '#667eea',
      margin: '0 0 12px 0',
      lineHeight: '1.3'
    }}>
      {item.subtitle}
    </p>
    <p style={{
      fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
      lineHeight: '1.5',
      color: '#4a5568',
      margin: '0'
    }}>
      {item.description}
    </p>
  </>
);

const SkillCard = ({ skillGroup }) => (
  <div className="glass-card hover-lift" style={{
    padding: 'clamp(16px, 3vw, 24px)',
    textAlign: 'center',
    cursor: 'default'
  }}>
    <h3 style={{
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: '600',
      margin: '0 0 16px 0',
      color: '#2d3748'
    }}>
      {skillGroup.category}
    </h3>
    
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {skillGroup.items.map((skill, i) => (
        <div key={i} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          justifyContent: 'flex-start'
        }}>
          <CheckCircle size={16} color="#10b981" />
          <span style={{
            color: '#4a5568',
            fontSize: '14px'
          }}>
            {skill}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const StylishNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 768);
  
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const getPageTitle = () => {
    if (location.pathname.includes('resume')) return 'Resume';
    if (location.pathname.includes('contact')) return 'Contact';
    if (location.pathname.includes('animal-care')) return 'Animal Care';
    return 'Portfolio';
  };
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      zIndex: 1000,
      padding: '12px 0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Left Side - Back Button and Page Title */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: 'transparent',
              border: 'none',
              borderRadius: '12px',
              color: '#667eea',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
              e.currentTarget.style.transform = 'translateX(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          
          <div style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#2d3748',
            fontFamily: 'Quicksand, sans-serif',
            display: windowWidth > 380 ? 'block' : 'none'
          }}>
            {getPageTitle()}
          </div>
        </div>
        
        {/* Center - Name (hide on mobile and on Contact/Resume pages) */}
        {!location.pathname.includes('contact') && !location.pathname.includes('resume') && (
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '16px',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: 'Comfortaa, cursive',
            letterSpacing: '0.5px',
            display: windowWidth > 480 ? 'block' : 'none'
          }}>
            Beau Lazear
          </div>
        )}
        
        {/* Right Side - Navigation Icons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <button
            onClick={() => navigate('/resume')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: location.pathname.includes('resume') ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
              border: 'none',
              borderRadius: '12px',
              color: location.pathname.includes('resume') ? '#667eea' : '#6b7280',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (!location.pathname.includes('resume')) {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!location.pathname.includes('resume')) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <FileText size={20} />
          </button>
          
          <button
            onClick={() => navigate('/contact')}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              background: location.pathname.includes('contact') ? 'rgba(102, 126, 234, 0.1)' : 'transparent',
              border: 'none',
              borderRadius: '12px',
              color: location.pathname.includes('contact') ? '#667eea' : '#6b7280',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              if (!location.pathname.includes('contact')) {
                e.currentTarget.style.background = 'rgba(102, 126, 234, 0.05)';
              }
            }}
            onMouseLeave={(e) => {
              if (!location.pathname.includes('contact')) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <Mail size={20} />
          </button>
          
          <div style={{
            width: '1px',
            height: '24px',
            background: 'rgba(0, 0, 0, 0.1)',
            margin: '0 4px'
          }} />
          
          <button
            onClick={() => navigate('/')}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #667eea 0%, #9f7aea 100%)',
              padding: '2px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(102, 126, 234, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.2)';
            }}
          >
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              overflow: 'hidden',
              background: 'white'
            }}>
              <img
                src={BeauPic}
                alt="Beau Lazear"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </button>
        </div>
        
      </div>
    </div>
  );
};

const YourContact = () => (
  <div style={{
    minHeight: '100vh',
    background: 'transparent',
    margin: 0,
    padding: 0
  }}>
    <StylishNavbar />
    <Contact />
  </div>
);

const ResumeWrapper = () => (
  <div style={{
    width: '100%',
    minHeight: '100vh',
    margin: 0,
    padding: 0
  }}>
    <StylishNavbar />
    <Resume />
  </div>
);

// ScrollToTop component that scrolls to top on route change
const ScrollToTop = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
};

const AnimalCareWrapper = () => {
  const navigate = useNavigate();
  return <AnimalCare onNavigate={() => {
    navigate('/');
    window.scrollTo(0, 0);
  }} />;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ fontFamily: 'Quicksand, sans-serif' }}>
        <Routes>
          <Route path="/" element={<ModernPortfolio />} />
          <Route path="/resume" element={<ResumeWrapper />} />
          <Route path="/contact" element={<YourContact />} />
          <Route path="/animal-care" element={<AnimalCareWrapper />} />
          <Route path="/beaus-animal-care" element={<AnimalCareWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;