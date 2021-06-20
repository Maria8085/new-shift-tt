import styled from "styled-components";

export const NavWrapper = styled.nav``;
export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
`;
export const Item = styled.li`
  list-style: none;
  margin-left: 40px;
  &:first-of-type {
    margin-left: 0;
  }
`;

export const Point = styled.a`
  color: #5c5a55;
  position: relative;
  text-decoration: none;
  &:hover {
    color: #151513;
    &::after {
      background: #b28672;
      transition: all 0.2s ease-in 0s;
    }
  }
  &:active,
  :focus {
    &::after {
      width: 100%;
      background: #b28672;
      transition: all 0.2s ease-in 0s;
    }
  }
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
`;
