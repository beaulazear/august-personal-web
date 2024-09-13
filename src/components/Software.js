import React, { useEffect} from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
    text-align: left;
  }
`;

const WelcomeContainer = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const IntroContent = styled.p`
  font-size: 1.2em;
  color: #555;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  width: calc(33.33% - 20px);
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.8em;
  color: #222;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const CardDescription = styled.p`
  font-size: 1.1em;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 15px;
`;

const ActionButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 0.9em;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: 0.9em;
  }
`;

const StyledHeading = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    font-size: 24px;
    margin-bottom: 10px;
    padding-left: 13px;
  }
`;

const Programming = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <ContentWrapper>
      <StyledHeading>Soft Skills</StyledHeading>
      <WelcomeContainer>
        <IntroContent>
          I am proficient in JavaScript, React, HTML, CSS, Ruby on Rails, SQL, and more. I am self-taught to start,
          and then I got a certificate from a coding bootcamp from Flatiron School for software development.
          Additionally, I hold one AWS certification.
        </IntroContent>
      </WelcomeContainer>
      <StyledHeading>Projects</StyledHeading>
      <SectionContainer>
        <ServiceCard>
          <CardTitle>Dog Walking Application</CardTitle>
          <CardDescription>
            A full-stack application developed using React for the front end, leveraging Ruby on Rails for the API backend,
            and employing a PostgreSQL database for data management. The application is deployed on the Render platform.
          </CardDescription>
          <ButtonContainer>
            <ActionButton target="_blank" href="https://youtu.be/vGsZPkvNa5Y">Video</ActionButton>
            <ActionButton target="_blank" href="www.pocket-walks.com">Deployed</ActionButton>
            <ActionButton target="_blank" href="https://github.com/beaulazear/dog-walking-app.git">Repo</ActionButton>
          </ButtonContainer>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>Pokemon Guide</CardTitle>
          <CardDescription>
            An intricately crafted single-page application engineered with React, leveraging the PokeAPI to dynamically sort
            and present data based on specific criteria and user requests.
          </CardDescription>
          <ButtonContainer>
            <ActionButton target="_blank" href="https://beaulazear.github.io/pokemon/">Deployed</ActionButton>
            <ActionButton target="_blank" href="https://github.com/beaulazear/pokemon">Repo</ActionButton>
          </ButtonContainer>
        </ServiceCard>

        <ServiceCard>
          <CardTitle>www.beaulazear.com</CardTitle>
          <CardDescription>
            A single page application made with React for marketing my business and providing information to new clients.
          </CardDescription>
          <ButtonContainer>
            <ActionButton target="_blank" href="https://beaulazear.com/">Deployed</ActionButton>
            <ActionButton target="_blank" href="https://github.com/beaulazear/beaus-website">Repo</ActionButton>
          </ButtonContainer>
        </ServiceCard>
        <ServiceCard>
          <CardTitle>Aria Design Consultants</CardTitle>
          <CardDescription>
            An interactive single-page application crafted using React, with styling handled efficiently through Styled Components and Bootstrap, designed specifically for marketing needs.
          </CardDescription>
          <ButtonContainer>
            <ActionButton target="_blank" href="https://beaulazear.github.io/michael-personal-site/">Deployed</ActionButton>
            <ActionButton target="_blank" href="https://github.com/beaulazear/michael-personal-site.git">Repo</ActionButton>
          </ButtonContainer>
        </ServiceCard>

        <ServiceCard>
          <CardTitle>Personal Marketing Website</CardTitle>
          <CardDescription>
            A single page application made with React for information/resume sharing & personal marketing.
          </CardDescription>
          <ButtonContainer>
            <ActionButton target="_blank" href="https://beaulazear.github.io/nadine/#/">Deployed</ActionButton>
            <ActionButton target="_blank" href="https://github.com/beaulazear/nadine">Repo</ActionButton>
          </ButtonContainer>
        </ServiceCard>

        <ServiceCard>
          <CardTitle>Pet Sitting Application</CardTitle>
          <CardDescription>
            A comprehensive application developed using Ruby on Rails to serve as an API for PostgreSQL database, seamlessly integrated with React for efficient management of pet sitting services.
          </CardDescription>
          <ButtonContainer>
            <ActionButton target="_blank" href="https://github.com/beaulazear/pet-sitting-app.git">Repo</ActionButton>
            <ActionButton target="_blank" href="https://www.youtube.com/watch?v=n1pzEzciu1E&feature=youtu.be">Video</ActionButton>
          </ButtonContainer>
        </ServiceCard>

        <ServiceCard>
          <CardTitle>Exercise/Workout Log</CardTitle>
          <CardDescription>
            A single page application made with Ruby, React, Active Record, and Sinatra for tracking workout data.
          </CardDescription>
          <ButtonContainer>
            <ActionButton target="_blank" href="https://github.com/beaulazear/react-sinatra-project">FrontRepo</ActionButton>
            <ActionButton target="_blank" href="https://github.com/beaulazear/phase-3-sinatra-react-project">BackRepo</ActionButton>
          </ButtonContainer>
        </ServiceCard>      </SectionContainer>
    </ContentWrapper>
  );
};

export default Programming;
