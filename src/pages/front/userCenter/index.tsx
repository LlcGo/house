import style from './UserCenterIndex.module.css'
import {Menu, MenuProps, MenuTheme} from "antd";
import React, {useEffect, useState} from "react";
import {AppstoreOutlined, CalendarOutlined, LinkOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";
import {BrowserRouter, useParams, useRoutes} from "react-router-dom";
import routes from "../../../router";
import UserProfile from "./userProfile";
import UserOrder from "./UserOrder";

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

const items: MenuItem[] = [
    getItem('用户中心', '1', <MailOutlined />),
    getItem('订单管理', '2', <CalendarOutlined />),
    getItem('我的家', '3', <MailOutlined />),
    getItem('我的收藏', '4', <CalendarOutlined />),
    getItem('密码修改', '5', <MailOutlined />),
    getItem(' 我的反馈', '6', <CalendarOutlined />),
];




const UserCenter = () => {

    const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
    const [theme, setTheme] = useState<MenuTheme>('light');
    const [type,setType] = useState(0);

    const params = useParams();

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
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode={mode}
                    theme={theme}
                    items={items}
                    onClick={changeMenu}
                />
            </div>


            <div className={style.right}>
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
                        我的家
                    </div>
                }
                {
                    type === 4 && <div>
                        我的收藏
                    </div>
                }
                {
                    type === 5 && <div>
                        密码修改
                    </div>
                }
                {
                    type === 6 && <div>
                        我的反馈
                    </div>
                }
            </div>
        </div>
    )
}



export default UserCenter;