import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card, Button, DefaultText } from '@styles';
import Img from 'gatsby-image';

const CustomSection = styled(Section)`
  ${media.bigDesktop`padding-top: 18rem;`};
  ${media.tablet`padding-top: 12rem;`};
  ${media.phablet`padding-top: 8rem;`};
`;
const TextWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;

  a {
    font-size: 24px;
    ${media.tablet`font-size: 18px;`};
  }

  ${media.massive`max-width: 90%;`};
  ${media.bigDesktop`padding-top: 8rem;`};
  ${media.thone`text-align: center; padding-top: 4rem;`};
  ${media.phablet`padding-top: 2rem;`};
`;
const StyledCard = styled(Card)`
  padding: 4rem 2rem;
  width: 100%;
  margin-top: 3rem;

  ${media.bigDesktop`width: 80%; margin: 0 auto;`};
  ${media.tablet`width: 90%; margin: 0 auto;`};
  ${media.phablet`width: 95%;`};
`;
const ImageWrapper = styled.div`
  position: relative;
`;
const StyledImage = styled(Img)`
  width: 1000px;
  position: absolute;
  left: 90%;
  transform: translate(-10%, 12%);

  ${media.massive`left: 80%;`};
  ${media.bigDesktop`
    width: 800px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -30rem;
  `};
  ${media.tablet`
    width: 600px;
    margin-top: -15rem;
  `};
  ${media.thone`
    width: 90vw;
    margin-top: -13rem;
  `};
`;
const Title = styled.h1`
  font-size: 65px;
  letter-spacing: -2px;
  line-height: 1.2;
  font-weight: bold;
  margin-bottom: 2rem;

  ${media.tablet`font-size: 50px; margin-bottom: 1rem;`};
  ${media.thone`
    font-size: 35px;
    letter-spacing: -1px;
    margin-bottom: 1rem;
  `};
`;
const Description = styled(DefaultText)`
  max-width: 80%;
  margin: 3rem auto;

  ${media.tablet`
    max-width: 100%;
    margin: 2rem auto;
  `};
`;

const Events = ({ data }) => {
  return (
    <CustomSection>
      <Container>
        <ImageWrapper>
          <div data-scroll data-scroll-direction="horizontal" data-scroll-speed={1}>
            <StyledImage fluid={data.drawing.childImageSharp.fluid} alt="Drawing" />
          </div>
        </ImageWrapper>
        <StyledCard bg="var(--yellow)" color="var(--text)">
          <TextWrapper>
            <Title>Meet Curio</Title>
            <Description>
              Greetings! I'm your friendly AI companion, crafted to ignite your curiosity and passion for learning. Together, we’ll explore endless adventures and unlock new wonders every day. With my customizable skills and dynamic personality, I'm here to grow and learn right alongside you, making every moment of play educational and fun!
            </Description>
            <Button to="/events">See what I can do!</Button>
          </TextWrapper>
        </StyledCard>
      </Container>
    </CustomSection>
  );
};

export default Events;