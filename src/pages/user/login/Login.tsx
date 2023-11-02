import styles from '../css/Login.module.css'
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import {UserLogin} from "../../../service/api/userAPI.ts";

const Login = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const accountRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()

    const toRegister = () => {
       navigate('/register')
    }

    const login = async () => {
        console.log('1--->' + nameRef?.current?.value)
        console.log('2--->' + accountRef?.current?.value)
        console.log('3--->' + passwordRef?.current?.value)
        const  res =  await UserLogin({
            name:nameRef?.current?.value,
            password :passwordRef?.current?.value}
        );
        console.log('接收的数据' + JSON.stringify(res.data))
        if(res.data === '登录成功'){
            navigate('/user/home')
            return;
        }
    }


    return (
        <div className={styles.warp}>
            <div className={styles.form}>
                <div className={styles.left}>
                    <video   src='http://localhost:5173/src/assets/viedo/loginVideo.mp4' muted={true} loop={true}  autoPlay={true}></video>
                </div>
                <div className={styles.right}>
                    <div className={styles.rightCon} >
                      <h1>登录</h1>
                      <h3>Name</h3>
                      <input ref={nameRef} className={styles.text} type={'text'}/>
                      <h3>ACCOUNT</h3>
                      <input ref={accountRef} className={styles.text} type={"text"}/>
                      <h3>PASSWORD</h3>
                      <input ref={passwordRef} className={styles.text} type={"password"}/>
                        <input  onClick={toRegister} className={styles.register} type={"submit"} value={'register?'}/>
                        {/*<div className={styles.register}>register</div>*/}
                      <input onClick={login} className={styles.btn} type={"submit"} value={'LOGIN'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
