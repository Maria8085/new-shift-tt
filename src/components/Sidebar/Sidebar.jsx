import React, { useState } from "react";
import {
  Wrapper,
  List,
  Item,
  TitleItem,
  ShowMore,
  ResetFilters,
} from "./styled";
import ButtonsShow from "./components/ButtonsShow/ButtonsShow";
import ButtonsCurrency from "./components/ButtonsCurrency/ButtonsCurrency";
import ListSidebar from "./components/ListSidebar/ListSidebar";
import InputRange from "../ui/InputRange/InputRange";

const Sidebar = () => {
  const [countComplex, setCountComplex] = useState(5);
  const [countMetro, setCountMetro] = useState(3);
  const reset = () => {
    setCountComplex(3);
    setCountMetro(3);
  };
  return (
    <Wrapper>
      <List>
        <Item>
          <TitleItem>Отображение</TitleItem>
          <ButtonsShow />
        </Item>
        <Item>
          <TitleItem>Цена</TitleItem>
          <ButtonsCurrency></ButtonsCurrency>
          <InputRange min={0} max={120000000} suffix={"₽"} step={100000} />
        </Item>
        <Item>
          <TitleItem>Площадь</TitleItem>
          <InputRange
            min={0}
            max={1000}
            suffix={
              <>
                m<sup>2</sup>
              </>
            }
            step={10}
          />
        </Item>
        <Item>
          <TitleItem>Количество спален</TitleItem>
          <InputRange min={0} max={15} suffix={""} step={1} />
        </Item>
        <Item>
          <TitleItem>Жилые комплексы</TitleItem>
          <ListSidebar
            filter={[
              { text: "Пироговская, 14", count: "53" },
              { text: "Барыковские палаты", count: "11" },
              { text: "Европкинский, 16", count: "2" },
              { text: "Коробейников, 18", count: "1" },
              { text: "Пироговская, 14", count: "53" },
              { text: "Crystal House", count: "12" },
              { text: "Light House ", count: "2" },
            ].slice(0, countComplex)}
          />
          <ShowMore
            onClick={() => {
              setCountComplex(countComplex + 1);
            }}
          >
            Показать еще
          </ShowMore>
        </Item>
        <Item>
          <TitleItem>Внутренняя отделка</TitleItem>
          <ListSidebar
            filter={[
              { text: "Whitebox", count: "3" },
              { text: "С отделкой", count: "351" },
              { text: "Без отделки", count: "175" },
            ]}
          />
        </Item>
        <Item>
          <TitleItem>Близость к метро</TitleItem>
          <ListSidebar
            filter={[
              { text: "Аэропорт", count: "35" },
              { text: "Авиамоторная", count: "1" },
              { text: "Домодедовская", count: "4" },
              { text: "Таганская", count: "8" },
              { text: "Маяковская", count: "12" },
              { text: "Чкаловская", count: "4" },
              { text: "Динамо", count: "9" },
            ].slice(0, countMetro)}
          />
          <ShowMore
            onClick={() => {
              setCountMetro(countMetro + 1);
            }}
          >
            Показать еще
          </ShowMore>
        </Item>
      </List>
      <ResetFilters dark onClick={reset}>
        Сбросить фильтры
      </ResetFilters>
    </Wrapper>
  );
};

export default Sidebar;
