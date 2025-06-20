import React, { useState } from 'react';
import { Dog, Cat, Home, Bird, Linkedin, Github, Instagram, FileText, Mail, ArrowLeft, Monitor, Heart } from 'lucide-react';
import AnimalCareCarousel from './components/AnimalCareCarousel';
import CroppedBeau from './images/CroppedBeau.jpeg';
import GraphicTwo from './images/GraphicTwo.png';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
  }
  
  @keyframes drift {
    0% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(120deg); }
    66% { transform: translate(-20px, 20px) rotate(240deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
  }
  
  @keyframes wave {
    0%, 100% { 
      clip-path: polygon(0% 47%, 10% 48%, 33% 54%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
    }
    50% { 
      clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
    }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .floating { animation: float 6s ease-in-out infinite; }
  .animate-fade-in-up { animation: fadeInUp 0.8s ease-out; }
  .animate-slide-in { animation: slideIn 0.6s ease-out; }
  .animate-fade-in-up-delay { animation: fadeInUp 0.8s ease-out 0.2s both; }
  
  .hover-glow-soft:hover { 
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.3), 0 30px 60px rgba(59, 130, 246, 0.2) !important; 
    transform: translateY(-3px) !important;
  }
  
  .hover-button:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4) !important;
  }
  
  .hover-social:hover {
    transform: scale(1.05) !important;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4) !important;
  }
  
  .animated-bg {
    background: linear-gradient(-45deg, #60a5fa, #3b82f6, #2563eb, #1e40af, #1e3a8a);
    background-size: 400% 400%;
    animation: gradient-shift 15s ease infinite;
  }
  
  .wave-layer {
    animation: wave 8s ease-in-out infinite;
  }
  
  .drift-orb {
    animation: drift 20s ease-in-out infinite;
  }
  
  @media (max-width: 768px) {
    .responsive-title { font-size: 36px !important; }
    .responsive-tagline { font-size: 18px !important; }
    .responsive-section-title { font-size: 32px !important; }
    .responsive-text { font-size: 16px !important; }
    .responsive-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
    .responsive-header { padding: 40px 20px 30px !important; }
    .responsive-content { padding: 0 15px !important; }
    .responsive-card { padding: 24px !important; }
    .responsive-service-title { font-size: 24px !important; }
    .responsive-project-title { font-size: 24px !important; }
    .responsive-service-description { font-size: 16px !important; }
    .responsive-project-description { font-size: 16px !important; }
    .responsive-about { padding: 32px !important; margin-bottom: 40px !important; }
    .responsive-graphic { padding: 20px !important; }
    .responsive-social { gap: 16px !important; margin-top: 32px !important; }
    .responsive-social-link { width: 48px !important; height: 48px !important; }
    .responsive-toggle { max-width: 90% !important; margin: 0 auto 32px !important; }
    .responsive-toggle-button { padding: 12px 20px !important; font-size: 14px !important; }
    .responsive-profile { width: 180px !important; height: 180px !important; }
  }
  
  @media (max-width: 480px) {
    .responsive-title { font-size: 28px !important; }
    .responsive-tagline { font-size: 16px !important; }
    .responsive-section-title { font-size: 24px !important; }
    .responsive-text { font-size: 14px !important; }
    .responsive-card { padding: 20px !important; }
    .responsive-service-title { font-size: 20px !important; }
    .responsive-project-title { font-size: 20px !important; }
    .responsive-service-description { font-size: 14px !important; }
    .responsive-project-description { font-size: 14px !important; }
    .responsive-about { padding: 24px !important; }
    .responsive-profile { width: 160px !important; height: 160px !important; }
  }
`;

const baseStyles = {
  // Glass effects
  glassCard: {
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(25px)',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '32px',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
  },

  glassCardOpaque: {
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(30px)',
    border: '2px solid rgba(255, 255, 255, 0.6)',
    borderRadius: '32px',
    boxShadow: '0 35px 70px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
  },

  largeTitle: {
    fontSize: '72px',
    fontWeight: '700',
    margin: '0 0 16px 0',
    color: 'white',
    textShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Fredoka, Inter, sans-serif'
  },

  sectionTitle: {
    fontSize: '64px',
    fontWeight: '700',
    textAlign: 'center',
    margin: '0 0 64px 0',
    color: 'white',
    textShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    fontFamily: 'Fredoka, Inter, sans-serif'
  },

  container: {
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '32px',
    marginBottom: '80px'
  }
};

const ModernPortfolioLanding = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('animal');

  const data = {
    projects: [
      {
        title: "Voxxy AI",
        description: "AI-powered event planning platform built with React, React Native, and Ruby on Rails. Features include API integrations with OpenAI and Google Places, Mixpanel analytics, and mobile support via Expo. Designed for seamless coordination, user feedback, and collaborative decision-making.",
        links: [
          { label: "Live Site", url: "https://www.voxxyai.com/#/" },
          { label: "GitHub", url: "https://github.com/beaulazear/michael-personal-site.git" }
        ]
      },
      {
        title: "Pocket Walks",
        description: "A full-stack dog walking application built with React and Ruby on Rails. Features scheduling, invoicing, and financial management for pet care businesses.",
        links: [
          { label: "Live Site", url: "https://www.pocket-walks.com/" },
          { label: "GitHub", url: "https://github.com/beaulazear/voxxy-rails-react" }
        ]
      },
      {
        title: "Aria Design Consultants",
        description: "Professional marketing website built with React and styled components for a design consulting firm.",
        links: [
          { label: "Live Site", url: "https://www.ariadesignconsultants.com/#/" },
          { label: "GitHub", url: "https://github.com/beaulazear/michael-personal-site.git" }
        ]
      },
      {
        title: "Pokemon Guide",
        description: "Interactive React application leveraging the PokeAPI for dynamic data sorting and presentation.",
        links: [
          { label: "Live Site", url: "https://beaulazear.github.io/pokemon/" },
          { label: "GitHub", url: "https://github.com/beaulazear/pokemon" }
        ]
      }
    ],

    services: [
      {
        icon: Dog,
        title: "Dog Walking",
        description: "Professional dog walking services with detailed photo updates and flexible scheduling. From 30-minute neighborhood strolls to extended adventure walks.",
        price: "Starting at $25"
      },
      {
        icon: Home,
        title: "Pet Sitting",
        description: "Overnight care including multiple walks, feeding, and comprehensive pet care in your home. Your pets stay comfortable in familiar surroundings.",
        price: "$95/night"
      },
      {
        icon: Cat,
        title: "Cat Care",
        description: "Daily visits for feeding, litter maintenance, and playtime for your feline friends. Includes mail collection and plant watering.",
        price: "$25/visit"
      },
      {
        icon: Bird,
        title: "Exotic Animals",
        description: "Specialized care for reptiles, birds, and other exotic pets with zoo-keeping experience. Enclosure cleaning and specialized feeding protocols.",
        price: "$30/visit"
      }
    ],

    testimonials: [
      {
        text: "Beau is the absolute best! Ralph's favorite part of the day is when Beau arrives. His daily recap texts include pictures, which is like hiring a professional photographer as an added bonus.",
        author: "Julie & Ralph"
      },
      {
        text: "From the moment Ruthie met Beau, she was in love. We trust him profoundly with our excitable mini goldendoodle. He loves her as if she were his own.",
        author: "Anna & Ruthie"
      },
      {
        text: "Beau is thoughtful, dependable, responsible, and incredibly kind. He communicates thoroughly and sends detailed summaries with adorable photographs after every walk.",
        author: "Vanessa & River"
      }
    ]
  };

  return (
    <div style={baseStyles.container}>
      <style>{globalStyles}</style>

      {/* Enhanced Animated Background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1
      }} className="animated-bg">

        {/* Wave layers */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(45deg, rgba(147, 197, 253, 0.3) 0%, transparent 50%, rgba(30, 64, 175, 0.4) 100%)'
        }} className="wave-layer" />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(-45deg, rgba(99, 102, 241, 0.2) 0%, transparent 70%, rgba(147, 197, 253, 0.3) 100%)',
          animationDelay: '2s'
        }} className="wave-layer" />

        {/* Floating orbs with enhanced animation */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {[
            { top: '20%', left: '20%', size: '400px', delay: '0s', color: '147, 197, 253' },
            { bottom: '20%', right: '20%', size: '350px', delay: '3s', color: '99, 102, 241' },
            { top: '60%', left: '60%', size: '300px', delay: '1.5s', color: '147, 197, 253' },
            { top: '80%', left: '10%', size: '250px', delay: '4.5s', color: '30, 64, 175' },
            { top: '10%', right: '40%', size: '320px', delay: '2.5s', color: '59, 130, 246' }
          ].map((orb, i) => (
            <div key={i} style={{
              position: 'absolute',
              ...Object.fromEntries(Object.entries(orb).filter(([k]) => ['top', 'bottom', 'left', 'right'].includes(k))),
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, rgba(${orb.color}, 0.3) 0%, rgba(${orb.color}, 0.1) 50%, transparent 100%)`,
              borderRadius: '50%',
              filter: 'blur(40px)',
              animationDelay: orb.delay
            }} className="drift-orb" />
          ))}
        </div>

        {/* Particle-like elements */}
        <div style={{ position: 'absolute', inset: 0 }}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse 3s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }} />
          ))}
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 10, color: '#374151' }}>
        <header style={{
          textAlign: 'center',
          padding: '80px 20px 60px',
          marginBottom: '48px'
        }} className="animate-fade-in-up responsive-header">

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '32px',
            flexDirection: 'column'
          }}>
            {/* Enhanced Profile Picture - Much Larger */}
            <div style={{
              width: '240px', // Increased from 144px
              height: '240px', // Increased from 144px
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3), 0 0 0 6px rgba(255, 255, 255, 0.4)', // Enhanced shadow and border
              border: '6px solid rgba(255, 255, 255, 0.5)', // Thicker border
              position: 'relative'
            }} className="floating responsive-profile">
              <img
                src={activeTab === 'software' ? CroppedBeau : GraphicTwo}
                alt="Beau Lazear"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)',
                animation: 'shimmer 3s ease-in-out infinite'
              }} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <h1 style={baseStyles.largeTitle} className="responsive-title">
                Beau Lazear
              </h1>
              <p style={{
                fontSize: '32px',
                color: '#dbeafe',
                fontWeight: '500',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
              }} className="responsive-tagline">
                Software Developer & Animal Care Specialist
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '48px',
            flexWrap: 'wrap'
          }} className="responsive-social">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/beau-lazear", external: true },
              { icon: Github, href: "https://github.com/beaus.animal.care", external: true },
              { icon: Instagram, href: "https://www.instagram.com", external: true },
              { icon: FileText, action: () => onNavigate('resume') },
              { icon: Mail, action: () => onNavigate('YourContact') }
            ].map((item, i) => (
              <button
                key={i}
                onClick={item.action || (() => item.href && window.open(item.href, '_blank'))}
                style={{
                  width: '56px',
                  height: '56px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(20px)',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)'
                }}
                className="hover-social responsive-social-link"
              >
                <item.icon size={28} color="#dbeafe" />
              </button>
            ))}
          </div>
        </header>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }} className="responsive-content">
          <div style={{
            display: 'flex',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(25px)',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '50px',
            padding: '12px',
            margin: '0 auto 48px',
            maxWidth: '512px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
          }} className="animate-fade-in-up-delay responsive-toggle">
            {['animal', 'software'].map((tab) => (
              <button
                key={tab}
                style={{
                  flex: 1,
                  padding: '16px 32px',
                  border: 'none',
                  borderRadius: '40px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.5s ease',
                  background: activeTab === tab ? 'linear-gradient(135deg, #3b82f6, #2563eb)' : 'transparent',
                  color: activeTab === tab ? 'white' : '#dbeafe',
                  transform: activeTab === tab ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: activeTab === tab ? '0 10px 30px rgba(59, 130, 246, 0.4)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                className="responsive-toggle-button"
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'animal' ? (
                  <>
                    <Heart size={20} />
                    Animal Care
                  </>
                ) : (
                  <>
                    <Monitor size={20} />
                    Software Development
                  </>
                )}
              </button>
            ))}
          </div>

          <div className="animate-slide-in">
            {activeTab === 'software' ? (
              <SoftwareSection data={data} baseStyles={baseStyles} />
            ) : (
              <AnimalCareSection data={data} baseStyles={baseStyles} />
            )}
          </div>
        </div>
      </div>

      <footer style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '40px 20px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        marginTop: '80px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <p style={{
            fontSize: '18px',
            color: '#dbeafe',
            margin: '0 0 8px 0',
            fontWeight: '600'
          }}>
            Beau Lazear
          </p>
          <p style={{
            fontSize: '16px',
            color: '#bfdbfe',
            margin: 0
          }}>
            <a
              href="mailto:beaulazear@gmail.com"
              style={{
                color: '#bfdbfe',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.color = '#dbeafe'}
              onMouseOut={(e) => e.target.style.color = '#bfdbfe'}
            >
              beaulazear@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const SoftwareSection = ({ data, baseStyles }) => (
  <>
    <AboutCard
      text="Software developer with strong experience in JavaScript (React), React Native, and Ruby on Rails. Skilled in integrating tools like Mixpanel, OpenAI API, Google Places API, and AWS S3 to build scalable, user-friendly applications across web and mobile platforms."
      baseStyles={baseStyles}
    />

    <h2 style={baseStyles.sectionTitle} className="responsive-section-title">
      Featured Projects
    </h2>

    <div style={baseStyles.grid} className="responsive-grid">
      {data.projects.map((project, index) => (
        <ProjectCard key={index} project={project} baseStyles={baseStyles} />
      ))}
    </div>


  </>
);

const AnimalCareSection = ({ data, baseStyles }) => (
  <>
    <AboutCard
      text="Professional animal caretaker with over 8 years of experience including zookeeping at Prospect Park Zoo, veterinary assisting, and rescue rehabilitation at the ASPCA. Based in Brooklyn, NYC, I provide personalized, expert care for your beloved pets."
      baseStyles={baseStyles}
    />

    <AnimalCareCarousel />

    <h2 style={baseStyles.sectionTitle} className="responsive-section-title">
      Services & Pricing
    </h2>

    <div style={baseStyles.grid} className="responsive-grid">
      {data.services.map((service, index) => (
        <ServiceCard key={index} service={service} baseStyles={baseStyles} />
      ))}
    </div>

    <h2 style={baseStyles.sectionTitle} className="responsive-section-title">
      Client Testimonials
    </h2>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginBottom: '80px'
    }} className="responsive-grid">
      {data.testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} baseStyles={baseStyles} />
      ))}
    </div>
  </>
);

const AboutCard = ({ text, baseStyles }) => (
  <div style={{
    ...baseStyles.glassCardOpaque,
    padding: '48px',
    marginBottom: '80px'
  }} className="responsive-about">
    <div style={{
      fontSize: '24px',
      lineHeight: '1.75',
      color: '#374151',
      textAlign: 'left',
      maxWidth: '1200px',
      margin: '0 auto',
      fontWeight: '500'
    }} className="responsive-text">
      {text}
    </div>
  </div>
);

const ProjectCard = ({ project, baseStyles }) => (
  <div style={{
    ...baseStyles.glassCard,
    padding: '40px',
    border: '2px solid rgba(255, 255, 255, 0.5)'
  }} className="hover-glow-soft responsive-card">
    <h4 style={{
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#1f2937'
    }} className="responsive-project-title">
      {project.title}
    </h4>
    <p style={{
      fontSize: '20px',
      lineHeight: '1.75',
      color: '#374151',
      marginBottom: '32px'
    }} className="responsive-project-description">
      {project.description}
    </p>
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {project.links.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'all 0.3s ease'
          }}
          className="hover-button"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const ServiceCard = ({ service, baseStyles }) => (
  <div style={{
    ...baseStyles.glassCard,
    padding: '32px',
    border: '2px solid rgba(255, 255, 255, 0.5)'
  }} className="hover-glow-soft responsive-card">
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      marginBottom: '20px'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
        flexShrink: 0
      }}>
        <service.icon size={32} color="white" />
      </div>
      <h3 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#1f2937',
        margin: 0
      }} className="responsive-service-title">
        {service.title}
      </h3>
    </div>
    <div style={{
      display: 'inline-block',
      background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
      color: 'white',
      padding: '8px 20px',
      borderRadius: '20px',
      fontWeight: 'bold',
      fontSize: '14px',
      marginBottom: '16px',
      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
    }}>
      {service.price}
    </div>
    <p style={{
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#374151',
      margin: 0
    }} className="responsive-service-description">
      {service.description}
    </p>
  </div>
);

const TestimonialCard = ({ testimonial, baseStyles }) => (
  <div style={{
    ...baseStyles.glassCard,
    padding: '40px',
    border: '2px solid rgba(255, 255, 255, 0.5)'
  }} className="responsive-card">
    <p style={{
      fontSize: '18px',
      lineHeight: '1.75',
      color: '#374151',
      marginBottom: '24px',
      fontStyle: 'italic'
    }} className="responsive-text">
      "{testimonial.text}"
    </p>
    <div style={{
      fontWeight: 'bold',
      color: '#1f2937',
      fontSize: '18px'
    }}>
      — {testimonial.author}
    </div>
  </div>
);

const YourContact = ({ onNavigate }) => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 35%, #1e40af 100%)',
  }}>
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      paddingTop: '20px'
    }}>
      <button
        onClick={() => onNavigate('home')}
        style={{
          marginBottom: '20px',
          marginLeft: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          padding: '12px 24px',
          borderRadius: '25px',
          color: '#dbeafe',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        className="hover-button"
      >
        <ArrowLeft size={20} />
        Back to Home
      </button>
      <Contact />
    </div>

    <footer style={{
      textAlign: 'center',
      padding: '40px 20px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      marginTop: '40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{
          fontSize: '18px',
          color: '#dbeafe',
          margin: '0 0 8px 0',
          fontWeight: '600'
        }}>
          Beau Lazear
        </p>
        <p style={{
          fontSize: '16px',
          color: '#bfdbfe',
          margin: 0
        }}>
          <a
            href="mailto:beaulazear@gmail.com"
            style={{
              color: '#bfdbfe',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#dbeafe'}
            onMouseOut={(e) => e.target.style.color = '#bfdbfe'}
          >
            beaulazear@gmail.com
          </a>
        </p>
      </div>
    </footer>
  </div>
);

const ResumeWrapper = ({ onNavigate }) => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 35%, #1e40af 100%)',
  }}>
    <div style={{
      maxWidth: '1000px',
      margin: '0 auto',
      paddingTop: '20px'
    }}>
      <button
        onClick={() => onNavigate('home')}
        style={{
          marginBottom: '20px',
          marginLeft: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          border: '2px solid rgba(255, 255, 255, 0.4)',
          padding: '12px 24px',
          borderRadius: '25px',
          color: '#dbeafe',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        className="hover-button"
      >
        <ArrowLeft size={20} />
        Back to Home
      </button>

      {/* Render your actual Resume component here */}
      <Resume onNavigate={onNavigate} />
    </div>

    <footer style={{
      textAlign: 'center',
      padding: '40px 20px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      marginTop: '40px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{
          fontSize: '18px',
          color: '#dbeafe',
          margin: '0 0 8px 0',
          fontWeight: '600'
        }}>
          Beau Lazear
        </p>
        <p style={{
          fontSize: '16px',
          color: '#bfdbfe',
          margin: 0
        }}>
          <a
            href="mailto:beaulazear@gmail.com"
            style={{
              color: '#bfdbfe',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#dbeafe'}
            onMouseOut={(e) => e.target.style.color = '#bfdbfe'}
          >
            beaulazear@gmail.com
          </a>
        </p>
      </div>
    </footer >
  </div >
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {currentPage === 'home' && <ModernPortfolioLanding onNavigate={setCurrentPage} />}
      {currentPage === 'resume' && <ResumeWrapper onNavigate={setCurrentPage} />}
      {currentPage === 'YourContact' && <YourContact onNavigate={setCurrentPage} />}
    </div>
  );
};

export default App;