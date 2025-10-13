import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumePDF from "../images/ResumePDF.pdf";
import { Download, Code, Briefcase, Award, GraduationCap, Star, MapPin, CheckCircle, TrendingUp, Users, Zap, Heart, PawPrint, Building, Target } from 'lucide-react';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&family=Comfortaa:wght@300;400;500;600;700&display=swap');
  
  html, body {
    overflow-x: hidden !important;
    width: 100% !important;
  }
  
  .resume-fade-in-up {
    animation: resumeFadeInUp 0.8s ease-out;
  }
  
  .resume-slide-in {
    animation: resumeSlideIn 0.8s ease-out;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;
  }
  
  @keyframes resumeFadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes resumeSlideIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .resume-gradient-text {
    background: linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .resume-glass-card {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 250, 251, 0.95) 100%);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 24px;
    box-shadow: 0 10px 40px rgba(99, 102, 241, 0.15), 0 2px 10px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }
  
  .resume-glass-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 25px 50px rgba(99, 102, 241, 0.25), 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .resume-skill-badge {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(159, 122, 234, 0.1) 100%);
    border: 1px solid rgba(102, 126, 234, 0.2);
    color: #667eea;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    transition: all 0.3s ease;
  }
  
  .resume-skill-badge:hover {
    background: linear-gradient(135deg, #667eea 0%, #9f7aea 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
  
  .resume-primary-button {
    background: linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%);
    border: none;
    border-radius: 16px;
    color: white;
    font-weight: 600;
    padding: 16px 32px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
  }
  
  .resume-primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(159, 122, 234, 0.5), 0 6px 20px rgba(237, 100, 166, 0.3);
  }
  
  .resume-timeline-dot {
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg, #667eea 0%, #9f7aea 100%);
    border-radius: 50%;
    position: absolute;
    left: -6px;
    top: 6px;
    box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
  }
  
  .resume-company-card {
    transition: all 0.3s ease;
    padding-left: 24px;
    position: relative;
  }
  
  @media (max-width: 768px) {
    .resume-primary-button {
      padding: 14px 24px;
      font-size: 14px;
      width: 100%;
      justify-content: center;
    }
    
    .resume-skill-badge {
      font-size: 12px;
      padding: 6px 12px;
    }
    
    .resume-section {
      margin-bottom: 32px !important;
    }
    
    .resume-glass-card {
      border-radius: 16px;
    }
  }
`;

const Resume = ({ onNavigate }) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = {
    "Frontend": ["React", "React Native", "JavaScript", "HTML/CSS", "WordPress", "Breakdance", "Styled Components", "Responsive Design"],
    "Backend": ["Ruby on Rails", "PostgreSQL", "REST APIs", "JWT Auth", "Active Storage", "Webhook Integrations"],
    "Cloud & Tools": ["AWS", "Google Cloud", "Git", "SendGrid", "Mixpanel", "CRM Automation"],
    "Business": ["Team Leadership", "Client Relations", "Project Management", "Problem Solving", "Workflow Automation"]
  };

  const highlights = [
    { icon: Users, text: "50+ Regular Clients", color: "#10b981" },
    { icon: Code, text: "Full Stack Developer", color: "#667eea" },
    { icon: TrendingUp, text: "Business Owner", color: "#f59e0b" },
    { icon: Award, text: "AWS Certified", color: "#ef4444" }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 50%, #a5b4fc 100%)',
      fontFamily: 'Quicksand, sans-serif',
      paddingTop: '80px',
      paddingBottom: '80px',
      paddingLeft: '20px',
      paddingRight: '20px',
      margin: '0',
      width: '100%',
      overflowX: 'hidden',
      boxSizing: 'border-box'
    }}>
      <style>{globalStyles}</style>

      {/* Hero Header */}
      <div style={{ 
        maxWidth: '900px',
        margin: '0 auto 40px'
      }}>
        <div className="resume-glass-card resume-fade-in-up" style={{
          padding: window.innerWidth > 768 ? '48px' : '32px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(249, 250, 251, 0.95) 100%)',
        }}>
          <h1 className="resume-gradient-text" style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '800',
            margin: '0 0 16px 0',
            fontFamily: 'Comfortaa, cursive'
          }}>
            Beau Lazear
          </h1>
          
          <p style={{
            fontSize: '1.5rem',
            color: '#4a5568',
            margin: '0 0 32px 0',
            fontWeight: '500'
          }}>
            Developer • Co-Founder • Problem Solver
          </p>

          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}>
            {highlights.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <item.icon size={20} style={{ color: item.color }} />
                <span style={{ color: '#4a5568', fontWeight: '600', fontSize: '14px' }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-primary-button"
            >
              <Download size={20} />
              Download PDF Resume
            </a>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'transparent',
                border: '2px solid #667eea',
                borderRadius: '16px',
                color: '#667eea',
                fontWeight: '600',
                padding: '14px 30px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #9f7aea 100%)';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#667eea';
                e.currentTarget.style.borderColor = '#667eea';
              }}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div style={{ 
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px'
      }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* About Section */}
          <div className="resume-glass-card resume-slide-in" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <Target size={24} style={{ color: '#667eea' }} />
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2d3748',
                margin: 0
              }}>
                About Me
              </h2>
            </div>
            
            <p style={{
              color: '#4a5568',
              fontSize: '15px',
              lineHeight: '1.8',
              margin: 0
            }}>
              Full-stack developer with expertise in React, Rails, WordPress, and workflow automation.
              Currently juggling multiple roles: co-founding Voxxy AI, building responsive
              websites at Catch Drive, and creating CRM automations at United Advisors. I specialize in
              turning complex business problems into elegant technical solutions—from AI-powered apps to
              webhook integrations. My unconventional path from zookeeper to developer gives me a unique
              perspective on user needs and problem-solving.
            </p>
          </div>

          {/* Skills Section */}
          <div className="resume-glass-card resume-slide-in" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Zap size={24} style={{ color: '#667eea' }} />
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2d3748',
                margin: 0
              }}>
                Technical Skills
              </h2>
            </div>
            
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#667eea',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '12px'
                }}>
                  {category}
                </h3>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {items.map((skill, i) => (
                    <span key={i} className="resume-skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="resume-glass-card resume-slide-in" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <GraduationCap size={24} style={{ color: '#667eea' }} />
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2d3748',
                margin: 0
              }}>
                Education & Certs
              </h2>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  title: "AWS Certified Cloud Practitioner",
                  subtitle: "Amazon Web Services",
                  year: "2024",
                  icon: Award
                },
                {
                  title: "Full Stack Development",
                  subtitle: "Flatiron School",
                  year: "2023",
                  icon: Code
                },
                {
                  title: "Real Estate License",
                  subtitle: "NYREI",
                  year: "2017",
                  icon: Building
                }
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(159, 122, 234, 0.05) 100%)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(159, 122, 234, 0.1) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(159, 122, 234, 0.05) 100%)';
                }}
                >
                  <item.icon size={20} style={{ color: '#667eea', flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#2d3748',
                      margin: '0 0 4px 0'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      margin: 0
                    }}>
                      {item.subtitle} • {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Experience */}
        <div className="resume-glass-card resume-slide-in" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <Briefcase size={24} style={{ color: '#667eea' }} />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2d3748',
              margin: 0
            }}>
              Experience Journey
            </h2>
          </div>

          {/* Experience Timeline */}
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '6px',
              top: '12px',
              bottom: '12px',
              width: '2px',
              background: 'linear-gradient(180deg, #667eea 0%, rgba(102, 126, 234, 0.2) 100%)'
            }} />

            {[
              {
                title: "Co-Founder",
                company: "Voxxy AI",
                period: "2024–Present",
                icon: Star,
                color: "#ed64a6",
                highlights: [
                  "Architecting scalable React/Rails platform for AI group planning",
                  "Integrated OpenAI, Mixpanel, Google Cloud services",
                  "Leading technical roadmap and deployment strategy",
                  "Building React Native mobile app with Expo"
                ]
              },
              {
                title: "Front End Developer",
                company: "Catch Drive",
                period: "July 2024–Present",
                icon: Code,
                color: "#3b82f6",
                highlights: [
                  "Building responsive websites using WordPress and Breakdance",
                  "Advanced CSS and dev console tools for debugging",
                  "Collaborating with UX professionals for intuitive design",
                  "Creating user-friendly, accessible web experiences"
                ]
              },
              {
                title: "Automation Developer",
                company: "United Advisors",
                period: "2024–Present",
                icon: Zap,
                color: "#8b5cf6",
                highlights: [
                  "Building workflow automations and CRM integrations",
                  "Connecting Google Forms to inbound webhooks",
                  "Automated client creation and management systems",
                  "Email and SMS automation based on user actions"
                ]
              },
              {
                title: "Digital Contractor",
                company: "Aria Design Co",
                period: "2023–Present",
                icon: Code,
                color: "#9f7aea",
                highlights: [
                  "Built and maintain company website portfolio",
                  "Managing social media strategy and content",
                  "Direct collaboration with founder on tech solutions"
                ]
              },
              {
                title: "Owner & Operator",
                company: "Beau's Animal Care",
                period: "2019–Present",
                icon: Heart,
                color: "#667eea",
                highlights: [
                  "Built business serving 50+ regular clients",
                  "Developed custom scheduling & invoicing platform",
                  "Managing team of independent contractors"
                ]
              },
              {
                title: "Veterinary Assistant Lead",
                company: "ASPCA",
                period: "2019",
                icon: PawPrint,
                color: "#10b981",
                highlights: [
                  "Promoted to lead during team transition",
                  "Emergency animal care and medical support",
                  "Training and mentoring new staff"
                ]
              },
              {
                title: "Zookeeper",
                company: "Prospect Park Zoo",
                period: "2017–2019",
                icon: MapPin,
                color: "#f59e0b",
                highlights: [
                  "Advanced from intern to full-time keeper",
                  "Exotic animal care and public education",
                  "Daily operations and record keeping"
                ]
              }
            ].map((job, index) => (
              <div key={index} className="resume-company-card" style={{ 
                marginBottom: '32px',
                position: 'relative'
              }}>
                {/* Timeline Dot */}
                <div style={{
                  width: '14px',
                  height: '14px',
                  background: job.color,
                  borderRadius: '50%',
                  position: 'absolute',
                  left: '-25px',
                  top: '6px',
                  border: '3px solid white',
                  boxShadow: `0 0 0 4px ${job.color}20`,
                  zIndex: 2
                }} />
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#2d3748',
                      margin: '0 0 4px 0'
                    }}>
                      {job.title}
                    </h3>
                    <p style={{
                      color: job.color,
                      fontWeight: '600',
                      margin: 0,
                      fontSize: '14px'
                    }}>
                      {job.company}
                    </p>
                  </div>
                  <span style={{
                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(159, 122, 234, 0.1) 100%)',
                    color: '#667eea',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {job.period}
                  </span>
                </div>
                
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {job.highlights.map((highlight, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: '8px',
                      color: '#4a5568',
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      <CheckCircle size={14} style={{ 
                        color: job.color, 
                        flexShrink: 0,
                        marginTop: '3px'
                      }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{
        maxWidth: '900px',
        margin: '40px auto 0',
        textAlign: 'center'
      }}>
        <div className="resume-glass-card" style={{
          padding: '32px',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(159, 122, 234, 0.05) 100%)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: '#2d3748',
            margin: '0 0 16px 0'
          }}>
            Let's Build Something Together
          </h3>
          <p style={{
            color: '#6b7280',
            margin: '0 0 24px 0',
            fontSize: '16px'
          }}>
            I'm always excited to work on meaningful projects with great people.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://www.linkedin.com/in/beau-lazear"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-primary-button"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/beaulazear"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#24292e',
                borderRadius: '16px',
                color: 'white',
                fontWeight: '600',
                padding: '16px 32px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1a1e22';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#24292e';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;