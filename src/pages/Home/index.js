import React from "react";
import styled from "styled-components";
import Page from "../../components/Page";

const HomePage = () => {
  return (
    <StyledPage>
      <Wrapper>
        <TextWrapper>
          <Heading>Witamy na stronie ksionszka.pl</Heading>
          <Description>
            Nasza strona jest super, cieszymy się, że wpadłeś :)
          </Description>
        </TextWrapper>
      </Wrapper>
    </StyledPage>
  );
};

const StyledPage = styled(Page)`
  background-image: url("/images/homepage-background.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 928px) {
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  margin-right: 5em;
  min-height: calc(100vh - 8em);

  @media (max-width: 928px) {
    padding: 0 0 10em;
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
