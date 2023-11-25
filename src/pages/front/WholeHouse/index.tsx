import style from "./WholeIndex.module.css";
import Descriptions from "../../../components/FrontComponents/Descriptions.tsx";
import React, {useEffect, useState} from "react";
import {getHouse, house, HousePage, HouseSearchVO} from "../../../service/api/userAPI.ts";
import {useLocation} from "react-router-dom";
import {Pagination} from "antd";

const WholeHouse = () => {

    // const [house, setHouse] = useState<house[]>([])
    const [house, setHouse] = useState<HousePage>()
    const location = useLocation();
    const [page,setPage] = useState<number>();

    const state = location.state;

    // useEffect(() => {
    //     initData();
    // }, [])

    useEffect(() => {
        initData(1,6);
    }, state)

    const initData = async (page?:number,pageSize?:number) => {
        // alert(state)
        // return;
        // alert(state)
        // if(!page || !pageSize){
        //     page = 1;
        //     pageSize = 6;
        // }
        // alert(!page)
        // alert(!pageSize)
        // return;
        setPage(page);
        let houseData: HouseSearchVO = {
            rentType: state,
            page: page,
            /*页面大小*/
            size: pageSize,
        }
        const res = await getHouse(houseData);
        console.log(res.records)
        setHouse(res)
        // console.log(house)
    }

    const changePage = (page:number,pageSize:number) => {
       initData(page,pageSize)
    }

    return (
        <div>
            {
                <div className={style.box}>
                    <div className={style.carousel}>
                        <div className={style.container}>
                            {
                                house?.records?.map(item => <Descriptions list={item}/>)
                            }
                        </div>
                    </div>
                </div>
            }
            <Pagination style={{position: "relative" ,left:'45%'}} onChange={(page,pageSize)=>{
                changePage(page,pageSize)
            }} current={page} defaultCurrent={1} defaultPageSize={6} total={house?.total} />
        </div>
    )
}

export default WholeHouse;