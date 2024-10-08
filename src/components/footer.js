import React from 'react';
import styled from 'styled-components';
import { Container } from '@styles';
import { FormattedIcon } from '@components/icons';
import { media } from '@styles';
import CODELogo from '@images/logo.png';

const FooterSection = styled.footer`
  padding-bottom: 6.25rem;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${media.thone`
    flex-direction: column-reverse;
    align-items: flex-start;
  `};
`;
const RowInRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.tablet`
    flex-direction: column;
    margin-top: 2rem;
    align-items: flex-start;
  `};
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;

  :not(:first-child) {
    margin-left: 10rem;

    ${media.desktop`margin-top: 2rem;`};
    ${media.tablet`margin-left: 0;`};
  }
`;
const ColTitle = styled.p`
  font-weight: 700;
  letter-spacing: -1.4px;
  font-size: 25px;
  margin: 0;
`;
const ColLink = styled.a`
  font-weight: 500;
  font-size: 25px;
  letter-spacing: -1.4px;
  color: var(--dark-gray);

  :hover {
    text-decoration: underline;
  }
`;
const Socials = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 2rem;
    margin-right: 1rem;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    color: #000000;

    :hover {
      transform: scale(1.1);
    }
  }
`;
const RowBottom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 4rem;
  justify-content: space-between;
  align-items: center;

  a {
    color: var(--text);

    :hover {
      text-decoration: underline;
    }
  }

  ${media.tablet`flex-direction: column;`};
`;
const Copy = styled.small`
  color: var(--dark-gray);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -1px;
`;
const Credits = styled.p`
  color: var(--dark-gray);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -1px;
`;
const Logo = styled.img`
  width: 6rem;
`;

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <FooterSection>
      <Container>
        <Row>
          <RowInRow>
            <Col>
              <ColTitle>Contact us</ColTitle>
              <ColLink
                href="mailto:hey@bailysbox.com?subject=Hello!"
                target="_blank"
                rel="noopener noreferrer">
                hey@bailysbox.com
              </ColLink>
            </Col>
            <Col>
              <ColTitle>Socials</ColTitle>
              <Socials>
                <a href="https://www.instagram.com/baily.ai/" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FormattedIcon name="linkedin" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FormattedIcon name="youtube" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="github" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FormattedIcon name="twitter" />
                </a>
              </Socials>
            </Col>
          </RowInRow>
          <Logo src={CODELogo} alt="Baily AI" />
        </Row>
        <RowBottom>
          <Copy>
            &copy; {currentYear} Baily AI. (EIN: 81-2908499)
          </Copy>
        </RowBottom>
      </Container>
    </FooterSection>
  );
};

export default Footer;
