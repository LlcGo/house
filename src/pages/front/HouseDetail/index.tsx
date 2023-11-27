import {useParams} from "react-router-dom";
import style from './HouseDetailIndex.module.css'
import {getHouseDetail, house} from "../../../service/api/userAPI.ts";
import React, {useEffect, useState} from "react";
import {Badge, Button, Card, Carousel, Collapse, CollapseProps, Descriptions, DescriptionsProps} from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';


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
                    <div className={style.carouselTop}>
                        <div className={style.monthRent}>
                            {house?.monthRent}/月
                        </div>
                        <div className={style.title}>
                            {house?.title}
                        </div>
                        <div className={style.address}>
                            {house?.address}
                        </div>
                    </div>

                    {/*轮播图*/}
                    <Carousel autoplay className={style.buttomCarousel}>
                        {house?.slideImgList.map(item=>{
                           let imgUrl = item.replace("/src/main/resources/static","")
                            return  <img className={style.img} src={"http://localhost:8088" + imgUrl}/>
                        })}
                    </Carousel>
                    {/*轮播图*/}
                </div>
            </div>

            <div className={style.detailContain}>
                {/*    下边区域*/}
                {/*    下边左详情*/}
                <div className={style.left}>
                    <Collapse onChange={onChange} items={itemsNest} />;
                    <Card>描述</Card>
                </div>
                {/*右边信息*/}
                <div className={style.right}>
                    <div>
                        <Card>
                            <Button type="primary" style={{minWidth:'200px',minHeight:'50px'}} >
                                收藏
                            </Button>
                        </Card>
                    </div>
                    <div>
                        <Card style={{marginTop:'20px'}}>
                            <div className={style.rightDate}>
                                top
                            </div>
                            <div className={style.rightDate1}>
                                <RangePicker style={{minWidth:'100%',minHeight:'50px', marginBottom:'5%'}}
                                    defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
                                    // disabled={[false, true]}
                                />
                                <RangePicker style={{minWidth:'100%',minHeight:'50px',}}
                                    defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}
                                    // disabled={[false, true]}
                                />
                            </div>
                            <div>
                                <Button type="primary" style={{minWidth:'100%',minHeight:'40px'}}>立即预定</Button>
                            </div>
                        </Card>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <Card>
                            <div className={style.houseTitle}>
                                联系房东
                            </div>
                            <div style={{marginTop:'20px'}}>
                                联系电话：
                            </div>
                            <div>
                                联系时间：
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HouseDetail;