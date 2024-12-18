import React, { useEffect } from 'react';
import styled from 'styled-components';
import CroppedBeau from '../images/CroppedBeau.jpeg';
import Linkedin from '../images/Linkedin.jpg'; // Fixed import name
import Github from '../images/Github.jpg';
import GraphicTwo from '../images/GraphicTwo.png';

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;
  padding: 25px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 250px; /* Adjusted size for smaller devices */
    border-radius: 50%; /* Makes the image circular */
  }
`;

const TextWrapper = styled.div`
  flex: 2;
  text-align: left;
`;

const SubHeading = styled.h3`
  margin-bottom: 20px;
  color: #222;
  font-size: 2.5em;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const Paragraph = styled.p`
  line-height: 1.6;
  color: #555;
  font-size: 1.6em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
  justify-content: center;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled.a`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const AboutMe = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentWrapper>
      <Section>
        <TextWrapper>
          <SubHeading>About Me</SubHeading>
          <Paragraph>
            Hi, I’m Beau, an animal lover and web developer based in Brooklyn, NYC. I’ve built my own animal care business, combining my lifelong passion for animals with years of hands-on experience. I’m also a problem-solver at heart, which led me to coding—a creative outlet that’s helping me grow my business and bring ideas to life for others. Now, I’m enjoying the journey of building meaningful projects while continuing to learn and grow.
          </Paragraph>
          <SocialIcons>
            <Icon href="https://www.linkedin.com/in/beau-lazear" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn" />
            </Icon>
            <Icon href="https://github.com/beaulazear" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="GitHub" />
            </Icon>
          </SocialIcons>
        </TextWrapper>
      </Section>

      <Section reverse>
        <ImageWrapper>
          <Image src={CroppedBeau} alt="headshot of Beau" />
        </ImageWrapper>
        <TextWrapper>
          <SubHeading>Software Development</SubHeading>
          <Paragraph>
            I started as a self-taught developer and have since earned a bootcamp certificate in software development and an AWS certification. I enjoy building applications to simplify daily tasks for my business and bringing my friends’ and clients’ ideas to life through custom projects. I work with React on the front end, Ruby on Rails on the back end, and PostgreSQL for database management. I integrate third-party software solutions, such as AWS for file storage and VAPI AI for advanced functionality, and leverage styling libraries to create visually appealing designs. I’m always open to new projects and committed to continuous learning—let’s build something great together!
          </Paragraph>
        </TextWrapper>
      </Section>

      <Section>
        <ImageWrapper>
          <Image src={GraphicTwo} alt="Beau with a dog named Ru" />
        </ImageWrapper>
        <TextWrapper>
          <SubHeading>Animal Care</SubHeading>
          <Paragraph>
            I’ve dedicated my life to caring for animals in every way possible. I started as a zookeeper and worked at the ASPCA, vet clinics, dog walking companies, and dog daycares, gaining experience with animals of all kinds. Now, I’ve built my own independent animal care business, providing personalized care to my clients and their pets. This isn’t just a job for me—it’s a passion. With my unique background, I offer a level of expertise and dedication that sets me apart. Whether it’s daily walks or pet sitting, your furry companions are in the hands of someone who truly cares.
          </Paragraph>
        </TextWrapper>
      </Section>
    </ContentWrapper>
  );
};

export default AboutMe;
