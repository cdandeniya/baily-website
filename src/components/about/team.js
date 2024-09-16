import React, { useState } from 'react';
import styled from 'styled-components';
import { media, Container, Section } from '@styles';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledSection = styled(Section)`
  padding-top: 6rem; /* Adjusted padding */
  text-align: center;

  ${media.thone`
    padding-top: 4.25rem;
  `};
`;

const Title = styled.h2`
  font-size: 48px; /* Bold title */
  text-align: center;
  margin-bottom: 1.5rem; /* Spacing below title */
  font-weight: bold;

  ${media.tablet`
    font-size: 36px;
  `};
`;

const Subtitle = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 4rem; /* Spacing below subtitle */
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
    grid-gap: 3rem;
  `};
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const StyledImage = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  border-radius: 12px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 12px;
`;

const Name = styled.h3`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0.5rem;

  ${media.thone`
    font-size: 20px;
  `};
`;

const ReadMoreButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  ${media.tablet`
    font-size: 14px;
  `};
`;

const Team = ({ data }) => {
  return (
    <StyledSection>
      <Container max>
        <Title>Making it happen</Title>
        <Subtitle>
          Discover the Creative Minds Behind Our Toys, Shaping Future Learning in Classrooms Globally
        </Subtitle>
        <GridWrapper>
          <Card>
            <ImageWrapper>
              <StyledImage
                image={data.chanul.childImageSharp.gatsbyImageData}
                alt="Chanul Dandeniya"
              />
              <Overlay>
                <Name>Chanul Dandeniya</Name>
                <ReadMoreButton>Read More</ReadMoreButton>
              </Overlay>
            </ImageWrapper>
          </Card>
          <Card>
            <ImageWrapper>
              <StyledImage
                image={data.ahad.childImageSharp.gatsbyImageData}
                alt="Ahad Hassan"
              />
              <Overlay>
                <Name>Ahad Hassan</Name>
                <ReadMoreButton>Read More</ReadMoreButton>
              </Overlay>
            </ImageWrapper>
          </Card>
        </GridWrapper>
      </Container>
    </StyledSection>
  );
};

export default Team;
