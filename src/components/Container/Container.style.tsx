import THEME from "@styles/Theme";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    width: 730px;
    margin: 0 auto;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    width: 980px;
  }

  @media (min-width: ${THEME.breakpoints.desktopLarge}px) {
    width: 90%;
  }

  @media (min-width: ${THEME.breakpoints.desktopHD}px) {
    width: 1870px;
  }
`;
