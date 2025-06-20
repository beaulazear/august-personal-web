import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(59, 130, 246, 0.1);
  max-width: 900px;
  margin: 40px auto;
  font-family: 'Inter', sans-serif;
  text-align: left;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8, #2563eb, #60a5fa);
    background-size: 200% 100%;
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0%, 100% { background-position: 200% 0; }
    50% { background-position: -200% 0; }
  }

  @media (max-width: 768px) {
    padding: 16px;
    margin: 12px;
    border-radius: 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 32px;
  text-align: center;
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  color: #ffffff;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 4px 8px rgba(0, 0, 0, 0.6),
    0 0 20px rgba(255, 255, 255, 0.1);
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 8px;
  }
`;

const Subtitle = styled.p`
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 30%, #bae6fd 70%, #ffffff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  margin: 40px 0 20px 0;
  position: relative;
  padding-bottom: 12px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #1d4ed8);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.375rem;
    margin: 24px 0 16px 0;
    padding-bottom: 8px;
    
    &::after {
      width: 100%;
      height: 2px;
    }
  }
`;

const FormSection = styled.div`
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 24px;
  margin: 24px 0;
  
  @media (max-width: 768px) {
    padding: 16px;
    margin: 16px 0;
    border-radius: 12px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #ffffff;
  transition: all 0.3s ease;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #ffffff;
  transition: all 0.3s ease;
  box-sizing: border-box;
  outline: none;
  min-height: 120px;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 14px;
    min-height: 100px;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px 24px;
  background: linear-gradient(135deg, #ffffff, #f1f5f9);
  color: #1e293b;
  border: 3px solid #ffffff;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 
    0 10px 30px rgba(255, 255, 255, 0.2),
    0 4px 15px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 20px 50px rgba(255, 255, 255, 0.3),
      0 8px 25px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);
    background: linear-gradient(135deg, #ffffff, #e2e8f0);
    border-color: #f8fafc;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 16px;
  }
`;

const Message = styled.div`
  padding: 12px 20px;
  border-radius: 8px;
  margin-top: 16px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 16px;
  }
`;

const ErrorMessage = styled(Message)`
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
  border: 1px solid rgba(239, 68, 68, 0.4);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
`;

const SuccessMessage = styled(Message)`
  background: rgba(34, 197, 94, 0.2);
  color: #86efac;
  border: 1px solid rgba(34, 197, 94, 0.4);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
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

    // Simulate form submission
    setTimeout(() => {
      setSuccess('Form submitted successfully! I\'ll get back to you within 24 hours.');
      setError('');
      setFormData({ from_name: '', from_email: '', message: '' });
    }, 1000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear messages when user starts typing
    if (error) setError('');
    if (success) setSuccess('');
  };

  return (
    <Container>
      <Header>
        <Title>Get In Touch</Title>
        <Subtitle>
          Let's discuss your project or opportunity. I'll get back to you within 24 hours!
        </Subtitle>
      </Header>

      <SectionTitle>Contact Form</SectionTitle>

      <FormSection>
        <div>
          <InputGroup>
            <Label>Your Name</Label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={formData.from_name}
              onChange={(e) => handleInputChange('from_name', e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Email Address</Label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              value={formData.from_email}
              onChange={(e) => handleInputChange('from_email', e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <Label>Message</Label>
            <TextArea
              placeholder="Tell me about your project, timeline, and how I can help..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
          </InputGroup>

          <SubmitButton onClick={handleSubmit}>
            <Mail size={20} />
            Send Message
          </SubmitButton>

          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}
        </div>
      </FormSection>
    </Container>
  );
};

export default Contact;