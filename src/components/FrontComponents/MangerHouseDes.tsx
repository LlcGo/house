import style from "../../pages/front/userCenter/AdminManger/AdminMangerIndex.module.css";
import img from "../../assets/img/fimg.jpg";
import {
    CheckOutlined,
    DeleteOutlined,
    DownOutlined,
    EditOutlined,
    FallOutlined,
    UpOutlined,
    ZoomInOutlined
} from "@ant-design/icons";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {checkPassHouse, toDownHouse, toUpHome} from "../../service/api/userAPI.ts";
import {message, Tag} from "antd";
import {deleteHouse} from "../../service/api/oderAPI.ts";

const MangerHouseDes = (props: any) => {
    let {list,initData} = props;
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
        initData(1,10)
    }

    const upHome = async () => {
        const res = await toUpHome(list.id);
        message.success(res.msg)
        initData(1,10)
    }

    const deleteHome = async () => {
        const res = await deleteHouse(list.id);
        message.success(res.msg);
        initData(1,10)
    }


    const passCheck = async () => {
        const res = await checkPassHouse(list.id);
        message.success(res.msg);
        initData(1,10);
    }

    const getStatusTitle = (status:number) => {
        switch (status){
            //状态：0未租出 1已租出 -1已下架 -2待审核 -3审核不通过
            case -3:
                return <Tag className={style.tag} color={'red'}>审核不通过</Tag>
            case -2:
                return <Tag className={style.tag} color={"blue-inverse"}>待审核</Tag>
            case -1:
                return <Tag className={style.tag} color={'red'}>已下架</Tag>
            case 0:
                return <Tag className={style.tag} color={'black'}>未租出</Tag>
            case 1:
                return <Tag className={style.tag} color={'green'}>已租出</Tag>
            default:

        }
    }

    const getButton = (status:number) => {
        if(status === 1){
            return null
        }else if(list.status === -1){
            return <div   onClick={upHome} className={style.iconBox}>
                <DownOutlined/>
            </div>
        }else {
            return <div  onClick={downHome} className={style.iconBox}>
                <UpOutlined/></div>
        }
    }


    return (
        <div className={style.container}>
            <div className={style.bord}>
                <div>
                    <img className={style.img} src={"http://localhost:8088" + imgUrl}/>
                    {getStatusTitle(list.status)}
                    <div className={style.title1}>{list.title}</div>
                    <div className={style.title12}>{list.address}</div>
                </div>

                <div className={style.imgBottom}>
                    <div onClick={toDetail} className={style.iconBox}>
                        <ZoomInOutlined/>
                    </div>
                    {
                        list.status !== 1  && <div onClick={toEdit} className={style.iconBox}>
                        <EditOutlined/>
                        </div>}
                      {
                         getButton(list.status)
                      }
                    {
                       list.status == -2 &&  <div onClick={passCheck} className={style.iconBox}>
                            <CheckOutlined />
                        </div>
                    }

                    { list.status !== 1 &&<div onClick={deleteHome} className={style.iconBox}>
                     <DeleteOutlined/>
                     </div>
                    }

                </div>

            </div>
        </div>
    )
}

export default MangerHouseDes;