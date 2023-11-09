import style from "../../../App.module.css";
import Sider from "antd/es/layout/Sider";
import MySider from "../../Sider";
import {Layout} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import BackHeader from "../../Header/BackHeader";
import React from "react";
import {useRoutes} from "react-router-dom";
import routes from "../../../router";

const BackCombine = () =>{
    const route = useRoutes(routes);
    return(
        <Layout className={style.box}>
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
                    <BackHeader/>
                </Header>
                {/*内容*/}
                <Content className={style.content}>
                    {route}
                </Content>
            </Layout>
        </Layout>
    )
}

export default BackCombine;