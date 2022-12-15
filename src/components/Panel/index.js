import React from "react";
import styled from "styled-components";

const Panel = (props) => {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: #fff9f1;
  border: 1px solid #707070;
  width: 100%;
  border-radius: 50px;
`;

export default Panel;
