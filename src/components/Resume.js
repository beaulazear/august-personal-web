import React, { useEffect } from 'react';
import ResumePDF from "../images/ResumePDF.pdf";
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

const Name = styled.h1`
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

const StyledLink = styled.a`
  color: #1e293b;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #ffffff, #f1f5f9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid #ffffff;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 
    0 8px 20px rgba(255, 255, 255, 0.2),
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
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
    background: linear-gradient(135deg, #ffffff, #e2e8f0);
    border-color: #f8fafc;
    transform: translateY(-2px);
    box-shadow: 
      0 12px 30px rgba(255, 255, 255, 0.3),
      0 6px 18px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.9);

    &::before {
      left: 100%;
    }
  }

  &::after {
    content: '📄';
    font-size: 1.1em;
  }
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
    gap: 6px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.8),
    0 0 15px rgba(255, 255, 255, 0.1);
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

const JobTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  margin: 24px 0 12px;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  position: relative;
  padding-left: 20px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin: 16px 0 8px;
    padding-left: 16px;
    
    &::before {
      width: 6px;
      height: 6px;
    }
  }
`;

const JobDescription = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 20px;
  
  @media (max-width: 768px) {
    margin-left: 16px;
  }
`;

const JobDetail = styled.li`
  margin-bottom: 12px;
  line-height: 1.7;
  color: #f1f5f9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  position: relative;
  padding-left: 24px;
  transition: color 0.2s ease;

  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    top: 2px;
    color: #3b82f6;
    font-size: 0.8em;
    opacity: 0.8;
  }

  &:hover {
    color: #ffffff;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  }

  strong {
    color: #dbeafe;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    margin-bottom: 8px;
    line-height: 1.6;
    padding-left: 20px;
    font-size: 0.9rem;
    
    &::before {
      font-size: 0.7em;
    }
  }
`;

const SummarySection = styled.div`
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

const SummaryText = styled.p`
  margin: 0;
  line-height: 1.7;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header>
        <Name>Beau Lazear</Name>
        <StyledLink target="_blank" href={ResumePDF}>Download PDF Version</StyledLink>
      </Header>

      <SectionTitle>Professional Summary</SectionTitle>
      <SummarySection>
        <SummaryText>
          Multifaceted professional with a background spanning animal care, web development, entrepreneurship, and digital strategy. Currently co-founder at Voxxy AI, founder of Beau's Animal Care, and a contract digital lead for Aria Design Company.
        </SummaryText>
      </SummarySection>

      <SectionTitle>Experience</SectionTitle>

      <JobTitle>Co-Founder & Lead Developer — Voxxy AI (2024–Present)</JobTitle>
      <JobDescription>
        <JobDetail>Built a React/Rails platform for AI-powered group planning and smart activity recommendations.</JobDetail>
        <JobDetail>Integrated Mixpanel to track engagement and user flows across web and mobile apps.</JobDetail>
        <JobDetail>Developed mobile app using React Native + Expo, connected to secure Rails backend.</JobDetail>
        <JobDetail>Managed technical direction, deployment, and ethical product strategy.</JobDetail>
      </JobDescription>

      <JobTitle>Digital Contractor & Social Media Manager — Aria Design Co. (2023–Present)</JobTitle>
      <JobDescription>
        <JobDetail>Contract role building and maintaining the company's website and online portfolio.</JobDetail>
        <JobDetail>Recently added social media strategy and scheduling to support brand growth.</JobDetail>
        <JobDetail>Coordinate directly with founder to shape digital presence and user experience.</JobDetail>
      </JobDescription>

      <JobTitle>Founder — Beau's Animal Care (2019–Present)</JobTitle>
      <JobDescription>
        <JobDetail>Founded and run a successful dog walking and pet care company in Brooklyn.</JobDetail>
        <JobDetail>Hire and oversee independent contractors while maintaining my own client base.</JobDetail>
        <JobDetail>Built custom web tools for scheduling, invoicing, and client/pet management using React and Rails.</JobDetail>
        <JobDetail>Handle all social media, communications, operations, and client relations.</JobDetail>
      </JobDescription>

      <JobTitle>Veterinary Assistant — ASPCA ARC (2019)</JobTitle>
      <JobDescription>
        <JobDetail>Provided daily care and medical support to animals under protective custody.</JobDetail>
        <JobDetail>Promoted to lead assistant during team transition due to proactive leadership and training.</JobDetail>
      </JobDescription>

      <JobTitle>Zookeeper — Prospect Park Zoo, WCS (2017–2019)</JobTitle>
      <JobDescription>
        <JobDetail>Completed internships and advanced to full-time keeper.</JobDetail>
        <JobDetail>Handled daily husbandry, enrichment, and record keeping for exotic animal species.</JobDetail>
      </JobDescription>

      <SectionTitle>Skills</SectionTitle>
      <JobDescription>
        <JobDetail><strong>Frontend:</strong> React, React Native, HTML, CSS, JavaScript, Styled Components</JobDetail>
        <JobDetail><strong>Backend:</strong> Ruby on Rails, PostgreSQL, REST APIs</JobDetail>
        <JobDetail><strong>Tools:</strong> Mixpanel, SendGrid, Expo, Git, Render, Netlify</JobDetail>
        <JobDetail><strong>Other:</strong> Client Communication, Project Management, Creative Direction, Content Strategy</JobDetail>
      </JobDescription>

      <SectionTitle>Education & Certifications</SectionTitle>
      <JobDescription>
        <JobDetail>Flatiron School — Full Stack Software Development, Graduate 2023</JobDetail>
        <JobDetail>AWS Certified Cloud Practitioner — 2024</JobDetail>
        <JobDetail>New York Real Estate License — NYREI</JobDetail>
        <JobDetail>Continuing Ed & Credits — Prospect Park Zoo, Wildlife Conservation Society</JobDetail>
      </JobDescription>
    </Container>
  );
};

export default Resume;