import React from 'react';
import styled from 'styled-components';
import { Section, Container, Button, media } from '@styles';
import Img from 'gatsby-image';

const StyledSection = styled(Section)`
  padding-top: 10rem;
  overflow-x: hidden;
  min-height: 60rem;

  ${media.tablet`max-height: 40rem;`};
  ${media.thone`
    padding-top: 10rem;
  `};
`;
const BigText = styled.h1`
  font-weight: bold;
  font-size: 80px;
  letter-spacing: -2px;
  line-height: 100%;

  ${media.massive`font-size: 70px;`};
  ${media.thone`font-size: 48px;`};
`;
const Description = styled.p`
  font-size: 28px;
  max-width: 90%;
  line-height: 146%;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`font-size: 19px;`};
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${media.tablet`flex-direction: column-reverse;`};
`;
const Col = styled.div`
  flex: 0 0 auto;
  width: ${props => (props.bigger ? '60%' : '40%')};

  ${media.tablet`width: 100%;`};
`;
const StyledImage = styled(Img)`
  width: 80%;
  margin-left: 20%;

  ${media.tablet`display: none;`};
`;
const ButtonWrapper = styled.div`
  font-size: 28px;
  padding-top: 2rem;

  ${media.tablet`font-size: 16px;`};
`;

const Hero = ({ data }) => {
  return (
    <StyledSection>
      <Container max>
        <Row>
          <Col bigger>
            <BigText>Experience the Magic: Schedule Your Demo at your School Today!</BigText>
            <Description>
              Discover how our AI-powered toys can enhance learning in your classroom. See firsthand how Baily inspires curiosity and educational engagement in schools.
            </Description>
            <ButtonWrapper>
              <Button href="/contact">Schedule Your Demo</Button>
            </ButtonWrapper>
          </Col>
          <Col>
            <StyledImage fluid={data.heart.childImageSharp.fluid} alt="About us" />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Hero;
