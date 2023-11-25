import {Button, Form, Input} from "antd";
import style from "../userProfile/UseProfileIndex.module.css";
import React from "react";



interface updateUser {
    password?:string
    newPassword?:string
    confPassword?:string
}

const onFinish = (values: updateUser) => {
    console.log('Success:', values);
};

// const onFinishFailed = (errorInfo: any) => {
//     console.log('Failed:', errorInfo);
// };

const UserupdatePassword = () => {
    return(
        <div className={style.box} >

                <div className={style.info}>
                    <div className={style.col}></div>
                    修改密码
                </div>
            <div style={{
                height: '83vh',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    top:'20%',
                    left: '30%'
                }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<updateUser>
                            label="原密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item<updateUser>
                            label="新密码"
                            name="newPassword"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item<updateUser>
                            label="确认密码"
                            name="confPassword"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>


                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                确认
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

        </div>
        </div>
    )
}
export default UserupdatePassword;