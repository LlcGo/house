import {useRoutes} from "react-router-dom";
import {Layout} from "antd";
import Sider from "antd/es/layout/Sider";
import MySider from "./components/Sider";
import {Content, Header} from "antd/es/layout/layout";
import MyHeader from "./components/Header";
import style from './App.module.css'
import routes from "./router";
import React from "react";

const App = () => {
    const path = new URL(window.location.href);
    const route = useRoutes(routes);
    return (
        <>
            {
                path.pathname.startsWith('/user') ? <Layout className={style.box}>
                    {/*左边*/}
                    <Sider className={style.sider}>
                        <div className={style.imgCss} >
                            <div className={style.img}></div>
                        </div>
                        <MySider/>
                    </Sider>
                    <Layout>
                        {/*头部*/}
                        <Header className={style.header}>
                            <MyHeader/>
                        </Header>
                        {/*内容*/}
                        <Content className={style.content}>
                            {route}
                        </Content>
                    </Layout>
                </Layout> : <>{route}</>
            }
        </>

    )
}


export default App
