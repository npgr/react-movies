import { Container } from "semantic-ui-react";
import { useAppSelector } from "../store/hooks";
import { MovieList } from "../components/MovieList";

export function MyList() {
  const { config, favorites, myList } = useAppSelector((state) => state.movies); // todo selectors

  const movies = { page: 1, results: myList };
  return (
    <Container>
      {config && (
        <MovieList
          title="My List"
          movies={movies}
          config={config}
          favorites={favorites}
          myList={myList}
        />
      )}
    </Container>
  );
}
