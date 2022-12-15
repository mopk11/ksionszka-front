import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import List, { ListRow, ListRowElement } from "../../components/List";
import Page from "../../components/Page";
import { fetchReservations } from "../../service/reservations";

const MyAccountPage = () => {
  const [booked, setBooked] = React.useState([]);
  const [borrowed, setBorrowed] = React.useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    Promise.all([
      fetchReservations().then((reservations) => setBooked(reservations)),
    ]);
  };

  const handleRenew = (id) => {};

  const handleCancelBooking = (id) => {};

  return (
    <Page>
      <Wrapper>
        <Title>Wypożyczone</Title>
        <List>
          <ListRow>
            <ListRowElement header>Tytuł</ListRowElement>
            <ListRowElement header>Autor</ListRowElement>
            <ListRowElement header>Nr Katalogowy</ListRowElement>
            <ListRowElement header>Data wypożyczenia</ListRowElement>
            <ListRowElement header>Termin oddania</ListRowElement>
            {/* <ListRowElement header>Opłata</ListRowElement> */}
          </ListRow>
          {borrowed.map((borrowing) => (
            <StyledListRow>
              <ListRowElement>{borrowing.book.release.title}</ListRowElement>
              <ListRowElement>{borrowing.book.release.author}</ListRowElement>
              <ListRowElement>
                {new Date(borrowing.loanDate).toLocaleDateString()}
              </ListRowElement>
              <ListRowElement>
                {new Date(borrowing.returnDate).toLocaleDateString()}
              </ListRowElement>
              {/* <ListRowElement>{borrowing.fee}</ListRowElement> */}
              <ListRowElement button>
                <Button
                  disabled={borrowing.actualReturnDate < borrowing.returnDate}
                  onClick={() => handleRenew(borrowing.id)}
                >
                  Przedłuż
                </Button>
              </ListRowElement>
            </StyledListRow>
          ))}
        </List>
      </Wrapper>
      <Wrapper>
        <Title>Zarezewowane</Title>
        <List>
          <ListRow>
            <ListRowElement header>Tytuł</ListRowElement>
            <ListRowElement header>Autor</ListRowElement>
          </ListRow>
          {booked.map((booking) => (
            <StyledListRow>
              <ListRowElement>{booking.book.release.title}</ListRowElement>
              <ListRowElement>{booking.book.release.author}</ListRowElement>
              <ListRowElement button>
                <Button onClick={() => handleCancelBooking(booking.id)}>
                  Anuluj rezerwację
                </Button>
              </ListRowElement>
            </StyledListRow>
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

const StyledListRow = styled(ListRow)`
  border: unset;
`;

export default MyAccountPage;
