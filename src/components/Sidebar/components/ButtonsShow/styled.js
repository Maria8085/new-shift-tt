import styled from "styled-components";
import { StyledButton } from "../../../ui/Button/styled";

export const Wrapper = styled.div`
  display: flex;
  ${StyledButton} {
    margin-right: 8px;
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
