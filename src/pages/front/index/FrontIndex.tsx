import React, {useEffect, useState} from 'react';
import {Button, Carousel} from 'antd';
import style from './FrontIndex.module.css'
import Descriptions from "../../../components/FrontComponents/Descriptions.tsx";
import zw from '../../../assets/img/shouye.jpg'
import {getIndexModel} from "../../../service/api/userAPI.ts";
import {flushSync} from "react-dom";
// const contentStyle: React.CSSProperties = {
//     margin: 0,
//     height: '600px',
//     color: '#fff',
//     textAlign: 'center',
//     background: '#364d79',
// };
export interface house{
    address : string
    area: number
    bedroomNum: number
    buildYear: string
    cetificateNo: string
    city: string
    contactName: string
    contactPhone:string
    content: string
    createTime: string
    direction: string
    floor: number
    hasAirConditioner: number
    hasElevator?: null
    id: number
    kichenNum :number
    lastOrderEndTime?: null
    lastOrderStartTime?: null
    livingRoomNum: number
    longitudeLatitude: string
    maxFloor : number
    monthRent :number
    rentType: "whole"
    shareHouseList: null
    slideImgList: null
    slideUrl: []
        //"[\"/src/main/resources/static/assets/img/uploads/87ca276c-63aa-450c-9e17-34cf653c4e1d.jpg\",\"/src/main/resources/static/assets/img/uploads/c7f32cbb-27bd-4e87-b7b2-8b57647a2ba7.jpg\",\"/src/main/resources/static/assets/img/uploads/5619bbf4-26e7-4459-82de-8feba362e2cf.jpg\",\"/src/main/resources/static/assets/img/uploads/d117f50d-27a5-419f-9041-c8033ba56c63.jpg\",\"/src/main/resources/static/assets/img/uploads/df82f73b-bd7a-41a1-93ae-c6db2864a65e.jpg\",\"/src/main/resources/static/assets/img/uploads/c838d4bd-04c5-421e-b32e-38e549bfa1b7.jpg\"]"
    status: 0
    thumbnailUrl: string
    // "/src/main/resources/static/assets/img/uploads/87ca276c-63aa-450c-9e17-34cf653c4e1d.jpg"
    title: string
    toiletNum: number
    userId: number
}
const FrontIndex = () =>{

    const [topList,setTopList] = useState<house[]>([])
    const [list,setList] = useState<house[]>([])

    useEffect( ()=>{
        getModel().then()
    },[])

    const getModel = async () => {
        const res = await getIndexModel();
        const data1 =res[0];
        const data2 = res[1];
        // console.log(data1)
        setTopList((prevState)=>{ return {...prevState,...data1}})
        setList((prevState)=>{ return {...prevState,...data2}})

    }
    // alert(topList != null)
    return(
        <div>
            {/*轮播图*/}
            <Carousel autoplay className={style.carousel}>
                <div>
                   <img className={style.carouselImg} src={zw}/>
                </div>
                <div>
                    <img className={style.carouselImg} src={zw}/>
                </div>
                <div>
                    <img className={style.carouselImg} src={zw}/>
                </div>
                <div>
                    <img className={style.carouselImg} src={zw}/>
                </div>
            </Carousel>
        {/*    具体内容*/}
        <div className={style.box}>
            <div className={style.zxzz}>
                <div className={style.xzTitle}>最新整租</div>
                <p className={style.xzP}>推荐一些新的发布的整租房子</p>
            </div>

            {/*最新整租*/}
            {/*<div>{JSON.stringify(topList[0])}</div>*/}
            <div className={style.container}>
                <Descriptions list={topList[0]}/>
                <Descriptions list={topList[1]}/>
                <Descriptions list={topList[2]}/>
                <Descriptions list={topList[3]}/>
                <Descriptions list={topList[4]}/>
                <Descriptions list={topList[5]}/>

               <div className={style.bottomButton}>
                     <Button type={"primary"} className={style.button}>查看更多</Button>
               </div>
            </div>
        </div>

            <div className={style.box}>
                <div className={style.zxzz}>
                    <div className={style.xzTitle}>最新合租</div>
                    <p className={style.xzP}>推荐一些新的发布的合租房子</p>
                </div>

                {/*最新整租*/}
                {/*<div>{JSON.stringify(topList[0])}</div>*/}
                <div className={style.container}>
                    <Descriptions list={list[0]}/>
                    <Descriptions list={list[1]}/>
                    <Descriptions list={list[2]}/>
                    <Descriptions list={list[3]}/>
                    <Descriptions list={list[4]}/>
                    <Descriptions list={list[5]}/>

                    <div className={style.bottomButton}>
                        <Button type={"primary"} className={style.button}>查看更多</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default FrontIndex;