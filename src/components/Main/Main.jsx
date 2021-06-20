import React, { useState } from "react";
import { Wrapper, ShowMore, ShowInput } from "./styled";
import Search from "./components/Search/Search";
import ListCard from "./components/ListCard/ListCard";
import Tabs from "../ui/Tabs/Tabs";
import Button from "../ui/Button/Button";
import Dropdown from "../ui/Dropdown/Dropdown";
import Img0 from "../../images/imageCard/img0.png";
import Img1 from "../../images/imageCard/img1.png";
import Img2 from "../../images/imageCard/img2.png";
import Img3 from "../../images/imageCard/img3.png";

const Main = () => {
  const cards = [
    {
      title: "Студия",
      complex: "RosaRossa",
      metro: "Парк Культуры",
      square: 33,
      floor: 4,
      bedroom: 0,
      price: "29 190 000",
      partial: "885 000",
      images: [Img0, Img1, Img2, Img3],
    },
    {
      title: "Апартаменты с 1-й спальней",
      complex: "RosaRossa",
      metro: "Парк Культуры",
      square: 33,
      floor: 4,
      bedroom: 0,
      price: "24 390 000",
      partial: "885 000",
      images: [Img1, Img2, Img3, Img0],
    },
    {
      title: "Квартира с 2-мя спальнями",
      complex: "RosaRossa",
      metro: "Парк Культуры",
      square: 33,
      floor: 4,
      bedroom: 0,
      price: "35 250 000",
      partial: "885 000",
      images: [Img2, Img3, Img0, Img1],
    },
    {
      title: "Апартаменты с 2-мя спальнями",
      complex: "RosaRossa",
      metro: "Парк Культуры",
      square: 33,
      floor: 4,
      bedroom: 0,
      price: "41 457 000",
      partial: "885 000",
      images: [Img3, Img0, Img1, Img2],
    },
    {
      title: "Студия",
      complex: "RosaRossa",
      metro: "Парк Культуры",
      square: 33,
      floor: 4,
      bedroom: 0,
      price: "29 190 000",
      partial: "885 000",
      images: [Img0, Img1, Img2, Img3],
    },
    {
      title: "Апартаменты с 1-й спальней",
      complex: "RosaRossa",
      metro: "Парк Культуры",
      square: 33,
      floor: 4,
      bedroom: 0,
      price: "24 390 000",
      partial: "885 000",
      images: [Img1, Img2, Img3, Img0],
    },
    {
      title: "Квартира с 2-мя спальнями",
      complex: "RosaRossa",
      metro: "Парк Культуры",
      square: 33,
      floor: 4,
      bedroom: 0,
      price: "35 250 000",
      partial: "885 000",
      images: [Img2, Img0, Img3, Img2],
    },
    {
      title: "Апартаменты с 2-мя спальнями",
      complex: "RosaRossa",
      metro: "Парк Культуры",
      square: 33,
      floor: 4,
      bedroom: 0,
      price: "41 457 000",
      partial: "885 000",
      images: [Img3, Img0, Img1, Img2],
    },
  ];
  const [count, setCount] = useState(3);
  return (
    <Wrapper>
      <Tabs links={["Квартиры", "Комплексы"]} />
      <ShowInput>
        <Search />
        <Dropdown
          title="Сортировать по"
          list={[
            { title: "По алфавиту", subTitle: "А - Я", value: "ASC" },
            { title: "По алфавиту", subTitle: "Я - А", value: "DESC" },
          ]}
          value={undefined}
          onChange={() => {}}
        />
      </ShowInput>
      <ListCard cards={cards.slice(0, count)} />
      <ShowMore>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Показать еще
        </Button>
      </ShowMore>
    </Wrapper>
  );
};

export default Main;
