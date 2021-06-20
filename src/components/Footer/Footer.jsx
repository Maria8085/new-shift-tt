import React from "react";
import {
  Wrapper,
  Container,
  WrapperLists,
  List,
  Item,
  Title,
  WrapperList,
} from "./styled";

import Header from "../Header/Header";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Header isFooter />
        <WrapperLists>
          <WrapperList>
            <Title>Комплексы</Title>
            <List>
              <Item>RozaRossa</Item>
              <Item>Barin Hourse</Item>
              <Item>Allegoria mosca</Item>
              <Item>Khightsbridge Privat park</Item>
              <Item>Остоженка парк палас</Item>
              <Item>Fusion Park</Item>
              <Item>Новая Остоженка</Item>
              <Item>Magnum</Item>
              <Item>Садовые кварталы</Item>
              <Item>Андреевский дом</Item>
              <Item>Crystal House</Item>
              <Item>White</Item>
              <Item>Carre Blanc</Item>
              <Item>Литератор</Item>
              <Item>Барыковские палаты</Item>
              <Item>Magnum</Item>
            </List>
          </WrapperList>
          <WrapperList>
            <Title>Подборки</Title>
            <List>
              <Item>Без отделки</Item>
              <Item>В Храмовниках</Item>
              <Item>Воробъевы горы</Item>
              <Item>Комсомольский проспект</Item>
              <Item>Кропоткинская</Item>
              <Item>Лужники</Item>
              <Item>На Остоженке</Item>
              <Item>На плющихе</Item>
              <Item>С каминами</Item>
              <Item>С мебелью</Item>
              <Item>С отделкой</Item>
              <Item>С терассой</Item>
              <Item>Спортивная</Item>
              <Item>Фрунзенская</Item>
              <Item>Уникальные</Item>
              <Item>Элитные</Item>
            </List>
          </WrapperList>
        </WrapperLists>
      </Container>
    </Wrapper>
  );
};

export default Footer;
