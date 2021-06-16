import React from "react";
import {
  Wrapper,
  Container,
  IconWrapper,
  Icon,
  Phone,
  SocialButton,
  Image,
  Order,
} from "./styled";
import logo from "../../images/Art-Estate.svg";
import telegram from "../../images/telegram.svg";
import whatsapp from "../../images/whatsapp.svg";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <IconWrapper href="#" aria-label="Главная">
          <Icon src={logo} alt="Логотип Art-Estate" />
        </IconWrapper>
        <Navigation />
        <Phone href="+7 (812) 501-1000">+7 (812) 501-1000</Phone>
        <SocialButton>
          <Image src={telegram} alt="телеграмм" />
        </SocialButton>
        <SocialButton>
          <Image src={whatsapp} alt="ватсап" />
        </SocialButton>
        <Order>Заказать звонок</Order>
      </Container>
    </Wrapper>
  );
};

export default Header;
