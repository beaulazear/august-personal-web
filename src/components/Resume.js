import React, { useEffect } from 'react';
import ResumePDF from "../images/ResumePDF.pdf";
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 100%;
  margin: 20px auto;
  overflow-y: auto;
  margin-top: 8px;
  margin-bottom: 8px;
  text-align: left;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #007BFF;
  border-bottom: 2px solid #007BFF;
  padding-bottom: 5px;
    text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const JobTitle = styled.h3`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  color: #333;
    text-align: left;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 8px;
  }
`;

const JobDescription = styled.ul`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  padding-left: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const JobDetail = styled.li`
  margin-bottom: 10px;
    text-align: left;
`;

const StyledLink = styled.a`
  color: #007BFF;
  text-decoration: none;
    text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

const Resume = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    return (
        <Container>
            <h1 style={{ fontSize: '28px', marginBottom: '20px', color: '#007BFF', textAlign: 'left' }}>Beau Lazear</h1>
            <StyledLink target="_blank" href={ResumePDF}>Download PDF Version</StyledLink>
            <SectionTitle>Professional Summary</SectionTitle>
            <JobDescription>
                <JobDetail>Animal Care Professional & Software Developer with a strong background in veterinary assistance, zookeeping, and web development.</JobDetail>
            </JobDescription>
            <SectionTitle>Experience</SectionTitle>
            <JobTitle>Freelance Animal Care, Self-Employed (2019-Present)</JobTitle>
            <JobDescription>
                <JobDetail>Developed and maintained an informational website using React, CSS, & more.</JobDetail>
                <JobDetail>Created an application for scheduling, invoicing, pet data management, and finance tracking.</JobDetail>
                <JobDetail>Expanded client base through effective networking and social media marketing.</JobDetail>
                <JobDetail>Managed scheduling, invoicing, and client communications.</JobDetail>
            </JobDescription>
            <JobTitle>Veterinary Assistant, ASPCA-ARC (Apr. 2019-Nov. 2019)</JobTitle>
            <JobDescription>
                <JobDetail>Provided daily animal husbandry and medical support.</JobDetail>
                <JobDetail>Assisted veterinarians during procedures and managed medical paperwork.</JobDetail>
                <JobDetail>Promoted to lead vet assistant for proactive leadership during high employee turnover.</JobDetail>
            </JobDescription>
            <JobTitle>Zookeeper, Wildlife Conservation Society - Prospect Park Zoo (Sept. 2017-Feb. 2019)</JobTitle>
            <JobDescription>
                <JobDetail>Completed internships and advanced to full-time zookeeper role.</JobDetail>
                <JobDetail>Executed animal husbandry, enrichment activities, and data recording.</JobDetail>
                <JobDetail>Collaborated with team members to optimize workflow and efficiency.</JobDetail>
            </JobDescription>
            <SectionTitle>Skills</SectionTitle>
            <JobDescription>
                <JobDetail>Proficient in HTML, CSS, JavaScript, React, Ruby on Rails, & more.</JobDetail>
                <JobDetail>Strong communication and interpersonal skills.</JobDetail>
                <JobDetail>Detail-oriented with excellent organizational abilities.</JobDetail>
                <JobDetail>Adaptable and quick learner.</JobDetail>
                <JobDetail>Passionate about environmental and social causes.</JobDetail>
            </JobDescription>
            <SectionTitle>Education</SectionTitle>
            <JobDescription>
                <JobDetail>Flatiron School Software Development Program, 2023 Graduate.</JobDetail>
                <JobDetail>AWS Cloud Practitioner Certificate, January 2024.</JobDetail>
                <JobDetail>Real Estate License, New York Real Estate Institute.</JobDetail>
                <JobDetail>Continuing Education Credits, Prospect Park Zoo (Wildlife Conservation Society).</JobDetail>
            </JobDescription>
        </Container>
    );
};

export default Resume;
