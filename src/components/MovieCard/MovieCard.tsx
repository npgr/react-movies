import {
  addFavorite,
  addMyList,
  removeFavorite,
  removeMyList,
} from "../../store/movies/moviesSlice";
import { useAppDispatch } from "../../store/hooks";
import { Card, Icon, Image } from "semantic-ui-react";
import { Config, Movie } from "../../api/movies";

interface Props {
  movie: Movie;
  config: Config;
  inFavorites: boolean;
  inMyList: boolean;
}

export const MovieCard: React.FC<Props> = ({
  movie,
  config,
  inFavorites,
  inMyList,
}) => {
  const dispatch = useAppDispatch();

  const getPosterUrl = (poster_path: string) =>
    `${config?.images?.base_url}/${config?.images?.poster_sizes[2]}${poster_path}`;

  const AddRemoveFavorite = (add: boolean) => {
    dispatch(add ? addFavorite(movie) : removeFavorite(movie.id));
  };

  const AddRemoveMyList = (add: boolean) => {
    dispatch(add ? addMyList(movie) : removeMyList(movie.id));
  };

  return (
    <Card>
      <Image
        src={getPosterUrl(movie.poster_path)}
        wrapped={false}
        ui={false}
        alt="movie poster"
      />
      <Card.Content>
        <Card.Header>{movie.title}</Card.Header>
      </Card.Content>
      <Card.Content extra textAlign="right">
        <Icon
          data-testid="favorite-icon"
          name="like"
          color={inFavorites ? "red" : "grey"}
          onClick={() => AddRemoveFavorite(!inFavorites)}
        />
        <Icon
          data-testid="my-list-icon"
          name={inMyList ? "check" : "plus"}
          color={inMyList ? "green" : "grey"}
          onClick={() => AddRemoveMyList(!inMyList)}
        />
      </Card.Content>
    </Card>
  );
};
