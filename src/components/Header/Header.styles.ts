import styled from "styled-components";

export const HeaderBar = styled.div`
  z-index: 100;
  position: sticky;
  background-color: black;
  opacity: 0.87;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px white;
  padding: 1rem;
  a {
    margin-right: 0.5rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const LogoImage = styled.img`
  width: 12rem;
  height: auto;
`;

export const BarGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    margin: 0 2rem;
  }
  a {
    margin-left: 0.5rem;
  }

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;
