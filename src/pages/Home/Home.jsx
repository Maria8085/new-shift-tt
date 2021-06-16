import React from 'react'
import Header from "../../components/Header/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import Main from "../../components/Main/Main"
import {Title, WrapperContent} from './styled'

const Home = () => {
    return(
       <>
            <Header />
            <Title>Каталог квартир в Хамовниках</Title>
            <WrapperContent>
                <Sidebar />
                <Main />
            </WrapperContent>
       </>
    )
}


export default Home