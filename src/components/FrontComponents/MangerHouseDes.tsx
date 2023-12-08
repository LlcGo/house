import style from "../../pages/front/userCenter/AdminManger/AdminMangerIndex.module.css";
import img from "../../assets/img/fimg.jpg";
import {DeleteOutlined, DownOutlined, EditOutlined, FallOutlined, UpOutlined, ZoomInOutlined} from "@ant-design/icons";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {toDownHouse, toUpHome} from "../../service/api/userAPI.ts";
import {message} from "antd";

const MangerHouseDes = (props: any) => {
    let {list} = props;
    const route = useNavigate();
    const imgUrl = list?.thumbnailUrl?.replace("/src/main/resources/static", "")




    const toDetail = () => {
        console.log('查看详情')
        route(`/front/house/${list.id}`)
    }

    const toEdit = () => {
        console.log(list)
        route('/front/userCenter/7', {state: list})
    }

    const downHome = async () => {
        const res = await toDownHouse(list.id);
        message.success(res.msg)
    }

    const upHome = async () => {
        const res = await toUpHome(list.id);
        message.success(res.msg)
    }

    const deleteHome = () => {
        console.log('删除房间')
    }

    return (
        <div className={style.container}>
            <div className={style.bord}>
                <div>
                    <img className={style.img} src={"http://localhost:8088" + imgUrl}/>
                    <div className={style.title1}>{list.title}</div>
                    <div className={style.title12}>{list.address}</div>
                </div>

                <div className={style.imgBottom}>
                    <div onClick={toDetail} className={style.iconBox}>
                        <ZoomInOutlined/>
                    </div>
                    <div onClick={toEdit} className={style.iconBox}>
                        <EditOutlined/>
                    </div> {list.status}
                    {
                        list.status === -1 ? <div   onClick={upHome} className={style.iconBox}>
                            <DownOutlined/>
                        </div> : <div  onClick={downHome} className={style.iconBox}>
                            <UpOutlined/>
                        </div>
                    }

                    <div onClick={deleteHome} className={style.iconBox}>
                        <DeleteOutlined/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MangerHouseDes;