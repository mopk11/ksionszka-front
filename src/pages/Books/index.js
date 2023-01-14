import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import List, { ListRow, ListRowElement } from "../../components/List";
import Page from "../../components/Page";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import { createBook, fetchAllBooks, fetchReleases } from "../../service/books";

const BooksPage = () => {
  const [releases, setReleases] = React.useState([]);
  const [books, setBooks] = React.useState([]);

  const formik = useFormik({
    initialValues: {
      releaseId: "",
      number: "",
    },

    onSubmit: (values) => {
      createBook(values)
        .then(() => fetchData())
        .then(() => formik.resetForm());
    },
  });

  const fetchData = () => {
    fetchAllBooks().then((books) => books && setBooks(books));
  };

  React.useEffect(() => {
    fetchData();
    fetchReleases().then((res) => setReleases(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPage>
      <Wrapper>
        <FiltersWrapper>
          <FiltersForm onSubmit={formik.handleSubmit}>
            <Select
              required
              onChange={formik.handleChange}
              value={formik.values.releaseId}
              name="releaseId"
              placeholder="Wydanie"
            >
              {releases.map((r) => (
                <option value={r.id}>{r.title} ({r.id})</option>
              ))}
            </Select>
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.number}
              name="number"
              placeholder="Numer"
            />
            <Button type="submit">Zapisz</Button>
          </FiltersForm>
        </FiltersWrapper>
        <ResultsWrapper>
          <StyledList>
            {books.map((book) => (
              <ListRow border key={book.id}>
                <ListRowElement description={book.release.author}>
                  {book.release.title}
                </ListRowElement>
                <ListRowElement description={`Język: ${book.release.language}`}>
                  Wydawca: {book.release.publisher}
                </ListRowElement>
                <ListRowElement>{book.release.genre}</ListRowElement>
                <ListRowElement description={"Nr katalogowy: " + book.release.id}>
                  Numer książki: {book.number}
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
  gap: 1em;
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

export default BooksPage;
