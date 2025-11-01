import React from 'react';
import { Heart, MapPin, Phone, Mail, Shield, Star, CheckCircle, Users, Award, ArrowRight, PawPrint, Dog, Cat, Home, Bird } from 'lucide-react';

// Import images
import BeauAndRalph from '../images/BeauAndRalph.JPG';
import JavaLookinCute from '../images/JavaLookinCute.jpeg';
import MooseOnVerandah from '../images/MooseOnVerandah.jpeg';
import BeauPic from '../images/BeauPic.jpg';
import BeauWalkingDogs from '../images/BeauReykaMangoRu.jpeg';

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
        "10+ years zoo experience"
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

  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Bubblegum+Sans&display=swap');
    
    * { box-sizing: border-box; }
    
    .animal-care-container {
      width: 100%;
      overflow-x: hidden;
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
      .hero-content {
        text-align: center;
        align-items: center;
      }
      .hero-grid {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }

      .hero-content > div:first-child {
        justify-content: center !important;
      }

      .hero-buttons {
        justify-content: center !important;
      }

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
        

      {/* Hero Section - Two Column Layout */}
      <section style={{
        padding: '80px 20px 100px',
        background: 'linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 50%, #E0F2FE 100%)',
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
          opacity: 0.03,
          pointerEvents: 'none'
        }}>
          <PawPrint size={60} color="#4A90E2" style={{ position: 'absolute', top: '15%', left: '8%', transform: 'rotate(-15deg)', animation: 'float 8s ease-in-out infinite' }} />
          <PawPrint size={50} color="#2563EB" style={{ position: 'absolute', top: '65%', left: '88%', transform: 'rotate(25deg)', animation: 'float 6s ease-in-out infinite reverse' }} />
          <PawPrint size={55} color="#4A90E2" style={{ position: 'absolute', top: '40%', right: '90%', transform: 'rotate(-30deg)', animation: 'float 7s ease-in-out infinite' }} />
          <PawPrint size={65} color="#2563EB" style={{ position: 'absolute', top: '80%', right: '10%', transform: 'rotate(10deg)', animation: 'float 9s ease-in-out infinite reverse' }} />
        </div>

        <div className="section-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Two Column Grid */}
          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '60px',
            alignItems: 'center'
          }}>

            {/* Left Column - Content */}
            <div className="hero-content" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Decorative paw prints */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px'
              }}>
                <PawPrint size={28} color="#4A90E2" style={{ opacity: 0.7, transform: 'rotate(-15deg)' }} />
                <PawPrint size={24} color="#2563EB" style={{ opacity: 0.7 }} />
                <PawPrint size={28} color="#4A90E2" style={{ opacity: 0.7, transform: 'rotate(15deg)' }} />
              </div>

              <h1 className="hero-title" style={{
                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '700',
                margin: 0,
                fontFamily: 'Fredoka, sans-serif',
                lineHeight: '1.1',
                letterSpacing: '-1px',
                color: 'transparent',
                background: 'linear-gradient(135deg, #2563EB 0%, #4A90E2 50%, #0EA5E9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '3px 3px 6px rgba(37, 99, 235, 0.15)'
              }}>
                Beau's Animal Care
              </h1>

              <p className="hero-subtitle" style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                color: '#1E293B',
                margin: 0,
                fontWeight: '600',
                fontFamily: 'Fredoka, sans-serif',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Brooklyn's Trusted Pet Care
              </p>

              <div style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #4A90E2, #2563EB)',
                borderRadius: '2px'
              }}></div>

              <p className="hero-description" style={{
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                color: '#475569',
                lineHeight: '1.8',
                margin: 0,
                fontFamily: 'Quicksand, sans-serif'
              }}>
                With over 10 years of professional experience including zookeeping at Prospect Park Zoo
                and veterinary assisting at ASPCA, I provide personal, trusted pet care for 50+ families in Brooklyn & NYC.
              </p>

              {/* Trust Badges */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                marginTop: '8px'
              }}>
                {[
                  { icon: Shield, text: "Fully Insured" },
                  { icon: Award, text: "10+ Years" },
                  { icon: Users, text: "50+ Families" }
                ].map((feature, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    border: '2px solid #E0E7FF',
                    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.1)'
                  }}>
                    <feature.icon size={18} color="#2563EB" />
                    <span style={{
                      color: '#1E293B',
                      fontSize: '14px',
                      fontWeight: '600',
                      fontFamily: 'Fredoka, sans-serif'
                    }}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hero-buttons" style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                marginTop: '16px'
              }}>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'linear-gradient(135deg, #2563EB 0%, #4A90E2 100%)',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '14px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '16px',
                    fontFamily: 'Fredoka, sans-serif',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 99, 235, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.35)';
                  }}
                >
                  <Mail size={20} />
                  Get In Touch
                </button>

                <button
                  onClick={() => document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'white',
                    border: '2px solid #2563EB',
                    borderRadius: '14px',
                    color: '#2563EB',
                    fontWeight: '600',
                    fontFamily: 'Fredoka, sans-serif',
                    padding: '14px 30px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 15px rgba(37, 99, 235, 0.15)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#2563EB';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#2563EB';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 99, 235, 0.15)';
                  }}
                >
                  <Star size={20} />
                  Testimonials
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div style={{
              position: 'relative',
              animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards',
              maxWidth: '420px',
              margin: '0 auto',
              width: '100%'
            }}>
              {/* Decorative background blur */}
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(74, 144, 226, 0.15) 100%)',
                borderRadius: '32px',
                filter: 'blur(20px)',
                zIndex: 0
              }}></div>

              <div style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(37, 99, 235, 0.25), 0 15px 35px rgba(0, 0, 0, 0.1)',
                border: '4px solid white',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 70px rgba(37, 99, 235, 0.35), 0 20px 45px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(37, 99, 235, 0.25), 0 15px 35px rgba(0, 0, 0, 0.1)';
              }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={BeauWalkingDogs}
                    alt="Beau walking dogs in Brooklyn - Professional Pet Care"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      aspectRatio: '3/4'
                    }}
                  />
                  {/* Gradient overlay for better badge visibility */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '120px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)',
                    pointerEvents: 'none'
                  }}></div>
                </div>

                {/* Overlay badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(12px)',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  border: '2px solid rgba(37, 99, 235, 0.1)'
                }}>
                  <Award size={20} color="#2563EB" />
                  <span style={{
                    color: '#0F172A',
                    fontWeight: '700',
                    fontSize: '14px',
                    fontFamily: 'Fredoka, sans-serif',
                    letterSpacing: '0.3px'
                  }}>
                    10+ Years Experience
                  </span>
                  <PawPrint size={16} color="#4A90E2" />
                </div>
              </div>
            </div>

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
                marginBottom: '24px',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                  border: '2px solid white'
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
                <div style={{ textAlign: 'left' }}>
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
                  <p style={{ color: '#0F172A', fontWeight: '700', margin: 0, fontSize: '14px' }}>10+ Years</p>
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
              color: '#475569',
              marginBottom: '24px'
            }}>
              Don't just take my word for it - hear from happy pet parents!
            </p>

            {/* Google Reviews Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'white',
              padding: '16px 24px',
              borderRadius: '16px',
              boxShadow: '0 6px 20px rgba(74, 144, 226, 0.15)',
              border: '2px solid #E0E7FF',
              marginBottom: '8px'
            }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#FBBF24" color="#FBBF24" />
                ))}
              </div>
              <span style={{
                color: '#0F172A',
                fontWeight: '700',
                fontSize: '1.125rem',
                fontFamily: 'Fredoka, sans-serif'
              }}>
                5.0 on Google
              </span>
            </div>
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

          {/* Google Reviews CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: '64px'
          }}>
            <a
              href="https://www.google.com/search?q=Beau%27s+Animal+Care+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'white',
                color: '#2563EB',
                padding: '18px 36px',
                borderRadius: '16px',
                border: '3px solid #2563EB',
                fontWeight: '700',
                fontSize: '1.125rem',
                fontFamily: 'Fredoka, sans-serif',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.2)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2563EB';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(37, 99, 235, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#2563EB';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 99, 235, 0.2)';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Read All Google Reviews
              <ArrowRight size={20} />
            </a>
            <p style={{
              color: '#64748B',
              fontSize: '14px',
              marginTop: '16px',
              fontFamily: 'Quicksand, sans-serif'
            }}>
              See what other pet parents are saying about Beau's Animal Care
            </p>
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