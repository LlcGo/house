import Login from "../pages/user/login/Login.tsx";
// import Register from "../pages/user/register/Register.tsx";
// import Home from "../pages/home/Home.tsx";
import {Navigate} from "react-router-dom";
import React, {JSX, lazy} from "react";
import Test from "../pages/test/Test.tsx";
import Comp1 from "../components/comp1/comp1.tsx";

const Register = lazy(() => import("../pages/user/register/Register.tsx"))
const Home = lazy(() => import("../pages/home/Home.tsx"))

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<>Loading...</>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {path: "/login", element: <Login/>},
    {path: "/", element: <Navigate to={"/login"}/>},
    {path: "/register", element: withLoadingComponent(<Register/>) },
    {path: "/user/home", element: withLoadingComponent(<Home/>)} ,
    {path: "/test", element: <Test/>},
    {path: "/testReducer", element: <Comp1/>}
];

export default routes;


