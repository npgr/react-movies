import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { MovieCard } from ".";
import { useAppDispatch } from "../../store/hooks";

jest.mock("../../store/hooks");

describe("MovieCard component", () => {
  const props = {
    config: {
      images: {
        base_url: "the/url",
        poster_sizes: ["size1", "size2", "size3"],
      },
    },
    movie: {
      id: 3333,
      title: "the movie 3",
      poster_path: "the/path/3",
    },
    inFavorites: false,
    inMyList: false,
  };

  const dispatch = jest.fn();

  beforeEach(() => {
    useAppDispatch.mockReturnValue(dispatch);
  });

  afterEach(() => {
    useAppDispatch.mockClear();
    cleanup();
  });

  it("should render movie title", () => {
    const testProps = {
      ...props,
      movie: {
        ...props.movie,
        title: "the movie title",
      },
    };

    render(<MovieCard {...testProps} />);

    const title = screen.getByText("the movie title");
    expect(title).toBeVisible();
  });

  it("should render an image with proper src", () => {
    const baseUrl = "http://base/url";
    const imageSize = "w90";
    const posterPath = "/poster/path";

    const testProps = {
      ...props,
      config: {
        images: {
          base_url: baseUrl,
          poster_sizes: ["size1", "size2", imageSize],
        },
      },
      movie: {
        ...props.movie,
        poster_path: posterPath,
      },
    };

    render(<MovieCard {...testProps} />);
    const image = screen.getByRole("img", { name: "movie poster" });

    expect(image).toBeVisible();
    expect(image).toHaveAttribute(
      "src",
      `${baseUrl}/${imageSize}${posterPath}`
    );
  });

  it("should add movie to favorites when click on respective icon", () => {
    const testProps = {
      ...props,
      inFavorites: false,
    };
    render(<MovieCard {...testProps} />);

    const favoriteIcon = screen.getByTestId("favorite-icon");
    fireEvent.click(favoriteIcon);

    expect(dispatch).toHaveBeenCalledWith({
      type: "movies/addFavorite",
      payload: props.movie,
    });
  });

  it("should remove movie from favorites when click on respective icon", () => {
    const testProps = {
      ...props,
      inFavorites: true,
    };
    render(<MovieCard {...testProps} />);

    const favoriteIcon = screen.getByTestId("favorite-icon");
    fireEvent.click(favoriteIcon);

    expect(dispatch).toHaveBeenCalledWith({
      type: "movies/removeFavorite",
      payload: props.movie.id,
    });
  });

  it("should add movie to my list when click on respective icon", () => {
    const testProps = {
      ...props,
      inMyList: false,
    };
    render(<MovieCard {...testProps} />);

    const myListIcon = screen.getByTestId("my-list-icon");
    fireEvent.click(myListIcon);

    expect(dispatch).toHaveBeenCalledWith({
      type: "movies/addMyList",
      payload: props.movie,
    });
  });

  it("should remove movie from my list when click on respective icon", () => {
    const testProps = {
      ...props,
      inMyList: true,
    };
    render(<MovieCard {...testProps} />);

    const myListIcon = screen.getByTestId("my-list-icon");
    fireEvent.click(myListIcon);

    expect(dispatch).toHaveBeenCalledWith({
      type: "movies/removeMyList",
      payload: props.movie.id,
    });
  });
});
