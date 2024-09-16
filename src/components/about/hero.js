import React from 'react';
import styled from 'styled-components';
import { Section, Container, media } from '@styles';
import { GatsbyImage as Img } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';  // Import graphql from Gatsby

const StyledSection = styled(Section)`
  padding-top: 10rem;  /* Reduced padding */
  padding-bottom: 10rem;  /* Reduced padding */
  overflow-x: hidden;
  min-height: 60rem;

  ${media.tablet`
    padding-top: 5rem; /* Less padding for tablets */
    padding-bottom: 5rem; 
    max-height: 40rem;
  `};
  ${media.thone`
    padding-top: 3rem; /* Further reduce padding for phones */
    padding-bottom: 3rem;
  `};
`;

const BigText = styled.h1`
  font-weight: bold;
  font-size: 80px;
  letter-spacing: -2px;
  line-height: 100%;

  ${media.massive`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};  /* Adjusted for tablets */
  ${media.thone`font-size: 40px;`};  /* Adjusted for phones */
`;

const Description = styled.p`
  font-size: 28px;
  max-width: 90%;
  line-height: 146%;

  ${media.tablet`
    max-width: 100%;
    font-size: 24px;
  `};
  ${media.thone`
    font-size: 18px; /* Smaller font size for phones */
    max-width: 100%; 
    line-height: 1.4;
  `};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${media.tablet`flex-direction: column-reverse;`};  /* Stack elements on mobile */
`;

const Col = styled.div`
  flex: 0 0 auto;
  width: ${props => (props.bigger ? '60%' : '40%')};

  ${media.tablet`
    width: 100%; /* Full width on tablets and smaller */
  `};
`;

const StyledImage = styled(Img)`
  width: 100%;

  ${media.tablet`display: none;`};  /* Hide image on smaller devices */
`;

const Hero = ({ data }) => {
  return (
    <StyledSection>
      <Container max>
        <Row>
          <Col bigger>
            <BigText>We're the Toymakers of the Future: Crafting Tomorrow's Learning Today</BigText>
            <Description>
              Baily is empowering young minds to explore, create, and thrive in a digital world.
            </Description>
          </Col>
          <Col>
            <StyledImage image={data.blast.childImageSharp.gatsbyImageData} alt="About us" />
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default Hero;

// GraphQL query to fetch the image data
export const query = graphql`
  query {
    blast: file(relativePath: { eq: "blast-image.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
          placeholder: BLURRED
        )
      }
    }
  }
`;
