import React from "react";
import styled from "styled-components";
import Page from "../../components/Page";

const AboutUsPage = () => {
  return <StyledPage></StyledPage>;
};

const StyledPage = styled(Page)`
  background-image: url("/images/about-us-background.png");
  background-size: cover;
`;

export default AboutUsPage;
