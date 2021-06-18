import React from "react";
import {
  Wrapper,
  WrapperImage,
  Image,
  Description,
  Title,
  Address,
  ItemAddress,
  Info,
  ItemInfo,
  Price,
  FullPrice,
  PartialPrice,
  Buttons,
  Views,
  Details,
} from "./styled";
import Rectangle from "../../../../images/imageCard/Rectangle15.png";
import Like from "../../../../images/Like";

const Card = ({ title }) => {
  return (
    <Wrapper>
      <WrapperImage>
        <Image src={Rectangle} />
      </WrapperImage>
      <Description>
        <Title>{title}</Title>
        <Address>
          <ItemAddress>RosaRossa</ItemAddress>
          <ItemAddress>Парк Культуры</ItemAddress>
        </Address>
        <Info>
          <ItemInfo>Площадь: 33m2</ItemInfo>
          <ItemInfo>Этаж: 4</ItemInfo>
          <ItemInfo>Спальни: 0</ItemInfo>
        </Info>
        <Price>
          <FullPrice>29 190 000 ₽</FullPrice>
          <PartialPrice>885 000 ₽ / м2</PartialPrice>
        </Price>
        <Buttons>
          <Views>Назначить просмотр</Views>
          <Details>Детали</Details>
        </Buttons>
      </Description>
      <Like />
    </Wrapper>
  );
};

export default Card;
