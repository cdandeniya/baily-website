import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media, Container, Section } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 4rem;  /* Adjust padding */
  text-align: center;  /* Ensuring all items are centered */
  font-family: 'Poppins', sans-serif;  /* Applying Poppins font globally */
  ${media.thone`
    padding-top: 3rem;
  `};
`;

const MeetTeamText = styled.h3`
  font-size: 18px;  /* Small font size for "MEET THE TEAM" */
  color: #B4B4B4;  /* Light gray color */
  text-align: center;
  margin-bottom: 0.2rem;  /* Reduced space between "MEET THE TEAM" and "Making it happen" */
  text-transform: uppercase;
  font-weight: bold;  /* Bolded text */
`;

const CenterText = styled.h2`
  font-size: 64px;  /* Larger font for title */
  text-align: center;
  margin-bottom: 1rem;  
  font-weight: bold;  
  color: #386AEA;  
  
  ${media.tablet`
    font-size: 48px;
  `};
`;

const Subtitle = styled.p`
  font-size: 20px;
  max-width: 600px;  /* Limit the width to create two lines */
  text-align: center;
  margin: 0 auto 2rem auto;  /* Centering the text and adjusting margin */
  color: #262626;  /* Darker gray for better contrast */
  font-weight: normal; 
  line-height: 1.5;  /* Increase line spacing for readability */
  
  ${media.tablet`
    font-size: 18px;
    margin-bottom: 1.5rem;
  `};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;  /* Reduced space between cards */
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
  width: 260px;  /* Increased image width */
  height: 320px;  /* Increased image height */
  border-radius: 12px;  /* Rounded corners */
  object-fit: cover;
  filter: grayscale(100%);  /* Black-and-white effect */
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    transform: scale(1.05);
  }

  ${media.tablet`
    width: 220px;
    height: 280px;
  `};
`;

const Name = styled.h3`
  font-size: 22px;  /* Font size matching the design */
  color: var(--text);
  font-weight: bold;  /* Bolded text */
  margin: 0;

  ${media.tablet`
    font-size: 20px;
  `};
`;

const Position = styled.span`
  font-size: 16px;
  color: var(--dark-gray);
  font-weight: bold;  /* Bolded text */
`;

const ReadMore = styled.button`
  background-color: transparent;
  border: 2px solid #386AEA;  /* Updated border color */
  color: #386AEA;  /* Updated text color */
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;  /* Bolded text */
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
        <MeetTeamText>MEET THE TEAM</MeetTeamText>  {/* New addition */}
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
