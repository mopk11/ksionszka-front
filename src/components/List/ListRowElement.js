import styled from "styled-components";

export const ListRowElement = (props) => {
  if (props.button) {
    return (
      <ButtonWrapper className={props.className}>
        {props.children}
      </ButtonWrapper>
    );
  }
  return (
    <RowElementWrapper className={props.className}>
      {props.header ? (
        <Header>{props.children}</Header>
      ) : (
        <Title>{props.children}</Title>
      )}
      {props.description && <Description>{props.description}</Description>}
    </RowElementWrapper>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
`;

const RowElementWrapper = styled.div`
    margin: 1em 0;
`;

const Header = styled.h2`
  font-weight: 400;
`;

const Title = styled.h4`
  font-weight: 400;
`;

const Description = styled.h5`
  font-weight: 300;
`;