import React from 'react';
import ResumePDF from "../images/ResumePDF.pdf";
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Darker background for better focus */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow-y: auto; /* Allow vertical scrolling */
`;

const ModalContent = styled.div`
  background-color: #ffffff; /* Pure white for a clean, professional look */
  padding: 20px;
  border-radius: 10px; /* Slightly sharper edges */
  max-width: 80%;
  max-height: 90%;
  overflow-y: auto; /* Allow vertical scrolling */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 15px;
  color: #007BFF; /* Blue for titles */
  border-bottom: 2px solid #007BFF; /* Underline for emphasis */
  padding-bottom: 5px;
`;

const JobTitle = styled.h3`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  color: #333; /* Dark gray for job titles */
`;

const JobDescription = styled.ul`
  font-size: 16px;
  line-height: 1.6;
  color: #555; /* Medium gray for descriptions */
  padding-left: 20px; /* Indentation for list */
`;

const JobDetail = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
  color: #007BFF;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const CombinedModal = () => {
  return (
    <ModalContainer>
      <ModalContent>
        <h1 style={{ fontSize: '28px', marginBottom: '20px', color: '#007BFF', textAlign: 'center' }}>Beau Lazear</h1>
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
      </ModalContent>
    </ModalContainer>
  );
};

export default CombinedModal;
