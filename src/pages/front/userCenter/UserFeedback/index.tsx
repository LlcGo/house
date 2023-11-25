import style from "../userProfile/UseProfileIndex.module.css";
import React, {useEffect, useState} from "react";
import {Button, Table} from "antd";
import {ColumnsType} from "antd/es/table";
import {FeedBack, getFeedbacks} from "../../../../service/api/userAPI.ts";
import UserOrderStyle from '../UserOrder/UseOrderIndex.module.less'



const columns: ColumnsType<FeedBack> = [
    {
        title: '反馈信息',
        dataIndex: 'title',
        key: 'title',
        width: '80%',
        render: (_,{status,title,content,reply,contactName,contactEmail}) => (
            <div>
                <div>{title}</div>
                <div>{status}</div>
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
        render: () => (
            <>
                 <div>
                     <Button type="primary">回复反馈</Button>
                 </div>
                <div style={{marginTop:'10px'}}>
                    <Button type="primary" danger>删除反馈</Button>
                </div>

            </>
        ),
    },
];

const UserFeedback = () => {
    const [feedBack,setFeedBack] = useState<Array<FeedBack>>()

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
            <Table pagination={false} className={UserOrderStyle.table} columns={columns} dataSource={feedBack}  scroll={{ y: 240 }} />
        </div>

    )
}
export default UserFeedback;