import React from "react";
import { Label, Input, Text } from "./styled";

const Checkbox = ({ checked, label, onChange }) => {
  return (
    <Label>
      <Input type="checkbox" checked={checked} onChange={onChange} />
      <Text>{label}</Text>
    </Label>
  );
};

export default Checkbox;
