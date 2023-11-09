import React from 'react';
import {DownOutlined, UserOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Avatar, Dropdown, Image, Space} from 'antd';
import avatar from '/src/assets/img/avatar.jpg'
import style from './headerStyle.module.css'
const items: MenuProps['items'] = [
    {
        label: <a href="https://www.antgroup.com">退出</a>,
        key: '0',
    },
    {
        label: <a href="https://www.aliyun.com">个人中心</a>,
        key: '1',
    },
];

const UserAvatar: React.FC = () => (
    <div style={{marginTop:10}}>
        <Dropdown  menu={{ items }}  >
            <a onClick={(e) => e.preventDefault()}>
                <Avatar  shape="circle" style={{position:"relative" ,top:-7}}  size="large" src={avatar} />
                <DownOutlined style={{position:"relative",top:7}} />
            </a>
        </Dropdown>
    </div>
);


export default UserAvatar;
