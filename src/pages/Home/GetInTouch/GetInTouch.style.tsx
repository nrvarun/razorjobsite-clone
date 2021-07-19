import THEME from "@styles/Theme";
import styled from "styled-components";

export const StyledContact = styled.section`
  padding: 4rem 0 6rem 0;

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    padding: 4rem 0 10rem 0;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    padding: 4rem 0 14rem 0;
  }
`;
