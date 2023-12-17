import React, {useEffect, useState} from 'react';
import {Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {getMyHouse, getOrders, Order} from "../../../../service/api/userAPI.ts";
import style from '../UserOrder/UseOrderIndex.module.less'
import UserProcss from '../userProfile/UseProfileIndex.module.css'
import dayjs from "dayjs";







const MyHouse = () => {
    const columns: ColumnsType<Order> = [
        {
            title: '我的家信息',
            dataIndex: 'house',
            key: 'house',
            width:'400px',
            render: (_, { status,totalAmount, house,startDate,endDate }) => (
                <div className={style.imgBox}>
                    <div className={style.columnsImgLeft}>
                        <img style={{width:'150px',height:'110px'}} src={"http://localhost:8088" + house?.thumbnailUrl.replace("/src/main/resources/static","")}/>
                    </div>
                    <div className={style.columnsImgRight}>
                        <div>{house?.title}</div>
                        <div>地区：{house?.address}</div>
                        <div>{getDate(startDate!)}-{getDate(endDate!)}</div>
                    </div>
                </div>
            ),
        },
        {
            title: '类型',
            dataIndex: 'customerUser',
            key: 'customerUser',
            render: (_, { house }) => (
                <div>
                    <div>
                        {house?.rentType == 'whole' ? '整租':'合租'}
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


    const [order,setOrder] = useState<Array<Order>>()

    useEffect(() => {
        initData()
    },[])


    const initData = async () => {
        const res = await getMyHouse();
        setOrder(res.records)
    }

    const getDate =(time:number) => {
        console.log()
        return (dayjs(time).format('YYYY/MM/DD'))
    }

    return (
        <>
            <div className={UserProcss.box} >
                <div className={UserProcss.info}>
                    <div className={UserProcss.col}></div>
                    我的家
                </div>
            <Table pagination={false} className={style.table} columns={columns} dataSource={order}  scroll={{ y: 240 }} />
            </div>
        </>
    );
}

export default MyHouse;