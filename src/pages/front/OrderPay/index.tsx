import {Button, Card} from "antd";
import style from './OrderPayIndex.module.css'
import pay from '../../../assets/img/pay.jpg'
import {Link} from "react-router-dom";
const OrderPay = () => {
    return <div className={style.box}>
        <div className={style.contain}>
            <div className={style.card}>
                <div className={style.title}>
                    C21保真 东坝福润四季旁一居室业主自住欧式装修随时看房
                </div>
               <div className={style.money}>
                   ￥1700
               </div>
                <div className={style.img}>
                    <img className={style.imgBox} src={pay}/>
                </div>
                <div className={style.content}>
                    支付完成后，将跳转到订单列表页面
                </div>
                {/*下面*/}
                <div className={style.bottom}>
                    <Link to={'/front/index'} className={style.left}>
                        稍后支付，回到首页
                    </Link>
                    {/*<div  className={style.left}>*/}
                    {/*   */}
                    {/*</div>*/}
                    <div className={style.right}>
                        <Button>模拟支付成功支付</Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default OrderPay;