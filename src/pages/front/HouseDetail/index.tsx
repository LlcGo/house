import {useNavigate, useParams} from "react-router-dom";
import style from './HouseDetailIndex.module.css'
import {getHouseDetail, house} from "../../../service/api/userAPI.ts";
import React, {useEffect, useState} from "react";
import {Badge, Button, Card, Carousel, Collapse, CollapseProps, Descriptions, DescriptionsProps, message} from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DatePicker, Space } from 'antd';
import routes from "../../../router";
import {Mark, orderCreate} from "../../../service/api/oderAPI.ts";
import userDrawer from "../../../components/FrontComponents/login/UserDrawer.tsx";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';


const HouseDetail = () => {

    const getDate =() =>{
        let res =dayjs(new Date().toLocaleString()).format(dateFormat)
        const d = res.split('/');
        return d[1]+'/'+d[2] + '/' + d[0]
    }

    const params = useParams();
    const route = useNavigate();
    const [house,setHouse] = useState<house>();
    const [date,setDate] = useState<string>(getDate())

    const items1: DescriptionsProps['items'] = [
        {
            key: '1',
            label: '状态',
            children: house?.status,
        },
        {
            key: '2',
            label: '类型',
            children: house?.rentType === 'whole' ? '整租' : '合租',
        },
        {
            key: '3',
            label: '租金',
            children: house?.monthRent,
        },

        {
            key: '4',
            label: '房产证编号',
            children: house?.cetificateNo,
        },
        {
            key: '5',
            label: '卧室数量',
            children: house?.bedroomNum,
        },
        {
            key: '6',
            label: '卫生间数量',
            children: house?.toiletNum,
        },
        {
            key: '7',
            label: '厨房数量',
            children: house?.livingRoomNum,
        },
        {
            key: '8',
            label: '客厅数量',
            children: house?.livingRoomNum,
        },
        {
            key: '9',
            label: '房屋面积',
            children: house?.area+'平米',
        },

        {
            key: '10',
            label: '是否有空调',
            children: house?.hasAirConditioner === 1 ? '有':'无',
        },
        {
            key: '11',
            label: '建成年份',
            children: house?.hasElevator,
        },
        {
            key: '12',
            label: '朝向',
            children: house?.direction,
        },
        {
            key: '13',
            label: '楼层',
            children: house?.floor,
        },
        {
            key: '14',
            label: '是否有电梯',
            children: house?.hasElevator === 1 ? '有' : '无',
        },
        {
            key: '15',
            label: '最后一次入住开始时间',
            children: house?.lastOrderStartTime,
        },

        {
            key: '16',
            label: '最后一次入住结束时间',
            children: house?.lastOrderEndTime,
        },
        {
            key: '17',
            label: '联系人姓名',
            children: house?.contactName,
        },
        {
            key: '18',
            label: '联系人电话',
            children: house?.contactPhone,
        },

    ];




    const itemsNest: CollapseProps['items'] = [
        {
            key: '1',
            label: '详情',
            children: <Descriptions title="房子详细信息" bordered items={items1} />,
        },
    ];


    useEffect(()=>{
        initData();
    },[])



    const toPay = async () => {
        alert(date)
       // const res = await orderCreate(Number(params.id),date!);
         // await orderCreate(Number(params.id),)
        // /order/pay?orderId=10
        // route('/order/pay')
    }

    const changeDate = (date : any, dateString: string) => {
       const d = dateString[1].split('-');
       setDate(d[1]+'/'+d[2] + '/' + d[0])

    }

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    const mark = async () => {
        const res = await Mark(Number(params.id));
        if(res.code === 1){
            // messageApi.open({
            //     type: 'success',
            //     content: '收藏成功',
            // });
            message.success('收藏成功');
        }else {
            message.warning('您已收藏过');
        }
    }

    const initData = async () =>{
       const res = await getHouseDetail(Number(params.id));
       setHouse(res);
    }
    // @ts-ignore
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
                    <Collapse  defaultActiveKey={['1']}  onChange={onChange} items={itemsNest} />;
                    <Card>
                        描述:
                        <div>
                            {house?.content}
                        </div>
                    </Card>
                </div>
                {/*右边信息*/}
                <div className={style.right}>
                    <div>
                        <Card>
                            <Button onClick={mark} type="primary" style={{minWidth:'200px',minHeight:'50px'}} >
                                收藏
                            </Button>
                        </Card>
                    </div>
                    <div>
                        <Card style={{marginTop:'20px'}}>
                            <div className={style.rightDate}>
                                <div style={{marginLeft:'6px'}}>
                                    ￥{Math.ceil(house?.monthRent! / 30) }  / 天
                                </div>
                            </div>
                            <div className={style.rightDate1}>
                                <RangePicker onChange={changeDate} style={{minWidth:'100%',minHeight:'50px', marginBottom:'5%'}}
                                    defaultValue={[dayjs(new Date().toLocaleString(), dateFormat), dayjs(new Date().toLocaleString(), dateFormat)]}
                                    // disabled={[false, true]}
                                />
                                {/*<RangePicker style={{minWidth:'100%',minHeight:'50px',}}*/}
                                {/*    defaultValue={[dayjs('2019-09-03', dateFormat), dayjs('2019-11-22', dateFormat)]}*/}
                                {/*    // disabled={[false, true]}*/}
                                {/*/>*/}
                            </div>
                            <div>
                                <Button type="primary" onClick={toPay} style={{minWidth:'100%',minHeight:'40px'}}>立即预定</Button>
                            </div>
                        </Card>
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <Card>
                            <div className={style.houseTitle}>
                                联系房东
                            </div>
                            <div style={{marginTop:'20px'}}>
                                联系电话： {house?.contactPhone}
                            </div>
                            <div>
                                联系时间：
                                上午：8:30 - 11:30
                                下午：14:30 - 17:30
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HouseDetail;