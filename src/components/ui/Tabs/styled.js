import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 42px;
`;
export const Point = styled.button`
  background-color: unset;
  border: unset;
  color: #b28672;
  position: relative;
  text-transform: uppercase;
  font-family: "TenorSans";
  font-size: 24px;
  line-height: 28px;
  margin-right: 40px;
  transition: 0.2s ease-in 0s;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 17px;
    height: 2px;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 24px;
    transition: all 0.2s ease-in 0s;
  }

  ${(p) =>
    p.active &&
    `
    color: #151513;
    &::after {
      width: 44px;
      background: #b28672;
      transition: all 0.2s ease-in 0s;
    }
  `}
  &:last-of-type {
    margin-right: 0;
  }
  &:hover {
    color: #151513;
    &::after {
      background: #b28672;
      transition: all 0.2s ease-in 0s;
    }
  }
  /* &:active,
  :focus {
    &::after {
      width: 100%;
      background: #b28672;
      transition: all 0.2s ease-in 0s;
    }
  } */
`;
