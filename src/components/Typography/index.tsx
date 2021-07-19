import THEME from "@styles/Theme";
import { FC, HTMLProps, PropsWithoutRef } from "react";
import styled, { css } from "styled-components";

interface TypographyProps extends HTMLProps<HTMLHeadingElement> {
  text?: string;
  color?: string;
  children?: JSX.Element | JSX.Element[];
}

export const Heading1: FC<TypographyProps> = ({ children, text, ...props }) => {
  return (
    <StyledH1>
      {text}
      {children}
    </StyledH1>
  );
};

export const Heading2: FC<TypographyProps> = ({ children, text }) => {
  return (
    <StyledHeading2>
      {text}
      {children}
    </StyledHeading2>
  );
};

export const Heading3: FC<TypographyProps> = ({ children, text }) => {
  return (
    <StyledHeading3>
      {text}
      {children}
    </StyledHeading3>
  );
};

export const Heading4: FC<TypographyProps> = ({ children, text }) => {
  return (
    <StyledHeading4>
      {text}
      {children}
    </StyledHeading4>
  );
};

export const Paragraph: FC<TypographyProps> = ({ children, text }) => {
  return (
    <StyledPara>
      {text}
      {children}
    </StyledPara>
  );
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
