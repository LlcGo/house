import style from "../userProfile/UseProfileIndex.module.css";
import React, {useEffect, useState} from "react";
import {Button, Form, Modal, Table, Input, Select, message,} from "antd";
import {ColumnsType} from "antd/es/table";
import {FeedBack, getFeedbacks} from "../../../../service/api/userAPI.ts";
import UserOrderStyle from '../UserOrder/UseOrderIndex.module.less'
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {deleteFeedback, replySubmit} from "../../../../service/api/oderAPI.ts";





const UserFeedback = () => {
    const [feedBack,setFeedBack] = useState<Array<FeedBack>>()
    const [id,setId] = useState<number>()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;

    const columns: ColumnsType<FeedBack> = [
        {
            title: '反馈信息',
            dataIndex: 'title',
            key: 'title',
            width: '80%',
            render: (_,{status,title,content,reply,contactName,contactEmail}) => (
                <div>
                    <div>{title}</div>
                    {
                        status !== 1 ?<div style={{color:'red'}}>待处理</div>:
                            <div style={{color:'green'}}>已处理</div>
                    }

                    <div>{contactName}:{contactEmail}</div>
                    <div>反馈内容：{content}</div>
                    <div>回复内容：{reply}</div>
                </div>

            ),
        },
        {
            title: '操作',
            dataIndex: 'id',
            key: 'id',
            width: '20%',
            render: (_,{id,status}) => (
                <>
                    <div>
                        <Button type="primary" onClick={()=>showModal(id)} >回复反馈</Button>
                    </div>
                    {
                        status === 1 && <div style={{marginTop:'10px'}}>
                            <Button onClick={()=>{deleteF(id!)}} type="primary" danger>删除反馈</Button>
                        </div>
                    }


                </>
            ),
        },
    ];
    const showModal = (id:any) => {
        setId(id)
        setIsModalOpen(true);
    };

    const onFinish = async (values: any) => {
        let feed:FeedBack = {
            id: id,
            reply: values.reply,
            status: values.status
        }
        console.log(feed);
        // return;
        const res = await replySubmit(feed);
        message.success(res.msg)
        handleCancel();
    };

    const deleteF = async (id:number) => {
         const res = await deleteFeedback(id);
         message.success(res.msg)
    }

    const handleCancel = () => {
        setId(undefined)
        form.resetFields();
        setIsModalOpen(false);
        initData();
    };

    useEffect(()=>{
        initData()
    },[]);

    const initData = async () => {
        const res =await getFeedbacks();
        setFeedBack(res.records);
    }

    return(
        <div className={style.box} >
            <div className={style.info}>
                <div className={style.col}></div>
                我的反馈
            </div>
            <Modal title="回复信息" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    form={form}
                    onFinish={onFinish}
                    style={{ maxWidth: 500 }}
                    layout="vertical"
                >
                    <Form.Item style={{marginTop:'6%'}}  name="reply" label="回复内容" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="status" label="状态" >
                        <Select
                            placeholder="请选择"
                            allowClear
                        >
                            <Option value={0}>未处理</Option>
                            <Option value={1}>已处理</Option>
                        </Select>
                    </Form.Item>
                    <div style={{display: "inline"}}>
                        <Button style={{marginLeft:'35%',display:"inline"}} type="primary" htmlType="submit">
                            提交
                        </Button>
                    </div>
                    <div style={{display: "inline"}}>
                        <Button style={{
                            marginLeft:'55%',
                            display:"inline",
                            position: 'relative',
                            top: '-31.5px'}} type="primary" htmlType="submit"
                            onClick={handleCancel}
                        >
                            取消
                        </Button>
                    </div>

                </Form>
            </Modal>
            <Table pagination={false} className={UserOrderStyle.table} columns={columns} dataSource={feedBack}  scroll={{ y: 240 }} />
        </div>

    )
}
export default UserFeedback;