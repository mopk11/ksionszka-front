import styled from "styled-components";

export const ListRow = (props) => {
  return <RowWrapper className={props.className}>{props.children}</RowWrapper>;
};

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2em;
  border-bottom: 1px solid #707070;
  gap: 7.5em;

  @media (max-width: 928px) {
    width: fit-content;
  }
`;
