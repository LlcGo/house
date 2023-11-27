import Userstyle from "../userProfile/UseProfileIndex.module.css";
import React, {useEffect, useState} from "react";
import {getAdminHouse, house, HousePage} from "../../../../service/api/userAPI.ts";
import img from '/src/assets/img/fimg.jpg'
import style from './AdminMangerIndex.module.css'
import {DeleteOutlined, EditOutlined, FallOutlined, ZoomInOutlined} from "@ant-design/icons";
import {Card, Pagination} from "antd";
import MangerHouseDes from "../../../../components/FrontComponents/MangerHouseDes.tsx";
const AdminManger = () => {

    const [housePage,setHousePage] = useState<HousePage>()

    useEffect(()=>{
        initData();
    },[])

    const initData = async () => {
         const res = await getAdminHouse();
         console.log('init-->',res)
        setHousePage(res);
    }
  return(
      <div className={Userstyle.box}>
          <div className={Userstyle.info}>
              <div className={Userstyle.col}></div>
              房间管理
          </div>
          <div className={style.warp}>

              {

              }

                  <MangerHouseDes/>
                  <MangerHouseDes/>
                  <MangerHouseDes/>
                  <MangerHouseDes/>
                  <MangerHouseDes/>
                  <MangerHouseDes/>
                  <MangerHouseDes/>
                  <MangerHouseDes/>
          </div>
          <Pagination style={{display:'flex',justifyContent:'center'}} defaultCurrent={1} total={50} />
      </div>
  )
}

export default AdminManger;