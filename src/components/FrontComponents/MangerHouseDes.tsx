import style from "../../pages/front/userCenter/AdminManger/AdminMangerIndex.module.css";
import img from "../../assets/img/fimg.jpg";
import {DeleteOutlined, EditOutlined, FallOutlined, ZoomInOutlined} from "@ant-design/icons";
import React from "react";

const MangerHouseDes = () => {
    return(
        <div className={style.container}>
            <div className={style.bord}>
                <div>
                    <img className={style.img} src={img}/>
                    <div className={style.title1}>凤城五路地铁口 海璟时代 西安中学押一付 领包入住</div>
                    <div className={style.title12}>文景路中段25号</div>
                </div>

                <div className={style.imgBottom}>
                    <div className={style.iconBox}>
                        <ZoomInOutlined />
                    </div>
                    <div className={style.iconBox}>
                        <EditOutlined />
                    </div>
                    <div className={style.iconBox}>
                        <FallOutlined />
                    </div>
                    <div className={style.iconBox}>
                        <DeleteOutlined />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MangerHouseDes;