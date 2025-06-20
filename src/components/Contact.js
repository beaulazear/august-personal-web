import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from '@emailjs/browser';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }
`;

const StyledFormContainer = styled.form`
  width: 100%;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    border-radius: 24px 24px 0 0;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const StyledHeader = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 8px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #718096;
  text-align: center;
  margin-bottom: 32px;
  font-weight: 400;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
  animation: ${slideUp} 0.4s ease-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #4a5568;
  display: block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background-color: #ffffff;
  color: #2d3748;
  font-size: 16px;
  font-weight: 400;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  
  &::placeholder {
    color: #a0aec0;
    font-weight: 400;
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 16px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  background-color: #ffffff;
  color: #2d3748;
  font-size: 16px;
  font-weight: 400;
  resize: vertical;
  min-height: 120px;
  max-height: 200px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  font-family: inherit;
  
  &::placeholder {
    color: #a0aec0;
    font-weight: 400;
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
  }
  
  &:hover {
    border-color: #cbd5e0;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 16px 32px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const MessageContainer = styled.div`
  margin-top: 16px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: #e53e3e;
  background-color: #fed7d7;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid #e53e3e;
  margin: 0;
`;

const SuccessMessage = styled.p`
  font-size: 14px;
  color: #38a169;
  background-color: #c6f6d5;
  padding: 12px 16px;
  border-radius: 8px;
  border-left: 4px solid #38a169;
  margin: 0;
`;

export default function Contact() {
  const form = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { from_name, from_email, message } = form.current;

    if (!from_name.value || !from_email.value || !message.value) {
      setError('Please fill out all fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        'service_kqz5x4o', 
        'template_3ba6d27', 
        form.current, 
        '11CxjbisIoTlyftVb'
      );
      
      console.log(result.text);
      setSuccess('Message sent successfully! I\'ll get back to you soon.');
      setError('');
      form.current.reset();
    } catch (error) {
      console.log(error.text);
      setError('Failed to send message. Please try again.');
      setSuccess('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormWrapper>
      <StyledFormContainer ref={form} onSubmit={sendEmail}>
        <StyledHeader>Get In Touch</StyledHeader>
        <Subtitle>Let's start a conversation about your project</Subtitle>
        
        <FormGroup delay="0.1s">
          <StyledLabel htmlFor="from_name">Your Name</StyledLabel>
          <InputWrapper>
            <StyledInput 
              placeholder="Enter your full name" 
              type="text" 
              name="from_name" 
              id="from_name" 
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup delay="0.2s">
          <StyledLabel htmlFor="from_email">Email Address</StyledLabel>
          <InputWrapper>
            <StyledInput 
              placeholder="your.email@example.com" 
              type="email" 
              name="from_email" 
              id="from_email" 
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup delay="0.3s">
          <StyledLabel htmlFor="message">Your Message</StyledLabel>
          <StyledTextarea 
            placeholder="Tell me about your project, goals, or questions..." 
            name="message" 
            id="message" 
          />
        </FormGroup>

        <FormGroup delay="0.4s">
          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </StyledButton>
        </FormGroup>

        {(error || success) && (
          <MessageContainer>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}
          </MessageContainer>
        )}
      </StyledFormContainer>
    </FormWrapper>
  );
}