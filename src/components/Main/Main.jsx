import React from "react";
import { Wrapper } from "./styled";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";

const Main = () => {
  return (
    <Wrapper>
      <Search></Search>
      <Card title="Студия"></Card>
      <Card title="Студия"></Card>
    </Wrapper>
  );
};

export default Main;
