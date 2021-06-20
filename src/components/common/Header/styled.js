import styled from "styled-components";
import { NavWrapper } from "../Navigation/styled";
import { StyledButton } from "../../ui/Button/styled";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.header`
  width: 100%;
  background: #fff;
  height: 72px;
  margin-bottom: 48px;

  ${(props) =>
    props.isFooter &&
    `
    border-bottom: 1px solid #E3E0DA;
    ${Container}{
      padding: 0;
    }
  `}
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${NavWrapper} {
    margin-left: 72px;
  }
`;

export const Phone = styled.a`
  text-decoration: none;
  font-family: "TenorSans";
  color: #151513;
  font-size: 24px;
  margin-right: 36px;
`;

export const SocialButton = styled.a`
  width: 24px;
  height: 24px;
  margin-right: 24px;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  ${StyledButton} {
    margin-left: 36px;
  }
`;
