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
  const Data = [
    {
      title: "Комплексы",
      list: [
        { title: "RozaRossa" },
        { title: "Allegoria mosca" },
        { title: "Barin Hourse" },
        { title: "Khightsbridge Privat park" },
        { title: "Остоженка парк палас" },
        { title: "Fusion Park" },
        { title: "Новая Остоженка" },
        { title: "Magnum" },
        { title: "Садовые кварталы" },
        { title: "Андреевский дом" },
        { title: "Crystal" },
        { title: "White" },
        { title: "Carre Blanc" },
        { title: "Литератор" },
        { title: "Барыковские палаты" },
        { title: "Magnum" },
      ],
    },
    {
      title: "Подборки",
      list: [
        { title: "Без отделки" },
        { title: "В Храмовниках" },
        { title: "Воробъевы" },
        { title: "Комсомольский" },
        { title: "Кропоткинская" },
        { title: "Лужники" },
        { title: "На Остоженке" },
        { title: "На плющихе" },
        { title: "С каминами" },
        { title: "С мебелью" },
        { title: "С отделкой" },
        { title: "С терассой" },
        { title: "Спортивная" },
        { title: "Фрунзенская" },
        { title: "Уникальные" },
        { title: "Элитные" },
      ],
    },
  ];
  return (
    <Wrapper>
      <Container>
        <Header isFooter />
        <WrapperLists>
          {Data &&
            Data.map((v) => (
              <WrapperList>
                <Title>{v.title}</Title>
                <List>
                  {v.list.map((v) => (
                    <Item>
                      <a href="#">{v.title}</a>
                    </Item>
                  ))}
                </List>
              </WrapperList>
            ))}
        </WrapperLists>
      </Container>
    </Wrapper>
  );
};

export default Footer;
