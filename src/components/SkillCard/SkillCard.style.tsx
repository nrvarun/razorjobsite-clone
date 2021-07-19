import THEME from "@styles/Theme";
import styled from "styled-components";

export const StyledSkillCard = styled.article`
  padding: 3rem 1.5rem 1rem 1rem;
  border-radius: 0.5rem;
  margin: 0;
  background: rgb(2, 0, 36);
  background: var(--orange-gradient, rgb(2, 0, 36));

  h3 {
    font-weight: 400;
    line-height: initial;
    margin: 0 0 0.75rem 0;
  }

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    padding: 4rem 1.75rem 1.25rem 1.75rem;
  }
`;

export const StyledSkillCardContentWrapper = styled.div`
  margin: auto 0 0 0;
`;
