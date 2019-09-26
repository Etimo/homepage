import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import CardImg from "../elements/CardImg";

const ContentContainer = styled.div`
  width: 95%;
  max-width: 1280px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  align-items: center;

  @media (max-width: 800px) {
    width: 95%;
    grid-gap: 40px;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ContentBox = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContentTitle = styled.h2`
  font-family: "Quicksand";
  padding-left: 1rem;
  font-weight: normal;
  margin: 1.5rem 0 1rem;
`;

const ContentSeperator = styled.hr`
  border: 1px solid ${props => props.theme.secondary};
  width: 40%;
  margin: 0 0 0 1rem;
  max-width: 400px;
`;

const ContentText = styled.p`
  font-family: "Quicksand";
  padding: 0 1rem;
  margin: 1rem 0;
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "bike.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 620, toFormat: PNG) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <ContentContainer>
      <CardImg fade={true} fluid={data.image.childImageSharp.fluid} />
      <ContentBox>
        <ContentTitle>Vår Vision</ContentTitle>
        <ContentSeperator />
        <ContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ContentText>
      </ContentBox>
      <ContentBox>
        <ContentTitle>Vår Vision</ContentTitle>
        <ContentSeperator />
        <ContentText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </ContentText>
      </ContentBox>
    </ContentContainer>
  );
};
