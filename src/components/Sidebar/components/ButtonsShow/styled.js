import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Button = styled.button`
  font-family: "Inter";
  background: #343c59;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 24px;
  padding: 2px 13px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  &:hover,
  &:active {
    path {
      fill: #343c59;
    }
    background: #fff;
    color: #343c59;
    margin-right: 8px;
  }
  path {
    fill: #fff;
  }
`;

export const IconShow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;
