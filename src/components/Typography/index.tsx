import THEME from "@styles/Theme";
import { FC, HTMLProps } from "react";
import styled, { css } from "styled-components";

interface TypographyProps extends HTMLProps<HTMLHeadingElement> {
  children: React.ReactNode;
  color?: string;
}

export const Heading1: FC<TypographyProps> = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export const Heading2: FC<TypographyProps> = ({ children }) => {
  return <StyledHeading2>{children}</StyledHeading2>;
};

export const Heading3: FC<TypographyProps> = ({ children }) => {
  return <StyledHeading3>{children}</StyledHeading3>;
};

export const Heading4: FC<TypographyProps> = ({ children }) => {
  return <StyledHeading4>{children}</StyledHeading4>;
};

export const Paragraph: FC<TypographyProps> = ({ children }) => {
  return <StyledPara>{children}</StyledPara>;
};

const StyledH1 = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    font-size: 4rem;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    font-size: 4.5rem;
  }
`;

const StyledHeading2 = styled.h2`
  font-size: 2rem;
  line-height: 1.5;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    font-size: 2.5rem;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    font-size: 3rem;
  }
`;

const StyledHeading3 = styled.h3`
  font-size: 1.25rem;
  line-height: 1.5;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    font-size: 1.75rem;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    font-size: 2.5rem;
  }
`;

const StyledHeading4 = styled.h4`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    font-size: 1.25rem;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    font-size: 2rem;
  }
`;

const StyledPara = styled.p`
  font-size: 1rem;
  line-height: 1.2;
  color: ${({ color }) => color || "var(--text-color)"};

  @media (min-width: ${THEME.breakpoints.tablet}px) {
    font-size: 1.25rem;
  }

  @media (min-width: ${THEME.breakpoints.desktop}px) {
    font-size: 1.5rem;
  }
`;
