import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBar = (props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src="/images/logo-cut.png" onClick={() => navigate("/")} />
      <ButtonsWrapper>
        {props.buttons.map((button) => (
          <Button key={button.name} onClick={button.redirect}>
            {button.name}
          </Button>
        ))}
      </ButtonsWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8em;
  background-color: #2d311837;
  z-index: 99;

  @media (max-width: 928px) {
    flex-direction: column;
    height: unset;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
`;

const Logo = styled.img`
  padding: 1em;
  margin-left: 1em;
  object-fit: contain;
  cursor: pointer;

  @media (max-width: 928px) {
    height: 100px;
    margin-left: unset;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.5em;
  gap: 2.5em;

  @media (max-width: 928px) {
    flex-direction: column;
    margin: 2.5em 0;
  }
`;

const Button = styled.a`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export default NavBar;
