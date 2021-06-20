import React from "react";
import { List, Item, Point, NavWrapper } from "./styled";

const Navigation = () => {
  return (
    <NavWrapper>
      <List>
        <Item>
          <Point href="#">Главная</Point>
        </Item>
        <Item>
          <Point href="#">Каталог недвижимости</Point>
        </Item>
        <Item>
          <Point href="#">Блог</Point>
        </Item>
      </List>
    </NavWrapper>
  );
};

export default Navigation;
