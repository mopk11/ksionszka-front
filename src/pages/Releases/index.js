import { useFormik } from "formik";
import React from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import List, { ListRow, ListRowElement } from "../../components/List";
import Page from "../../components/Page";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import { createRelease, fetchGenres, fetchReleases } from "../../service/books";

const ReleasesPage = () => {
  const [genres, setGenres] = React.useState([]);
  const [releases, setReleases] = React.useState([]);

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      publisher: "",
      releaseDate: "",
      author: "",
      language: "",
      genre: "",
    },

    onSubmit: (values) => {
      createRelease(values)
        .then(() => fetchData())
        .then(() => formik.resetForm());
    },
  });

  const fetchData = () => {
    fetchReleases().then((releases) => releases && setReleases(releases));
  };

  React.useEffect(() => {
    fetchData();
    fetchGenres().then((res) => setGenres(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPage>
      <Wrapper>
        <FiltersWrapper>
          <FiltersForm onSubmit={formik.handleSubmit}>
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.id}
              name="id"
              placeholder="Nr katalogowy"
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.title}
              name="title"
              placeholder="Tytuł"
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.publisher}
              name="publisher"
              placeholder="Wydawca"
            />
            <TextField
              required
              type="date"
              onChange={formik.handleChange}
              value={formik.values.releaseDate}
              name="releaseDate"
              title="Data Wydania"
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.author}
              name="author"
              placeholder="Autor"
            />
            <TextField
              required
              onChange={formik.handleChange}
              value={formik.values.language}
              name="language"
              placeholder="Język"
            />
            <Select
              required
              onChange={formik.handleChange}
              value={formik.values.genre}
              name="genre"
              placeholder="Gatónek"
            >
              {genres.map((g) => (
                <option value={g}>{g}</option>
              ))}
            </Select>
            <Button type="submit">Zapisz</Button>
          </FiltersForm>
        </FiltersWrapper>
        <ResultsWrapper>
          <StyledList>
            {releases.map((release) => (
              <ListRow border key={release.id}>
                <ListRowElement description={release.author}>
                  {release.title}
                </ListRowElement>
                <ListRowElement description={`Język: ${release.language}`}>
                  Wydawca: {release.publisher}
                </ListRowElement>
                <ListRowElement>{release.genre}</ListRowElement>
                <ListRowElement description={"Nr katalogowy: " + release.id}>
                  Data wydania:{" "}
                  {new Date(release.releaseDate).toLocaleDateString()}
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

export default ReleasesPage;
