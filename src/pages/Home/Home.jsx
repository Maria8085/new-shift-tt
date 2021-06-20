import React from "react";
import Header from "../../components/common/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";
import Footer from "../../components/common/Footer/Footer";
import { Title, WrapperContent } from "./styled";
import ButtonMessage from "../../components/ui/ButtonMessage/ButtonMessage";

const Home = () => {
  return (
    <>
      <Header />
      <Title>Каталог квартир в Хамовниках</Title>
      <WrapperContent>
        <Sidebar />
        <Main />
      </WrapperContent>
      <ButtonMessage />
      <Footer />
    </>
  );
};

export default Home;
