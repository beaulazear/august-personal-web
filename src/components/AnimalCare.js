import React, { useEffect } from 'react';
import styled from 'styled-components';
import Ruth from "../images/Ruth.jpeg";
import BeauAndRalph from "../images/BeauAndRalph.JPG";
import JavaLookinCute from "../images/JavaLookinCute.jpeg";
import RiverWithBrick from "../images/RiverWithBrick.jpeg";
import MooseOnVerandah from "../images/MooseOnVerandah.jpeg";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding-bottom: 25px;
  margin: auto;
  max-width: 1500px;
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: left;
    text-align: left;
    width: 100%;
  }
`;

const StyledCard = styled.div`
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px;
  max-width: 550px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 900px) {
    margin: 5px;
    text-align: left;
  }
`;

const StyledWelcomeMessage = styled.div`
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 800px) {
    padding: 5px;
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

const StyledPrice = styled.h3`
  color: #555;
  font-size: 18px;
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;

  @media (max-width: 800px) {
    font-size: 1.2em;
  }
`;

const StyledParagraph = styled.p`
  color: #777;
  font-size: 18px;
  text-align: left;
  padding: 10px;
  line-height: 1.6;

  @media (max-width: 800px) {
    font-size: 1em;
  }
`;

const StyledIntroduction = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 6px;

  @media (max-width: 800px) {
    max-width: 600px;
    text-align: left;
  }
`;

const ImageContainer = styled.div`
  width: auto;
  height: auto;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 15px;
`;

const AnimalCareInfo = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <StyledWelcomeMessage>
            <StyledIntroduction>
                <StyledHeading>Background</StyledHeading>
                <StyledParagraph>
                    Hello! I am an animal caretaker with over eight years of professional experience. My background includes zookeeping (Prospect Park Zoo, Wildlife Conservation Society), veterinary assisting, rescue rehabilitation (ASPCA), and general pet care & enrichment. You can find my offered services, pricing, & client testimonials below.
                </StyledParagraph>
            </StyledIntroduction>
            <StyledHeading>Services and Pricing</StyledHeading>
            <StyledContainer>
                <StyledCard>
                    <StyledHeading>Dog Walks</StyledHeading>
                    <StyledPrice>
                        $22 - 30 minute walk<br />
                        $27 - 45 minute walk<br />
                        $33 - 60 minute walk<br />
                        $42 - 90 minute walk<br />
                        $50 - 120 minute walk<br />
                    </StyledPrice>
                    <StyledParagraph>
                        - Add $10 for additional dog (same household)<br />
                        - Add $5 for solo walk (behavioral, senior citizen)<br />
                        - Add $5 if earlier than 10am / later than 5pm<br />
                        <br />
                        * Walk may be shortened if weather is hazardous<br />
                        <br />
                        Photo updates and descriptions of service provided are sent via text or email.
                    </StyledParagraph>
                </StyledCard>
                <StyledCard>
                    <StyledHeading>Pet Sitting</StyledHeading>
                    <StyledPrice>$95 - Overnight pet sitting, includes:</StyledPrice>
                    <StyledParagraph>
                        - Morning walk + breakfast (7-10am)<br />
                        - Evening walk + dinner (4-6pm)<br />
                        - Bedtime walk (8-11pm)<br />
                        <br />
                        - Extra $15 if a 4th midday walk is required<br />
                        - Add $25 for additional dog in household<br />
                        - Add $15 for cat care (litter, feeding, water, etc)<br />
                        <br />
                        Photo updates and descriptions of service provided are sent via text or email.
                    </StyledParagraph>
                </StyledCard>
                <StyledCard>
                    <StyledHeading>Cat Visits</StyledHeading>
                    <StyledPrice>
                        $25 - One visit (approx. 30 minutes)<br />
                        $40 - Two visits in one day (AM + PM)
                    </StyledPrice>
                    <StyledParagraph>
                        I will clean the litter boxes, sweep the surrounding area, feed and refill water bowls, clean old food dishes, and bring in any mail. (Special requests can be made, e.g., watering plants...)<br />
                        <br />
                        I will also play with your cat for the rest of the visit if they want!<br />
                        <br />
                        Photo updates and descriptions of service provided are sent via text or email.
                    </StyledParagraph>
                </StyledCard>
                <StyledCard>
                    <StyledHeading>Exotic Animal Care</StyledHeading>
                    <StyledPrice>$30 - One visit (approx. 30 minutes)</StyledPrice>
                    <StyledParagraph>
                        I can feed your snake, parrot, iguana... pretty much anything! With my zookeeping experience, I will clean enclosures, change water dishes, ensure heat lamps are running, and complete any special requests. I am aware of how delicate some creatures are and will ensure their safety during your absence.<br />
                        <br />
                        Photo updates and descriptions of service provided are sent via text or email.
                    </StyledParagraph>
                </StyledCard>
                <StyledCard>
                    <StyledHeading>Euthanasia Support</StyledHeading>
                    <StyledPrice>Free of charge :)</StyledPrice>
                    <StyledParagraph>
                        With my animal rescue and veterinary experience, I understand how tough euthanasia can be for an animal lover. I offer my support free of charge to be with you during this difficult time. I am also available to spend some time with you afterward. It can be helpful to have someone to talk to.<br />
                        <br />
                        "To live in hearts we leave behind is not to die" - Thomas Campbell
                    </StyledParagraph>
                </StyledCard>
            </StyledContainer>
            <StyledHeading>Client Testimonials</StyledHeading>
            <StyledContainer>
                <StyledCard>
                    <ImageContainer>
                        <Image src={BeauAndRalph} alt="A dog named Ralph with Beau" />
                    </ImageContainer>
                    <StyledHeading>Julie and Ralph</StyledHeading>
                    <StyledParagraph>
                        Beau is the absolute best! Like many pet owners, my pup, Ralph, means the world to me and it takes a lot for me to trust someone. Beau always keeps me updated on the walks and any new friends Ralph makes. His daily recap texts include pictures, which I joke is like hiring a professional photographer as an added bonus. Ralph's favorite part of the day is when Beau arrives, knowing he'll get fresh air, lots of love, and a few treats.
                    </StyledParagraph>
                </StyledCard>
                <StyledCard>
                    <ImageContainer>
                        <Image src={Ruth} alt="A dog named Ruth" />
                    </ImageContainer>
                    <StyledHeading>Anna and Ruthie</StyledHeading>
                    <StyledParagraph>
                        From the moment Ruthie met Beau, she was in love. We say his name and her tail wags with delight. And if we had tails, we’d wag them too! Beau is communicative and professional, providing clear and detailed walking reports and pet sits. We trust him profoundly with our excitable and sometimes stubborn mini goldendoodle. He loves her as if she were his own, with great care and compassion. When he walks her, our busy lives are made easier. We come home to a happily walked and calm dog after each and every visit. We couldn’t recommend Beau with higher praise and feel lucky that Ruthie gets to spend time with him.
                    </StyledParagraph>
                </StyledCard>
                <StyledCard>
                    <ImageContainer>
                        <Image src={RiverWithBrick} alt="A dog named River" />
                    </ImageContainer>
                    <StyledHeading>Vanessa and River</StyledHeading>
                    <StyledParagraph>
                        Admittedly, it's not easy for me to leave my pup, River, with anyone… except for Beau. I met Beau at a nearby dog park and knew instantly that he was a genuine and compassionate animal lover. He proves that time and time again, going above and beyond to keep River happy and safe. Beau is thoughtful, dependable, responsible, and incredibly kind. He communicates thoroughly and sends detailed summaries (with adorable photographs!) after every walk. We are incredibly grateful that we found Beau and could not possibly recommend him more!
                    </StyledParagraph>
                </StyledCard>
                <StyledCard>
                    <ImageContainer>
                        <Image src={JavaLookinCute} alt="A dog named Java" />
                    </ImageContainer>
                    <StyledHeading>Jaimee and Java</StyledHeading>
                    <StyledParagraph>
                        I can't recommend Beau enough. Above all, he values each pet's safety and comfort. He is passionate about connecting with and understanding the needs of animals, which I have seen in his connection with Java, our 15-year-old goldendoodle. Beau is reliable, communicative, and extremely thoughtful, and Java is consistently excited to see him. Beau took time to get to know Java, and we are so grateful to put her in his care.
                    </StyledParagraph>
                </StyledCard>
                <StyledCard>
                    <ImageContainer>
                        <Image src={MooseOnVerandah} alt="A dog named Moose" />
                    </ImageContainer>
                    <StyledHeading>Carolyn and Patrick and Moose</StyledHeading>
                    <StyledParagraph>
                        I highly recommend Beau as a dog walker and dog sitter. Beau has been regularly walking our dog Moose and has consistently provided excellent care, and our dog absolutely loves him! Beau is extremely reliable and always goes above and beyond to make sure Moose is happy and has a good walk. Beau’s extremely accommodating of our schedules and has saved us on multiple occasions when we needed last-minute dog care. I’m really thankful for his flexibility and kindness. Beau has dog sat for Moose on several occasions and has always provided exceptional care during his stays. He sends regular updates about walks/dog sits and provides awesome pictures with each update. I trust Beau completely and am so grateful to have him as Moose's dog walker and dog sitter.
                    </StyledParagraph>
                </StyledCard>
            </StyledContainer>
        </StyledWelcomeMessage>
    );
};

export default AnimalCareInfo;
