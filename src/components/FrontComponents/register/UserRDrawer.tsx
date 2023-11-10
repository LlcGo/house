import React, { useState } from 'react';
import {Button, Drawer, Form,Input} from 'antd';
import style from './UserRDrawerStyle.module.less'
const UserRDrawer = () => {
    const [open, setOpen] = useState(false);

    type FieldType = {
        username?: string;
        password?: string;
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
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
            <Button type="dashed" onClick={showDrawer}>
                注册
            </Button>
            <Drawer className={style.drawer}  title="注册" placement="right" onClose={onClose} open={open}>
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
                    <Form.Item<FieldType>
                        label="姓名"
                        name="username"
                        // rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="邮箱"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="验证码"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="手机号"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="账号"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="密码"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="角色"
                        name="password"
                    >
                        <Input.Password />
                    </Form.Item>



                    <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
}

export default UserRDrawer;


