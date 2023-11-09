import {Content, Footer, Header} from "antd/es/layout/layout";
import {Layout} from "antd";
import React from "react";
import {useRoutes} from "react-router-dom";
import routes from "../../../router";
import FrontHeader from "../../Header/FrontHeader";
import FrontFooter from "../../Footer/FrontFooter";


const FrontCombine = () => {
    const route = useRoutes(routes);
    return(
        <Layout>
            <FrontHeader/>
            <Content>
                {route}
            </Content>
            <Footer>
                <FrontFooter/>
            </Footer>
        </Layout>
    )
}

export default FrontCombine;