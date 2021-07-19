import {
  Children,
  ComponentPropsWithoutRef,
  FC,
  Props,
  PropsWithoutRef,
} from "react";
import { StyledContainer } from "./Container.style";

interface IProps {
  children: JSX.Element | JSX.Element[];
  props: ComponentPropsWithoutRef<"div">;
}

const Container: FC<IProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
