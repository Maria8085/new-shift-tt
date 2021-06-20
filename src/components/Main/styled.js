import styled from "styled-components";
import { StyledButton } from "../ui/Button/styled";

export const Wrapper = styled.main`
  display: flex;
  padding-left: 24px;
  flex: 1 0 auto;
  flex-direction: column;
`;

export const ShowMore = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  &::before {
    top: 50%;
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: rgba(252, 98, 15, 0.32);
  }

  ${StyledButton} {
    align-self: center;
    position: relative;
    box-shadow: 0 0 0 16px #fff;
  }
`;

export const ShowInput = styled.div`
  display: flex;
  justify-content: space-between;
`;
