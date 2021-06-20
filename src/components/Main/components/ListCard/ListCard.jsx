import React from "react";
import Card from "../Card/Card";
import { Wrapper } from "./styled";

const ListCard = ({ cards }) => {
  return (
    <Wrapper>
      {cards.map((v) => (
        <Card {...v} />
      ))}
    </Wrapper>
  );
};

export default ListCard;
