import React from "react";
import { Wrapper, IconShow } from "./styled";
import ListIcon from "../../../../images/list.jsx";
import MapIcon from "../../../../images/map.jsx";
import Button from "../../../ui/Button/Button";

const ButtonsShow = () => {
  return (
    <Wrapper>
      <Button
        dark
        icon={
          <IconShow>
            <ListIcon />
          </IconShow>
        }
      >
        Список
      </Button>
      <Button
        dark
        icon={
          <IconShow>
            <MapIcon />
          </IconShow>
        }
      >
        Карта
      </Button>
    </Wrapper>
  );
};

export default ButtonsShow;
