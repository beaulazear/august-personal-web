import React from 'react';
import styled from 'styled-components';
import BeauAndRu from '../images/BeauAndRu.JPG';
import CroppedBeau from '../images/CroppedBeau.jpeg';
import BeauReykaMangoRu from '../images/BeauReykaMangoRu.jpeg';
import BeauWithHornbill from '../images/BeauAndHornbill.jpeg';

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  overflow-y: auto;
  text-align: center;
  margin: 0 auto; /* Center content horizontally */

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 95%;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) { /* Apply styles when the screen is larger than 1024px */
    max-width: 70%; /* Reduce image size to 70% of its original width */
  }
`;

const StyledIntroduction = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding: 0 5px;
  }
`;

const SubHeading = styled.h3`
  margin-bottom: 20px;
  color: #222;
  font-size: 3em;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  line-height: 1.8;
  color: #555;
  font-size: 1.3em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const AboutMe = () => {
  return (
    <ContentWrapper>
      <StyledIntroduction>
        <SubHeading>🌟 What I Do 🌟</SubHeading>
        <Paragraph>
          Hi, I'm Beau, an animal lover based in Brooklyn, NYC. I'm passionate about providing excellent care for pets and equally enthusiastic about coding. I have worked as a zookeeper, in animal rescues, vet clinics, and more. I was initially self-taught in basic programming, then I completed a coding bootcamp at the Flatiron school and obtained an AWS certification.
        </Paragraph>
      </StyledIntroduction>
      <ImageWrapper>
        <Image src={BeauWithHornbill} alt="Beau with a hornbill" />
      </ImageWrapper>
      <StyledIntroduction>
        <SubHeading>Software Development</SubHeading>
        <Paragraph>
          Hello! 👋 I'm a self-taught developer who completed a bootcamp and holds an AWS certification. Proficient in JavaScript, React, Ruby on Rails, HTML, CSS, and more. Always open to new projects and continuously expanding my skills. Let's collaborate on something great!
        </Paragraph>
      </StyledIntroduction>
      <ImageWrapper>
        <Image src={CroppedBeau} alt="headshot of Beau" />
      </ImageWrapper>
      <StyledIntroduction>
        <SubHeading>Animal Care</SubHeading>
        <Paragraph>
          Delivering top-notch animal care services in Cobble Hill, Gowanus, Carroll Gardens, and surrounding areas for weekday walks. As an insured professional with a background as a zookeeper and experience from ASPCA and vet clinics, I offer pet sitting services across the city. Your furry pals are in caring and experienced hands, whether it's a walk or pet sitting!
        </Paragraph>
      </StyledIntroduction>
      <ImageWrapper>
        <Image src={BeauAndRu} alt="Beau with a dog named Ru" />
      </ImageWrapper>
      <StyledIntroduction>
        <Paragraph>
          Whether you're looking for reliable pet care or want to discuss a coding project, I'm here to help. Let's connect and create something amazing together!
        </Paragraph>
      </StyledIntroduction>
      <ImageWrapper>
        <Image src={BeauReykaMangoRu} alt="Beau with a mango cocktail" />
      </ImageWrapper>
    </ContentWrapper>
  );
}

export default AboutMe;
