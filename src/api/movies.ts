import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.REACT_APP_API_KEY;

export interface MovieData {
  page: number;
  results: Movie[];
}

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export interface Config {
  images: {
    base_url: string;
    poster_sizes: string[];
  };
}

export const apiSlice = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query<MovieData, number | void>({
        query(page = 1) {
          return `/movie/popular?api_key=${API_KEY}&page=${page}`;
        },
      }),
      fetchConfig: builder.query<Config, void>({
        query() {
          return `/configuration?api_key=${API_KEY}`;
        },
      }),
      searchMovie: builder.query<MovieData, { query: string; page?: number }>({
        query({ query, page = 1 }) {
          return `/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
        },
      }),
    };
  },
});

export const {
  useFetchPopularMoviesQuery,
  useFetchConfigQuery,
  useSearchMovieQuery,
} = apiSlice;
