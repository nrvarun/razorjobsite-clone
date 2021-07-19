import styled, { css } from "styled-components";

const baseListStyles = css`
  margin: 0;
  padding: 0 0 0 30px;
  list-style-type: none;
`;

export const StyledUList = styled.ul`
  ${baseListStyles}
`;

export const StyledOList = styled.ul`
  ${baseListStyles}
`;

export const StyledListItem = styled.li`
  margin: 0 0 10px 0;
  padding: 0 0 0 15px;
  position: relative;

  &:before {
    position: absolute;
    content: "";
    top: 12px;
    left: -10px;
    height: 8px;
    width: 8px;
    background-color: var(--color, #ffffff);
    border-radius: 50%;
  }
`;
