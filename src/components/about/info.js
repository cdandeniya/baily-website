import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card, DefaultText } from '@styles';
import Img from 'gatsby-image';

const StyledSection = styled(Section)`
  padding-top: 35vh;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative; /* Allows the image to be positioned relative to the cards */

  ${media.desktop`
    flex-direction: column;
  `};
`;

const TextWrapper = styled.div`
  color: var(--text);

  ${media.thone`text-align: center;`};
`;

const Title = styled.h2`
  font-size: 65px;
  letter-spacing: -4px;
  font-weight: 700;
  margin: 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -20%);
  width: 300px; /* Adjust the size of the image */
`;

const StyledImage = styled(Img)`
  width: 100%;
`;

const Info = ({ data }) => {
  return (
    <StyledSection>
      <Container>
        <CardsWrapper>
          <Card width="48%" bg="var(--blue)">
            <TextWrapper>
              <Title>About Baily AI</Title>
              <DefaultText>
                At Baily, we are pioneers in the next wave of educational toys. Our AI-powered companions are more than just toys; they are gateways to sparking lifelong curiosity and foundational learning. Designed with the future in mind, each Baily AI toy adapts to the individual child, making learning personal, engaging, and fun. By integrating cutting-edge technology with child-friendly design, we create experiences that educate, inspire, and delight.
              </DefaultText>
            </TextWrapper>
          </Card>

          {/* Character image centered between the cards */}
          <ImageWrapper>
            <StyledImage fluid={data.lifting.childImageSharp.fluid} alt="Character holding toys" />
          </ImageWrapper>

          <Card width="48%" bg="var(--yellow)">
            <TextWrapper>
              <Title>Our mission</Title>
              <DefaultText>
                Our mission at Baily is to be the toymakers of the future, transforming how children learn through play. We strive to develop interactive toys that blend educational content with personal growth opportunities, fostering both cognitive and creative skills. Our goal is to build a brighter future where every child is equipped with the tools to explore, create, and lead in a changing world. Every toy we craft is a step towards making this vision a reality, ensuring that our young users are inspired to pursue their passions and embrace the joy of learning.
              </DefaultText>
            </TextWrapper>
          </Card>
        </CardsWrapper>
      </Container>
    </StyledSection>
  );
};

export default Info;

export const query = graphql`
  query {
    lifting: file(relativePath: { eq: "props/lift.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
