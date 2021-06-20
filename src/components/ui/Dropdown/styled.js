import styled from "styled-components";

export const SubTitle = styled.span`
  margin-right: 24px;
  color: #5c5a55;
`;
export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 2;
  margin-left: 24px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 45px;
  right: 0px;
  width: 200px;
  background-color: white;
  font-weight: bold;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const Point = styled.a`
  color: #000;
  text-decoration: none;
`;
export const Item = styled.li`
  padding: 8px 16px;
  border-bottom: 1px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #e5e5e5;
    color: white;
  }
`;
export const Title = styled.div`
  flex-grow: 2;
  text-align: start;
`;

export const ButtonDropdown = styled.button`
  background: #ffffff;
  border: 2px solid #e3e0da;
  box-sizing: border-box;
  border-radius: 48px;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  padding: 13px 24px;
  font-family: "Inter";
  display: flex;
  width: 330px;
  span {
    align-self: flex-start;
  }
  &:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    border: 10px solid;
    border-color: white transparent transparent transparent;
    right: 6px;
    top: 18px;
  }
`;

export const Arrow = styled.span`
  width: 13px;
  height: 13px;
  border-top: 2px solid #5c5a55;
  border-right: 2px solid #5c5a55;
  transform: rotate(135deg) translate(-2px, -4px);
  ${(props) =>
    props.up &&
    `transform: rotate(-45deg) translate(-2px, 10px);
  `}
`;
