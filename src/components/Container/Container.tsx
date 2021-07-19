import { Children, FC, Props, PropsWithoutRef } from "react";
import { StyledContainer } from "./Container.style";

interface IProps {
  children: React.ReactChild | React.ReactChild[];
}

const Container: FC<IProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
