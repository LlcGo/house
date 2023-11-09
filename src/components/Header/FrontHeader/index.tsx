import style from './headerStyle.module.css'
import UserAvatar from "./UserAvatar.tsx";

const FrontHeader = () => {
    return (
        <div className={style.box}>
            <div className={style.logo}>
                坤坤租房
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
                <p>登录</p>
                <p>注册</p>
            </div>

        </div>
    )
}

export default FrontHeader;
