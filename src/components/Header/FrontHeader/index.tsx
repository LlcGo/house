import style from './headerStyle.module.css'
import fLogo from '../../../assets/img/frontLogo.jpg'
import {Button} from "antd";
import UserDrawer from "../../FrontComponents/login/UserDrawer.tsx";
import UserRDrawer from "../../FrontComponents/register/UserRDrawer.tsx";

const FrontHeader = () => {
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
                <UserRDrawer/>
                <div style={{marginLeft:'20px'}}>
                    <UserDrawer/>
                </div>

            </div>

        </div>
    )
}

export default FrontHeader;
