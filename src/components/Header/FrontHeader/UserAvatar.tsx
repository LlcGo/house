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
            label:<Link to={'/front/userCenter/0'}>房间管理</Link>,
            key: '8',
        },
        {
            label: <Link to={'/front/userCenter/2'}>订单管理</Link>,
            key: '0',
        },
        {
            label: <Link to={'/front/userCenter/1'}>用户中心</Link>,
            key: '1',
        },
        {
            label: <Link to={'/front/userCenter/3'}>我的家</Link>,
            key: '3',
        },
        {
            label: <Link to={'/front/userCenter/4'}>我的收藏</Link>,
            key: '4',
        },
        {
            label: <Link to={'/front/userCenter/5'}>密码修改</Link>,
            key: '5',
        },
        {
            label: <Link to={'/front/userCenter/6'}>用户反馈</Link>,
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
