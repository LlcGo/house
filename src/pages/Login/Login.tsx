import styles from './Login.module.css'



const Login = () => {


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
                  <input className={styles.text} type={'text'}/>
                  <h3>EMAIL</h3>
                  <input className={styles.text} type={"text"}/>
                  <h3>PASSWORD</h3>
                  <input className={styles.text} type={"password"}/>
                  <input className={styles.btn} type={"submit"} value={'LOGIN'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
