import THEME from "@styles/Theme";
import styled from "styled-components";

export const StyledExperience = styled.section`
  padding: 4rem 1rem 8rem 1rem;
  min-height: 100vh;

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    padding: 4rem 1rem 16rem 1rem;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    padding: 4rem 1rem 20rem 1rem;
  }
`;

export const StyledSkillsList = styled.ul`
  padding: 0;
  margin: 4rem 0 0 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5rem;

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    grid-gap: 3rem;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    grid-gap: 3.5rem;
  }

  @media (min-width: ${THEME.breakpoints.desktopLarge}px) {
    grid-gap: 4rem;
  }
`;

export const StyledSkillsListItem = styled.li`
  &:nth-child(4n + 1) {
    article {
      background: var(--orange-gradient, rgb(219, 140, 17));
    }
  }

  &:nth-child(4n + 2) {
    article {
      background: var(--pink-gradient, rgb(196, 19, 97));
    }
  }

  &:nth-child(4n + 3) {
    article {
      background: var(--green-gradient, rgb(16, 123, 66));
    }
  }

  &:nth-child(4n + 4) {
    article {
      background: var(--blue-gradient, rgb(161, 54, 217));
    }
  }
`;
