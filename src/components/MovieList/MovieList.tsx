import { Card } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { Config, MovieData, Movie } from "../../api/movies";
import { MovieCard } from "../MovieCard";

interface Props {
  title: string;
  movies: MovieData;
  config: Config;
  favorites: Movie[];
  myList: Movie[];
}

export function MovieList({ title, movies, config, favorites, myList }: Props) {
  const { results = [] } = movies;

  const inFavorites = (id: number) =>
    !!favorites.find((movie) => movie.id === id);

  const inMyList = (id: number) => !!myList.find((movie) => movie.id === id);

  return (
    <div>
      <Header as="h2" inverted style={{ marginTop: "1rem" }}>
        {title}
      </Header>
      <Card.Group itemsPerRow={5} doubling>
        {results?.map((movie, index) => (
          <MovieCard
            movie={movie}
            config={config}
            inFavorites={inFavorites(movie.id)}
            inMyList={inMyList(movie.id)}
          />
        ))}
      </Card.Group>
    </div>
  );
}
