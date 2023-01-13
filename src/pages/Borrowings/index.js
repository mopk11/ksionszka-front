import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import List, { ListRow, ListRowElement } from "../../components/List";
import Page from "../../components/Page";
import TextField from "../../components/TextField";
import { findBooksInLibrary } from "../../service/books";
import { createLoan } from "../../service/loans";

const BorrowingsPage = () => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [borrowingPopupBook, setBorrowingPopupBook] = React.useState();
  const [borrowingPopupEmail, setBorrowingPopupEmail] = React.useState();

  const handleBorrow = (id, email) => {
    if (borrowingPopupEmail.length < 1) return;
    createLoan(id, email)
      .then(() => fetchBooks())
      .then(() => {
        setBorrowingPopupEmail(undefined);
        setBorrowingPopupBook(undefined);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  const fetchBooks = () => {
    findBooksInLibrary({
      bookNameLike: title.length > 0 ? title : "",
      authorLike: author.length > 0 ? author : "",
      number: number.length > 0 ? number : "",
    }).then((books) => books && setResults(books));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => fetchBooks(), []);

  return (
    <Page>
      {borrowingPopupBook && (
        <>
          <PopupWrapper onClick={() => setBorrowingPopupBook(undefined)}>
            <Popup onClick={(e) => e.stopPropagation()}>
              <TextField
                required
                value={borrowingPopupEmail}
                onChange={(e) => setBorrowingPopupEmail(e.target.value)}
                placeholder="Użytkownik"
              />
              <Button
                onClick={() =>
                  handleBorrow(borrowingPopupBook, borrowingPopupEmail)
                }
              >
                Wypożycz
              </Button>
            </Popup>
          </PopupWrapper>
          <Overlay />
        </>
      )}
      <Wrapper>
        <FiltersWrapper>
          <FiltersForm onSubmit={handleSubmit}>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              placeholder="Tytuł"
            />
            <TextField
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              name="author"
              placeholder="Autor"
            />
            <TextField
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              name="number"
              placeholder="Nr katalogowy"
            />
            <Button type="submit">Wyszukaj</Button>
          </FiltersForm>
        </FiltersWrapper>
        <ResultsWrapper>
          <StyledList>
            {results.map((result) => (
              <ListRow border key={result.id}>
                <ListRowElement description={result.release.author}>
                  {result.release.name}
                </ListRowElement>
                <ListRowElement>{result.release.genre}</ListRowElement>
                <ListRowElement description={"Nr katalogowy: " + result.release.number}>
                  Rok wydania: {result.release.releaseYear}
                </ListRowElement>
                <ListRowElement button>
                  <Button onClick={() => setBorrowingPopupBook(result.id)}>
                    Wypożycz
                  </Button>
                </ListRowElement>
              </ListRow>
            ))}
          </StyledList>
        </ResultsWrapper>
      </Wrapper>
    </Page>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 8em);

  @media (max-width: 1338px) {
    height: unset;
    flex-direction: column;
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  @media (max-width: 1338px) {
    justify-content: center;
    margin-top: 5em;
  }
`;

const FiltersForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5em;
  align-items: flex-end;
  width: 100%;
  max-width: 40em;
  margin-right: 5em;

  @media (max-width: 928px) {
    margin: 0;
    align-items: center;
  }
`;

const ResultsWrapper = styled.div`
  margin: 5em;
  width: 100%;

  @media (max-width: 1338px) {
    width: unset;
    margin: 5em 0.5em;
  }
`;

const StyledList = styled(List)`
  overflow: scroll;
  max-height: calc(100vh - 8em - 10em);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 0.7;
  z-index: 99;
`;

const PopupWrapper = styled.div`
  width: 100%;
  height: calc(100% - 8em);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media (max-width: 928px) {
    height: calc(100% - 30em)
  }
`;

const Popup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
  background-color: #fff;
  border-radius: 15px;
  border: 1px solid #707070;
  padding: 5em;
`;

export default BorrowingsPage;
