import React from "react";
import styled from "styled-components";
import MuiButton from "@mui/material/Button";

const Button = (props) => <StyledButton {...props} variant="contained" />;

const StyledButton = styled(MuiButton)`
  && {
    background-color: #e1b168;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    width: 100%;
    font-family: "Noto Sans";
    font-weight: bold;

    &:hover {
      background-color: #e1b168;
      color: #000;
    }
  }
`;

export default Button;
