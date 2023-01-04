import styled from "styled-components";

export const ListRow = (props) => {
  return (
    <RowWrapper className={props.className} border={props.border}>
      {props.children}
    </RowWrapper>
  );
};

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2em;
  gap: 7.5em;

  ${(props) => props.border && "border-bottom: 1px solid #707070;"}

  @media (max-width: 928px) {
    width: fit-content;
  }
`;
