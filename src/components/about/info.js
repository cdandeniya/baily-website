import React from 'react';
import styled from 'styled-components';
import { media, Container, Section, Card, DefaultText } from '@styles';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  div :last-child {
    ${media.desktop`margin-top: 2rem;`};
  }

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

const Info = ({ data }) => {
  return (
    <Section>
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
    </Section>
  );
};

export default Info;
