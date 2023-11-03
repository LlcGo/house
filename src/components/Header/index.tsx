import style from './headerStyle.module.css'
import UserAvatar from "./UserAvatar.tsx";

const MyHeader = () => {
    return (
        <div className={style.header}>
            <div className={style.imgLogo}></div>
            <div className={style.userAvatar}>
                <UserAvatar />
            </div>
        </div>

    )
}

export default MyHeader;
