import React from "react";
import Page from "../../components/Page";
import List, { ListRow, ListRowElement } from "../../components/List";
import styled from "styled-components";
import { fetchUser } from "../../service/user";
import { fetchUserLoans } from "../../service/loans";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [user, setUser] = React.useState([]);
  const [borrowings, setBorrowings] = React.useState([]);
  const params = useParams();

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
              <ListRowElement>{borrowing.title}</ListRowElement>
              <ListRowElement>{borrowing.author}</ListRowElement>
              <ListRowElement>{borrowing.number}</ListRowElement>
              <ListRowElement>{borrowing.date}</ListRowElement>
              <ListRowElement>
                {new Date(borrowing.returnDate).toLocaleDateString()}
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
