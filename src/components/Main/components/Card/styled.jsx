import styled from "styled-components";
import { StyledComplex } from "../../../../images/Complex";
import { StyledMetro } from "../../../../images/Metro";
import { StyledLike } from "../../../../images/Like";
import { StyledButton } from "../../../ui/Button/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 308px;
  background: #fff;
  box-shadow: 0px 45px 109px rgba(0, 0, 0, 0.1),
    0px 10.0513px 24.3466px rgba(0, 0, 0, 0.0596107),
    0px 2.99255px 7.24861px rgba(0, 0, 0, 0.0403893);
  border-radius: 24px;
  margin: 13px 0;
  display: flex;
  position: relative;
  z-index: 1;
  ${StyledLike} {
    position: absolute;
    right: 18px;
    top: 18px;
    cursor: pointer;
    &:hover,
    :active {
      path {
        fill: red;
      }
    }
  }
`;

export const WrapperImage = styled.div`
  width: 330px;
  height: 260px;
  margin: 24px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Description = styled.div`
  margin: 24px 0 24px 8px;
`;

export const Title = styled.h3`
  font-family: "TenorSans";
  font-size: 24px;
  color: #151513;
  margin: 0 0 16px;
`;

export const Address = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const ItemAddress = styled.p`
  font-family: "Inter";
  font-size: 16px;
  color: #5c5a55;
  margin: 0;
  margin-right: 32px;
  display: flex;
  justify-content: center;
  ${StyledComplex} {
    margin-right: 12px;
  }
  ${StyledMetro} {
    margin-right: 12px;
  }
`;

export const Info = styled.div`
  display: flex;
`;

export const ItemInfo = styled.p`
  margin: 0;
  margin-right: 24px;
  color: #5c5a55;
  span {
    color: #151513;
  }
`;

export const Separator = styled.div`
  width: 56px;
  height: 2px;
  background: #b28672;
  margin: 17px 0;
`;

export const Price = styled.div``;

export const FullPrice = styled.p`
  font-family: "TenorSans";
  font-size: 24px;
  color: #151513;
  margin: 0;
`;

export const PartialPrice = styled.p`
  margin: 0 0 22px 2px;
  font-size: 12px;
  color: #5c5a55;
`;

export const Buttons = styled.div`
  display: flex;
  ${StyledButton} {
    padding: 16px 20px;
    margin-right: 8px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;
