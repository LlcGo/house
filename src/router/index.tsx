import Login from "../pages/user/login/Login.tsx";
// import Register from "../pages/user/register/Register.tsx";
// import Home from "../pages/home/Home.tsx";
import {Navigate} from "react-router-dom";
import React, {JSX, lazy} from "react";
import Test from "../pages/test/Test.tsx";
import Comp1 from "../components/comp1/comp1.tsx";
import FrontIndex from "../pages/front/index/FrontIndex.tsx";
import UserCenter from "../pages/front/userCenter";
import UserProfile from "../pages/front/userCenter/userProfile";
import WholeHouse from "../pages/front/WholeHouse";
import FeedBack from "../pages/front/FeedBack";

const Register = lazy(() => import("../pages/user/register/Register.tsx"))
const Home = lazy(() => import("../pages/home/Home.tsx"))

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<>Loading...</>}>
        {comp}
    </React.Suspense>
)

const routes = [
    // {path: "/login", element: <Login/>},
    // {path: "/", element: <Navigate to={"/login"}/>},
    // {path: "/register", element: withLoadingComponent(<Register/>) },
    // {path: "/test", element: <Test/>},
    // {path: "/testReducer", element: <Comp1/>}
    {path: "/", element: <Navigate to={"/front/index"}/>},
    {path: "/front/index", element: <FrontIndex/>},
    {path: "/front/userCenter/:type", element: <UserCenter/>,
    // children: [
    //     {
    //         path: '/front/userCenter/profile',
    //         element: <UserProfile/>
    //     },
    //     // {
    //     //     path: '/home/message',
    //     //     element: <Message/>
    //     // },
    // ]
    },
    {path: "/front/user/house", element: withLoadingComponent(<WholeHouse/>)} ,
    {path: "/front/feedBack", element: withLoadingComponent(<FeedBack/>)} ,
    {path: "/user/home", element: withLoadingComponent(<Home/>)} ,


];

export default routes;


