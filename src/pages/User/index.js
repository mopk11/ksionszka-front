import React from "react";
import Page from "../../components/Page";
import List, { ListRow, ListRowElement } from "../../components/List";
import styled from "styled-components";
import { fetchUser } from "../../service/user";
import { extendLoan, fetchUserLoans, returnLoan } from "../../service/loans";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";

const UserPage = () => {
  const [user, setUser] = React.useState([]);
  const [borrowings, setBorrowings] = React.useState([]);
  const params = useParams();

  const handleReturn = (loanId) => {
    returnLoan(loanId).then(() =>
      fetchUserLoans(params.id).then((res) => res && setBorrowings(res))
    );
  };

  const handleRenew = (loanId) => {
    extendLoan(loanId).then(() =>
      fetchUserLoans(params.id).then((res) => res && setBorrowings(res))
    );
  };

  React.useEffect(() => {
    Promise.all([
      fetchUser(params.id).then((res) => res && setUser(res)),
      fetchUserLoans(params.id).then((res) => res && setBorrowings(res)),
    ]);
  }, [params.id]);

  return (
    <Page>
      <Wrapper>
        <List>
          <ListRow border>
            <ListRowElement header>Użytkownik</ListRowElement>
            <ListRowElement header>Imię</ListRowElement>
            <ListRowElement header>Nazwisko</ListRowElement>
            <ListRowElement header>Data założenia konta</ListRowElement>
          </ListRow>
          <ListRow>
            <ListRowElement>{user.email}</ListRowElement>
            <ListRowElement>{user.firstName}</ListRowElement>
            <ListRowElement>{user.lastName}</ListRowElement>
            <ListRowElement>
              {new Date(user.createdAt).toLocaleDateString()}
            </ListRowElement>
          </ListRow>
        </List>
      </Wrapper>
      <Wrapper>
        <List>
          <ListRow border>
            <ListRowElement header>Tytuł</ListRowElement>
            <ListRowElement header>Autor</ListRowElement>
            <ListRowElement header>Nr katalogowy</ListRowElement>
            <ListRowElement header>Data wypożyczenia</ListRowElement>
            <ListRowElement header>Termin oddania</ListRowElement>
          </ListRow>
          {borrowings.map((borrowing) => (
            <ListRow>
              <ListRowElement>{borrowing.book.release.title}</ListRowElement>
              <ListRowElement>{borrowing.book.release.author}</ListRowElement>
              <ListRowElement>{borrowing.book.release.id}</ListRowElement>
              <ListRowElement>
                {new Date(borrowing.loanDate).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement>
                {new Date(borrowing.returnDate).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement button>
                <Button onClick={() => handleReturn(borrowing.id)}>
                  Zwróć
                </Button>
              </ListRowElement>
              <ListRowElement button>
                <Button onClick={() => handleRenew(borrowing.id)}>
                  Przedłuż
                </Button>
              </ListRowElement>
            </ListRow>
          ))}
        </List>
      </Wrapper>
    </Page>
  );
};

const Wrapper = styled.div`
  width: calc(100% - 6em);
  margin: 3em;
`;

export default UserPage;
