import React from "react";
import styled from "styled-components";
import MuiTextField from "@mui/material/TextField";

const TextField = (props) => <Input {...props} />;

const Input = styled(MuiTextField)`
  && {
    background-color: #f2f4f8;
    border-radius: 10px;
    width: 100%;

    div {
        font-family: 'Noto Sans';
        font-weight: bold;
    }

    fieldset {
      border: unset;
    }
  }
`;

export default TextField;
