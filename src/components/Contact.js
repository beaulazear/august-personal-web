import React, { useState, useEffect } from 'react';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const globalStyles = `
  .contact-fade-in-up {
    animation: contactFadeInUp 0.8s ease-out;
  }
  
  .contact-slide-in-right {
    animation: contactSlideInRight 0.8s ease-out;
  }
  
  @keyframes contactFadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes contactSlideInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  .contact-glass-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
  
  .contact-primary-button {
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
  
  .contact-primary-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  .contact-primary-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
  
  .contact-input {
    width: 100%;
    padding: 16px 20px;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
    background: rgba(255, 255, 255, 0.8);
    color: #2d3748;
    transition: all 0.3s ease;
    box-sizing: border-box;
    outline: none;
  }
  
  .contact-input:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    background: rgba(255, 255, 255, 1);
  }
  
  .contact-input::placeholder {
    color: #9ca3af;
  }
  
  @media (max-width: 768px) {
    .contact-input {
      padding: 14px 16px;
      font-size: 14px;
    }
    
    .contact-primary-button {
      padding: 14px 24px;
      font-size: 14px;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const SERVICE_ID = 'service_kqz5x4o';
  const TEMPLATE_ID = 'template_3ba6d27';
  const PUBLIC_KEY = '11CxjbisIoTlyftVb';

  useEffect(() => {
    window.scrollTo(0, 0);
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      setError('Please fill out all fields.');
      setSuccess('');
      return;
    }

    if (!formData.from_email.includes('@')) {
      setError('Please enter a valid email address.');
      setSuccess('');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: 'beaulazear@gmail.com',
        }
      );

      console.log('Email sent successfully:', result);
      setSuccess('Message sent successfully! I\'ll get back to you within 24 hours.');
      setFormData({ from_name: '', from_email: '', message: '' });

    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: 'Inter, sans-serif',
      padding: '40px 20px'
    }}>
      <style>{globalStyles}</style>

      {/* Hero Section */}
      <section style={{ 
        padding: '60px 20px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <div className="contact-fade-in-up">
            <div style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#667eea',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '16px'
            }}>
              Let's Connect
            </div>
            
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              margin: '0 0 24px 0',
              color: '#2d3748'
            }}>
              Get In Touch
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto 48px',
              lineHeight: '1.7'
            }}>
              I'd love to hear about your project or opportunity. 
              Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={{ 
        padding: '0 20px 60px'
      }}>
        <div style={{ 
          maxWidth: '700px',
          margin: '0 auto'
        }}>
          <div className="contact-glass-card contact-slide-in-right" style={{
            padding: '48px'
          }}>
            
            {/* Contact Info */}
            <div style={{
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2d3748',
                margin: '0 0 16px 0'
              }}>
                Ready to Start Something Great?
              </h2>
              <p style={{
                color: '#6b7280',
                fontSize: '1rem',
                margin: '0',
                lineHeight: '1.6'
              }}>
                Fill out the form below and I'll get back to you within 24 hours. 
                Or email me directly at <strong style={{ color: '#667eea' }}>beaulazear@gmail.com</strong>
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {/* Name Field */}
                <div style={{ flex: '1', minWidth: '200px' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    <User size={16} />
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.from_name}
                    onChange={(e) => handleInputChange('from_name', e.target.value)}
                    disabled={isSubmitting}
                    className="contact-input"
                  />
                </div>

                {/* Email Field */}
                <div style={{ flex: '1', minWidth: '200px' }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '8px'
                  }}>
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.from_email}
                    onChange={(e) => handleInputChange('from_email', e.target.value)}
                    disabled={isSubmitting}
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  marginBottom: '8px'
                }}>
                  <MessageSquare size={16} />
                  Project Details
                </label>
                <textarea
                  placeholder="Tell me about your project, timeline, budget, and how I can help bring your vision to life..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  disabled={isSubmitting}
                  className="contact-input"
                  style={{
                    minHeight: '140px',
                    resize: 'vertical',
                    fontFamily: 'Inter, sans-serif'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-primary-button"
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  fontSize: '16px',
                  padding: '18px 32px'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid transparent',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success/Error Messages */}
              {success && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: '12px',
                  color: '#059669',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  <CheckCircle size={18} />
                  {success}
                </div>
              )}

              {error && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '16px 20px',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '12px',
                  color: '#dc2626',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  <AlertCircle size={18} />
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* Additional Contact Options */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginTop: '32px'
          }}>
            <div className="contact-glass-card" style={{
              padding: '24px',
              textAlign: 'center'
            }}>
              <Mail size={24} color="#667eea" style={{ marginBottom: '12px' }} />
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#2d3748',
                margin: '0 0 8px 0'
              }}>
                Email Me Directly
              </h3>
              <a
                href="mailto:beaulazear@gmail.com"
                style={{
                  color: '#667eea',
                  textDecoration: 'none',
                  fontSize: '14px'
                }}
              >
                beaulazear@gmail.com
              </a>
            </div>

            <div className="contact-glass-card" style={{
              padding: '24px',
              textAlign: 'center'
            }}>
              <CheckCircle size={24} color="#10b981" style={{ marginBottom: '12px' }} />
              <h3 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#2d3748',
                margin: '0 0 8px 0'
              }}>
                Quick Response
              </h3>
              <p style={{
                color: '#6b7280',
                fontSize: '14px',
                margin: '0'
              }}>
                24 hour response time
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;