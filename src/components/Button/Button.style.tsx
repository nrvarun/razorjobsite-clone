import THEME from "@styles/Theme";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  background: var(--default-button-bgcolor, rgb(99, 99, 206));
  color: #ffffff;
  font-size: 0.75rem;
  cursor: pointer;
  text-transform: capitalize;
  transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    font-size: 1rem;
    padding: 1.25rem 1.5rem;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    font-size: 1.25rem;
    padding: 1.5rem 2rem;
  }

  &:hover {
    background-color: rgba(99, 99, 206, 0.5);
  }
`;

export default StyledButton;
