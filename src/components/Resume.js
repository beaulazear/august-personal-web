import React, { useEffect } from 'react';
import ResumePDF from "../images/ResumePDF.pdf";
import styled from 'styled-components';

const Container = styled.div`
  padding: 32px;
  border-radius: 16px;
  background: #1e1e2f;
  color: #f0f0f5;
  box-shadow: 0 0 30px rgba(0,0,0,0.4);
  max-width: 900px;
  margin: 40px auto;
  font-family: 'Inter', sans-serif;
  text-align: left;

  @media (max-width: 768px) {
    padding: 24px;
    margin: 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: #cf38dd;
`;

const StyledLink = styled.a`
  color: #d394f5;
  margin-top: 8px;
  font-weight: 500;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #b954ec;
  margin-top: 32px;
  border-bottom: 1px solid #b954ec;
  padding-bottom: 6px;
`;

const JobTitle = styled.h3`
  font-size: 1.25rem;
  margin: 20px 0 8px;
  color: #ffffff;
`;

const JobDescription = styled.ul`
  list-style: disc;
  padding-left: 20px;
`;

const JobDetail = styled.li`
  margin-bottom: 8px;
  line-height: 1.6;
  color: #ccc;
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
      <JobDescription>
        <JobDetail>Multifaceted professional with a background spanning animal care, web development, entrepreneurship, and digital strategy. Currently co-founder at Voxxy AI, founder of Beau’s Animal Care, and a contract digital lead for Aria Design Company.</JobDetail>
      </JobDescription>

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
        <JobDetail>Contract role building and maintaining the company’s website and online portfolio.</JobDetail>
        <JobDetail>Recently added social media strategy and scheduling to support brand growth.</JobDetail>
        <JobDetail>Coordinate directly with founder to shape digital presence and user experience.</JobDetail>
      </JobDescription>

      <JobTitle>Founder — Beau’s Animal Care (2019–Present)</JobTitle>
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