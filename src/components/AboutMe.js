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
            Hi, I'm Beau, an animal lover based in Brooklyn, NYC. I'm passionate about providing excellent care for pets and equally enthusiastic about coding. I have worked as a zookeeper, in animal rescues, vet clinics, and more. I was initially self-taught in basic programming, then I completed a coding bootcamp at the Flatiron school and obtained an AWS certification.
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
            I'm a self-taught developer who completed a bootcamp and holds an AWS certification. Proficient in JavaScript, React, Ruby on Rails, HTML, CSS, and more. Always open to new projects and continuously expanding my skills. Let's collaborate on something great!
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
            Delivering top-notch animal care services in Cobble Hill, Gowanus, Carroll Gardens, and surrounding areas for weekday walks. As an insured professional with a background as a zookeeper and experience from ASPCA and vet clinics, I offer pet sitting services across the city. Your furry pals are in caring and experienced hands, whether it's a walk or pet sitting!
          </Paragraph>
        </TextWrapper>
      </Section>
    </ContentWrapper>
  );
};

export default AboutMe;
