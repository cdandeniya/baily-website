import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Hero, Team, Info } from '@components/about';

const AboutPage = ({ data }) => {
  return (
    <>
      <Helmet title="About" />
      <div data-scroll-section>
        <Hero data={data} />
      </div>
      <div data-scroll-section>
        <Info data={data} />
      </div>
      <div data-scroll-section>
        <Team data={data} />
      </div>
    </>
  );
};

export default AboutPage;

export const query = graphql`
  {
    blast: file(relativePath: { eq: "props/blast.png" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    chanul: file(relativePath: { eq: "team/chanul.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kyrylo: file(relativePath: { eq: "team/kyrylo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100, quality: 40) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
