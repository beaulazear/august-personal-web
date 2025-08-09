import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Clock, Shield, Star, CheckCircle, Calendar, Users, Award, ArrowRight, Menu, X, PawPrint, Dog, Cat, Home, ChevronLeft, ChevronRight, Bird } from 'lucide-react';

// Import images
import BeauAndRalph from '../images/BeauAndRalph.JPG';
import JavaLookinCute from '../images/JavaLookinCute.jpeg';
import MooseOnVerandah from '../images/MooseOnVerandah.jpeg';
import BeauAndHornbill from '../images/BeauAndHornbill.jpeg';
import BeauAndRu from '../images/BeauAndRu.JPG';
import BeauReykaMangoRu from '../images/BeauReykaMangoRu.jpeg';
import BeauTwoDogs from '../images/BeauTwoDogs.jpg';
import BeauWithAbe from '../images/BeauWithAbe.jpeg';
import Marmoset from '../images/Marmoset.JPG';
import BeauAndAlpaca from '../images/BeauAndAlpaca.JPG';
import GraphicTwo from '../images/GraphicTwo.png';
import CroppedBeau from '../images/CroppedBeau.jpeg';

const AnimalCare = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    { src: BeauReykaMangoRu, caption: "Fun group walks with furry friends" },
    { src: BeauAndHornbill, caption: "Professional zookeeping experience" },
    { src: BeauTwoDogs, caption: "Double the dogs, double the fun!" },
    { src: Marmoset, caption: "Exotic animal care expertise" },
    { src: BeauAndRu, caption: "Building trust with every visit" },
    { src: BeauWithAbe, caption: "Gentle care for all personalities" },
    { src: BeauAndAlpaca, caption: "Experience with all species" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

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
      name: "Anna",
      pet: "Ruthie",
      text: "From the moment Ruthie met Beau, she was in love. We say his name and her tail wags with delight. And if we had tails, we'd wag them too! Beau is communicative and professional, providing clear and detailed walking reports and pet sits. We trust him profoundly with our excitable and sometimes stubborn mini goldendoodle. He loves her as if she were his own, with great care and compassion.",
      rating: 5
    },
    {
      name: "Vanessa",
      pet: "River",
      text: "Admittedly, it's not easy for me to leave my pup, River, with anyone… except for Beau. I met Beau at a nearby dog park and knew instantly that he was a genuine and compassionate animal lover. He proves that time and time again, going above and beyond to keep River happy and safe. We are incredibly grateful that we found Beau and could not possibly recommend him more!",
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
    { icon: Shield, text: "Fully Insured & Bonded" },
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
      
      /* Mobile hero section adjustments */
      .hero-image {
        width: 140px !important;
        height: 140px !important;
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
      .hero-image {
        width: 120px !important;
        height: 120px !important;
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
      box-shadow: 0 12px 40px rgba(251, 191, 36, 0.15);
    }
  `;

  return (
    <>
      <style>{globalStyles}</style>
      
      <div className="animal-care-container" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 50%, #fbbf24 100%)',
        fontFamily: 'Inter, sans-serif'
      }}>
        
      {/* Navigation */}
      <nav style={{
        background: 'rgba(255, 255, 255, 0.98)',
        backdropFilter: 'blur(20px)',
        borderBottom: '2px solid #fbbf24',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '16px 0',
        boxShadow: '0 4px 20px rgba(251, 191, 36, 0.1)'
      }}>
        <div className="section-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <PawPrint size={32} color="#f59e0b" />
            <h1 style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              margin: 0,
              background: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Beau's Animal Care
            </h1>
          </div>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center'
          }} className="desktop-menu">
            <a href="#services" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
               onMouseLeave={(e) => e.target.style.color = '#4b5563'}>Services</a>
            <a href="#gallery" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
               onMouseLeave={(e) => e.target.style.color = '#4b5563'}>Gallery</a>
            <a href="#testimonials" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
               onMouseLeave={(e) => e.target.style.color = '#4b5563'}>Reviews</a>
            <a href="#contact" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600', transition: 'color 0.3s' }}
               onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
               onMouseLeave={(e) => e.target.style.color = '#4b5563'}>Contact</a>
            {onNavigate && (
              <button
                onClick={() => onNavigate('home')}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                }}
              >
                Back to Portfolio
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#4b5563'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'white',
            borderBottom: '2px solid #fbbf24',
            padding: '20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <a href="#services" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600' }}>Services</a>
              <a href="#gallery" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600' }}>Gallery</a>
              <a href="#testimonials" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600' }}>Reviews</a>
              <a href="#contact" style={{ color: '#4b5563', textDecoration: 'none', fontWeight: '600' }}>Contact</a>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('home')}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '14px',
                    width: 'fit-content'
                  }}
                >
                  Back to Portfolio
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Matching Home Page Style */}
      <section style={{
        padding: '80px 20px 60px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          {/* Main Graphic Image at Top */}
          <div className="hero-image" style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            overflow: 'hidden',
            margin: '0 auto 32px',
            border: '4px solid white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img
              src={GraphicTwo}
              alt="Beau's Animal Care - Professional Pet Care"
              style={{
                width: '90%',
                height: '90%',
                objectFit: 'contain'
              }}
            />
          </div>

          <h1 className="hero-title" style={{
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            fontWeight: '700',
            margin: '0 0 16px 0',
            background: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2',
            fontFamily: 'Fredoka, cursive',
            letterSpacing: '-0.5px'
          }}>
            Beau's Animal Care
          </h1>

          <p className="hero-subtitle" style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
            color: '#4a5568',
            margin: '0 0 24px 0',
            fontWeight: '500'
          }}>
            Professional Pet Care with a Personal Touch
          </p>

          <p className="hero-description" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto 32px',
            lineHeight: '1.7'
          }}>
            With over 8 years of professional experience including zookeeping at Prospect Park Zoo 
            and veterinary assisting at ASPCA, I provide trusted pet care for 50+ families in Brooklyn & NYC.
          </p>

          {/* Trusted Since Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(245, 158, 11, 0.1)',
            padding: '8px 16px',
            borderRadius: '24px',
            marginBottom: '32px'
          }}>
            <Star size={16} color="#f59e0b" />
            <span style={{ color: '#f59e0b', fontWeight: '600', fontSize: '14px' }}>
              Trusted Since 2019
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="hero-buttons" style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px'
          }}>
            <button
              onClick={() => navigate('/contact')}
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)',
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
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Mail size={20} />
              Contact Me
            </button>
            
            <button
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent',
                border: '2px solid #f59e0b',
                borderRadius: '12px',
                color: '#f59e0b',
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
                e.currentTarget.style.background = '#f59e0b';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#f59e0b';
              }}
            >
              <PawPrint size={20} />
              View Services
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
                <feature.icon size={20} color="#f59e0b" />
                <span style={{
                  color: '#4b5563',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {feature.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section - Modern Compact Design */}
      <section id="gallery" style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.2) 0%, rgba(253, 230, 138, 0.2) 100%)'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.25rem)',
              fontWeight: '600',
              margin: '0 0 12px 0',
              color: '#1f2937',
              fontFamily: 'Fredoka, cursive'
            }}>
              My Furry Friends
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#6b7280',
              fontFamily: 'Inter, sans-serif'
            }}>
              Professional care for every personality
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto',
            height: '400px'
          }}>
            {/* Main Image */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)'
            }}>
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Overlay Caption */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                padding: '30px 20px 20px',
                color: 'white'
              }}>
                <p style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  margin: 0,
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {galleryImages[currentImageIndex].caption}
                </p>
              </div>

              {/* Sleek Navigation Buttons */}
              <button
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '12px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronLeft size={20} color="#1f2937" />
              </button>

              <button
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '12px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
                  opacity: 0.8
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                }}
              >
                <ChevronRight size={20} color="#1f2937" />
              </button>
            </div>

            {/* Thumbnail Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gridTemplateRows: 'repeat(3, 1fr)',
              gap: '10px',
              height: '100%'
            }}>
              {galleryImages.slice(0, 6).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: currentImageIndex === index ? '3px solid #f59e0b' : '3px solid transparent',
                    transition: 'all 0.3s ease',
                    padding: 0,
                    background: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (currentImageIndex !== index) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <img
                    src={image.src}
                    alt=""
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: currentImageIndex === index ? 'none' : 'brightness(0.9)'
                    }}
                  />
                  {currentImageIndex === index && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(245, 158, 11, 0.2)',
                      pointerEvents: 'none'
                    }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Progress Dots */}
          <div style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            marginTop: '24px',
            marginBottom: '40px'
          }}>
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                style={{
                  width: currentImageIndex === index ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: currentImageIndex === index ? '#f59e0b' : '#e5e7eb',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0
                }}
              />
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            #gallery .section-container > div:nth-child(2) {
              grid-template-columns: 1fr !important;
              height: auto !important;
            }
            #gallery .section-container > div:nth-child(2) > div:first-child {
              height: 300px;
            }
            #gallery .section-container > div:nth-child(2) > div:last-child {
              grid-template-columns: repeat(3, 1fr) !important;
              grid-template-rows: repeat(2, 1fr) !important;
              height: 150px;
              margin-top: 10px;
            }
          }
        `}</style>
      </section>

      {/* Services Section with Detailed Pricing */}
      <section id="services" className="services-section" style={{
        padding: '120px 0 80px',
        background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.5) 0%, rgba(253, 230, 138, 0.5) 100%)'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '600',
              margin: '0 0 16px 0',
              color: '#1f2937',
              fontFamily: 'Fredoka, cursive'
            }}>
              Services and Pricing
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280'
            }}>
              Comprehensive pet care tailored to your needs
            </p>
          </div>

          <div className="grid-responsive grid-3-cols">
            {services.map((service, index) => (
              <div key={index} className="hover-card" style={{
                background: 'white',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#fbbf24';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <service.icon size={28} color="#f59e0b" />
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  margin: '0 0 12px 0',
                  color: '#1f2937'
                }}>
                  {service.title}
                </h3>

                <p style={{
                  color: '#6b7280',
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
                      color: '#f59e0b',
                      fontWeight: '600',
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
                      <CheckCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{
                        color: '#4b5563',
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

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.3) 0%, rgba(253, 230, 138, 0.3) 100%)'
      }}>
        <div className="section-container">
          <div style={{
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '600',
              margin: '0 0 16px 0',
              color: '#1f2937',
              fontFamily: 'Fredoka, cursive'
            }}>
              Client Testimonials
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: '#6b7280'
            }}>
              Don't just take my word for it - hear from happy pet parents!
            </p>
          </div>

          <div className="grid-responsive grid-3-cols">
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: 'linear-gradient(135deg, #fff 0%, #fef3c7 100%)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '2px solid #fde68a'
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
                    <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>

                <p style={{
                  color: '#4b5563',
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
                  borderTop: '1px solid #fde68a'
                }}>
                  <p style={{
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: '0 0 4px 0',
                    fontSize: '1.125rem'
                  }}>
                    {testimonial.name}
                  </p>
                  <p style={{
                    color: '#f59e0b',
                    fontSize: '14px',
                    margin: 0,
                    fontWeight: '500'
                  }}>
                    Parent of {testimonial.pet}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.3) 0%, rgba(253, 230, 138, 0.3) 100%)'
      }}>
        <div className="section-container">
          <div className="grid-responsive grid-2-cols" style={{
            gap: '64px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                fontWeight: '600',
                margin: '0 0 24px 0',
                color: '#1f2937',
                fontFamily: 'Fredoka, cursive'
              }}>
                Why Choose Beau's Animal Care?
              </h2>

              <p style={{
                color: '#6b7280',
                fontSize: '1.125rem',
                lineHeight: '1.7',
                marginBottom: '32px'
              }}>
                With my background as a zookeeper at Prospect Park Zoo and veterinary assistant at ASPCA, 
                I bring professional animal care expertise to every visit. Your pets aren't just clients - 
                they're family to me.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                {[
                  "Former Zookeeper at Prospect Park Zoo (WCS)",
                  "Veterinary Assistant at ASPCA",
                  "8+ years of professional animal care",
                  "Trusted by over 50 families in Brooklyn",
                  "Available for emergencies and last-minute needs",
                  "Regular photo updates during every visit",
                  "Fully insured and bonded"
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <CheckCircle size={20} color="#10b981" />
                    <span style={{ color: '#4b5563', fontWeight: '500' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
              border: '2px solid #fde68a'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                }}>
                  <img
                    src={CroppedBeau}
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
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    margin: '0 0 4px 0',
                    color: '#1f2937'
                  }}>
                    Beau Lazear
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    margin: 0
                  }}>
                    Founder & Lead Pet Care Specialist
                  </p>
                </div>
              </div>

              <div style={{
                borderTop: '1px solid #e5e7eb',
                paddingTop: '24px'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '24px'
                }}>
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Experience</p>
                    <p style={{ color: '#1f2937', fontWeight: '600', margin: 0 }}>8+ Years</p>
                  </div>
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Pets Cared For</p>
                    <p style={{ color: '#1f2937', fontWeight: '600', margin: 0 }}>200+</p>
                  </div>
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Service Area</p>
                    <p style={{ color: '#1f2937', fontWeight: '600', margin: 0 }}>Brooklyn & NYC</p>
                  </div>
                  <div>
                    <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '4px' }}>Availability</p>
                    <p style={{ color: '#1f2937', fontWeight: '600', margin: 0 }}>7 Days/Week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '0 20px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '600',
            margin: '0 0 24px 0',
            color: 'white',
            fontFamily: 'Fredoka, cursive'
          }}>
            Ready to Get Started?
          </h2>

          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '48px',
            lineHeight: '1.7'
          }}>
            Schedule a free meet & greet to discuss your pet's needs and see if we're the right fit.
          </p>

          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <a
                href="tel:+17186141878"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: 'rgba(245, 158, 11, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245, 158, 11, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(245, 158, 11, 0.05)'}
              >
                <Phone size={24} color="#f59e0b" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>Call or Text</p>
                  <p style={{ margin: 0, color: '#1f2937', fontWeight: '600' }}>(718) 614-1878</p>
                </div>
              </a>

              <a
                href="mailto:beaulazear@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  background: 'rgba(245, 158, 11, 0.05)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(245, 158, 11, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(245, 158, 11, 0.05)'}
              >
                <Mail size={24} color="#f59e0b" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>Email</p>
                  <p style={{ margin: 0, color: '#1f2937', fontWeight: '600' }}>beaulazear@gmail.com</p>
                </div>
              </a>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px',
                background: 'rgba(245, 158, 11, 0.05)',
                borderRadius: '12px'
              }}>
                <MapPin size={24} color="#f59e0b" />
                <div style={{ textAlign: 'left' }}>
                  <p style={{ margin: '0 0 4px 0', color: '#6b7280', fontSize: '14px' }}>Service Area</p>
                  <p style={{ margin: 0, color: '#1f2937', fontWeight: '600' }}>Brooklyn & NYC</p>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '32px',
              paddingTop: '32px',
              borderTop: '1px solid #e5e7eb'
            }}>
              <button
                onClick={() => navigate('/contact')}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #f59e0b 0%, #dc2626 100%)',
                  color: 'white',
                  padding: '16px',
                  borderRadius: '12px',
                  border: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease',
                  boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Mail size={20} />
                Contact Me for Pet Care
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        background: 'white',
        borderTop: '2px solid #fde68a',
        textAlign: 'center'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '16px'
        }}>
          <PawPrint size={24} color="#f59e0b" />
          <p style={{
            margin: 0,
            color: '#6b7280',
            fontSize: '14px'
          }}>
            © 2024 Beau's Animal Care. All rights reserved.
          </p>
        </div>
        <p style={{
          margin: 0,
          color: '#9ca3af',
          fontSize: '12px'
        }}>
          Fully insured and bonded for your peace of mind • Serving Brooklyn & NYC since 2019
        </p>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
      </div>
    </>
  );
};

export default AnimalCare;