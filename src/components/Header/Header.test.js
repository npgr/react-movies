import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { useSearchMovieQuery, useFetchConfigQuery } from "../../api/movies";
import { Header } from ".";

jest.mock("../../store/hooks");
jest.mock("react-router-dom");
jest.mock("../../api/movies");

describe("Header component", () => {
  const dispatch = jest.fn();
  const navigate = jest.fn();

  beforeEach(() => {
    useNavigate.mockReturnValue(navigate);
    useAppDispatch.mockReturnValue(dispatch);
    useFetchConfigQuery.mockReturnValue({ data: "mock config data" });
    useSearchMovieQuery.mockReturnValue({ data: "mock movies data" });
  });

  afterEach(() => {
    useNavigate.mockClear();
    useFetchConfigQuery.mockClear();
    useFetchConfigQuery.mockClear();
    useAppDispatch.mockClear();
    cleanup();
  });

  it("should fetch config at begining", () => {
    render(<Header />);

    expect(useFetchConfigQuery).toHaveBeenCalled();
  });

  it("should set config state at begining", () => {
    render(<Header />);

    expect(dispatch).toHaveBeenCalledWith({
      type: "movies/setConfig",
      payload: "mock config data",
    });
  });

  it("should go to my list page when click on link", () => {
    render(<Header />);

    const myListLink = screen.getByText("My List");

    fireEvent.click(myListLink);
    expect(navigate).toHaveBeenCalledWith("/my_list");
  });

  it("should fetch movies according input field", () => {
    window.computedStyle = jest.fn();
    render(<Header />);

    const searchInput = screen.getByRole("textbox", "search-input");
    userEvent.type(searchInput, "title");

    const searchButton = screen.getByTestId("search-icon");
    fireEvent.click(searchButton);

    expect(useSearchMovieQuery).toBeCalledWith(
      { query: "title" },
      { skip: false }
    );
    expect(dispatch).toBeCalledWith({
      type: "movies/setMovies",
      payload: "mock movies data",
    });
    expect(navigate).toHaveBeenCalledWith("/");
  });
});
