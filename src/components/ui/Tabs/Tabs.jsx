import React, { useState } from "react";
import { Point, Wrapper } from "./styled";

const Tabs = ({ links }) => {
  const [active, setActive] = useState(0);

  return (
    <Wrapper>
      {links &&
        links.map((link, key) => (
          <Point
            onClick={() => {
              setActive(key);
            }}
            active={key === active}
          >
            {link}
          </Point>
        ))}
    </Wrapper>
  );
};

export default Tabs;
