import React from 'react';
import styled from 'styled-components';
import BeauAndRu from '../images/BeauAndRu.JPG';
import CroppedBeau from '../images/CroppedBeau.jpeg';
import BeauWithHornbill from '../images/BeauAndHornbill.jpeg';

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
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

const TextWrapper = styled.div`
  flex: 2;
  padding: 10px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
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
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const AboutMe = () => {
  return (
    <ContentWrapper>
      <Section>
        <ImageWrapper>
          <Image src={BeauWithHornbill} alt="Beau with a hornbill" />
        </ImageWrapper>
        <TextWrapper>
          <SubHeading>🌟 What I Do 🌟</SubHeading>
          <Paragraph>
            Hi, I'm Beau, an animal lover based in Brooklyn, NYC. I'm passionate about providing excellent care for pets and equally enthusiastic about coding. I have worked as a zookeeper, in animal rescues, vet clinics, and more. I was initially self-taught in basic programming, then I completed a coding bootcamp at the Flatiron school and obtained an AWS certification.
          </Paragraph>
        </TextWrapper>
      </Section>

      <Section reverse>
        <ImageWrapper>
          <Image src={CroppedBeau} alt="headshot of Beau" />
        </ImageWrapper>
        <TextWrapper>
          <SubHeading>Software Development</SubHeading>
          <Paragraph>
            Hello! 👋 I'm a self-taught developer who completed a bootcamp and holds an AWS certification. Proficient in JavaScript, React, Ruby on Rails, HTML, CSS, and more. Always open to new projects and continuously expanding my skills. Let's collaborate on something great!
          </Paragraph>
        </TextWrapper>
      </Section>

      <Section>
        <ImageWrapper>
          <Image src={BeauAndRu} alt="Beau with a dog named Ru" />
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
