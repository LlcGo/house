import Userstyle from "../userProfile/UseProfileIndex.module.css";
import React, {useEffect, useState} from "react";
import {getAdminHouse, house, HousePage, HouseSearchVO} from "../../../../service/api/userAPI.ts";
import img from '/src/assets/img/fimg.jpg'
import style from './AdminMangerIndex.module.css'
import {DeleteOutlined, EditOutlined, FallOutlined, ZoomInOutlined} from "@ant-design/icons";
import {Card, Pagination} from "antd";
import MangerHouseDes from "../../../../components/FrontComponents/MangerHouseDes.tsx";
import Descriptions from "../../../../components/FrontComponents/Descriptions.tsx";
const AdminManger = () => {

    const [housePage,setHousePage] = useState<HousePage>()
    const [page,setPage] = useState<number>();

    useEffect(()=>{
        initData(1,10);
    },[])

    const initData = async (page?:number,pageSize?:number) => {
        setPage(page);
        let houseData: HouseSearchVO = {
            page: page,
            /*页面大小*/
            size: pageSize,
        }
         const res = await getAdminHouse(houseData);
         console.log('init-->',res)
        setHousePage(res);
    }

    const changePage = (page:number,pageSize:number) => {
        initData(page,pageSize)
    }

  return(
      <div className={Userstyle.box}>
          <div className={Userstyle.info}>
              <div className={Userstyle.col}></div>
              房间管理
          </div>
          <div className={style.warp}>
              {
                      housePage?.records?.map(item => <MangerHouseDes list={item}/>)
              }
          </div>
          <Pagination style={{display:'flex',justifyContent:'center'}} onChange={(page,pageSize)=>{
              changePage(page,pageSize)
          }} current={page} defaultCurrent={1} defaultPageSize={10} total={housePage?.total} />
      </div>
  )
}

export default AdminManger;