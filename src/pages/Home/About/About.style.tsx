import THEME from "@styles/Theme";
import styled from "styled-components";

export const StyledAbout = styled.section`
  padding: 4rem 1rem;
  min-height: 100vh;

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    padding: 0 0 10rem 0;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    padding: 0 0 20rem 0;
  }
`;
