import React, { useState, useEffect } from 'react';
import { Mail, Send, User, MessageSquare, CheckCircle, AlertCircle, Check, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .contact-container {
    animation: fadeIn 0.6s ease-out;
  }
  
  .floating-input {
    width: 100%;
    padding: 16px 20px;
    font-size: 16px;
    border: 2px solid;
    border-radius: 12px;
    background: white;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: 'Quicksand', sans-serif;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    font-weight: 600;
    color: #1a202c;
  }
  
  .floating-input:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
    transform: translateY(-1px);
  }
  
  .floating-input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .floating-textarea {
    width: 100%;
    padding: 16px 20px;
    font-size: 16px;
    border: 2px solid;
    border-radius: 12px;
    background: white;
    transition: all 0.3s ease;
    resize: vertical;
    min-height: 130px;
    font-family: 'Quicksand', sans-serif;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    font-weight: 600;
    color: #1a202c;
  }
  
  .floating-textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2), 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #667eea;
    transform: translateY(-1px);
  }
  
  .submit-button {
    background: linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%);
    border: none;
    border-radius: 12px;
    color: white;
    font-weight: 700;
    padding: 16px 32px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  
  .submit-button::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .submit-button:hover::after {
    opacity: 1;
  }
  
  .submit-button:hover:not(:disabled) {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
  }
  
  .submit-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #cbd5e0;
    border-color: #a0aec0;
    color: #718096;
  }
  
  @media (max-width: 640px) {
    .floating-input, .floating-textarea {
      font-size: 16px; /* Prevents zoom on iOS */
      padding: 12px 14px;
      width: 100% !important;
    }
    
    .floating-textarea {
      min-height: 120px;
    }
    
    .submit-button {
      padding: 14px 20px;
      font-size: 15px;
      width: 100% !important;
    }
  }
`;

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailValid, setEmailValid] = useState(null);
  const [touched, setTouched] = useState({
    from_name: false,
    from_email: false,
    message: false
  });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  const SERVICE_ID = 'service_kqz5x4o';
  const TEMPLATE_ID = 'template_3ba6d27';
  const PUBLIC_KEY = '11CxjbisIoTlyftVb';

  useEffect(() => {
    window.scrollTo(0, 0);
    emailjs.init(PUBLIC_KEY);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
      setSuccess('Message sent! I\'ll get back to you within 24 hours.');
      setFormData({ from_name: '', from_email: '', message: '' });

    } catch (error) {
      console.error('Failed to send email:', error);
      setError('Failed to send. Please email me directly at beaulazear@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError('');
    if (success) setSuccess('');
    
    // Real-time email validation
    if (field === 'from_email' && value) {
      setEmailValid(validateEmail(value));
    } else if (field === 'from_email' && !value) {
      setEmailValid(null);
    }
  };

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const isFormValid = () => {
    return formData.from_name.trim() && 
           validateEmail(formData.from_email) && 
           formData.message.trim().length >= 10;
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%)',
      fontFamily: 'Quicksand, sans-serif',
      paddingTop: windowWidth <= 640 ? '100px' : '120px',
      position: 'relative',
      overflowX: 'hidden',
      overflowY: 'auto'
    }}>
      <style>{globalStyles}</style>

      {/* Decorative circles */}
      {windowWidth > 640 && (
        <>
          <div style={{
            position: 'absolute',
            top: '100px',
            right: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(60px)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '100px',
            left: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.08)',
            filter: 'blur(80px)'
          }} />
        </>
      )}
      
      <div style={{
        width: '100%',
        maxWidth: windowWidth <= 640 ? '100%' : '600px',
        margin: '0 auto',
        padding: windowWidth <= 640 ? '20px 12px 80px' : '60px 20px 100px',
        position: 'relative',
        zIndex: 1,
        boxSizing: 'border-box'
      }}>
        
        {/* Title Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: windowWidth <= 640 ? '30px' : '60px'
        }}>
          <h1 style={{
            fontSize: windowWidth <= 640 ? '1.75rem' : 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            color: 'white',
            margin: '0 0 8px 0',
            lineHeight: '1.2',
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
          }}>
            Let's Create Together
          </h1>
          <p style={{
            fontSize: windowWidth <= 640 ? '0.95rem' : 'clamp(1.1rem, 3vw, 1.3rem)',
            color: 'rgba(255, 255, 255, 0.9)',
            margin: 0,
            lineHeight: '1.4',
            fontWeight: '500',
            padding: '0 10px'
          }}>
            I'm excited to hear about your ideas
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: windowWidth <= 640 ? '18px' : '24px',
          background: 'rgba(255, 255, 255, 0.98)',
          padding: windowWidth <= 640 ? '20px 16px' : '48px',
          borderRadius: windowWidth <= 640 ? '16px' : '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
          backdropFilter: 'blur(10px)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          
          {/* Name Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: windowWidth <= 640 ? '14px' : '15px',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '6px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={16} />
                Name
              </span>
              {touched.from_name && formData.from_name.trim() && (
                <Check size={16} style={{ color: '#059669' }} />
              )}
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={formData.from_name}
              onChange={(e) => handleInputChange('from_name', e.target.value)}
              onBlur={() => handleBlur('from_name')}
              disabled={isSubmitting}
              className="floating-input"
              style={{
                borderColor: touched.from_name && !formData.from_name.trim() 
                  ? '#dc2626' 
                  : touched.from_name && formData.from_name.trim() 
                  ? '#059669' 
                  : '#d1d5db'
              }}
            />
            {touched.from_name && !formData.from_name.trim() && (
              <p style={{ color: '#dc2626', fontSize: '13px', marginTop: '6px', fontWeight: '600' }}>Name is required</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: windowWidth <= 640 ? '14px' : '15px',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '6px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} />
                Email
              </span>
              {formData.from_email && (
                emailValid ? (
                  <Check size={16} style={{ color: '#059669' }} />
                ) : (
                  <X size={16} style={{ color: '#dc2626' }} />
                )
              )}
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              value={formData.from_email}
              onChange={(e) => handleInputChange('from_email', e.target.value)}
              onBlur={() => handleBlur('from_email')}
              disabled={isSubmitting}
              className="floating-input"
              style={{
                borderColor: formData.from_email && !emailValid 
                  ? '#dc2626' 
                  : formData.from_email && emailValid 
                  ? '#059669' 
                  : '#d1d5db'
              }}
            />
            {touched.from_email && formData.from_email && !emailValid && (
              <p style={{ color: '#dc2626', fontSize: '13px', marginTop: '6px', fontWeight: '600' }}>Please enter a valid email address</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: windowWidth <= 640 ? '14px' : '15px',
              fontWeight: '700',
              color: '#1a202c',
              marginBottom: '6px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={16} />
                Message
              </span>
              {touched.message && formData.message.trim().length >= 10 && (
                <Check size={16} style={{ color: '#059669' }} />
              )}
            </label>
            <textarea
              placeholder="Describe your project or message (minimum 10 characters)"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              disabled={isSubmitting}
              className="floating-textarea"
              style={{
                borderColor: touched.message && formData.message.trim().length < 10 
                  ? '#dc2626' 
                  : touched.message && formData.message.trim().length >= 10 
                  ? '#059669' 
                  : '#d1d5db'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
              {touched.message && formData.message.trim().length < 10 ? (
                <p style={{ color: '#dc2626', fontSize: '13px', fontWeight: '600' }}>Message must be at least 10 characters</p>
              ) : (
                <span></span>
              )}
              <p style={{ color: '#4b5563', fontSize: '13px', fontWeight: '500' }}>{formData.message.length} characters</p>
            </div>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 18px',
              background: '#fef2f2',
              borderRadius: '12px',
              color: '#991b1b',
              border: '2px solid #dc2626',
              fontWeight: '600'
            }}>
              <AlertCircle size={20} />
              <span style={{ fontSize: '15px' }}>{error}</span>
            </div>
          )}

          {success && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 18px',
              background: '#f0fdf4',
              borderRadius: '12px',
              color: '#14532d',
              border: '2px solid #059669',
              fontWeight: '600'
            }}>
              <CheckCircle size={20} />
              <span style={{ fontSize: '15px' }}>{success}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            className="submit-button"
          >
            {isSubmitting ? (
              <>
                <span style={{
                  width: '20px',
                  height: '20px',
                  border: '2px solid white',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 0.8s linear infinite'
                }}></span>
                Sending...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Alternative Contact */}
        <div style={{
          textAlign: 'center',
          marginTop: windowWidth <= 640 ? '24px' : '60px',
          padding: windowWidth <= 640 ? '20px 16px' : '40px',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '16px',
          border: '2px solid rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <p style={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: '16px',
            margin: '0 0 12px 0',
            fontWeight: '500'
          }}>
            Prefer a direct conversation?
          </p>
          <a
            href="mailto:beaulazear@gmail.com"
            style={{
              color: 'white',
              fontWeight: '700',
              textDecoration: 'none',
              fontSize: '18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <Mail size={20} />
            beaulazear@gmail.com
          </a>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}