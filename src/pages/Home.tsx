import { Container } from "semantic-ui-react";
import { useAppSelector } from "../store/hooks";
import { MovieList } from "../components/MovieList";

export function Home() {
  const {
    config,
    data: searchMovies,
    favorites,
    myList,
  } = useAppSelector((state) => state.movies); // todo selectors

  return (
    <Container>
      {config && searchMovies && (
        <MovieList
          title="Movies"
          movies={searchMovies}
          config={config}
          favorites={favorites}
          myList={myList}
        />
      )}
    </Container>
  );
}
