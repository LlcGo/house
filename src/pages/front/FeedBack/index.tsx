import FrontIndexStyle from '../index/FrontIndex.module.css'
import {Button, Carousel} from "antd";
import style from "../index/FrontIndex.module.css";
import zw from "../../../assets/img/shouye.jpg";
import Descriptions from "../../../components/FrontComponents/Descriptions.tsx";
import React from "react";
const FeedBack = () => {
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
        <div className={style.box}>
          <div className={style.zxzz}>
            <div className={style.xzTitle}>最新整租</div>
            <p className={style.xzP}>推荐一些新的发布的整租房子</p>
          </div>

          <div className={style.container}>

            <div className={style.bottomButton}>
              <Button type={"primary"} className={style.button}>查看更多</Button>
            </div>
          </div>
        </div>
      </div>
  )
}
export default FeedBack;