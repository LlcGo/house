import style from './headerStyle.module.css'
import fLogo from '../../../assets/img/frontLogo.jpg'
import {Button} from "antd";
import UserDrawer from "../../FrontComponents/login/UserDrawer.tsx";
import UserRDrawer from "../../FrontComponents/register/UserRDrawer.tsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as constants from "constants";
import {User} from "../../../service/api/userAPI.ts";
import FrontUserAvatar from "./UserAvatar.tsx";

const FrontHeader = () => {
    // const {username} = useSelector((state: any) => state.user);
    const user : User = JSON.parse(window.localStorage.getItem('user')!)
    const [User,setUser] = useState<User>();

    return (
        <div className={style.box}>
            <div className={style.left}>
                <img className={style.log} src={fLogo}/>
                <p className={style.imgTitle}>坤坤租房</p>
            </div>

            <div className={style.title1}>
                 首页
            </div>

            <div className={style.titleBox}>
                <div className={style.title}>
                    整租
                </div>
                <div className={style.title}>
                    合租
                </div>
                <div className={style.title}>
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
