import React from "react";
import styled from "styled-components";
import MuiSelect from "@mui/material/Select";

const Select = (props) => {
  var [value, setValue] = React.useState("");

  return (
    <Input
      displayEmpty
      value={value}
      style={{ color: value.length < 1 ? "#999a9c" : undefined }}
      renderValue={() => (value.length < 1 ? props.placeholder : value)}
      onChange={(e) => setValue(e.target.value).then(() => props.onChange(e))}
      {...props}
    />
  );
};

const Input = styled(MuiSelect)`
  && {
    background-color: #f2f4f8;
    border-radius: 10px;
    width: 100%;

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
