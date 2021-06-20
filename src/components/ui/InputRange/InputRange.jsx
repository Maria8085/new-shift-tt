import React, { useState } from "react";
import InputTypeRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Wrapper, ValueLabel, ValueWrapper } from "./styled";
const InputRange = ({ min, max, step, suffix }) => {
  const [value, setValue] = useState({ min: min, max: max });
  return (
    <Wrapper>
      <InputTypeRange
        maxValue={max}
        minValue={min}
        step={step}
        value={{ min: value.min, max: value.max }}
        onChange={(value) => setValue(value)}
        max={false}
      />
      <ValueWrapper>
        <ValueLabel>
          {value.min}
          {suffix}
        </ValueLabel>
        <span />
        <ValueLabel>
          {value.max}
          {suffix}
        </ValueLabel>
      </ValueWrapper>
    </Wrapper>
  );
};

export default InputRange;
