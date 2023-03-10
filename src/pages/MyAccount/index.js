import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import List, { ListRow, ListRowElement } from "../../components/List";
import Page from "../../components/Page";
import { fetchLoans, requestLoanExtension } from "../../service/loans";
import {
  cancelReservation,
  fetchReservations,
} from "../../service/reservations";

const MyAccountPage = () => {
  const [booked, setBooked] = React.useState([]);
  const [borrowed, setBorrowed] = React.useState([]);

  const fetchData = () => {
    Promise.all([
      fetchReservations().then((reservations) => reservations && setBooked(reservations)),
      fetchLoans().then((loans) => loans && setBorrowed(loans)),
    ]);
  };

  const handleRenew = (id) => {
    requestLoanExtension(id).then(() => fetchData());
  };

  const handleCancelBooking = (id) => {
    cancelReservation(id).then(() => fetchData());
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page>
      <Wrapper>
        <Title>Wypożyczone</Title>
        <List>
          <ListRow border>
            <ListRowElement header>Tytuł</ListRowElement>
            <ListRowElement header>Autor</ListRowElement>
            <ListRowElement header>Nr Katalogowy</ListRowElement>
            <ListRowElement header>Data wypożyczenia</ListRowElement>
            <ListRowElement header>Termin oddania</ListRowElement>
          </ListRow>
          {borrowed.map((borrowing) => (
            <ListRow key={borrowing.id}>
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
                <Button
                  disabled={borrowing.actualReturnDate < borrowing.returnDate || borrowing.requestedReturnDateExtensionAt}
                  onClick={() => handleRenew(borrowing.id)}
                >
                  Przedłuż
                </Button>
              </ListRowElement>
            </ListRow>
          ))}
        </List>
      </Wrapper>
      <Wrapper>
        <Title>Zarezewowane</Title>
        <List>
          <ListRow border>
            <ListRowElement header>Tytuł</ListRowElement>
            <ListRowElement header>Autor</ListRowElement>
          </ListRow>
          {booked.map((booking) => (
            <ListRow key={booking.id}>
              <ListRowElement>{booking.book.release.title}</ListRowElement>
              <ListRowElement>{booking.book.release.author}</ListRowElement>
              <ListRowElement button>
                <Button onClick={() => handleCancelBooking(booking.id)}>
                  Anuluj rezerwację
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

export default MyAccountPage;
