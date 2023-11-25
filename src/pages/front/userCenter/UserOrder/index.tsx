import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {getOrders, Order} from "../../../../service/api/userAPI.ts";
import style from './UseOrderIndex.module.less'
import UserProcss from '../userProfile/UseProfileIndex.module.css'
const columns: ColumnsType<Order> = [
    {
        title: '订单列表',
        dataIndex: 'house',
        key: 'house',
        render: (_, { status,totalAmount, house }) => (
            <div className={style.imgBox}>
                <div className={style.columnsImgLeft}>
                    <img style={{width:'150px',height:'110px'}} src={"http://localhost:8088" + house?.thumbnailUrl.replace("/src/main/resources/static","")}/>
                </div>
                <div className={style.columnsImgRight}>
                    <div>{house?.title}</div>
                    <div>地区：{house?.address}</div>
                    <div>{house?.lastOrderStartTime}-{house?.lastOrderEndTime}</div>
                    <div>总金额：{totalAmount}</div>
                    <div>{getStatusTitle(status!)}</div>
                </div>
            </div>
        ),
    },
    {
        title: '租客',
        dataIndex: 'customerUser',
        key: 'customerUser',
        render: (_, { customerUser }) => (
            <div>
                <div>
                    {customerUser?.userDisplayName}
                </div>
                <div>
                    {customerUser?.phone}
                </div>
            </div>
        ),
    },
    {
        title: '房东',
        dataIndex: 'ownerUser',
        key: 'ownerUser',
        render: (_, { ownerUser }) => (
            <div>
                <div>
                    {ownerUser?.userDisplayName}
                </div>
                <div>
                    {ownerUser?.phone}
                </div>
            </div>
        ),
    },
    {
        title: '操作',
        key: 'houseId',
        dataIndex: 'houseId',
        align:'center'
        // render: (_, { tags }) => (
        //     <>
        //         {tags.map((tag) => {
        //             let color = tag.length > 5 ? 'geekblue' : 'green';
        //             if (tag === 'loser') {
        //                 color = 'volcano';
        //             }
        //             return (
        //                 <Tag color={color} key={tag}>
        //                     {tag.toUpperCase()}
        //                 </Tag>
        //             );
        //         })}
        //     </>
        // ),
    },
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (_, record) => (
    //         <Space size="middle">
    //             <a>Invite {record.name}</a>
    //             <a>Delete</a>
    //         </Space>
    //     ),
    // },
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





const UserOrder = () => {

    const [order,setOrder] = useState<Array<Order>>()

    useEffect(() => {
        getOrderPage()
    },[])


    const getOrderPage = async () => {
        const res = await getOrders();
        setOrder(res.records)
    }

    return (
        <>
            <div className={UserProcss.box} >
                <div className={UserProcss.info}>
                    <div className={UserProcss.col}></div>
                    订单管理
                </div>
            <Table pagination={false} className={style.table} columns={columns} dataSource={order}  scroll={{ y: 240 }} />
            </div>
        </>
    );
}

export default UserOrder;