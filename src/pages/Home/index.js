import React from "react";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { useUserNavbarLinks } from "../../utils/navbar_utils";

const HomePage = () => {
  return (
    <Page>
      <NavBar buttons={useUserNavbarLinks()} />
      <TextWrapper>
        <Heading>Witamy na stronie ksionszka.pl</Heading>
        <Description>
          Nasza strona jest super, cieszymy się, że wpadłeś :)
        </Description>
      </TextWrapper>
    </Page>
  );
};

const Page = styled.div`
  min-height: 100%;
  background-image: url("/images/homepage-background.png");
  background-size: cover;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  margin-left: 30%;
  margin-top: 10em;

  @media (max-width: 928px) {
    padding: 10em 0 20em;
    margin: 0;
    gap: 1em;
  }
`;

const Heading = styled.h1`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
`;

const Description = styled.h4`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

export default HomePage;
