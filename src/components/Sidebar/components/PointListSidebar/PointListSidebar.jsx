import React from "react";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import { Point, Count } from "./styled";

const PointListSidebar = ({ text, count }) => {
  return (
    <Point>
      <Checkbox label={text} />
      <Count>{count}</Count>
    </Point>
  );
};

export default PointListSidebar;
