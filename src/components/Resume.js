import React, { useEffect } from 'react';
import ResumePDF from "../images/ResumePDF.pdf";
import { Download, ArrowLeft } from 'lucide-react';

const globalStyles = `
  .resume-fade-in-up {
    animation: resumeFadeInUp 0.8s ease-out;
  }
  
  @keyframes resumeFadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .resume-glass-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  
  .resume-primary-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  @media (max-width: 768px) {
    .resume-primary-button {
      padding: 14px 24px;
      font-size: 14px;
    }
    
    .resume-content {
      padding: 32px !important;
    }
    
    .resume-section {
      margin-bottom: 32px !important;
    }
    
    .resume-job {
      margin-bottom: 32px !important;
    }
  }
`;

const Resume = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: 'Inter, sans-serif',
      padding: '40px 20px'
    }}>
      <style>{globalStyles}</style>

      {/* Main Resume Content */}
      <div style={{ 
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div className="resume-glass-card resume-fade-in-up resume-content" style={{
          padding: '48px'
        }}>
          
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '48px',
            paddingBottom: '32px',
            borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
          }}>
            <h1 style={{
              fontSize: '3rem',
              fontWeight: '800',
              margin: '0 0 16px 0',
              color: '#2d3748'
            }}>
              Beau Lazear
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              margin: '0 0 24px 0',
              fontWeight: '500'
            }}>
              Full-Stack Developer & Entrepreneur
            </p>

            <p style={{
              color: '#4a5568',
              fontSize: '1rem',
              margin: '0 0 32px 0',
              lineHeight: '1.6'
            }}>
              beaulazear@gmail.com
            </p>

            <a 
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-primary-button"
            >
              <Download size={20} />
              Download PDF Resume
            </a>
          </div>

          {/* Professional Summary */}
          <div className="resume-section" style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2d3748',
              margin: '0 0 20px 0',
              borderBottom: '2px solid #667eea',
              paddingBottom: '8px'
            }}>
              Professional Summary
            </h2>
            
            <p style={{
              color: '#4a5568',
              fontSize: '1rem',
              lineHeight: '1.7',
              margin: '0'
            }}>
              Multifaceted developer with a background spanning animal care, web development, and entrepreneurship. 
              Co-founder at Voxxy AI and founder of Beau's Animal Care, with contract digital work for Aria Design Company. 
              Proven track record of building real applications that solve business problems and serve actual users.
            </p>
          </div>

          {/* Experience */}
          <div className="resume-section" style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2d3748',
              margin: '0 0 32px 0',
              borderBottom: '2px solid #667eea',
              paddingBottom: '8px'
            }}>
              Experience
            </h2>

            {/* Job 1 */}
            <div className="resume-job" style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    margin: '0 0 4px 0'
                  }}>
                    Co-Founder & Lead Developer
                  </h3>
                  <p style={{
                    color: '#667eea',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    Voxxy AI
                  </p>
                </div>
                <span style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  2024–Present
                </span>
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Built React/Rails platform for AI-powered group planning serving real users
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Integrated Mixpanel analytics and OpenAI API for production features
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Developed mobile app using React Native + Expo with secure Rails backend
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Leading technical direction, deployment strategy, and product roadmap
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div className="resume-job" style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    margin: '0 0 4px 0'
                  }}>
                    Digital Contractor & Social Media Manager
                  </h3>
                  <p style={{
                    color: '#667eea',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    Aria Design Co.
                  </p>
                </div>
                <span style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  2023–Present
                </span>
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Built and maintain company website and online portfolio
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Expanded role to include social media strategy and content scheduling
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Work directly with founder to translate business needs into technical solutions
                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div className="resume-job" style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    margin: '0 0 4px 0'
                  }}>
                    Founder
                  </h3>
                  <p style={{
                    color: '#667eea',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    Beau's Animal Care
                  </p>
                </div>
                <span style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  2019–Present
                </span>
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Founded and run pet care company managing independent contractors
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Built custom React/Rails tools for scheduling, invoicing, and client management
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Handle all operations, client relations, and business development
                </li>
              </ul>
            </div>

            {/* Job 4 */}
            <div className="resume-job" style={{ marginBottom: '40px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    margin: '0 0 4px 0'
                  }}>
                    Veterinary Assistant
                  </h3>
                  <p style={{
                    color: '#667eea',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    ASPCA Animal Recovery Center
                  </p>
                </div>
                <span style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  2019
                </span>
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Provided medical support for animals under protective custody
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Promoted to lead assistant due to proactive leadership during team transitions
                </li>
              </ul>
            </div>

            {/* Job 5 */}
            <div className="resume-job">
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    margin: '0 0 4px 0'
                  }}>
                    Zookeeper
                  </h3>
                  <p style={{
                    color: '#667eea',
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    Prospect Park Zoo, WCS
                  </p>
                </div>
                <span style={{
                  color: '#6b7280',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  2017–2019
                </span>
              </div>
              
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  marginBottom: '8px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Advanced from internship to full-time keeper
                </li>
                <li style={{
                  position: 'relative',
                  paddingLeft: '20px',
                  color: '#4a5568',
                  lineHeight: '1.6'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    top: '8px',
                    width: '4px',
                    height: '4px',
                    backgroundColor: '#667eea',
                    borderRadius: '50%'
                  }}></span>
                  Managed daily husbandry, enrichment, and record keeping for exotic animals
                </li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-section" style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2d3748',
              margin: '0 0 20px 0',
              borderBottom: '2px solid #667eea',
              paddingBottom: '8px'
            }}>
              Skills
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  margin: '0 0 8px 0'
                }}>
                  Frontend
                </h3>
                <p style={{
                  color: '#4a5568',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  React, React Native, JavaScript, HTML/CSS, Styled Components
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  margin: '0 0 8px 0'
                }}>
                  Backend
                </h3>
                <p style={{
                  color: '#4a5568',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Ruby on Rails, PostgreSQL, REST APIs
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  margin: '0 0 8px 0'
                }}>
                  Tools
                </h3>
                <p style={{
                  color: '#4a5568',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Mixpanel, SendGrid, Expo, Git, AWS, Render, Netlify
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  margin: '0 0 8px 0'
                }}>
                  Other
                </h3>
                <p style={{
                  color: '#4a5568',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Project Management, Client Relations, Team Leadership, Business Operations
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#2d3748',
              margin: '0 0 20px 0',
              borderBottom: '2px solid #667eea',
              paddingBottom: '8px'
            }}>
              Education & Certifications
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  margin: '0 0 4px 0'
                }}>
                  Flatiron School
                </h3>
                <p style={{
                  color: '#4a5568',
                  fontSize: '0.9rem',
                  margin: '0 0 4px 0'
                }}>
                  Full Stack Software Development
                </p>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.85rem',
                  margin: '0'
                }}>
                  Graduate 2023
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  margin: '0 0 4px 0'
                }}>
                  AWS Certified Cloud Practitioner
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.85rem',
                  margin: '0'
                }}>
                  2024
                </p>
              </div>
              
              <div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#2d3748',
                  margin: '0 0 4px 0'
                }}>
                  New York Real Estate License
                </h3>
                <p style={{
                  color: '#6b7280',
                  fontSize: '0.85rem',
                  margin: '0'
                }}>
                  NYREI
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;