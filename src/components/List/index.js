import { Table, TableContainer, TableBody } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Panel from "../Panel";

const List = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Wrapper {...otherProps}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};

const Wrapper = styled(Panel)`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export { ListRow } from "./ListRow";
export { ListRowElement } from "./ListRowElement";
export default List;
