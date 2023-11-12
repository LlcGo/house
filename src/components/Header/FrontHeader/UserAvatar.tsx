import React from 'react';
import {DownOutlined, UserOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Avatar, Dropdown, Image, Space} from 'antd';
import avatar from '/src/assets/img/avatar.jpg'
import {Link} from "react-router-dom";


const FrontUserAvatar = (props: any) => {
    const outLogin = () => {
        window.localStorage.removeItem('user')
        props.setUser('')
    }

    const items: MenuProps['items'] = [
        {
            label: <a>订单管理</a>,
            key: '0',
        },
        {
            label: <Link to={'/front/userCenter/1'}>用户中心</Link>,
            key: '1',
        },
        {
            label: <a >我的家</a>,
            key: '3',
        },
        {
            label: <a href="#">我的收藏</a>,
            key: '4',
        },
        {
            label: <a>密码修改</a>,
            key: '5',
        },
        {
            label: <a href="#">我的反馈</a>,
            key: '6',
        },
        {
            label: <a onClick={outLogin}>退出</a>,
            key: '7',
        },

    ];

    return (
        <div style={{marginTop:10}}>
            <Dropdown  menu={{ items }}  >
                <a onClick={(e) => e.preventDefault()}>
                    <Avatar  shape="circle" style={{position:"relative" ,top:-7}}  size="large" src={avatar} />
                    <DownOutlined style={{position:"relative",top:7}} />
                </a>
            </Dropdown>
        </div>
        )
}


export default FrontUserAvatar;
