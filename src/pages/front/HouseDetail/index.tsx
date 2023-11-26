import {useParams} from "react-router-dom";
import style from './HouseDetailIndex.module.css'
import {getHouseDetail, house} from "../../../service/api/userAPI.ts";
import React, {useEffect, useState} from "react";
import {Badge, Collapse, CollapseProps, Descriptions, DescriptionsProps} from "antd";


const HouseDetail = () => {
    const params = useParams();

    const [house,setHouse] = useState<house>();

    const items1: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Product',
            children: 'Cloud Database',
        },
        {
            key: '2',
            label: 'Billing Mode',
            children: 'Prepaid',
        },
        {
            key: '3',
            label: 'Automatic Renewal',
            children: 'YES',
        },
        {
            key: '4',
            label: 'Order time',
            children: '2018-04-24 18:00:00',
        },
        {
            key: '5',
            label: 'Usage Time',
            children: '2019-04-24 18:00:00',
            span: 2,
        },
        {
            key: '6',
            label: 'Status',
            children: <Badge status="processing" text="Running" />,
            span: 3,
        },
        {
            key: '7',
            label: 'Negotiated Amount',
            children: '$80.00',
        },
        {
            key: '8',
            label: 'Discount',
            children: '$20.00',
        },
        {
            key: '9',
            label: 'Official Receipts',
            children: '$60.00',
        },
        {
            key: '10',
            label: 'Config Info',
            children: (
                <>
                    Data disk type: MongoDB
                    <br />
                    Database version: 3.4
                    <br />
                    Package: dds.mongo.mid
                    <br />
                    Storage space: 10 GB
                    <br />
                    Replication factor: 3
                    <br />
                    Region: East China 1
                    <br />
                </>
            ),
        },
    ];



    const itemsNest: CollapseProps['items'] = [
        {
            key: '1',
            label: 'This is panel nest panel',
            children: <Descriptions title="User Info" bordered items={items1} />,
        },
    ];


    useEffect(()=>{
        initData();
    },[])


    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const initData = async () =>{
       const res = await getHouseDetail(Number(params.id));
       setHouse(res);
    }
    return (
        <div>
            <div>
                <div className={style.carousel}>
                    <div>
                        {house?.monthRent}
                    </div>
                    <div>
                        {house?.title}
                    </div>
                    <div>
                        {house?.address}
                    </div>

                    轮播图
                </div>
            </div>
        {/* */}
        {/*    下边区域*/}
        {/*    下边左详情*/}
            <div>
                <Collapse onChange={onChange} items={itemsNest} />;
            </div>
            {/*右边信息*/}
            <div>

            </div>
        </div>
    )
}

export default HouseDetail;