
import {Button, Carousel, Form, InputNumber, Input, Card} from "antd";
import zw from "../../../assets/img/feedBackImg.jpg";
import style from './FeedBackIndex.module.css'
import React from "react";
import HouseStyle from '../HouseDetail/HouseDetailIndex.module.css'

const layout = {
  // labelCol: { span: 8 },
  wrapperCol: { span: 20 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

const FeedBack = () => {
  return(
      <div>
        {/*轮播图*/}
        <Carousel autoplay className={style.carousel}>
          <div>
            <img className={style.carouselImg} src={zw}/>
          </div>
        </Carousel>
        <div className={style.box}>
          <div className={style.left}>
            <div style={{marginLeft:'20%'}} >
              <Card style={{marginBottom:'20px'}}>
                <Form
                    {...layout}
                    layout="vertical"
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    validateMessages={validateMessages}
                >
                  <Form.Item name={['user', 'name']} label="姓名：">
                    <Input style={{minHeight:'50px'}} />
                  </Form.Item>
                  <Form.Item name={['user', 'email']} label="邮箱：" >
                    <Input style={{minHeight:'50px'}} />
                  </Form.Item>
                  <Form.Item name={['user', 'age']} label="标题：" >
                    <Input style={{minHeight:'50px'}} />
                  </Form.Item>
                  <Form.Item  name={['user', 'introduction']} label="内容：">
                    <Input.TextArea  rows={6} />
                  </Form.Item>
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button className={style.button} type="primary" htmlType="submit">
                      提交反馈
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </div>
          </div>
          <div className={style.right}>
                <Card>
                  <div className={HouseStyle.rightDate}>
                    作者信息
                  </div>
                  <div style={{marginTop:'50px',fontSize:'20px'}}>姓名:罗晨</div>
                  <div style={{marginTop:'30px',fontSize:'20px'}}>gitte:https://gitee.com/k71625</div>
                  <div style={{marginTop:'30px',fontSize:'20px'}}>github:https://github.com/LlcGo</div>
                </Card>
          </div>

        </div>
      </div>
  )
}
export default FeedBack;