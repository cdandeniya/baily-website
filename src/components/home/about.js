import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card, DefaultText } from '@styles';
import Img from 'gatsby-image';

const StyledSection = styled(Section)`
  padding-top: 35vh;
`;
const TextWrapper = styled.div`
  max-width: 1000px;

  ${media.massive`
    padding-top: 8rem;
    max-width: 1500px;
  `};
  ${media.thone`text-align: center;`};
`;
const ImageWrapper = styled.div`
  position: absolute;
`;
const StyledImage = styled(Img)`
  width: 800px;
  position: absolute;
  left: 80%;
  transform: translate(40%, 10%);

  ${media.massive`
    width: 700px;
    left: 60%;
    transform: translateX(-50%);
    margin-top: -30rem;
  `};
  ${media.tablet`
    width: 400px;
    margin-top: -15rem;
  `};
  ${media.thone`
    width: 80vw;
    left: 45%;
    margin-top: -13rem;
  `};
  ${media.phablet`margin-top: -10rem;`};
`;
const Title = styled.h1`
  font-size: 75px;
  letter-spacing: -4px;
  line-height: 118.2%;
  font-weight: bold;
  margin-top: 1rem;

  ${media.tablet`font-size: 55px;`};
  ${media.thone`
    font-size: 30px;
    letter-spacing: -1px;
  `};
`;
const CustomDescription = styled(DefaultText)`
  max-width: 75%;

  ${media.tablet`max-width: 100%;`};
`;
const Label = styled.span`
  font-size: 26px;
  color: #f1f1f1;
  font-weight: 500;
  text-transform: uppercase;

  ${media.thone`font-size: 19px;`};
`;

const About = ({ data }) => {
  return (
    <StyledSection>
      <Container>
        <Card bg="var(--purple)" color="var(--white)">
          <ImageWrapper data-scroll data-scroll-speed={1}>
            <StyledImage fluid={data.searching.childImageSharp.fluid} alt="Searching" />
          </ImageWrapper>
          <TextWrapper>
            <Label>About us</Label>
            <Title>
              We Empower Young Minds to Learn, Grow, and Dream Through Play.
            </Title>
            <CustomDescription>
              At Baily AI, we blend the wonder of play with the power of learning. Our AI-powered toys are not just toys; they're companions designed to foster creativity, curiosity, and intelligence in children aged 5-12. Through customizable features and engaging content, each toy adapts to your child's unique interests, helping them explore technology and learn at their own pace. Join us in nurturing the next generation of thinkers and doers.
            </CustomDescription>
          </TextWrapper>
        </Card>
      </Container>
    </StyledSection>
  );
};

export default About;
