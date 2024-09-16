import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media, Container, Section } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 4rem;  /* Adjust padding */
  text-align: center;  /* Ensuring all items are centered */
  ${media.thone`
    padding-top: 3rem;
  `};
`;

const CenterText = styled.h2`
  font-size: 56px;  /* Larger font for title */
  text-align: center;
  margin-bottom: 1rem;  /* Reduced margin */
  font-weight: bold;
  color: #386AEA;  /* Updated color to match the request */
  
  ${media.tablet`
    font-size: 42px;
  `};
`;

const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 2rem;  /* Adjusted space after subtitle */
  color: #4A4A4A;  /* Darker gray for better contrast */
  font-weight: 500;  /* Slightly bolder to stand out */
  
  ${media.tablet`
    font-size: 18px;
    margin-bottom: 1.5rem;
  `};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;  /* Reduced space between cards */
  justify-items: center;
  align-items: center;

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
  width: 180px;  /* Image dimensions */
  height: 230px;
  border-radius: 12px;  /* Rounded corners */
  object-fit: cover;
  filter: grayscale(100%);  /* Black-and-white effect */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    transform: scale(1.05);
  }

  ${media.tablet`
    width: 140px;
    height: 180px;
  `};
`;

const Name = styled.h3`
  font-size: 22px;  /* Font size matching the design */
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
  border: 2px solid #386AEA;  /* Updated border color */
  color: #386AEA;  /* Updated text color */
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin-top: 1rem;
  
  :hover {
    background-color: #386AEA;  /* Button background on hover */
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