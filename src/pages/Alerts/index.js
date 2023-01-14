import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import List, { ListRow, ListRowElement } from "../../components/List";
import Page from "../../components/Page";
import { extendLoan, fetchDelayedLoans, fetchLoansWithRequestedExtension } from "../../service/loans";

const AlertsPage = () => {
  const [delayed, setDelayed] = React.useState([]);
  const [renewRequests, setRenewRequests] = React.useState([]);

  const fetchData = () => {
    Promise.all([
      fetchDelayedLoans().then(
        (loans) => loans && setDelayed(loans)
      ),
      fetchLoansWithRequestedExtension().then(
        (loans) => loans && setRenewRequests(loans)
      ),
    ]);
  };

  const handleRenew = (loanId) => {
    extendLoan(loanId).then(() => fetchData());
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page>
      <Wrapper>
        <Title>Przetrzymane</Title>
        <List>
          <ListRow border>
            <ListRowElement header>Tytuł</ListRowElement>
            <ListRowElement header>Autor</ListRowElement>
            <ListRowElement header>Nr Katalogowy</ListRowElement>
            <ListRowElement header>Data wypożyczenia</ListRowElement>
            <ListRowElement header>Termin oddania</ListRowElement>
            <ListRowElement header>Użytkownik</ListRowElement>
          </ListRow>
          {delayed.map((loan) => (
            <ListRow key={loan.id}>
              <ListRowElement>{loan.book.release.title}</ListRowElement>
              <ListRowElement>{loan.book.release.author}</ListRowElement>
              <ListRowElement>{loan.book.release.number}</ListRowElement>
              <ListRowElement>
                {new Date(loan.loanDate).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement>
                {new Date(loan.returnDate).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement>{loan.user.email}</ListRowElement>
            </ListRow>
          ))}
        </List>
      </Wrapper>
      <Wrapper>
        <Title>Prośby o przedłużenie</Title>
        <List>
          <ListRow border>
            <ListRowElement header>Tytuł</ListRowElement>
            <ListRowElement header>Autor</ListRowElement>
            <ListRowElement header>Nr Katalogowy</ListRowElement>
            <ListRowElement header>Data wypożyczenia</ListRowElement>
            <ListRowElement header>Termin oddania</ListRowElement>
            <ListRowElement header>Użytkownik</ListRowElement>
          </ListRow>
          {renewRequests.map((loan) => (
            <ListRow key={loan.id}>
              <ListRowElement>{loan.book.release.title}</ListRowElement>
              <ListRowElement>{loan.book.release.author}</ListRowElement>
              <ListRowElement>{loan.book.release.number}</ListRowElement>
              <ListRowElement>
                {new Date(loan.loanDate).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement>
                {new Date(loan.returnDate).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement>{loan.user.email}</ListRowElement>
              <ListRowElement button>
                <Button onClick={() => handleRenew(loan.id)}>Przedłuż</Button>
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

export default AlertsPage;
