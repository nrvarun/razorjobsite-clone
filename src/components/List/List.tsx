import { Paragraph } from "@components/Typography";
import { FC, HTMLProps, ReactChild, ReactNode } from "react";
import { StyledListItem, StyledOList, StyledUList } from "./List.style";

type ListType = HTMLProps<HTMLUListElement> & HTMLProps<HTMLOListElement>;

interface ListProps extends HTMLProps<ListType> {
  items: string[];
  type: "ul" | "ol";
}

interface ListItem extends HTMLProps<HTMLLIElement> {
  text: string;
  children?: React.ReactNode;
  key: number | string;
  bgColor?: string;
}

const List: FC<ListProps> = (props) => {
  const { type, items } = props;

  const renderListItems = (items: string[]) => {
    return items.map((item: string, index: number) => (
      <ListItem text={item} key={index} />
    ));
  };

  if (type === "ol") {
    return (
      <StyledOList>{items.length > 0 && renderListItems(items)}</StyledOList>
    );
  }

  return <StyledUList>{renderListItems(items)}</StyledUList>;
};

const ListItem: FC<ListItem> = ({ text, ...props }) => {
  return (
    <StyledListItem>
      <Paragraph>{text}</Paragraph>
    </StyledListItem>
  );
};

export default List;
