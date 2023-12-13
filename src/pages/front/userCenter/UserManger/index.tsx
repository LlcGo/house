import React, {useEffect, useState} from 'react';
import {Button, message, Pagination, Table, Tag} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
    disableUser,
    enableUser,
    getAllUser,
    getMyHouse,
    getOrders,
    HouseSearchVO,
    Order,
    User,
    UserPage
} from "../../../../service/api/userAPI.ts";
import style from '../UserOrder/UseOrderIndex.module.less'
import UserProcss from '../userProfile/UseProfileIndex.module.css'
const UserManger = () => {

    const [userPage,setUserPage] = useState<UserPage>()
    const [page,setPage] = useState<number>();

    const columns: ColumnsType<User> = [
        {
            title: '账户信息',
            dataIndex: 'username',
            key: 'username',
            width:'400px',
            render: (_, { username,userDisplayName,idCard }) => (
                <div className={style.imgBox}>
                    {/*<div className={style.columnsImgLeft}>*/}
                    {/*    <img style={{width:'150px',height:'110px'}} src={"http://localhost:8088" + house?.thumbnailUrl.replace("/src/main/resources/static","")}/>*/}
                    {/*</div>*/}
                    <div className={style.columnsImgRight}>
                        <div>用户名：{username}</div>
                        <div>姓名：{userDisplayName}</div>
                        <div>身份证：{idCard}</div>
                    </div>
                </div>
            ),
        },
        {
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
            render: (_, { phone }) => (
                <div>
                    <div>
                        {phone}
                    </div>

                </div>
            ),
        },
        {
            title: '其他信息',
            dataIndex: 'userDesc',
            key: 'userDesc',
            render: (_, { userDesc }) => (
                <div>
                    <div>
                        {userDesc}
                    </div>
                    {/*<div>*/}
                    {/*    {ownerUser?.phone}*/}
                    {/*</div>*/}
                </div>
            ),
        },
        {
            title: '状态',
            key: 'phone',
            // dataIndex: 'houseId',
            align:'center',
            render: (_,{status}) => getStatusTitle(status!)
        },
        {
            title: '操作',
            key: 'phone',
            // dataIndex: 'houseId',
            align:'center',
            render: (_,{id,status}) => getButton(status!,id!)
        }
    ];



    const disable = async (id:any) => {
        const res =  await disableUser(id);
        message.success(res.msg)
        initData(1,6)
    }

    {/*订单状态：-3 租客已取消 -2 待签合同 -1 待付款 0 生效中 1 已到期 2 退租申请 3 退租申请不通过*/}
    const getStatusTitle = (status:number) => {
        switch (status){
            case 0:
                return <Tag color={'red'}>禁用</Tag>
            case 1:
                return <Tag color={'success'}>正常</Tag>
            default:

        }
    }


    const enable = async (id:any) => {
        const res =  await enableUser(id);
        message.success(res.msg)
        initData(1,6);
    }

    useEffect(() => {
        initData(1,6)
    },[])

    const getButton = (status:number,id:number) => {
        switch (status){
            case 0:
                return <Button type={"primary"} onClick={()=>{enable(id)}}>启用</Button>
            case 1:
                return <Button type={"dashed"} onClick={()=>{disable(id)}}>禁用</Button>
            default:
        }
    }

    const changePage = (page:number,pageSize:number) => {
        initData(page,pageSize)
    }

    const initData = async (page?:number,pageSize?:number) => {
        setPage(page);
        let houseData: HouseSearchVO = {
            page: page,
            /*页面大小*/
            size: pageSize,
        }
        const res = await getAllUser(houseData.page!, houseData.size!,);
        setUserPage(res)
        // console.log('init--->',res)
    }

    return (
        <>
            <div className={UserProcss.box} >
                <div className={UserProcss.info}>
                    <div className={UserProcss.col}></div>
                    用户管理
                </div>
                <Table pagination={false} className={style.table} columns={columns} dataSource={userPage?.records} scroll={{ y: 240 }} />

                <Pagination style={{display:'flex',
                    justifyContent:'center',
                    position: "relative",
                    top: '-16px'}} onChange={(page,pageSize)=>{
                    changePage(page,pageSize)
                }} current={page} defaultCurrent={1} defaultPageSize={10} total={userPage?.total} />
            </div>
        </>
    );
}

export default UserManger;