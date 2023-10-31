
// import './App.module.css'




import {BrowserRouter, useNavigate, useRoutes} from "react-router-dom";
import DynamicRouter from "./router";
import style from './App.module.css'
import {Layout} from "antd";
import {Content,Header,Footer} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import MySider from "./components/Sider";
import MyHeader from "./components/Header";
import {RouteObject} from "react-router/dist/lib/context";





function App() {
  const path = new URL(window.location.href)
  return (
      path.pathname.startsWith('/user') ? <Layout className={style.box}>
          {/*左边*/}
          <Sider className={style.sider}>
              <MySider/>
          </Sider>
          <Layout>
              {/*头部*/}
              <Header className={style.header}>
                  <MyHeader/>
              </Header>
              {/*内容*/}
              <Content >
                  <BrowserRouter>
                      <DynamicRouter></DynamicRouter>
                  </BrowserRouter>
              </Content>
          </Layout>
      </Layout> :   <BrowserRouter>
          <DynamicRouter></DynamicRouter>
      </BrowserRouter>
  )
}

export default App
