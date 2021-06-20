import styled from "styled-components";

export const ValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    display: block;
    width: 16px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
  }
`;
export const ValueLabel = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  padding: 5px 18px;
  font-family: "Inter";
  flex: 0 0 calc(50% - 12px);
  text-align: center;
  margin-top: 16px;
`;
export const Wrapper = styled.div`
  .input-range {
    height: 16px;
  }
  .input-range__track {
    height: 16px;
    top: 0;
    margin-top: 0;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 16px;
  }
  .input-range__track--background {
    background-color: rgba(255, 255, 255, 0.2);
  }
  .input-range__label {
    display: none;
  }
  .input-range__slider {
    background: #ffffff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    border: unset;
    top: unset;
    bottom: 0;
    margin-top: 0;
  }
  .input-range__slider-container {
    &:first-of-type {
      .input-range__slider {
        transform: translateX(50%);
      }
    }
    &:last-of-type {
      .input-range__slider {
        transform: translateX(-50%);
      }
    }
  }
`;
