import style from "../../pages/front/userCenter/AdminManger/AdminMangerIndex.module.css";
import img from "../../assets/img/fimg.jpg";
import {DeleteOutlined, EditOutlined, FallOutlined, ZoomInOutlined} from "@ant-design/icons";
import React from "react";

const MangerHouseDes = (props:any) => {
    let {list} = props;
    const imgUrl = list?.thumbnailUrl?.replace("/src/main/resources/static","")
    return(
        <div className={style.container}>
            <div className={style.bord}>
                <div>
                    <img className={style.img} src={"http://localhost:8088" + imgUrl}/>
                    <div className={style.title1}>{list.title}</div>
                    <div className={style.title12}>{list.address}</div>
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