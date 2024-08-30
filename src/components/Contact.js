import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 75vh; /* Full height for centering */
  background-color: #f0f0f0; /* Light background for contrast */
  padding: 20px;
`;

const StyledFormContainer = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-align: left;
  margin-top: -20px; /* Reduces white space above the header */

  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
  display: block;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const StyledButton = styled.button`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
  color: #fff;

  &:first-child {
    background-color: #f50057;
  }

  &:last-child {
    background-color: #3f51b5;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const ErrorMessage = styled.p`
  font-size: 1.2em;
  color: red;
  margin-top: 10px;
`;

const SuccessMessage = styled.p`
  font-size: 1.2em;
  color: green;
  margin-top: 10px;
`;

const Paragraph = styled.p`
  font-size: 1.2em;
  color: #777;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export default function Contact() {
  const form = useRef();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const { from_name, from_email, message } = form.current;

    if (!from_name.value || !from_email.value || !message.value) {
      setError('Please fill out all fields.');
      return;
    }

    emailjs
      .sendForm('service_kqz5x4o', 'template_3ba6d27', form.current, '11CxjbisIoTlyftVb')
      .then(
        (result) => {
          console.log(result.text);
          setSuccess('Form submitted successfully!');
          setError('');
          form.current.reset(); // Reset the form
        },
        (error) => {
          console.log(error.text);
          setError('Failed to submit the form. Please try again.');
          setSuccess('');
        }
      );
  };

  return (
    <FormWrapper>
      <StyledFormContainer ref={form} onSubmit={sendEmail}>
        <StyledHeader>Email Form</StyledHeader>
        <Paragraph>Send an email describing your inquiry, and I will be in touch shortly!</Paragraph>
        <StyledLabel htmlFor="from_name">Name</StyledLabel>
        <StyledInput placeholder="Your preferred name" type="text" name="from_name" id="from_name" />
        <StyledLabel htmlFor="from_email">Email</StyledLabel>
        <StyledInput placeholder="Your email address" type="email" name="from_email" id="from_email" />
        <StyledLabel htmlFor="message">Message</StyledLabel>
        <StyledTextarea placeholder="Tell me about yourself / desired services!" name="message" id="message" />
        <StyledButtonContainer>
          <StyledButton type="submit">Send</StyledButton>
        </StyledButtonContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
      </StyledFormContainer>
    </FormWrapper>
  );
}
