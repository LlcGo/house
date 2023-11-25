import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {getMyHouse, getMyMark, getOrders, Mark, Order} from "../../../../service/api/userAPI.ts";
import style from '../UserOrder/UseOrderIndex.module.less'
import UserProcss from '../userProfile/UseProfileIndex.module.css'
const columns: ColumnsType<Mark> = [
    {
        title: '收藏列表',
        dataIndex: 'house',
        key: 'house',
        width:'1000px',
        render: (_, { house }) => (
            <div className={style.imgBox}>
                <div className={style.columnsImgLeft}>
                    <img style={{width:'150px',height:'110px'}} src={"http://localhost:8088" + house?.thumbnailUrl.replace("/src/main/resources/static","")}/>
                </div>
                <div className={style.columnsImgRight}>
                    <div>{house?.title}</div>
                    <div>地区：{house?.address}</div>
                </div>
            </div>
        ),
    },
    {
        title: '操作',
        dataIndex: 'customerUser',
        key: 'customerUser',
        render: (_,) => (
            <div>
                取消收藏
            </div>
        ),
    },
];

{/*订单状态：-3 租客已取消 -2 待签合同 -1 待付款 0 生效中 1 已到期 2 退租申请 3 退租申请不通过*/}
const getStatusTitle = (status:number) => {
    switch (status){
        case -3:
            return '租客已取消'
        case -2:
            return '待签合同'
        case -1:
            return '待付款'
        case 0:
            return '生效中'
        case 1:
            return '已到期'
        case 2:
            return '退租申请'
        case 3:
            return '退租申请不通过'
        default:

    }
}





const MyHouse = () => {

    const [mark,setMark] = useState<Array<Mark>>()

    useEffect(() => {
        initData()
    },[])


    const initData = async () => {
        const res = await getMyMark();
        setMark(res.records)
    }

    return (
        <>
            <div className={UserProcss.box} >
                <div className={UserProcss.info}>
                    <div className={UserProcss.col}></div>
                    我的家
                </div>
            <Table pagination={false} className={style.table} columns={columns} dataSource={mark}  scroll={{ y: 240 }} />
            </div>
        </>
    );
}

export default MyHouse;