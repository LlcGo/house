import React, { useState } from 'react';
import {Button, Drawer, Form,Input} from 'antd';
import style from './UserDrawerStyle.module.less'
import {User, UserLogin} from "../../../service/api/userAPI.ts";
import {useDispatch, useSelector} from "react-redux";
const UserDrawer = (props:any) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const onFinish = async (values: User) => {
       const res =  await UserLogin(values)
        console.log('Success ------->', res);
        if(res){
            props.setUser(res)
        }
        window.localStorage.setItem('user',JSON.stringify(res))
       // alert(username)
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/*<div>{username}</div>*/}
            <div className={style.UserDrawerButton}>
                <Button  type="dashed" onClick={showDrawer}>
                    登录
                </Button>
            </div>
            <Drawer className={style.drawer}  title="登录" placement="right" onClose={onClose} open={open}>
                <Form
                    name="basic"
                    layout={'vertical'}
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<User>
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<User>
                        label="密码"
                        name="userPass"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
}

export default UserDrawer;


