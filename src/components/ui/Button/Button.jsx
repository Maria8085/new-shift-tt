import React from "react";
import { StyledButton } from "./styled";

const Button = ({ children, filled, dark, icon, ...props }) => {
  return (
    <StyledButton icon={icon} filled={filled} dark={dark} {...props}>
      {icon && icon}
      {children}
    </StyledButton>
  );
};

export default Button;
