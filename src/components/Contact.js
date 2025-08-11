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
    padding: 18px 24px;
    font-size: 16px;
    border: 2px solid;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.98);
    transition: all 0.3s ease;
    font-family: 'Quicksand', sans-serif;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    font-weight: 500;
  }
  
  .floating-input:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15), 0 4px 12px rgba(139, 92, 246, 0.1);
  }
  
  .floating-input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .floating-textarea {
    width: 100%;
    padding: 18px 24px;
    font-size: 16px;
    border: 2px solid;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.98);
    transition: all 0.3s ease;
    resize: vertical;
    min-height: 150px;
    font-family: 'Quicksand', sans-serif;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    font-weight: 500;
  }
  
  .floating-textarea:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.15), 0 4px 12px rgba(139, 92, 246, 0.1);
  }
  
  .submit-button {
    background: linear-gradient(135deg, #5a67d8 0%, #805ad5 50%, #d53f8c 100%);
    border: none;
    border-radius: 16px;
    color: white;
    font-weight: 700;
    padding: 18px 36px;
    font-size: 17px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(128, 90, 213, 0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .submit-button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(128, 90, 213, 0.5);
    background: linear-gradient(135deg, #4c51bf 0%, #7c3aed 50%, #c53090 100%);
  }
  
  .submit-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #e5e7eb;
  }
  
  @media (max-width: 640px) {
    .floating-input, .floating-textarea {
      font-size: 16px; /* Prevents zoom on iOS */
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
      background: 'transparent',
      fontFamily: 'Quicksand, sans-serif',
      paddingTop: '80px'
    }}>
      <style>{globalStyles}</style>

      <div style={{
        background: 'linear-gradient(135deg, #5a67d8 0%, #9f7aea 50%, #ed64a6 100%)',
        padding: '120px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(40px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.08)',
          filter: 'blur(60px)'
        }} />
        
        <div className="contact-container" style={{
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
        
          {/* Title Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              color: 'white',
              margin: '0 0 16px 0',
              lineHeight: '1.1',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
            }}>
              Let's Create Together
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              lineHeight: '1.6',
              fontWeight: '500'
            }}>
              I'm excited to hear about your ideas
            </p>
          </div>
        </div>
      </div>
      
      <div style={{
        width: '100%',
        maxWidth: '600px',
        margin: '-40px auto 0',
        padding: '0 20px 60px',
        position: 'relative',
        zIndex: 2
      }}>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px',
          background: 'white',
          padding: '48px',
          borderRadius: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
        }}>
          
          {/* Name Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '15px',
              fontWeight: '600',
              color: '#4a5568',
              marginBottom: '8px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={16} />
                Name
              </span>
              {touched.from_name && formData.from_name.trim() && (
                <Check size={16} style={{ color: '#9f7aea' }} />
              )}
            </label>
            <input
              type="text"
              placeholder="Your full name"
              value={formData.from_name}
              onChange={(e) => handleInputChange('from_name', e.target.value)}
              onBlur={() => handleBlur('from_name')}
              disabled={isSubmitting}
              className="floating-input"
              style={{
                borderColor: touched.from_name && !formData.from_name.trim() 
                  ? '#ed64a6' 
                  : touched.from_name && formData.from_name.trim() 
                  ? '#9f7aea' 
                  : '#e5e7eb'
              }}
            />
            {touched.from_name && !formData.from_name.trim() && (
              <p style={{ color: '#ed64a6', fontSize: '12px', marginTop: '4px', fontWeight: '500' }}>Name is required</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '15px',
              fontWeight: '600',
              color: '#4a5568',
              marginBottom: '8px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} />
                Email
              </span>
              {formData.from_email && (
                emailValid ? (
                  <Check size={16} style={{ color: '#9f7aea' }} />
                ) : (
                  <X size={16} style={{ color: '#ed64a6' }} />
                )
              )}
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.from_email}
              onChange={(e) => handleInputChange('from_email', e.target.value)}
              onBlur={() => handleBlur('from_email')}
              disabled={isSubmitting}
              className="floating-input"
              style={{
                borderColor: formData.from_email && !emailValid 
                  ? '#ed64a6' 
                  : formData.from_email && emailValid 
                  ? '#9f7aea' 
                  : '#e5e7eb'
              }}
            />
            {touched.from_email && formData.from_email && !emailValid && (
              <p style={{ color: '#ed64a6', fontSize: '12px', marginTop: '4px', fontWeight: '500' }}>Please enter a valid email address</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '15px',
              fontWeight: '600',
              color: '#4a5568',
              marginBottom: '8px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MessageSquare size={16} />
                Message
              </span>
              {touched.message && formData.message.trim().length >= 10 && (
                <Check size={16} style={{ color: '#9f7aea' }} />
              )}
            </label>
            <textarea
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              onBlur={() => handleBlur('message')}
              disabled={isSubmitting}
              className="floating-textarea"
              style={{
                borderColor: touched.message && formData.message.trim().length < 10 
                  ? '#ed64a6' 
                  : touched.message && formData.message.trim().length >= 10 
                  ? '#9f7aea' 
                  : '#e5e7eb'
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
              {touched.message && formData.message.trim().length < 10 ? (
                <p style={{ color: '#ed64a6', fontSize: '12px', fontWeight: '500' }}>Message must be at least 10 characters</p>
              ) : (
                <span></span>
              )}
              <p style={{ color: '#9ca3af', fontSize: '12px' }}>{formData.message.length} characters</p>
            </div>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              background: 'linear-gradient(135deg, rgba(237, 100, 166, 0.1) 0%, rgba(159, 122, 234, 0.1) 100%)',
              borderRadius: '12px',
              color: '#ed64a6',
              border: '1px solid rgba(237, 100, 166, 0.2)'
            }}>
              <AlertCircle size={20} />
              <span style={{ fontSize: '14px' }}>{error}</span>
            </div>
          )}

          {success && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 16px',
              background: 'linear-gradient(135deg, rgba(159, 122, 234, 0.1) 0%, rgba(90, 103, 216, 0.1) 100%)',
              borderRadius: '12px',
              color: '#9f7aea',
              border: '1px solid rgba(159, 122, 234, 0.2)'
            }}>
              <CheckCircle size={20} />
              <span style={{ fontSize: '14px' }}>{success}</span>
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
          marginTop: '60px',
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(90, 103, 216, 0.05) 0%, rgba(159, 122, 234, 0.05) 50%, rgba(237, 100, 166, 0.05) 100%)',
          borderRadius: '20px',
          border: '2px solid rgba(159, 122, 234, 0.1)'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '16px',
            margin: '0 0 12px 0',
            fontWeight: '500'
          }}>
            Prefer a direct conversation?
          </p>
          <a
            href="mailto:beaulazear@gmail.com"
            style={{
              background: 'linear-gradient(135deg, #5a67d8, #9f7aea, #ed64a6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
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