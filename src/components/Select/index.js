import React from "react";
import styled from "styled-components";
import MuiSelect from "@mui/material/NativeSelect";

const Select = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Input
      displayEmpty
      onChange={(e) => props.onChange(e.target.value)}
      {...otherProps}
    >
      {props.placeholder && (
        <option value="" selected>
          {props.placeholder}
        </option>
      )}
      {children}
    </Input>
  );
};

const Input = styled(MuiSelect)`
  && {
    background-color: #f2f4f8;
    border-radius: 10px;
    width: 100%;

    select {
      padding: 0.75em 1em;
    }

    div {
      font-family: "Noto Sans";
      font-weight: bold;
    }

    fieldset {
      border: unset;
    }

    svg {
      font-size: 2em;
    }
  }
`;

export default Select;
