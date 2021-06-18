import React from "react";
import { Wrapper, Input, Button } from "./styled";
import IconSearch from "../../../../images/Search";

const Search = () => {
  return (
    <Wrapper>
      <Input type="text" placeholder="Комплекс, улица, район или метро" />
      <Button type="submit">
        <IconSearch />
      </Button>
    </Wrapper>
  );
};

export default Search;
