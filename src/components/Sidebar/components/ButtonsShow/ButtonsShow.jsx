import React from "react";
import { Wrapper, Button, IconShow } from "./styled";
import ListIcon from "../../../../images/list.jsx";
import MapIcon from "../../../../images/map.jsx";

const ButtonsShow = () => {
  return (
    <Wrapper>
      <Button>
        <IconShow>
          <ListIcon />
        </IconShow>
        Список
      </Button>
      <Button>
        <IconShow>
          <MapIcon />
        </IconShow>
        Карта
      </Button>
    </Wrapper>
  );
};

export default ButtonsShow;
