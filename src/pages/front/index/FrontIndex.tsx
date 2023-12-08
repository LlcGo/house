import React, {useEffect, useState} from 'react';
import {Button, Carousel} from 'antd';
import style from './FrontIndex.module.css'
import Descriptions from "../../../components/FrontComponents/Descriptions.tsx";
import zw from '../../../assets/img/shouye.jpg'
import {getIndexModel, house} from "../../../service/api/userAPI.ts";
import {useNavigate} from "react-router-dom";
// const contentStyle: React.CSSProperties = {
//     margin: 0,
//     height: '600px',
//     color: '#fff',
//     textAlign: 'center',
//     background: '#364d79',
// };

const FrontIndex = () =>{

    const [topList,setTopList] = useState<house[]>([])
    const [list,setList] = useState<house[]>([])
    const route = useNavigate();

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

    const goWhole = () => {
       route('/front/user/house',{state:'whole'})
    }

    const goShare = () => {
        route('/front/user/house',{state:'share'})
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
                     <Button onClick={goWhole} type={"primary"} className={style.button}> 查看更多</Button>
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
                        <Button onClick={goShare} type={"primary"} className={style.button}>查看更多</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default FrontIndex;