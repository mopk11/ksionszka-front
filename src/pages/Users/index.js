import React from "react";
import Page from "../../components/Page";
import List, {ListRow, ListRowElement} from "../../components/List";
import Button from "../../components/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../service/user";

const UsersPage = () => {
  const [users, setUsers] = React.useState([]);
  const navigate = useNavigate();

  const openUser = (id) => navigate(`/users/${id}`);

  React.useEffect(() => {
    fetchUsers().then((res) => setUsers(res));
  }, []);

  return (
    <Page>
      <Wrapper>
        <Title>Użytkownicy</Title>
        <List>
          <ListRow border>
            <ListRowElement header>Użytkownik</ListRowElement>
            <ListRowElement header>Imię</ListRowElement>
            <ListRowElement header>Nazwisko</ListRowElement>
            <ListRowElement header>Data założenia konta</ListRowElement>
          </ListRow>
          {users.map((user) => (
            <ListRow>
              <ListRowElement>{user.email}</ListRowElement>
              <ListRowElement>{user.firstName}</ListRowElement>
              <ListRowElement>{user.lastName}</ListRowElement>
              <ListRowElement>
                {new Date(user.createdAt).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement button>
                <Button onClick={() => openUser(user.id)}>
                  Otwórz
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

const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin: 1em 0;
`;

export default UsersPage;
