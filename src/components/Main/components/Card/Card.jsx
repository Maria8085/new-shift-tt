import React from "react";
import {
  Wrapper,
  WrapperImage,
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
  Separator,
} from "./styled";
import Like from "../../../../images/Like";
import Button from "../../../ui/Button/Button";
import CardSlider from "../../../ui/CardSlider/CardSlider";
import Complex from "../../../../images/Complex";
import Metro from "../../../../images/Metro";

const Card = ({
  title,
  complex,
  metro,
  square,
  floor,
  bedroom,
  price,
  partial,
  images,
}) => {
  return (
    <Wrapper>
      <WrapperImage>
        <CardSlider images={images} />
      </WrapperImage>
      <Description>
        <Title>{title}</Title>
        <Address>
          <ItemAddress>
            <Complex />
            {complex}
          </ItemAddress>
          <ItemAddress>
            <Metro />
            {metro}
          </ItemAddress>
        </Address>
        <Info>
          <ItemInfo>
            Площадь:
            <span>
              {square}m<sup>2</sup>
            </span>
          </ItemInfo>
          <ItemInfo>
            Этаж: <span>{floor}</span>
          </ItemInfo>
          <ItemInfo>
            Спальни: <span>{bedroom}</span>
          </ItemInfo>
        </Info>
        <Separator />
        <Price>
          <FullPrice>{price} ₽</FullPrice>
          <PartialPrice>
            {partial} ₽ / м<sup>2</sup>
          </PartialPrice>
        </Price>
        <Buttons>
          <Button filled>Назначить просмотр</Button>
          <Button>Детали</Button>
        </Buttons>
      </Description>
      <Like />
    </Wrapper>
  );
};

export default Card;
