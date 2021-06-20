import React from "react";
import {
  Wrapper,
  Container,
  Menu,
  Phone,
  SocialButton,
  Image,
  ActionWrapper,
} from "./styled";
import Logo from "../../ui/Logo/Logo";
import telegram from "../../../images/telegram.svg";
import whatsapp from "../../../images/whatsapp.svg";
import Navigation from "../Navigation/Navigation";
import Button from "../../ui/Button/Button";

const Header = ({ isFooter }) => {
  return (
    <Wrapper isFooter={isFooter} as={isFooter && "footer"}>
      <Container>
        <Menu>
          <Logo />
          <Navigation />
        </Menu>
        <ActionWrapper>
          {!isFooter && <Phone href="tel:78125011000">+7 (812) 501-1000</Phone>}
          <SocialButton href="#" aria-label="телеграмм">
            <Image src={telegram} alt="телеграмм" />
          </SocialButton>
          <SocialButton href="#" aria-label="телеграмм">
            <Image src={whatsapp} alt="ватсап" />
          </SocialButton>
          {!isFooter && <Button>Заказать звонок</Button>}
        </ActionWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
