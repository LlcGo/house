import style from "../../pages/front/index/FrontIndex.module.css";

import {Button, message} from "antd";
import React from "react";
import {useNavigate} from "react-router-dom";
import {house} from "../../service/api/userAPI.ts";
import {Mark} from "../../service/api/oderAPI.ts";


const Descriptions = (props:any) => {
    const route = useNavigate();
    // debugger
    let{list} = props

    const toDetail =() => {
        route('/front/house/'+list.id)
    }

    const mark = async () => {
      const res = await Mark(list.id);
      if(res.code === 1){
          // messageApi.open({
          //     type: 'success',
          //     content: '收藏成功',
          // });
          message.success('收藏成功');
      }else {
          message.warning('您已收藏过');
      }
    }
    const imgUrl = list?.thumbnailUrl?.replace("/src/main/resources/static","")
 // debugger
    return(

        <div className={style.informationBox}>
            {/*<div>{list  ? list.title : '空'}</div>*/}
            {list ?
            <div className={style.information}>
                <img className={style.img} src={"http://localhost:8088" + imgUrl}/>
                <div className={style.detilTitleBox}>
                    <p onClick={toDetail}  className={style.infoP1}>{ list?.title }</p>
                    <p className={style.infoP2}>{list?.address}</p>
                    <div>
                        <p className={style.infoP3}>￥{list?.monthRent}<p className={style.infoY}>/月</p></p>
                    </div>

                </div>
                <div className={style.infoBottom}>
                    <div className={style.infoBottomBox}>
                        <div className={style.infoBottomP}>
                            <p>{list?.bedroomNum}卧室</p>
                            <p style={{marginLeft:'6px'}}>{list?.livingRoomNum}卫生间</p>
                        </div>
                        <Button type="dashed" onClick={mark} className={style.infoBottomButton}>收藏</Button>
                    </div>

                </div>
            </div> : <div>暂无数据</div>}
        </div>
    )
}

export default Descriptions;