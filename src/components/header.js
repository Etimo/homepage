import React from "react";
import styled from "styled-components";
import HeaderLogo from "./headerLogo";
import Nav from "./nav";

export default () => {
  const Header = styled.header`
    width: 100%;
    position: sticky;
    top: 0;
    background: white;
    height: 60px;
    z-index: 100;
  `;

  const Section = styled.section`
    height: 100%;
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
  `;

  return (
    <Header>
      <Section>
        <HeaderLogo />
        <Nav />
      </Section>
    </Header>
  );
};
