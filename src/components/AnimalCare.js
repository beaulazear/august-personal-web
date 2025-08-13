import React from 'react';
import { Heart, MapPin, Phone, Mail, Clock, Shield, Star, CheckCircle, Users, Award, ArrowRight, PawPrint, Dog, Cat, Home, Bird } from 'lucide-react';

// Import images
import BeauAndRalph from '../images/BeauAndRalph.JPG';
import JavaLookinCute from '../images/JavaLookinCute.jpeg';
import MooseOnVerandah from '../images/MooseOnVerandah.jpeg';
import WebsiteBanner from '../images/Website-Banner.jpg';
import BeauPic from '../images/BeauPic.jpg';

const AnimalCare = ({ onNavigate }) => {

  const services = [
    {
      icon: Dog,
      title: "Dog Walks",
      description: "Daily walks tailored to your dog's energy level and needs.",
      pricing: [
        "$25 - 20-30 minute walk",
        "$35 - 50-60 minute walk"
      ],
      extras: [
        "Add $10 for additional dog (same household)",
        "Add $5 for solo walk (behavioral, senior)",
        "Add $5 if earlier than 10am / later than 5pm",
        "Photo updates included"
      ]
    },
    {
      icon: Home,
      title: "Pet Sitting",
      description: "Overnight care in your home for maximum comfort.",
      pricing: ["$95 - Overnight pet sitting"],
      extras: [
        "Morning walk + breakfast (7-10am)",
        "Evening walk + dinner (4-6pm)",
        "Bedtime walk (8-11pm)",
        "Extra $15 for 4th midday walk",
        "Add $25 for additional dog",
        "Add $15 for cat care"
      ]
    },
    {
      icon: Cat,
      title: "Cat Visits",
      description: "In-home cat care with feeding, litter, and playtime.",
      pricing: [
        "$25 - One visit (30 minutes)",
        "$40 - Two visits in one day"
      ],
      extras: [
        "Litter box cleaning",
        "Feeding & water refill",
        "Playtime & companionship",
        "Mail collection",
        "Plant watering available"
      ]
    },
    {
      icon: Bird,
      title: "Exotic Animal Care",
      description: "Professional care for birds, reptiles, and small mammals.",
      pricing: ["$30 - One visit (30 minutes)"],
      extras: [
        "Enclosure cleaning",
        "Feeding & water changes",
        "Heat lamp monitoring",
        "Specialized handling",
        "8+ years zoo experience"
      ]
    },
    {
      icon: Heart,
      title: "Euthanasia Support",
      description: "Compassionate support during difficult times.",
      pricing: ["Free of charge 💖"],
      extras: [
        "Emotional support",
        "Accompaniment to appointments",
        "Post-care conversation",
        '"To live in hearts we leave behind is not to die"'
      ]
    }
  ];

  const testimonials = [
    {
      name: "Julie",
      pet: "Ralph",
      image: BeauAndRalph,
      text: "Beau is the absolute best! Like many pet owners, my pup, Ralph, means the world to me and it takes a lot for me to trust someone. Beau always keeps me updated on the walks and any new friends Ralph makes. His daily recap texts include pictures, which I joke is like hiring a professional photographer as an added bonus. Ralph's favorite part of the day is when Beau arrives, knowing he'll get fresh air, lots of love, and a few treats.",
      rating: 5
    },
    {
      name: "Jaimee",
      pet: "Java",
      image: JavaLookinCute,
      text: "I can't recommend Beau enough. Above all, he values each pet's safety and comfort. He is passionate about connecting with and understanding the needs of animals, which I have seen in his connection with Java, our 15-year-old goldendoodle. Beau is reliable, communicative, and extremely thoughtful, and Java is consistently excited to see him.",
      rating: 5
    },
    {
      name: "Carolyn & Patrick",
      pet: "Moose",
      image: MooseOnVerandah,
      text: "I highly recommend Beau as a dog walker and dog sitter. Beau has been regularly walking our dog Moose and has consistently provided excellent care, and our dog absolutely loves him! Beau's extremely accommodating of our schedules and has saved us on multiple occasions when we needed last-minute dog care. I trust Beau completely and am so grateful to have him as Moose's dog walker and dog sitter.",
      rating: 5
    }
  ];

  const features = [
    { icon: Shield, text: "Fully Insured" },
    { icon: Award, text: "8+ Years Experience" },
    { icon: Clock, text: "Flexible Scheduling" },
    { icon: Users, text: "Trusted by 50+ Families" },
    { icon: MapPin, text: "Serving Brooklyn & NYC" },
    { icon: Heart, text: "Former Zookeeper & Vet Assistant" }
  ];

  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Bubblegum+Sans&display=swap');
    
    * { box-sizing: border-box; }
    
    .animal-care-container {
      width: 100%;
      overflow-x: hidden;
      margin-top: 25px;
    }
    
    .section-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .grid-responsive {
      display: grid;
      gap: 32px;
    }
    
    @media (min-width: 768px) {
      .grid-2-cols { grid-template-columns: repeat(2, 1fr); }
    }
    
    @media (min-width: 1024px) {
      .grid-3-cols { grid-template-columns: repeat(3, 1fr); }
    }
    
    @media (max-width: 767px) {
      .grid-2-cols, .grid-3-cols { grid-template-columns: 1fr; }
      .hero-content { text-align: center; }
      .hero-grid { grid-template-columns: 1fr !important; }
      
      /* Mobile logo banner adjustments */
      .logo-banner {
        padding: 0 !important;
      }
      
      .hero-title {
        font-size: 2rem !important;
      }
      
      .hero-subtitle {
        font-size: 1.1rem !important;
      }
      
      .hero-buttons {
        flex-direction: column !important;
        max-width: 300px;
        margin: 0 auto;
      }
      
      .hero-buttons button {
        width: 100%;
        justify-content: center;
      }
      
      .trust-grid {
        grid-template-columns: 1fr !important;
        max-width: 250px;
        margin: 0 auto;
      }
      
      /* Reduce services section padding on mobile */
      .services-section {
        padding: 60px 0 60px !important;
      }
    }
    
    @media (max-width: 480px) {
      .logo-banner {
        padding: 0 !important;
      }
      
      .hero-title {
        font-size: 1.75rem !important;
      }
      
      .hero-subtitle {
        font-size: 1rem !important;
      }
      
      .hero-description {
        font-size: 0.9rem !important;
      }
    }
    
    .hover-card {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    
    .hover-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(74, 144, 226, 0.25);
    }
  `;

  return (
    <>
      <style>{globalStyles}</style>
      
      <div className="animal-care-container" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #E8F4FD 0%, #B8E0FF 50%, #4A90E2 100%)',
        fontFamily: 'Quicksand, sans-serif'
      }}>
        

      {/* Full-Width Logo Banner Section */}
      <section className="logo-banner" style={{
        width: '100%',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        padding: '20px 0 40px 0',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated paw prints background */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: 0.05,
          pointerEvents: 'none'
        }}>
          <PawPrint size={40} color="#4A90E2" style={{ position: 'absolute', top: '20%', left: '10%', transform: 'rotate(-15deg)', animation: 'float 8s ease-in-out infinite' }} />
          <PawPrint size={30} color="#2563EB" style={{ position: 'absolute', top: '60%', left: '85%', transform: 'rotate(25deg)', animation: 'float 6s ease-in-out infinite reverse' }} />
          <PawPrint size={35} color="#4A90E2" style={{ position: 'absolute', top: '40%', left: '5%', transform: 'rotate(-30deg)', animation: 'float 7s ease-in-out infinite' }} />
          <PawPrint size={45} color="#2563EB" style={{ position: 'absolute', top: '70%', right: '15%', transform: 'rotate(10deg)', animation: 'float 9s ease-in-out infinite reverse' }} />
        </div>
        
        <div style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
          animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: 'scale(1)',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.02)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}>
          <img
            src={WebsiteBanner}
            alt="Beau's Animal Care - Professional Pet Care"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              display: 'block',
              filter: 'brightness(1.02) contrast(1.05)',
              borderRadius: '0 0 20px 20px'
            }}
          />
          
          {/* Gradient overlay for depth */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '30%',
            background: 'linear-gradient(to top, rgba(37, 99, 235, 0.05), transparent)',
            pointerEvents: 'none',
            borderRadius: '0 0 20px 20px'
          }} />
        </div>
      </section>

      {/* Hero Section - Title and Content */}
      <section style={{
        padding: '60px 20px 60px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '3px solid #E0E7FF'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Stylish Title */}
          <div style={{
            marginBottom: '40px',
            position: 'relative',
            display: 'inline-block'
          }}>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '20px',
              opacity: 0.8
            }}>
              <PawPrint size={28} color="#4A90E2" style={{ transform: 'rotate(-15deg)' }} />
              <PawPrint size={24} color="#2563EB" style={{ transform: 'rotate(10deg) translateY(-5px)' }} />
              <PawPrint size={28} color="#4A90E2" style={{ transform: 'rotate(-10deg)' }} />
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              margin: 0,
              fontFamily: 'Bubblegum Sans, cursive',
              textAlign: 'center',
              lineHeight: '1.2',
              letterSpacing: '-1px',
              position: 'relative',
              textShadow: '2px 2px 4px rgba(37, 99, 235, 0.2)',
              color: 'transparent',
              background: 'linear-gradient(135deg, #2563EB 0%, #4A90E2 50%, #0EA5E9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'float 3s ease-in-out infinite'
            }}>
              Beau's Animal Care
            </h1>
            
            {/* Subtitle tagline */}
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              color: '#1E293B',
              margin: '8px 0 0 0',
              fontWeight: '600',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textAlign: 'center'
            }}>
              Brooklyn's Trusted Pet Care
            </p>
            
            {/* Decorative underline */}
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, #4A90E2, transparent)',
              margin: '12px auto 0',
              borderRadius: '2px'
            }}></div>
          </div>

          <p className="hero-subtitle" style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            color: '#1E293B',
            margin: '0 0 24px 0',
            fontWeight: '600'
          }}>
            Professional Pet Care with a Personal Touch
          </p>

          <p className="hero-description" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: '#475569',
            maxWidth: '700px',
            margin: '0 auto 48px',
            lineHeight: '1.7'
          }}>
            With over 8 years of professional experience including zookeeping at Prospect Park Zoo 
            and veterinary assisting at ASPCA, I provide personal, trusted pet care for 50+ families in Brooklyn & NYC. 
            As an independent pet care provider since 2019, I work directly with you and partner with a network of trusted independent walkers for backup coverage.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons" style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(135deg, #2563EB 0%, #4A90E2 100%)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: '12px',
                border: 'none',
                fontWeight: '600',
                fontSize: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.3s ease',
                boxShadow: '0 6px 20px rgba(37, 99, 235, 0.35)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Mail size={20} />
              Contact Me
            </button>
            
            <button
              onClick={() => document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'white',
                border: '2px solid #2563EB',
                borderRadius: '12px',
                color: '#2563EB',
                fontWeight: '600',
                padding: '14px 30px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2563EB';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#2563EB';
              }}
            >
              <Star size={20} />
              Testimonials
            </button>
          </div>

          {/* Trust Indicators Grid */}
          <div className="trust-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {features.slice(0, 6).map((feature, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <feature.icon size={20} color="#2563EB" />
                <span style={{
                  color: '#1E293B',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Detailed Pricing */}
      <section id="services" className="services-section animate-fade-in" style={{
        padding: '100px 0 80px',
        background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 100%)'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              margin: '0 0 16px 0',
              color: '#0F172A',
              fontFamily: 'Fredoka, cursive'
            }}>
              Services & Pricing
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#475569'
            }}>
              Personal, flexible pet care directly with me - no corporate middleman
            </p>
          </div>

          <div className="grid-responsive grid-3-cols">
            {services.map((service, index) => (
              <div key={index} className="hover-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 10px 30px rgba(74, 144, 226, 0.15)',
                border: '2px solid #E0E7FF'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#2563EB';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(74, 144, 226, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E0E7FF';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(74, 144, 226, 0.15)';
              }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <service.icon size={28} color="#2563EB" />
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  margin: '0 0 12px 0',
                  color: '#0F172A'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  color: '#475569',
                  lineHeight: '1.6',
                  margin: '0 0 24px 0'
                }}>
                  {service.description}
                </p>

                <div style={{
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '16px',
                  marginBottom: '16px'
                }}>
                  {service.pricing.map((price, i) => (
                    <p key={i} style={{
                      color: '#2563EB',
                      fontWeight: '700',
                      fontSize: '1.125rem',
                      margin: '8px 0'
                    }}>
                      {price}
                    </p>
                  ))}
                </div>

                <div style={{
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '16px'
                }}>
                  {service.extras.map((extra, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      marginBottom: '8px'
                    }}>
                      <CheckCircle size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{
                        color: '#334155',
                        fontSize: '14px',
                        lineHeight: '1.4'
                      }}>
                        {extra}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me & Contact Section */}
      <section id="contact" style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #2563EB 0%, #4A90E2 100%)'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              margin: '0 0 24px 0',
              color: 'white',
              fontFamily: 'Fredoka, cursive',
              letterSpacing: '-0.5px'
            }}>
              Ready to Meet?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Let's schedule a free meet & greet to discuss your pet's needs. 
              No apps, no middlemen – just personal, professional care.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {/* Profile Card */}
            <div style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #F0F9FF 100%)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
              border: '2px solid #E0E7FF'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
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
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    margin: '0 0 4px 0',
                    color: '#0F172A'
                  }}>
                    Beau Lazear
                  </h3>
                  <p style={{
                    color: '#475569',
                    margin: 0,
                    fontSize: '14px'
                  }}>
                    Independent Pet Care Professional
                  </p>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div>
                  <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '2px' }}>Experience</p>
                  <p style={{ color: '#0F172A', fontWeight: '700', margin: 0, fontSize: '14px' }}>8+ Years</p>
                </div>
                <div>
                  <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '2px' }}>Pets Cared</p>
                  <p style={{ color: '#0F172A', fontWeight: '700', margin: 0, fontSize: '14px' }}>200+</p>
                </div>
                <div>
                  <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '2px' }}>Service Area</p>
                  <p style={{ color: '#0F172A', fontWeight: '700', margin: 0, fontSize: '14px' }}>Brooklyn</p>
                </div>
                <div>
                  <p style={{ color: '#64748B', fontSize: '12px', marginBottom: '2px' }}>Availability</p>
                  <p style={{ color: '#0F172A', fontWeight: '700', margin: 0, fontSize: '14px' }}>7 Days</p>
                </div>
              </div>

              {/* Social Links */}
              <div style={{
                display: 'flex',
                gap: '10px',
                flexDirection: 'column'
              }}>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('home')}
                    style={{
                      background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 6px 20px rgba(139, 92, 246, 0.35)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(139, 92, 246, 0.45)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.35)';
                    }}
                  >
                    <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                    View Portfolio
                  </button>
                )}
                
                <a
                  href="https://www.instagram.com/beaus.animal.care"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCB045 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 3px 10px rgba(131, 58, 180, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(131, 58, 180, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 3px 10px rgba(131, 58, 180, 0.3)';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  @beaus.animal.care
                </a>
              </div>
            </div>

            {/* Contact Card */}
            <div style={{
              background: 'white',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(37, 99, 235, 0.2)',
              border: '2px solid #E0E7FF'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                margin: '0 0 24px 0',
                color: '#0F172A'
              }}>
                Get in Touch
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <a
                  href="tel:+17186141878"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '14px',
                    background: 'rgba(37, 99, 235, 0.05)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 99, 235, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <Phone size={20} color="#2563EB" />
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: '0 0 2px 0', color: '#64748B', fontSize: '12px' }}>Call or Text</p>
                    <p style={{ margin: 0, color: '#0F172A', fontWeight: '700', fontSize: '15px' }}>(718) 614-1878</p>
                  </div>
                </a>

                <a
                  href="mailto:beaulazear@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '14px',
                    background: 'rgba(37, 99, 235, 0.05)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 99, 235, 0.1)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(37, 99, 235, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <Mail size={20} color="#2563EB" />
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: '0 0 2px 0', color: '#64748B', fontSize: '12px' }}>Email</p>
                    <p style={{ margin: 0, color: '#0F172A', fontWeight: '700', fontSize: '15px' }}>beaulazear@gmail.com</p>
                  </div>
                </a>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '14px',
                  background: 'rgba(245, 158, 11, 0.05)',
                  borderRadius: '12px'
                }}>
                  <MapPin size={20} color="#2563EB" />
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ margin: '0 0 2px 0', color: '#64748B', fontSize: '12px' }}>Service Area</p>
                    <p style={{ margin: 0, color: '#0F172A', fontWeight: '700', fontSize: '15px' }}>Brooklyn & NYC</p>
                  </div>
                </div>

                <div style={{
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <p style={{
                    fontSize: '13px',
                    color: '#475569',
                    lineHeight: '1.5',
                    margin: 0,
                    textAlign: 'center'
                  }}>
                    Free meet & greet • Flexible scheduling • Direct communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Independent Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #F8FAFC 0%, #F0F9FF 100%)'
      }}>
        <div className="section-container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              margin: '0 0 24px 0',
              color: '#0F172A',
              fontFamily: 'Fredoka, cursive'
            }}>
              Why Choose an Independent Pet Care Provider?
            </h2>

            <p style={{
              color: '#475569',
              fontSize: '1.125rem',
              lineHeight: '1.7',
              marginBottom: '48px'
            }}>
              As an independent pet care provider with zookeeping and veterinary experience, 
              I offer the personal attention and flexibility that your pets deserve. When you work with me, 
              you're supporting local independent pet care professionals, not a corporate service.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              textAlign: 'left'
            }}>
              {[
                "Direct relationship with me - your dedicated walker",
                "No corporate fees or app markups",
                "Flexible scheduling that works for you",
                "Former Zookeeper at Prospect Park Zoo",
                "Veterinary Assistant experience at ASPCA",
                "Network of trusted independent walkers for backup",
                "Supporting local independent pet care professionals",
                "Fully insured"
              ].map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <CheckCircle size={20} color="#059669" />
                  <span style={{ color: '#1E293B', fontWeight: '600' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              margin: '0 0 16px 0',
              color: '#0F172A',
              fontFamily: 'Fredoka, cursive'
            }}>
              Client Testimonials
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#475569'
            }}>
              Don't just take my word for it - hear from happy pet parents!
            </p>
          </div>

          <div className="grid-responsive grid-3-cols">
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #F0F9FF 100%)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 10px 30px rgba(74, 144, 226, 0.12)',
                border: '2px solid #C7D2FE'
              }}>
                {testimonial.image && (
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    margin: '0 auto 24px',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                  }}>
                    <img
                      src={testimonial.image}
                      alt={`${testimonial.pet}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#FBBF24" color="#FBBF24" />
                  ))}
                </div>

                <p style={{
                  color: '#334155',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  marginBottom: '24px',
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}>
                  "{testimonial.text}"
                </p>

                <div style={{
                  textAlign: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid #C7D2FE'
                }}>
                  <p style={{
                    fontWeight: '700',
                    color: '#0F172A',
                    margin: '0 0 4px 0',
                    fontSize: '1.125rem'
                  }}>
                    {testimonial.name}
                  </p>
                  <p style={{
                    color: '#2563EB',
                    fontSize: '14px',
                    margin: 0,
                    fontWeight: '600'
                  }}>
                    Parent of {testimonial.pet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        background: 'white',
        borderTop: '2px solid #C7D2FE',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '16px'
        }}>
          <PawPrint size={24} color="#2563EB" />
          <p style={{
            margin: 0,
            color: '#475569',
            fontSize: '14px'
          }}>
            © 2024 Beau's Animal Care - Independent Pet Services
          </p>
        </div>
        <p style={{
          margin: 0,
          color: '#64748B',
          fontSize: '12px'
        }}>
          Fully insured for your peace of mind • Serving Brooklyn & NYC since 2019
        </p>
      </footer>

      </div>
    </>
  );
};

export default AnimalCare;