import React from "react";
import styled from "styled-components";
import Page from "../../components/Page";
import Panel from "../../components/Panel";
import { fetchTopBooks } from "../../service/books";

const HomePage = () => {
  const [topBooks, setTopBooks] = React.useState([]);

  React.useEffect(() => {
    fetchTopBooks(5).then(() => topBooks && setTopBooks(topBooks));
  }, [topBooks]);

  return (
    <StyledPage>
      <Wrapper>
        <TextWrapper>
          <Heading>Witamy na stronie ksionszka.pl</Heading>
          <Description>
            Nasza strona jest super, cieszymy się, że wpadłeś :)
          </Description>
        </TextWrapper>
      </Wrapper>
      <TopBooksTitleWrapper>
        Top 5 ksionszek w tym miesiącu
      </TopBooksTitleWrapper>
      <TopBooksContainer>
        <TopBooksWrapper>
          <TopBooksContent>
            {topBooks.map((book, index) => (
              <TopBookRow>
                {index + 1}. {book.title}
              </TopBookRow>
            ))}
          </TopBooksContent>
        </TopBooksWrapper>
        <Image alt="top books" src="/images/top-books.png" />
      </TopBooksContainer>
    </StyledPage>
  );
};

const StyledPage = styled(Page)`
  background-image: url("/images/homepage-background.png");
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 928px) {
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  margin-right: 5em;
  min-height: calc(100vh - 8em);

  @media (max-width: 928px) {
    padding: 0 0 10em;
    margin: 0;
    gap: 1em;
  }
`;

const Heading = styled.h1`
  font-size: 50px;
  font-weight: 300;
  text-align: center;
`;

const Description = styled.h4`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const TopBooksTitleWrapper = styled.div`
  background-color: #fbf8f3;
  border: 1px solid #707070;
  width: 100%;
  padding: 2em;
  text-align: center;
  color: #363e27;
  font-size: 30px;
`;

const TopBooksContainer = styled.div`
  background-color: #e3dfd9;
  display: flex;
  justify-content: space-around;

  @media (max-width: 928px) {
    flex-direction: column;
  }
`;

const TopBooksWrapper = styled(Panel)`
  width: calc(50% - 10em);
  margin: 5em;

  @media (max-width: 928px) {
    width: calc(100% - 10em)
  }
`;

const Image = styled.img`
  width: calc(50% - 10em);
  margin: 5em;
  border-radius: 50px;
  object-fit: cover;

  @media (max-width: 928px) {
    width: calc(100% - 10em)
  }
`;

const TopBooksContent = styled.div`
  margin: 3em;
  display: flex;
  flex-direction: column;
`;

const TopBookRow = styled.h4`
  border-bottom: 1px solid #707070;
`;

export default HomePage;
