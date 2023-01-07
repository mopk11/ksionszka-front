import React from "react";
import Map from "./Map";
import { Container, ContentContainer, Page, SubContainer } from "./style";

const AboutUsPage = () => {
  return (
    <Page>
      <Container>
        <SubContainer>
          <ContentContainer data-container="info">
            <p>O nas</p>
            <p>
              Jesteśmy młodym, zgranym zespołem, którego głównym celem jest
              usprawnienie systemu bibliotecznego na polskich uczelniach.
              Wierzymy, że nasze działania pozwolą ułatwić dostęp do literatury i
              wiedzy źródłowej każdemu studentowi, który pragnie rozszerzyć swoje horyzonty.
            </p>
            <br/>
            <ul>
              <li>Nasza lokalizaja</li>
              <li>Warszawska 24</li>
              <li>31-155 Kraków</li>
            </ul>
          </ContentContainer>
        </SubContainer>
        <SubContainer>
          <ContentContainer data-border="none">
            <Map
              markerInfo={"Ksionszka"}
              position={[50.069414855377424, 19.942488593529866]}
              attribute="Nasza Biblioteka"
            />
          </ContentContainer>
        </SubContainer>
      </Container>
    </Page>
  );
};

export default AboutUsPage;
