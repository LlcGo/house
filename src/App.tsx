import {useRoutes} from "react-router-dom";
import {Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import MySider from "./components/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import MyHeader from "./components/Header/BackHeader";
import style from './App.module.css'
import routes from "./router";
import React from "react";
import BackHeader from "./components/Header/BackHeader";
import BackCombine from "./components/Combine/BackCombine/BackCombine.tsx";
import FrontCombine from "./components/Combine/FrontCombine/FrontCombine.tsx";


const App = () => {
    const path = new URL(window.location.href);
    const route = useRoutes(routes);
    return (
        <>
            {
                path.pathname.startsWith('/user') ?  <BackCombine/> : <FrontCombine/>
            }
        </>

    )
}


export default App
