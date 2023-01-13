import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import List, { ListRow, ListRowElement } from "../../components/List";
import Page from "../../components/Page";
import { createLoan } from "../../service/loans";
import {
  cancelReservation,
  fetchReservations,
} from "../../service/reservations";

const BookingsPage = () => {
  const [bookings, setBookings] = React.useState([]);

  const fetchData = () => {
    Promise.all([
      fetchReservations().then((reservations) => reservations && setBookings(reservations)),
    ]);
  };

  const handleBorrow = (bookId, email) => {
    createLoan(bookId, email).then(() => fetchData());
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
        <Title>Rezerwacje</Title>
        <List>
          <ListRow border>
            <ListRowElement header>Tytuł</ListRowElement>
            <ListRowElement header>Autor</ListRowElement>
            <ListRowElement header>Nr Katalogowy</ListRowElement>
            <ListRowElement header>Termin rezerwacji</ListRowElement>
            <ListRowElement header>Użytkownik</ListRowElement>
          </ListRow>
          {bookings.map((booking) => (
            <ListRow key={booking.id}>
              <ListRowElement>{booking.book.release.title}</ListRowElement>
              <ListRowElement>{booking.book.release.author}</ListRowElement>
              <ListRowElement>{booking.book.release.number}</ListRowElement>
              <ListRowElement>
                {new Date(booking.reservationDate).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement>{booking.user.email}</ListRowElement>
              <ListRowElement button>
                <Button onClick={() => handleCancelBooking(booking.id)}>
                  Anuluj rezerwację
                </Button>
              </ListRowElement>
              <ListRowElement button>
                <Button onClick={() => handleBorrow(booking.book.id, booking.user.email)}>
                  Wypożycz
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

export default BookingsPage;
