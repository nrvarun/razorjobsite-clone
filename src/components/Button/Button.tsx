import { ComponentPropsWithoutRef, FC, Props } from "react";
import StyledButton from "./Button.style";

interface buttonIProps {
  text: string;
  children?: JSX.Element | JSX.Element[];
  props?: ComponentPropsWithoutRef<"button">;
}

const Button: FC<buttonIProps> = ({ children, text, ...props }) => {
  return (
    <StyledButton {...props}>
      {text}
      {children}
    </StyledButton>
  );
};

export default Button;
