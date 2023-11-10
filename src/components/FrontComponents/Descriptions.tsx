import style from "../../pages/front/index/FrontIndex.module.css";
import fimg from "../../assets/img/fimg.jpg";
import {Button} from "antd";
import React from "react";

const Descriptions = () => {
    return(
        <div className={style.informationBox}>
            <div className={style.information}>
                <img className={style.img} src={fimg}/>
                <div className={style.detilTitleBox}>
                    <p className={style.infoP1}>富力湾 4室2厅4卫 30000元月 豪华装修</p>
                    <p className={style.infoP2}>顺安南路12号</p>
                    <div>
                        <p className={style.infoP3}>￥30000 <p className={style.infoY}>/月</p></p>
                    </div>

                </div>
                <div className={style.infoBottom}>
                    <div className={style.infoBottomBox}>
                        <div className={style.infoBottomP}>
                            <p>4卧室</p>
                            <p>4卫生间</p>
                        </div>
                        <Button type="dashed" className={style.infoBottomButton}>收藏</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Descriptions;