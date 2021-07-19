import THEME from "@styles/Theme";
import styled from "styled-components";

export const StyledBannerLogo = styled.img`
  width: 100%;
  max-width: 280px;
  display: block;
  vertical-align: middle;

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    max-width: 320px;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    max-width: 360px;
  }
`;

export const StyledBanner = styled.section`
  padding: 4rem 1rem;
  min-height: 100vh;

  h2 {
    font-size: 2rem;
    font-weight: 400;
    max-width: 85%;
    max-width: 85%;
  }

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    padding: 5rem 0rem;
  }
`;
