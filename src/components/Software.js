import React from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SectionContainer = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled.div`
  width: 360px;
  background-color: #f0f0f0;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  margin-bottom: 30px;
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
    margin: 0px;
    margin-bottom: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  text-align: center;
  color: #333333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const CardDescription = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 20px;
  padding: 6px;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ActionButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  margin: 0 10px;
  margin-top: 15px;
  border-radius: 30px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 10px 0;
    font-size: 14px;
    padding: 10px 20px;
  }
`;

const IntroContainer = styled.div`
  background-color: #f9f9f9;
  text-align: left;
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const IntroContent = styled.p`
  font-size: 18px;
  color: #666666;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Programming = () => {

    return (
        <div>
            <WelcomeContainer>
                <h1>Software Development</h1>
                <IntroContainer>
                    <IntroContent>
                        I am proficient in JavaScript, React, HTML, CSS, Ruby on Rails, SQL, and more. I am self-taught to start,
                        and then I got a certificate from a coding bootcamp from Flatiron School for software development.
                        Additionally, I hold one AWS certification.
                    </IntroContent>
                </IntroContainer>
            </WelcomeContainer>
            <SectionContainer>
                <CardContainer>
                    <ServiceCard>
                        <CardTitle>Dog Walking Application</CardTitle>
                        <CardDescription>
                            A full-stack application developed using React for the front end, leveraging Ruby on Rails for the API
                            backend, and employing a PostgreSQL (PSQL) database for data management. The application is deployed on
                            the Render platform. AWS S3 is utilized for photo storage, while styling is achieved through the
                            utilization of Bootstrap and styled-components libraries.
                        </CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://youtu.be/vGsZPkvNa5Y">video</ActionButton>
                            <ActionButton target="_blank" href="https://dog-walking-app.onrender.com">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/dog-walking-app.git">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Pokemon Guide</CardTitle>
                        <CardDescription>
                            An intricately crafted single-page application engineered with React, leveraging the PokeAPI to
                            dynamically sort and present data based on specific criteria and user requests.
                        </CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://beaulazear.github.io/pokemon/">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/pokemon">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>www.beaulazear.com</CardTitle>
                        <CardDescription>
                            A single page application made with React for marketing my business and providing information to new
                            clients.
                        </CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://beaulazear.com/">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/beaus-website">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Aria Design Consultants</CardTitle>
                        <CardDescription>
                            An interactive single-page application crafted using React, with styling handled efficiently through
                            Styled Components and Bootstrap, designed specifically for marketing needs.
                        </CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://beaulazear.github.io/michael-personal-site/">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/michael-personal-site.git">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Personal Marketing Website</CardTitle>
                        <CardDescription>
                            A single page application made with React for information/resume sharing & personal marketing.
                        </CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://beaulazear.github.io/nadine/#/">deployed</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/nadine">repo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Pet Sitting Application</CardTitle>
                        <CardDescription>
                            A comprehensive application developed using Ruby on Rails to serve as an API for PostgreSQL database,
                            seamlessly integrated with React for efficient management of pet sitting services.
                        </CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/pet-sitting-app.git">repo</ActionButton>
                            <ActionButton target="_blank" href="https://www.youtube.com/watch?v=n1pzEzciu1E&feature=youtu.be">video</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                    <ServiceCard>
                        <CardTitle>Exercise/Workout Log</CardTitle>
                        <CardDescription>
                            A single page application made with Ruby, React, Active Record, and Sinatra for tracking workout data.
                        </CardDescription>
                        <ButtonContainer>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/react-sinatra-project">frontRepo</ActionButton>
                            <ActionButton target="_blank" href="https://github.com/beaulazear/phase-3-sinatra-react-project">backRepo</ActionButton>
                        </ButtonContainer>
                    </ServiceCard>
                </CardContainer>
            </SectionContainer>
        </div>
    );
};

export default Programming;
