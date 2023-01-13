import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import List, { ListRow, ListRowElement } from "../../components/List";
import Page from "../../components/Page";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import { findBooksInLibrary } from "../../service/books";
import { createReservation } from "../../service/reservations";

const SearchPage = () => {
  const [title, setTitle] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [year, setYear] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [results, setResults] = React.useState([]);
  const navigate = useNavigate();

  const handleBooking = (id) => {
    createReservation(id).then(() => navigate("/account"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  }

  const fetchBooks = () => {
    findBooksInLibrary({
      releaseTitleLike: title.length > 0 ? title : "",
      authorLike: author.length > 0 ? author : "",
      releaseYear: year.length > 0 ? year : "",
      genre: genre.length > 0 ? genre : "",
    }).then((books) => books && setResults(books));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => fetchBooks(), []);

  return (
    <StyledPage>
      <Wrapper>
        <FiltersWrapper>
          <FiltersForm onSubmit={handleSubmit}>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              placeholder="Tytół"
            />
            <TextField
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              name="author"
              placeholder="Autor"
            />
            <TextField
              value={year}
              onChange={(e) => setYear(e.target.value)}
              name="year"
              placeholder="Rok wydania"
            />
            <Select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              name="genre"
              placeholder="Gatónek"
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
                  <Button onClick={() => handleBooking(result.id)}>Rezerwuj</Button>
                </ListRowElement>
              </ListRow>
            ))}
          </StyledList>
        </ResultsWrapper>
      </Wrapper>
    </StyledPage>
  );
};

const StyledPage = styled(Page)`
  background-image: url("/images/search-background.png");
  background-size: cover;
`;

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
  max-width: 30em;
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

export default SearchPage;
