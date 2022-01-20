import moviesReducer, {
  MoviesState,
  setConfig,
  setMovies,
  addFavorite,
  removeFavorite,
  addMyList,
  removeMyList,
} from "./moviesSlice";
import { Config, MovieData, Movie } from "../../api/movies";

describe("movies reducer", () => {
  const initialState: MoviesState = {
    config: {
      images: {
        base_url: "",
        poster_sizes: [],
      },
    },
    data: {
      page: 0,
      results: [],
    },
    favorites: [],
    myList: [],
  };

  it("should handle initial state", () => {
    expect(moviesReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setConfig", () => {
    const config: Config = {
      images: {
        base_url: "the/url",
        poster_sizes: ["size1", "size2"],
      },
    };

    expect(moviesReducer(initialState, setConfig(config))).toEqual({
      ...initialState,
      config,
    });
  });

  it("should handle setMovies", () => {
    const movies: MovieData = {
      page: 2,
      results: [
        {
          id: 123,
          title: "movie 1",
          poster_path: "path 1",
        },
        {
          id: 123,
          title: "movie 1",
          poster_path: "path 1",
        },
      ],
    };
    expect(moviesReducer(initialState, setMovies(movies))).toEqual({
      ...initialState,
      data: movies,
    });
  });

  it("should handle addFavorite", () => {
    const initialTestState: MoviesState = {
      ...initialState,
      favorites: [
        {
          id: 842,
          title: "the super movie",
          poster_path: "the path",
        },
      ],
    };

    const newMovie: Movie = {
      id: 66,
      title: "the new movie",
      poster_path: "the other path",
    };

    expect(moviesReducer(initialTestState, addFavorite(newMovie))).toEqual({
      ...initialTestState,
      favorites: [...initialTestState.favorites, newMovie],
    });
  });

  it("should handle addMyList", () => {
    const initialTestState: MoviesState = {
      ...initialState,
      myList: [
        {
          id: 73872,
          title: "my list movie",
          poster_path: "the/path/of",
        },
      ],
    };

    const newMovie: Movie = {
      id: 783,
      title: "I want this movie in my list",
      poster_path: "super/path",
    };

    expect(moviesReducer(initialTestState, addMyList(newMovie))).toEqual({
      ...initialTestState,
      myList: [...initialTestState.myList, newMovie],
    });
  });

  it("should handle removeFavorite", () => {
    const initialTestState: MoviesState = {
      ...initialState,
      favorites: [
        {
          id: 1111,
          title: "the movie 1",
          poster_path: "the/path/1",
        },
        {
          id: 2222,
          title: "the movie 2",
          poster_path: "the/path/2",
        },
      ],
    };

    const movieId = 1111;

    expect(moviesReducer(initialTestState, removeFavorite(movieId))).toEqual({
      ...initialTestState,
      favorites: [initialTestState.favorites[1]],
    });
  });

  it("should handle removeMyList", () => {
    const initialTestState: MoviesState = {
      ...initialState,
      myList: [
        {
          id: 3333,
          title: "the movie 3",
          poster_path: "the/path/3",
        },
        {
          id: 4444,
          title: "the movie 4444",
          poster_path: "the/path/2",
        },
      ],
    };

    const movieId = 4444;

    expect(moviesReducer(initialTestState, removeMyList(movieId))).toEqual({
      ...initialTestState,
      myList: [initialTestState.myList[0]],
    });
  });
});
