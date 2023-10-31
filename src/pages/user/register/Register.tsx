import styles from '../css/Login.module.css'
import { useNavigate} from "react-router-dom";
import {useRef} from "react";

const Registers = () => {
    const navigate = useNavigate()
    const nameRef = useRef<HTMLInputElement>(null);
    const accountRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confPasswordRef = useRef<HTMLInputElement>(null);
    const toLogin = () => {
        navigate('/login')
    }

    const register = () => {
        console.log('1--->' +nameRef?.current?.value)
        console.log('2--->' +accountRef?.current?.value)
        console.log('3--->' +passwordRef?.current?.value)
        console.log('4--->' +confPasswordRef?.current?.value)
    }

    return (
        <div className={styles.warp}>
            <div className={styles.form}>
                <div className={styles.left}>
                    <video   src='http://localhost:5173/src/assets/viedo/loginVideo.mp4' muted={true} loop={true}  autoPlay={true}></video>
                </div>
                    <div className={styles.right}>
                        <div className={styles.rightCon} >
                            <h1>注册</h1>
                            <h3>Name</h3>
                            <input ref={nameRef} className={styles.text} type={'text'}/>
                            <h3>ACCOUNT</h3>
                            <input ref={accountRef} className={styles.text}  type={"text"}/>
                            <h3>PASSWORD</h3>
                            <input ref={passwordRef} className={styles.text} type={"password"}/>
                            <h3>ConfPASSWORD</h3>
                            <input ref={confPasswordRef} className={styles.text}  type={"password"}/>
                            <input onClick={toLogin} className={styles.login} type={"submit"} value={'login?'}/>
                            <input onClick={register} className={styles.btn}  type={"submit"} value={'REGISTER'}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Registers;
