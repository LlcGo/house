import React from 'react';
import {CalendarOutlined, DownOutlined, MailOutlined, UserOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Avatar, Dropdown, Image, message, Space} from 'antd';
import avatar from '/src/assets/img/avatar.jpg'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginOut} from "../../../service/api/userAPI.ts";


const FrontUserAvatar = (props: any) => {

    const route = useNavigate();
    const dispatch =  useDispatch();
    const user = useSelector((state:RootState) => state.user);

    const outLogin = async () => {
        const res = await loginOut();
        message.success(res.msg);
        props.setUser('')
        dispatch({type:'removeUser'})
        route("/")
    }

    const getData = (): MenuProps['items']  => {
        let arrayObj
        if(user.role === 'admin'){
            arrayObj = [ {
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
                },];
            //管理员
            return arrayObj
        }else if (user.role === 'owner'){
            //房东
            arrayObj =[
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
                    label: <Link to={'/front/userCenter/4'}>我的收藏</Link>,
                    key: '4',
                },
                {
                    label: <Link to={'/front/userCenter/5'}>密码修改</Link>,
                    key: '5',
                },
                {
                    label: <Link to={'/front/userCenter/6'}>我的反馈</Link>,
                    key: '6',
                },
                {
                    label: <a onClick={outLogin}>退出</a>,
                    key: '7',
                },
            ]
            return arrayObj
        }else {
            //租客
            arrayObj = [
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
                    label: <Link to={'/front/userCenter/6'}>我的反馈</Link>,
                    key: '6',
                },
                {
                    label: <a onClick={outLogin}>退出</a>,
                    key: '7',
                },
            ]
            return arrayObj
        }

    }


    const items: MenuProps['items'] = getData();

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
