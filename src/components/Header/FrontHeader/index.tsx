import style from './headerStyle.module.css'
import fLogo from '../../../assets/img/frontLogo.jpg'
import {Button} from "antd";
import UserDrawer from "../../FrontComponents/login/UserDrawer.tsx";
import UserRDrawer from "../../FrontComponents/register/UserRDrawer.tsx";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import * as constants from "constants";
import {User} from "../../../service/api/userAPI.ts";
import FrontUserAvatar from "./UserAvatar.tsx";
import {Link, useNavigate} from "react-router-dom";

const FrontHeader = () => {
    // const {username} = useSelector((state: any) => state.user);
    // const user : User = JSON.parse(window.localStorage.getItem('user')!)
    const [user,setUser] = useState<User>();
    const route = useNavigate();
    const currentUser = useSelector((state:RootState) => state.user);

    useEffect(()=>{
        setUser(currentUser);
    },[])

    const toIndex = () => {
        route('/')
    }


    const toWhole = () => {
      route('/front/user/house',{ state: "whole"})
    }

    const toShare = () => {
        route('/front/user/house',{ state: "share"})
    }

    const toFeedBack = () => {
        route('/front/feedBack')
    }
    return (
        <div className={style.box}>
            <div className={style.left}>
                <img className={style.log} src={fLogo}/>
                <p className={style.imgTitle}>坤坤租房</p>
            </div>

            <div onClick={toIndex} className={style.title1}>
                 首页
            </div>
            {/**/}
            <div className={style.titleBox}>
                <div onClick={toWhole} className={style.title}>
                    整租
                </div>
                <div onClick={toShare} className={style.title}>
                    合租
                </div>
                <div onClick={toFeedBack} className={style.title}>
                    用户反馈
                </div>
            </div>

                    <div className={style.login}>
                        {
                            user ?    <FrontUserAvatar setUser={setUser} />
                                : <>
                                    <UserRDrawer/>
                                    <div style={{marginLeft:'20px'}}>
                                        <UserDrawer setUser={setUser}/>
                                    </div>
                                </>
                        }
                    </div>
        </div>
    )
}

export default FrontHeader;
