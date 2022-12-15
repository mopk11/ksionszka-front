import styled from "styled-components";

const Page = styled.div`
  min-height: 100%;
  min-height: calc(100vh - 8em);
  position: relative;
  padding-top: 8em;

  @media (max-width: 928px) {
    padding-top: 30em;
  }
`;

export default Page;
