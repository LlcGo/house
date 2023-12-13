import {Button, Card, message} from "antd";
import style from './OrderPayIndex.module.css'
import pay from '../../../assets/img/pay.jpg'
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {initOrder, paySubmit} from "../../../service/api/oderAPI.ts";
import {Order} from "../../../service/api/userAPI.ts";
const OrderPay = () => {
   const location = useLocation();
   const {orderId,dataNumber} = location.state
   const [order,setOrder] = useState<Order>()
   const route = useNavigate();
   // const [money,setMoney] = useState<number>()
    useEffect(()=>{
        initData(location.state)
    },[])

    const initData = async (id:number) => {
        const res = await initOrder(orderId)
        console.log(dataNumber)

        console.log('initData',res)
        if(res){
            setOrder(res);
        }
    }

    const payOrder = async () => {
        const res = await paySubmit(orderId)
        if(res.code === 1){
            message.success(res.msg)
            route('/front/userCenter/2')
        }
        if(res.code === 0)message.warning(res.msg)
    }

    return <div className={style.box}>
        <div className={style.contain}>
            <div className={style.card}>
                <div className={style.title}>
                    {order?.house?.title}
                </div>
               <div className={style.money}>
                   {/*1700*/}
                   ￥{Math.ceil(order?.house?.monthRent! / 30) * dataNumber}
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
                        <Button onClick={payOrder} >模拟支付成功支付</Button>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default OrderPay;