import React, {useEffect, useState} from 'react';
import {Button, message, Pagination, Table} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {getOrders, HouseSearchVO, Order, OrderPage} from "../../../../service/api/userAPI.ts";
import style from './UseOrderIndex.module.less'
import UserProcss from '../userProfile/UseProfileIndex.module.css'
import {cancelOrder, endOrder, endPass, endReject, initOrder} from "../../../../service/api/oderAPI.ts";
import dayjs from "dayjs";
import {useNavigate} from "react-router-dom";


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

    const [order,setOrder] = useState<OrderPage>()
    const [page,setPage] = useState<number>();
    const route = useNavigate();

    useEffect(() => {
        getOrderPage(1,6)
    },[])


    const getOrderPage = async (page:number,pageSize:number) => {
        setPage(page);
        let pageData = {
            page: page,
            /*页面大小*/
            size: pageSize,
        }
        const res = await getOrders(pageData.page,pageData.size);
        setOrder(res)
    }

    const cancel = async (id:any) => {
        console.log(id)
        const res = await cancelOrder(id);
        message.success(res.msg)
        getOrderPage(1,6)
        // alert(id)
        // cancelOrder(id);
    }

    const changePage = (page:number,pageSize:number) => {
        getOrderPage(page,pageSize)
    }

    const endO = async (id:any) => {
        const res = await endOrder(id);
        if(res.code ===1) message.success(res.msg)
        if(res.code ===0) message.warning(res.msg)
        getOrderPage(1,6)
    }

    const pass = async (id:any) => {
        const res = await endPass(id);
        if(res.code ===1) message.success(res.msg)
        if(res.code ===0) message.warning(res.msg)
        getOrderPage(1,6)
    }

    const reject = async (id:any) => {
        const res = await endReject(id);
        if(res.code ===1) message.success(res.msg)
        if(res.code ===0) message.warning(res.msg)
        getOrderPage(1,6)
    }

    const topay = async (orderId:number,endDate:number,startDate:number) => {
        const res = await initOrder(orderId)
        if(!res){
            message.success('这不是您的订单')
            return;
        }
        let stime = Date.parse(new Date(startDate).toLocaleString());
        let etime = Date.parse(new Date(endDate).toLocaleString());
        let usedTime = etime - stime;  //两个时间戳相差的毫秒数
        console.log('时间---->',stime,etime)
        let days=Math.floor(usedTime/(24*3600*1000));
        console.log('相差时间---->',days)

        let data = {
            orderId:orderId,
            dataNumber: days
        }
        route('/order/pay',{state:data})
    }

    const getState = (id:any,status:any,endDate:number,startDate:number) => {
        // case -3:
        //             return '租客已取消'
        //         case -2:
        //             return '待签合同'
        //         case -1:
        //             return '待付款'
        //         case 0:
        //             return '生效中'
        //         case 1:
        //             return '已到期'
        //         case 2:
        //             return '退租申请'
        //         case 3:
        //             return '退租申请不通过'
        switch (status){
            case -3:
                return null
            case -2:
                return <a>待签合同</a>
            case -1:
                return  <div>
                <div>
                    <a onClick={()=>{cancel(id)}}>取消订单</a>
                </div>
                <div>
                    <a onClick={()=>{topay(id,endDate,startDate)}}>去付款</a>
                </div>
            </div>
            case 0:
                return <a onClick={()=>{endO(id)}}>申请退租</a>
            case 1:
                return null
            case 2:
                return <div>
                    <div>
                        <a onClick={()=>{pass(id)}}>退租申请通过</a>
                    </div>
                    <div>
                        <a onClick={()=>{reject(id)}}>退租申请拒绝</a>
                    </div>
                </div>
            case 3:
                return  <a onClick={()=>{cancel(id)}}>退租申请不通过</a>
            default:

        }
       return  status === -3 ? null : <a onClick={()=>{cancel(id)}}>取消订单</a>
    }

    const columns: ColumnsType<Order> = [
        {
            title: '订单列表',
            dataIndex: 'house',
            key: 'house',
            render: (_, { status,totalAmount, house,startDate,endDate }) => (
                <div className={style.imgBox}>
                    <div className={style.columnsImgLeft}>
                        <img style={{width:'150px',height:'110px'}} src={"http://localhost:8088" + house?.thumbnailUrl.replace("/src/main/resources/static","")}/>
                    </div>
                    <div className={style.columnsImgRight}>
                        <div>{house?.title}</div>
                        <div>地区：{house?.address}</div>
                        <div>{getDate(startDate!)}-{getDate(endDate!)}</div>
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
            // dataIndex: 'houseId',
            align:'center',
            render: (_,{id,status,endDate,startDate}) => getState(id,status,endDate,startDate)
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


    const getDate =(time:number) => {
        console.log()
        return (dayjs(time).format('YYYY/MM/DD'))
    }

    return (
        <>
            <div className={UserProcss.box} >
                <div className={UserProcss.info}>
                    <div className={UserProcss.col}></div>
                    订单管理
                </div>
            <Table pagination={false} className={style.table} columns={columns} dataSource={order?.records} scroll={{ y: 240 }}  />
                <Pagination style={{display:'flex',
                    justifyContent:'center',
                    position: "relative",
                    top: '-16px'}} onChange={(page,pageSize)=>{
                    changePage(page,pageSize)
                }} current={page} defaultCurrent={1} defaultPageSize={10} total={order?.total} />
            </div>
        </>
    );
}

export default UserOrder;