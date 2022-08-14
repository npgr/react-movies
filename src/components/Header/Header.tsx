import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "semantic-ui-react";
import { useSearchMovieQuery, useFetchConfigQuery } from "../../api/movies";
import { setConfig, setMovies } from "../../store/movies/moviesSlice";
import { useAppDispatch } from "../../store/hooks";
import { HeaderBar, BarGroup, LogoImage } from "./Header.styles";
import { ROUTES } from "../../routes";

export function Header() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const navigate = useNavigate();

  const { data: config } = useFetchConfigQuery();

  const { data: searchMovies } = useSearchMovieQuery(
    { query: searchValue },
    { skip: !searchValue }
  );

  useEffect(() => {
    config && dispatch(setConfig(config));
  }, [config, dispatch]);

  useEffect(() => {
    searchMovies && dispatch(setMovies(searchMovies));
  }, [searchMovies, dispatch]);

  const onClickHandler = () => {
    if (value.length > 2) {
      setSearchValue(value);
      navigate(ROUTES.HOME);
    } else {
      // todo error
    }
  };

  const onChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <HeaderBar data-testid="header-bar">
      <LogoImage src="/img/tmdb.svg" alt="home" />
      <BarGroup>
        <Button inverted color="teal" onClick={() => navigate(ROUTES.MY_LIST)}>
          My List
        </Button>
        <Input
          name="search-input"
          data-testid="search-input"
          placeholder="Search movie..."
          value={value}
          onChange={onChangeValue}
          action={{
            icon: "search",
            onClick: onClickHandler,
            "data-testid": "search-icon",
          }}
        />
        <div data-netlify-identity-menu></div>
      </BarGroup>
    </HeaderBar>
  );
}
