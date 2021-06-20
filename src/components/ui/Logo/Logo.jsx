import React from "react";
import { Wrapper, Icon } from "./styled";
import logo from "../../../images/Art-Estate.svg";

const Logo = () => {
  return (
    <Wrapper href="#" aria-label="Главная">
      <Icon src={logo} alt="Логотип Art-Estate" />
    </Wrapper>
  );
};

export default Logo;
