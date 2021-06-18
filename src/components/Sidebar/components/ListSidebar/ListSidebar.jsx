import React from "react";
import PointListSidebar from "../PointListSidebar/PointListSidebar";
import { List, Item } from "./styled";

const ListSidebar = ({ filter }) => {
  return (
    <List>
      {filter.map((v) => (
        <Item>
          <PointListSidebar
            text={v.text || "Фильтр отсутствует"}
            count={v.count || "0"}
          />
        </Item>
      ))}
    </List>
  );
};

export default ListSidebar;
