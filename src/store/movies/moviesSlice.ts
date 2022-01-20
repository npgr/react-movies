import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Config, MovieData, Movie } from "../../api/movies";

export interface MoviesState {
  config: Config;
  data: MovieData;
  favorites: Movie[];
  myList: Movie[];
}

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

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setConfig(state, action: PayloadAction<Config>) {
      state.config = action.payload;
    },
    setMovies(state, action: PayloadAction<MovieData>) {
      state.data = action.payload;
    },
    addFavorite(state, action: PayloadAction<Movie>) {
      state.favorites.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(
        ({ id }) => id !== action.payload
      );
    },
    addMyList(state, action: PayloadAction<Movie>) {
      state.myList.push(action.payload);
    },
    removeMyList(state, action: PayloadAction<number>) {
      state.myList = state.myList.filter(({ id }) => id !== action.payload);
    },
  },
});

export const {
  setConfig,
  setMovies,
  addFavorite,
  removeFavorite,
  addMyList,
  removeMyList,
} = moviesSlice.actions;
export default moviesSlice.reducer;
