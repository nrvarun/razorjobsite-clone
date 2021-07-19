import { FC } from "react";
import StyledButton from "./Button.style";

interface buttonIProps {
  children: React.ReactNode;
}

const Button: FC<buttonIProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
