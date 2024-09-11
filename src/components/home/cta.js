import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { media, Container, Section, Card } from '@styles';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.tablet`flex-direction: column;`};
`;
const StyledCard = styled(Card)`
  :not(:first-child) {
    margin-left: 3rem;

    ${media.tablet`
      margin-left: 0;
      margin-top: 3rem;
    `};
  }
`;
const PaddingWrapper = styled.div`
  padding: 3rem 0;
`;
const TextWrapper = styled(Link)`
  text-align: center;
  color: var(--text);

  :hover {
    text-decoration: underline;
  }
`;
const TextWrapperA = styled.a`
  text-align: center;
  color: var(--text);

  :hover {
    text-decoration: underline;
  }
`;
const Title = styled.h2`
  font-size: 65px;
  letter-spacing: -4px;
  font-weight: 700;
  margin: 0;
`;
const Subtitle = styled.p`
  font-size: 28px;
  letter-spacing: -1.2px;
  margin-bottom: 0;
  margin-top: 1rem;
`;

const CTA = () => {
  return (
    <Section>
      <Container>
        <CardsWrapper>
          <StyledCard width="50%" bg="var(--blue)">
            <PaddingWrapper>
              <TextWrapper to="/about">
                <Title>About us</Title>
                <Subtitle>Learn who we are and why we’re here</Subtitle>
              </TextWrapper>
            </PaddingWrapper>
          </StyledCard>
          <StyledCard width="50%" bg="var(--light-purple)">
            <PaddingWrapper>
              <TextWrapperA href="https://bank.hackclub.com/donations/start/techcodes">
                <Title>Donate</Title>
                <Subtitle>Help us out by making a small donation</Subtitle>
              </TextWrapperA>
            </PaddingWrapper>
          </StyledCard>
        </CardsWrapper>
      </Container>
    </Section>
  );
};

export default CTA;
