import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  font-family: "InterSemiBold";
  background: #fff;
  color: #fc620f;
  border: 1px solid #fc620f;
  border-radius: 32px;
  padding: 10px 15px;
  transition: 0.2s ease-in;
  display: flex;
  align-items: center;
  &:hover,
  :focus {
    path {
      fill: #343c59;
    }
    color: #fff;
    background: #d54b00;
    border: 1px solid #d54b00;
  }
  &:active {
    transform: scale(0.9);
  }
  path {
    fill: #fff;
  }
  ${(props) =>
    props.filled &&
    `
  color: #fff;
  background: #fc620f;
  border: 1px solid #fc620f;
  `}
  ${(props) =>
    props.dark &&
    `
  font-family: "Inter";
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  &:hover,
  &:active {
    path {
      fill: #343c59;
    }
    background: #fff;
    color: #343c59;
    border: 1px solid #fff;
  }
  `}
  
  ${(props) =>
    props.icon &&
    `
  padding: 2px 13px;
  `}
`;
