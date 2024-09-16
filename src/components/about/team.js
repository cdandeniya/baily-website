import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media, Container, Section } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 6rem;  /* Reduced padding to match design */

  ${media.thone`
    padding-top: 4.25rem;
  `};
`;

const CenterText = styled.h2`
  font-size: 48px;  /* Adjusted for title */
  text-align: center;
  margin-bottom: 1.5rem;  /* Reduced margin */
  font-weight: bold;

  ${media.tablet`
    font-size: 36px;
  `};
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 4rem;  /* More space after subtitle */
  color: var(--dark-gray);

  ${media.tablet`
    font-size: 16px;
    margin-bottom: 3rem;
  `};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  justify-items: center;

  ${media.tablet`
    grid-template-columns: 1fr;
  `};
`;

const Card = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledImage = styled(Img)`
  width: 200px;  /* Larger image */
  height: 250px;
  border-radius: 16px;  /* Rounded corners */
  object-fit: cover;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    transform: scale(1.05);
  }

  ${media.tablet`
    width: 150px;  /* Smaller image on mobile */
    height: 200px;
  `};
`;

const Name = styled.h3`
  font-size: 24px;
  color: var(--text);
  font-weight: bold;
  margin: 0;

  ${media.tablet`
    font-size: 20px;
  `};
`;

const Position = styled.span`
  font-size: 16px;
  color: var(--dark-gray);
  font-weight: 500;
`;

const ReadMore = styled.button`
  background-color: transparent;
  border: 2px solid var(--blue);
  color: var(--blue);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 1rem;
  
  :hover {
    background-color: var(--blue);
    color: white;
  }
`;

const Team = ({ data }) => {
  return (
    <StyledSection>
      <Container max>
        <CenterText>Making it happen</CenterText>
        <Subtitle>Discover the Creative Minds Behind Our Toys, Shaping Future Learning in Classrooms Globally</Subtitle>
        <GridWrapper>
          <Card>
            <StyledImage
              fluid={data.chanul.childImageSharp.fluid}
              alt="Chanul Dandeniya"
              objectFit="cover"
            />
            <Name>Chanul Dandeniya</Name>
            <Position>President</Position>
            <ReadMore>Read More</ReadMore>
          </Card>

          <Card>
            <StyledImage
              fluid={data.kyrylo.childImageSharp.fluid}
              alt="Ahad Hassan"
              objectFit="cover"
            />
            <Name>Ahad Hassan</Name>
            <Position>Vice President</Position>
            <ReadMore>Read More</ReadMore>
          </Card>
        </GridWrapper>
      </Container>
    </StyledSection>
  );
};

export default Team;
