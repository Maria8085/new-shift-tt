import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 48px;
  flex-grow: 1;
  width: auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 55px;
  border-radius: 42px;
  color: #5c5a55;
  border: none;
  background: #f0f0f0;
  outline: none;
  transition: 0.3s linear;
`;

export const Button = styled.button`
  width: 42px;
  height: 42px;
  background: none;
  border: none;
  position: absolute;
  top: 5px;
  left: 7px;
`;
