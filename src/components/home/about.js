import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card, DefaultText } from '@styles';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

const StyledSection = styled(Section)`
  padding-top: 35vh;

  ${media.tablet`
    padding-top: 20vh; /* Reduce padding for mobile */
  `};
  ${media.thone`
    padding-top: 10vh; /* Further reduce padding for phones */
  `};
`;

const TextWrapper = styled.div`
  max-width: 1000px;
  padding: 1rem;

  ${media.massive`
    padding-top: 8rem;
    max-width: 1500px;
  `};
  ${media.thone`
    text-align: left;
    padding: 1rem; /* Add padding for phones */
  `}; 
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  ${media.thone`
    margin-top: 1rem; /* Reduce margin for phones */
  `};
`;

const StyledImage = styled(Img)`
  width: 800px;

  ${media.massive`
    width: 700px;
    margin-top: -30rem;
  `};
  ${media.tablet`
    width: 400px;
    margin-top: -15rem;
  `};
  ${media.thone`
    width: 90vw; /* Scale down image width for phones */
    margin-top: 0; /* No negative margin on phones */
  `};
`;

const Title = styled.h1`
  font-size: 75px;
  letter-spacing: -4px;
  line-height: 118.2%;
  font-weight: bold;
  margin-top: 1rem;

  ${media.tablet`font-size: 55px;`};
  ${media.thone`
    font-size: 25px; /* Reduce font size for phones */
    letter-spacing: -1px;
    margin-top: 0.5rem;
  `};
`;

const CustomDescription = styled(DefaultText)`
  max-width: 75%;
  margin: 0;

  ${media.tablet`max-width: 100%;`};
  ${media.thone`
    max-width: 100%; /* Full width on phones */
    font-size: 16px; /* Smaller font size for phones */
    line-height: 1.4;
  `};
`;

const Label = styled.span`
  font-size: 26px;
  color: #f1f1f1;
  font-weight: 500;
  text-transform: uppercase;

  ${media.thone`
    font-size: 18px; /* Reduce label font size on phones */
  `};
`;

const About = ({ data }) => {
  return (
    <StyledSection>
      <Container>
        <Card bg="var(--purple)" color="var(--white)">
          <ImageWrapper data-scroll data-scroll-speed={1}>
            <StyledImage image={data.searching.childImageSharp.gatsbyImageData} alt="Searching" />
          </ImageWrapper>
          <TextWrapper>
            <Label>About us</Label>
            <Title>
              We Empower Young Minds to Learn, Grow, and Dream Through Play
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