
import style from './FrontIndex.module.css'

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '600px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
};
const FrontIndex = () =>{
    return(
        <>
            <Carousel autoplay className={style.carousel}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        <div className={style.box}>
            内容
        </div>
        </>
    )
}

import React from 'react';
import { Carousel } from 'antd';







export default FrontIndex;