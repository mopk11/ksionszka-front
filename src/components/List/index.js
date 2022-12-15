import React from "react";
import styled from "styled-components";
import Panel from "../Panel";

const List = (props) => {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
};

const Wrapper = styled(Panel)`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export { ListRow } from "./ListRow";
export { ListRowElement } from "./ListRowElement";
export default List;
