import {useRoutes} from "react-router-dom";
import {Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import MySider from "./components/Sider";
import {Content, Footer, Header} from "antd/es/layout/layout";
import MyHeader from "./components/Header/BackHeader";
import style from './App.module.css'
import routes from "./router";
import React, {useEffect, useState} from "react";
import BackHeader from "./components/Header/BackHeader";
import BackCombine from "./components/Combine/BackCombine/BackCombine.tsx";
import FrontCombine from "./components/Combine/FrontCombine/FrontCombine.tsx";
import {currentUser} from "./service/api/userAPI.ts";
import {useDispatch, useSelector} from "react-redux";


const App = () => {
    const path = new URL(window.location.href);
    const route = useRoutes(routes);
    const dispatch = useDispatch();


    useEffect(()=>{
        current()
    },[path])


    const current = async () => {
        const res = await currentUser();
        console.log('当前用户---->',res)
        dispatch({type:'addUser',payload:res},)

        // alert(1)
        // console.log('当前用户',res)
    }

    return (
        <>
            {
                path.pathname.startsWith('/user') ?  <BackCombine/> : <FrontCombine/>
            }
        </>

    )
}


export default App
