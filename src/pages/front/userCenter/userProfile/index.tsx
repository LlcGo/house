import {Button, Col, Form, Input, Row} from "antd";
import React, {useEffect} from "react";
import TextArea from "antd/es/input/TextArea";
import style from './UseProfileIndex.module.css'
import {useSelector} from "react-redux";

const UserProfile = () => {


    // const user  = JSON.parse(window.localStorage.getItem('user')!)
    const [form] = Form.useForm();
    const user  = useSelector((state :RootState) => {return state?.user});

    useEffect(()=>{
        form.setFieldsValue(user)
    },[user])



    return(
        <div className={style.box}>
            <div className={style.info}>
                <div className={style.col}></div>
                个人信息 {user.username}
            </div>

                <Form
                    form={form}
                    layout="vertical"
                    style={{marginLeft : '10%',marginTop :'2%'}}
                >
                    <Row>
                        <Col span={12}>
                            <Form.Item label="账号" name={'username'} >
                                <Input style={{width:'80%'}} />
                            </Form.Item>
                            <Form.Item label="电子邮箱" name={'email'}>
                                <Input style={{width:'80%'}} />
                            </Form.Item>
                            <Form.Item label="身份证号" name={'idCard'} >
                                <Input style={{width:'80%'}} />
                            </Form.Item>
                            <Form.Item label="职业" name={'job'} >
                                <Input style={{width:'80%'}} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="姓名"
                                name={'userDisplayName'}
                                // tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                            >
                                <Input style={{width:'80%'}}  />
                            </Form.Item>
                            <Form.Item
                                label="手机号"
                                name={'phone'}
                            >
                                <Input style={{width:'80%'}} />
                            </Form.Item>
                            <Form.Item
                                label="性别"
                                name={'sex'}
                            >
                                <Input style={{width:'80%'}}   />
                            </Form.Item>
                            <Form.Item
                                label="爱好"
                                name={'hobby'}
                            >
                                <Input style={{width:'80%'}}   />
                            </Form.Item>
                        </Col>
                        <Form.Item
                            style={{width: '90%'}}
                            label="个人说明"
                            name={'userDesc'}
                        >
                            <TextArea  autoSize={{ minRows: 6, maxRows: 6 }} allowClear />
                        </Form.Item>
                    </Row>

                    <Form.Item style={{
                        display: "flex",
                        justifyContent: "end",
                        position : "relative",
                        right: '10%'
                    }}>
                        <Button type="primary">Submit</Button>
                    </Form.Item>

                </Form>

        </div>
    )
}

export default UserProfile;