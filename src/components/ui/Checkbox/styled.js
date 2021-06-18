import styled from "styled-components";
import check from "../../../images/check.svg";

export const Label = styled.label`
  display: flex;
`;

export const Text = styled.span`
  position: relative;
  padding-left: 38px;
  &::before {
    position: absolute;
    left: 0;
    border-radius: 4px;
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    border: 2px solid rgba(255, 255, 255, 0.56);
    transition: 0.2s ease-out;
  }
  &::after {
    content: "";
    background-image: url(${check});
    position: absolute;
    left: 0;
    height: 10px;
    width: 14px;
    opacity: 0;
    left: 4px;
    top: 6px;
    transition: 0.2s ease-out;
  }
`;
export const Input = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
  transform: translateX(-1000px);
  &:checked + ${Text} {
    &::before {
      background-color: white;
      border: 2px solid rgba(255, 255, 255, 1);
    }
    &::after {
      opacity: 1;
    }
  }
`;
