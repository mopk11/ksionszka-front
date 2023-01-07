import styled from "styled-components";
import { device } from "../../features/media/device";

export const Page = styled.div`
  min-height: 100%;
  min-height: calc(100vh - 8em);
  position: relative;
  padding-top: 8em;
  background-image: url("/images/homepage-background.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  @media ${device.mobile} {
    padding-top: 30em;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  flex: 1;
  height: 100%;
  div {
    box-sizing: border-box;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;

  @media ${device.tablet} {
    padding: 30px;
  }

  @media ${device.mobile} {
    padding: 20px;
  }
`;

export const ContentContainer = styled.div`
  background-color: #fff;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 5px rgb(0 0 0 / 30%);
  padding: 1.5rem 2rem;
  &[data-border="none"] {
    border: none;
    padding: 0;
    overflow: hidden;
    .leaflet-container {
      height: 100%;
      width: 100%;
    }
  }
  &[data-container="info"] {
    font-size: 1.2rem;
    font-weight: 600;
    p {
      margin: 30px 0;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;
