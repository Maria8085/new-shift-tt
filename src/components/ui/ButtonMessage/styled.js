import styled from "styled-components";

export const Wrapper = styled.button`
  background: #5d6993;
  cursor: pointer;
  border: 4px solid #cbcfdc;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 2;
  transition: 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #cbcfdc;
  }
  &:active {
    box-shadow: 0 0 0 15px #cbcfdc;
  }
  &:hover,
  :active {
    svg {
      path {
        fill: #5d6993;
      }
    }
  }
`;
