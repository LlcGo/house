import React from 'react';
import {Button, Carousel} from 'antd';
import style from './FrontIndex.module.css'
import Descriptions from "../../../components/FrontComponents/Descriptions.tsx";
import zw from '../../../assets/img/shouye.jpg'
// const contentStyle: React.CSSProperties = {
//     margin: 0,
//     height: '600px',
//     color: '#fff',
//     textAlign: 'center',
//     background: '#364d79',
// };
const FrontIndex = () =>{
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
            <div className={style.container}>
                <Descriptions/>
                <Descriptions/>
                <Descriptions/>
                <Descriptions/>
                <Descriptions/>
                <Descriptions/>

               <div className={style.bottomButton}>
                     <Button type={"primary"} className={style.button}>查看更多</Button>
               </div>
            </div>
        </div>
        </div>
    )
}



export default FrontIndex;