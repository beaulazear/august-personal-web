import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Ruth from "../images/Ruth.jpeg";
import BeauAndRalph from "../images/BeauAndRalph.JPG";
import JavaLookinCute from "../images/JavaLookinCute.jpeg";
import RiverWithBrick from "../images/RiverWithBrick.jpeg";
import MooseOnVerandah from "../images/MooseOnVerandah.jpeg";
import BeauReykaMangoRu from '../images/BeauReykaMangoRu.jpeg';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding-bottom: 25px;
  margin: auto;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 801px) {
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1300px;
    gap: 20px;
  }
`;

const StyledServiceCardTesti = styled.div`
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: calc(50% - 40px);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 800px) {
    width: 100%;
    margin: 5px;
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
    padding: 5px
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
  }
`;

const StyledSubHeading = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
  margin-top: 0px;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    margin-bottom: 2px;
  }
`;

const StyledPrice = styled.h3`
  color: #555;
  font-size: 18px;
  text-align: left;
  margin-bottom: 10px;

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
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #777;
  line-height: 1.6;
  text-align: left;

  @media (max-width: 800px) {
    font-size: 1em;
  }
`;

const ImageContainer = styled.div`
  width: 240px;
  height: 240px;
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
  object-fit: cover;
  border-radius: 15px;
`;

const AnimalCareInfo = () => {
    const topElement = useRef(null);

    function scrollToTop() {
        topElement?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        scrollToTop();
    }, []);

    return (
        <StyledWelcomeMessage ref={topElement}>
            <ImageContainer>
                <Image src={BeauReykaMangoRu} />
            </ImageContainer>
            <StyledIntroduction>
                <StyledHeading>
                    My Background
                </StyledHeading>
                <Paragraph>
                    Hello! I am an animal caretaker with over eight years of professional caretaking experience. Experience includes zookeeping (Prospect Park Zoo, Wildlife Conservation Society), veterinary assisting, rescue rehabilitation (ASPCA), general pet care & enrichment. You can find my offered services, pricing, & client testimonials below.
                </Paragraph>
            </StyledIntroduction>
            <StyledHeading>Services and Pricing</StyledHeading>
            <StyledContainer>
                <StyledServiceCardTesti>
                    <StyledSubHeading>Dog walks</StyledSubHeading>
                    <StyledPrice>
                        $22 - 30 minute walk<br />
                        $27 - 45 minute walk<br />
                        $33 - 60 minute walk<br />
                        $42 - 90 minute walk<br />
                        $50 - 120 minute walk<br />
                    </StyledPrice>
                    <StyledParagraph>
                        - Add $10 if additional Dog (same household)<br />
                        - Add $5 for solo walk (behavioral, senior citizen)<br />
                        - Add $5 if earlier than 10am / later than 5pm<br />
                        <br />
                        * Walk may be shortened if weather is hazardous<br />
                        <br />
                        Photo updates and description of service provided sent via text or email.
                    </StyledParagraph>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <StyledHeading>Pet sitting</StyledHeading>
                    <StyledPrice>$95 - Overnight pet sitting, includes:</StyledPrice>
                    <StyledParagraph>
                        - Morning walk + breakfast (7-10am)<br />
                        - Evening walk + dinner (4-6pm)<br />
                        - Bedtime walk (8-11pm)<br />
                        <br />
                        - Extra $15 if 4th mid day walk is required<br />
                        - Add $25 if additional dog in household<br />
                        - Add $15 if cat care is required (litter, feeding, water, etc)<br />
                        <br />
                        Photo updates and description of service provided sent via text or email.
                    </StyledParagraph>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <StyledHeading>Cat visits</StyledHeading>
                    <StyledPrice>
                        $25 - one visit (approx. 30 minutes)<br />
                        $40 - two visits in one day (AM + PM)
                    </StyledPrice>
                    <StyledParagraph>
                        I will clean the litterboxes, sweep the surrounding area, feed and refill water bowls, clean old food
                        dishes, and bring in any mail. (Special requests can be made, ex. water the plants...)<br />
                        <br />
                        I will play with your cat for the rest of the visit, if they want that is!<br />
                        <br />
                        Photo updates and description of service provided sent via text or email.
                    </StyledParagraph>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <StyledHeading>Exotic animal care</StyledHeading>
                    <StyledPrice>$30 - one visit (approx. 30 minutes)</StyledPrice>
                    <StyledParagraph>
                        I can feed your snake, parrot, iguana... pretty much anything! I used to work as a zookeeper, so I have
                        plenty of experience. I will clean enclosures, change water dishes, make sure heat lamps are running, and
                        complete any other special requests. I'm aware of how delicate some of these creatures are, and will ensure
                        the safety of your animal during your whole vacation!<br />
                        <br />
                        Photo updates and description of service provided sent via text or email.
                    </StyledParagraph>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <StyledHeading>Euthanasia support</StyledHeading>
                    <StyledPrice>Free of charge :)</StyledPrice>
                    <StyledParagraph>
                        With my animal rescue / veterinary experience, I have been there for a lot of euthanasia. I know this can be
                        a very tough moment for an animal lover! I would like to offer my company free of charge... To be with you
                        during the euthanasia visit, so you do not have to go through it alone. I am also more than happy to spend
                        some time with you afterwards. It is always helpful to have someone to talk to.<br />
                        <br />
                        "To live in hearts we leave behind is not to die" -Thomas Campbell
                    </StyledParagraph>
                </StyledServiceCardTesti>
            </StyledContainer>
            <StyledHeading>Client Testimonials</StyledHeading>
            <StyledContainer>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image src={BeauAndRalph} alt="a dog named Ralph with Beau" />
                    </ImageContainer>
                    <StyledHeading>Julie and Ralph</StyledHeading>
                    <StyledParagraph>
                        Beau is the absolute best! Like many pet owners, my pup, Ralph, means the world to me and it takes a lot for me
                        to trust someone. Beau always keeps me updated on the walks and any new friends that Ralph makes. His
                        daily recap texts include pictures which I joke is like I hired a professional photographer as an added bonus.
                        I think the favorite part of Ralph's day is when Beau arrives, he knows he'll get fresh air, lots of love and a
                        few treats.
                    </StyledParagraph>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image src={Ruth} alt="a dog named Ruth" />
                    </ImageContainer>
                    <StyledHeading>Anna + Anna and Ruthie</StyledHeading>
                    <StyledParagraph>
                        From the moment our Ruthie met Beau, she was in love. We say his name and her tail wags with delight. And if we
                        had tails, we would wag them too! Beau is communicative and professional, clear and detailed with his walking
                        reports and pet sits. We trust him profoundly with our excitable and sometimes too stubborn mini goldendoodle.
                        He loves her as if she was his own, with great care and compassion. When he walks her, our busy lives are made
                        easier. We come home to a happily walked and calm dog after each and every visit. We couldn’t recommend Beau
                        with higher praise and feel lucky that Ruthie gets to spend time with him.
                    </StyledParagraph>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image src={RiverWithBrick} alt="A dog named River" />
                    </ImageContainer>
                    <StyledHeading>Vanessa and River</StyledHeading>
                    <StyledParagraph>
                        Admittedly, it's not easy for me to leave my pup, River, with anyone… except for Beau. I met Beau at a nearby dog
                        park and knew instantly that he was a genuine and compassionate animal lover. He proves that time and time again,
                        going above and beyond to keep River happy and safe. Beau is thoughtful, dependable, responsible, and incredibly
                        kind. He communicates thoroughly and sends detailed summaries (with adorable photographs!) after every walk. We
                        are incredibly grateful that we found Beau and could not possibly recommend him more!
                    </StyledParagraph>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image src={JavaLookinCute} alt="A dog named Java" />
                    </ImageContainer>
                    <StyledHeading>Jaimee and Java</StyledHeading>
                    <StyledParagraph>
                        I can't recommend Beau enough. Above all, he values each pet's safety and comfort. He is passionate about connecting
                        with and understanding the needs of animals, which I have seen in his connection with Java, our 15-year-old goldendoodle.
                        Beau is reliable, communicative, and extremely thoughtful, and Java is consistently excited to see him. Beau took time
                        to get to know Java, and we are so grateful to put her in his care.
                    </StyledParagraph>
                </StyledServiceCardTesti>
                <StyledServiceCardTesti>
                    <ImageContainer>
                        <Image src={MooseOnVerandah} alt="A dog named Moose" />
                    </ImageContainer>
                    <StyledHeading>Carolyn + Patrick and Moose</StyledHeading>
                    <StyledParagraph>
                        I highly recommend Beau as a dog walker and dog sitter. Beau has been regularly walking our dog Moose and has
                        consistently provided excellent care, and our dog absolutely loves him! Beau is extremely reliable, and always goes
                        above and beyond to make sure Moose is happy and has a good walk. Beau’s extremely accommodating of our schedules,
                        and has saved us on multiple occasions when we last minute needed dog care. I’m really thankful for his flexibility
                        and kindness. Beau has dog sat for Moose on several occasions and has always provided exceptional care during his stays.
                        He sends regular updates about walks / dog sits and provides awesome pictures with each update. I trust Beau completely
                        and am so grateful to have him as Moose's dog walker and dog sitter.
                    </StyledParagraph>
                </StyledServiceCardTesti>
            </StyledContainer>
        </StyledWelcomeMessage>
    );
};

export default AnimalCareInfo;