import React, { useState } from "react";
import {
  Wrapper,
  ButtonDropdown,
  SubTitle,
  List,
  Item,
  Title,
  Arrow,
} from "./styled";

const Dropdown = ({ title: headerTitle, list, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState({ title: headerTitle, subTitle: "" });

  const toggleList = () => {
    setOpen(!open);
  };
  const selectItem = (item) => {
    const { title, value, subTitle } = item;

    setTitle({ title, subTitle });
    setOpen(false);
    onChange(item);
  };

  return (
    <Wrapper>
      <ButtonDropdown onClick={toggleList}>
        <Title>{title.title}</Title>
        <SubTitle>{title.subTitle}</SubTitle>
        <Arrow up={open} />
      </ButtonDropdown>
      {open && (
        <List>
          {list.map((item) => (
            <Item type="button" key={item.id} onClick={() => selectItem(item)}>
              {item.subTitle}
            </Item>
          ))}
        </List>
      )}
    </Wrapper>
  );
};

export default Dropdown;
