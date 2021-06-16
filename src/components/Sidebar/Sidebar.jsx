import React from "react";
import {
  Wrapper,
  List,
  Item,
  TitleItem,
  WrapperBottoms,
  ButtonList,
  ButtonMap,
  IconShow,
  Icon,
  WrapperCurrency,
  ButtonRuble,
  ButtonDollar,
  ButtonEuro,
  ResidentialComplexes,
  Complexe,
  ShowMore,
  ResetFilters,
  InteriorDecoration,
  Decoration,
  Checkbox,
} from "./styled";
import list from "../../images/list.svg";
import map from "../../images/map.svg";

const Sidebar = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <TitleItem>Отображение</TitleItem>
          <WrapperBottoms>
            <ButtonList>
              <IconShow>
                <Icon src={list} alt="список" />
              </IconShow>
              Список
            </ButtonList>
            <ButtonMap>
              <IconShow>
                <Icon src={map} alt="карта" />
              </IconShow>
              Карта
            </ButtonMap>
          </WrapperBottoms>
        </Item>
        <Item>
          <TitleItem>Цена</TitleItem>
          <WrapperCurrency>
            <ButtonRuble>₽</ButtonRuble>
            <ButtonDollar>$</ButtonDollar>
            <ButtonEuro>€</ButtonEuro>
          </WrapperCurrency>
        </Item>
        <Item>
          <TitleItem>Площадь</TitleItem>
        </Item>
        <Item>
          <TitleItem>Количество спален</TitleItem>
        </Item>
        <Item>
          <TitleItem>Жилые комплексы</TitleItem>
          <ResidentialComplexes>
            <Complexe>
              <Checkbox type="checkbox" />
              Пироговская, 14
            </Complexe>
            <Complexe>Барыковские палаты</Complexe>
            <Complexe>Европкинский, 16</Complexe>
            <Complexe>Коробейников, 18</Complexe>
            <Complexe>Пироговская, 14</Complexe>
          </ResidentialComplexes>
          <ShowMore>Показать еще</ShowMore>
        </Item>
        <Item>
          <TitleItem>Внутренняя отделка</TitleItem>
          <InteriorDecoration>
            <Decoration>Whitebox</Decoration>
            <Decoration>С отделкой</Decoration>
            <Decoration>Без отделки</Decoration>
          </InteriorDecoration>
        </Item>
        <Item>
          <TitleItem>Близость к метро</TitleItem>
        </Item>
      </List>
      <ResetFilters>Сбросить фильтры</ResetFilters>
    </Wrapper>
  );
};

export default Sidebar;
