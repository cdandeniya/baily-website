import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { media, Container, Section } from '@styles';

const StyledSection = styled(Section)`
  padding-top: 10rem;

  ${media.thone`padding-top: 4.25rem;`};
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 46px;

  ${media.tablet`
    grid-template-columns: 1fr;
    grid-gap: 24px;
  `};
`;
const Card = styled.div`
  border-radius: 8px;
  display: grid;
  gap: 6px 18px;
  grid-template-columns: 64px 1fr;
  align-items: center;
`;
const CenterText = styled.h1`
  font-size: 104px;
  margin-bottom: 5rem;

  ${media.desktop`font-size: 65px;`};
`;
const StyledImage = styled(Img)`
  border-radius: 9999px;
  display: inline-block;
  width: 64px;
  height: 64px;
  user-select: none;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    transform: rotate(10deg) scale(1.1);
  }
`;
const Name = styled.h3`
  margin-top: 0;
  margin-bottom: 0.4rem;
  color: var(--text);
  font-weight: bold;
  font-size: 36px;
  line-height: 1;

  ${media.thone`font-size: 27px;`};
`;
const Position = styled.span`
  font-size: 18px;
  color: var(--dark-gray);
  font-weight: bold;
`;
const Description = styled.p`
  grid-column: 2 / auto;
  align-self: start;

  margin: 0;
  font-size: 24px;
  margin-top: 16px;
  margin-bottom: 16px;

  ${media.phablet`
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
  `};
`;

const Team = ({ data }) => {
  return (
    <StyledSection>
      <Container max>
        <CenterText>Meet the team.</CenterText>
        <GridWrapper>
          <Card>
            <StyledImage
              fluid={data.chanul.childImageSharp.fluid}
              alt="Chanul Dandeniya"
              objectFit="cover"
            />
            <div>
              <Name>Chanul Dandeniya</Name>
              <Position>President</Position>
            </div>
            <Description>
              Hello World! My name is Chanul Dandeniya, and I will be serving as your President here
              at CODE. I’m currently a sophomore, and one of my biggest goals is to change the world
              through the use of computer science! I am looking forward to meeting each and every
              one of you and help you on your journey in engineering and computer science!
            </Description>
          </Card>
          <Card>
            <StyledImage
              fluid={data.kyrylo.childImageSharp.fluid}
              alt="Kyrylo Orlov"
              objectFit="cover"
            />
            <div>
              <Name>Ahad Hassan</Name>
              <Position>Vice President</Position>
            </div>
            <Description>
              Hi everyone! My name is Kyrylo Orlov and I am the vice president of CODE. I am a
              sophomore and I've been studying software engineering for 8 years, currently focusing
              on web development and UI/UX design. I believe that technology is here to make the
              world a better place and I can’t wait to spark your interest and share my experience
              of computer science to you all.
            </Description>
          </Card>
        </GridWrapper>
      </Container>
    </StyledSection>
  );
};

export default Team;
