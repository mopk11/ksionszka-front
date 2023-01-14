import { TableCell } from "@mui/material";
import styled from "styled-components";

export const ListRowElement = (props) => {
  if (props.button) {
    return (
      <TableCell className={props.className}>
        {props.children}
      </TableCell>
    );
  }
  return (
    <TableCell align={props.center && "center"} className={props.className}>
      {props.header ? (
        <Header>{props.children}</Header>
      ) : (
        <Title>{props.children}</Title>
      )}
      {props.description && <Description>{props.description}</Description>}
    </TableCell>
  );
};


const Header = styled.h2`
  font-weight: 400;
`;

const Title = styled.h4`
  font-weight: 400;
`;

const Description = styled.h5`
  font-weight: 300;
`;
