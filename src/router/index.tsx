
import Login from "../pages/user/login/Login.tsx";
import Register from "../pages/user/register/Register.tsx";
import {useRoutes} from "react-router-dom";
import Home from "../pages/home/Home.tsx";


const routes = [
    { path: "/login", element : <Login />},
    { path: "/register", element: <Register />},
    { path: "/user/home" , element:  <Home/>},
]

const DynamicRouter = () => {
    return useRoutes(routes);
}

export default DynamicRouter;
