import style from './UserCenterIndex.module.css'
import {Menu, MenuProps, MenuTheme} from "antd";
import React, {useEffect, useState} from "react";
import {AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import {BrowserRouter, useParams, useRoutes} from "react-router-dom";
import routes from "../../../router";
import UserProfile from "./userProfile";
import UserOrder from "./UserOrder";
import UserupdatePassword from "./UserupdatePassword";
import UserFeedback from "./UserFeedback";
import MyHouse from "./MyHouse";
import MyMark from "./MyMark";
import AdminManger from "./AdminManger";
import PublicHome from "./PublicHome";
import UserManger from "./UserManger";
import {useSelector} from "react-redux";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const userItems: MenuItem[] = [
    getItem('用户中心', '1', <MailOutlined />),
    getItem('订单管理', '2', <CalendarOutlined />),
    getItem('我的家', '3', <MailOutlined />),
    getItem('我的收藏', '4', <CalendarOutlined />),
    getItem('密码修改', '5', <MailOutlined />),
    getItem(' 我的反馈', '6', <CalendarOutlined />),
];

const houseUserItems: MenuItem[] = [
    getItem('房间管理', '0', <MailOutlined />),
    getItem('用户中心', '1', <MailOutlined />),
    getItem('订单管理', '2', <CalendarOutlined />),
    getItem('我的收藏', '4', <CalendarOutlined />),
    getItem('密码修改', '5', <MailOutlined />),
    getItem(' 我的反馈', '6', <CalendarOutlined />),
];






const UserCenter = () => {

    const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
    const [theme, setTheme] = useState<MenuTheme>('light');
    const [type,setType] = useState(1);
    const params = useParams();
    const user = useSelector((state:RootState) => state.user);
    const getData = () :MenuItem[]  => {
        let arrayObj
        if(user.role === 'admin'){
            arrayObj = [getItem('房间管理', '0', <MailOutlined />),
                getItem('用户管理', '8', <MailOutlined />),
                getItem('用户中心', '1', <MailOutlined />),
                getItem('订单管理', '2', <CalendarOutlined />),
                getItem('我的收藏', '4', <CalendarOutlined />),
                getItem('密码修改', '5', <MailOutlined />),
                getItem(' 我的反馈', '6', <CalendarOutlined />)];　
            //管理员
            return arrayObj
        }else if (user.role === 'owner'){
            //房东
            arrayObj =[
                getItem('房间管理', '0', <MailOutlined />),
                getItem('用户中心', '1', <MailOutlined />),
                getItem('订单管理', '2', <CalendarOutlined />),
                getItem('我的收藏', '4', <CalendarOutlined />),
                getItem('密码修改', '5', <MailOutlined />),
                getItem(' 我的反馈', '6', <CalendarOutlined />)
            ]
            return arrayObj
        }else {
            //租客
            arrayObj = [
                getItem('用户中心', '1', <MailOutlined />),
                getItem('订单管理', '2', <CalendarOutlined />),
                getItem('我的家', '3', <MailOutlined />),
                getItem('我的收藏', '4', <CalendarOutlined />),
                getItem('密码修改', '5', <MailOutlined />),
                getItem(' 我的反馈', '6', <CalendarOutlined />)
            ]
            return arrayObj
        }

    }

    const items: MenuItem[] =  getData()


    useEffect(()=>{
      setType(Number(params.type))
    },[params])


    const changeMenu = (value : MenuItem) => {
        setType(Number(value?.key))
    }

    return (
        <div className={style.box}>
            <div className={style.left}>
                <div className={style.title}>个人中心</div>
                <Menu
                    style={{ width: '100%',height: '92%',background : '#fafafa',padding:'10px'}}
                    defaultSelectedKeys={['0']}
                    defaultOpenKeys={['sub1']}
                    mode={mode}
                    theme={theme}
                    items={items}
                    onClick={changeMenu}
                />
            </div>


            <div className={style.right}>
                {
                    type === 0 && <div>
                         <AdminManger/>
                    </div>
                }
                {
                    type === 1 && <div>
                          <UserProfile />
                    </div>
                }
                {
                    type === 2 && <div>
                        <UserOrder/>
                    </div>
                }
                {
                    type === 3 && <div>
                        <MyHouse/>
                    </div>
                }
                {
                    type === 4 && <div>
                       <MyMark/>
                    </div>
                }
                {
                    type === 5 && <div>
                        <UserupdatePassword/>
                    </div>
                }
                {
                    type === 6 && <div>
                        <UserFeedback/>
                    </div>
                }
                {
                    type === 7 && <div>
                        <PublicHome/>
                    </div>
                }
                {
                    type === 8 && <div>
                       <UserManger/>
                    </div>
                }
            </div>
        </div>
    )
}



export default UserCenter;