import React, {useEffect, useRef, useState} from "react";
import {
    Button,
    Checkbox,
    Form,
    Radio,
    Input,
    Cascader,
    DatePicker,
    InputNumber,
    Switch,
    Upload,
    Slider,
    ColorPicker,
    Select,
    TreeSelect, Space, Calendar, theme, CalendarProps, UploadFile, UploadProps, message
} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";
import style from './PublicHomeIndex.module.less'
import {Simulate} from "react-dom/test-utils";
import {house} from "../../../../service/api/userAPI.ts";
import submit = Simulate.submit;
import {useLocation, useParams} from "react-router-dom";
import dayjs from "dayjs";
import {RcFile} from "antd/es/upload";
import {publishSubmit, uploadFile} from "../../../../service/api/oderAPI.ts";
const PublicHome = () => {


    const [house,setHouse] = useState({
        rent_type: 'whole',
        city : '南京',
        home : 1,
        bedroom_num: 1,
        has_air_conditioner: 1,
        living_room_num : 1,
        toilet_num : 1,
        has_elevator: 1,
        // build_year: new Date().toLocaleDateString()
    })

    const props = useLocation();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);
    const [key, setKey] = useState<number>();
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const [form] = Form.useForm();
    const { token } = theme.useToken();
    const initInput = useRef();

    const currentHouse = props?.state

    useEffect(()=>{
        if(currentHouse){
            currentHouse.buildYear = dayjs(currentHouse.buildYear)
            form.setFieldsValue(currentHouse)
            console.log('6666---->',currentHouse)
            return;
        }
        form.setFieldsValue(house);

    },[])

    // useEffect(()=>{
    //     form.setFieldsValue(initInput?.current);
    // },[initInput])


    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };


    const onFinish = async (values: any) => {
        values.build_year =values['buildYear'].format('YYYY-MM-DD')
        console.log(values)
        const res = await publishSubmit(key!);
        setKey(undefined);
        if(res.code === 0){
            message.error(res.msg)
            return;
        }
        message.success(res.msg)
        // console.log(form)
        // console.log(value)
    }

    const handleUpload = async () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('file', file as RcFile);
        });
        setUploading(true);
        let timestamp = Date.parse(new Date().toLocaleString());
        setKey(timestamp);
        console.log(timestamp)
        // return;
        const res = await uploadFile(timestamp,formData);
        message.success(res.msg)
    };

    const uploadProps: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([...fileList, file]);
            return false;
        },
        fileList,
    };

     return (
        <div className={style.box} >
            <div>
                {currentHouse?.rent_type}
            </div>
            <Form
                form={form}
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="vertical"
                onFinish={onFinish}
                style={{ maxWidth: '100%' }}
            >
                <div className={style.left}>
                    <div style={{marginLeft:'25%'}}>
                        <div>
                            <div  className={style.title}>
                                基本信息
                            </div>
                            <div style={{marginTop:'6px'}}>
                                <Form.Item name={'rentType'}  label="合租类型"  >
                                    <Select >
                                        <Select.Option value="whole">整租</Select.Option>
                                        <Select.Option value="share">合租</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item  name={'city'} label="所属城市">
                                    <Select>
                                        <Select.Option value="南京">南京</Select.Option>
                                        <Select.Option value="苏州">苏州</Select.Option>
                                        <Select.Option value="北京">北京</Select.Option>
                                        <Select.Option value="上海">上海</Select.Option>
                                        <Select.Option value="浙江">浙江</Select.Option>
                                        <Select.Option value="江西">江西</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item  name={'address'} label="房子详细地址信息">
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>

                        <div>
                            <div  className={style.title}>
                                结构信息
                            </div>
                            <div style={{marginTop:'6px'}}>
                                <Form.Item  name={"cetificateNo"}  label="房产证号" >
                                    <Input />
                                </Form.Item>
                                <Form.Item name={'direction'} label="朝向">
                                    <Input />
                                </Form.Item>
                                <Form.Item name={'bedroomNum'} label="卧室数量">
                                    <Select >
                                        <Select.Option value="1">1</Select.Option>
                                        <Select.Option value="2">2</Select.Option>
                                        <Select.Option value="3">3</Select.Option>
                                        <Select.Option value="4">4</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name={'kichenNum'} label="厨房数量">
                                    <Select >
                                        <Select.Option value="1">1</Select.Option>
                                        <Select.Option value="2">2</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>

                        <div>
                            <div  className={style.title}>
                                建筑信息
                            </div>
                            <div style={{marginTop:'6px'}}>
                                <Form.Item name="buildYear" label="建成年份" >
                                    <DatePicker showTime format="YYYY-MM-DD" />
                                </Form.Item>
                                <Form.Item name={'maxFloor'} label="总楼层">
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>




                        <div>
                            <div  className={style.title}>
                                联系人信息
                            </div>
                            <div style={{marginTop:'6px'}}>
                                <Form.Item name={'contactName'}  label="联系人姓名">
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                    </div>



                </div>

                <div className={style.right}>
                    <div className={style.top}>
                        <Form.Item name={'monthRent'} label="月租金">
                            <Input />
                        </Form.Item>
                        <Form.Item name={'title'} label="房子标题信息">
                            <Input />
                        </Form.Item>
                    </div>

                    <div className={style.top2}>
                        <Form.Item name={'area'} label="面积">
                            <Input />
                        </Form.Item>
                        <Form.Item name={'hasAirConditioner'} label="是否有空调">
                            <Select >
                                <Select.Option value={0}>没有空调</Select.Option>
                                <Select.Option value={1}>有空调</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={'livingRoomNum'}  label="客厅数量">
                            <Select >
                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={'toiletNum'} label="卫生间数量">
                            <Select>
                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>
                                <Select.Option value="3">3</Select.Option>
                                <Select.Option value="4">4</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>


                    <div className={style.top3}>
                        <Form.Item name={'floor'} label="所在楼层">
                            <Input />
                        </Form.Item>
                        <Form.Item name={'hasElevator'} label="是否有电梯">
                            <Select>
                                <Select.Option value={1}>有电梯</Select.Option>
                                <Select.Option value={0}>没有电梯</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>


                    <div className={style.top3}>
                        <Form.Item  name={'contactPhone'} label="联系人电话">
                            <Input />
                        </Form.Item>
                    </div>

                </div>

                <div>
                    <div style={{marginTop:'6px', marginLeft:'15%'}}>
                        <div  className={style.title2}>
                            详细描述
                        </div>
                        <Form.Item name={'content'} label="房屋详细描述">
                            <TextArea rows={4} />
                        </Form.Item>
                    </div>
                </div>



                <div>
                    <div style={{marginTop:'6px', marginLeft:'15%'}}>
                        <div  className={style.title2}>
                            上传图片
                        </div>
                        <Form.Item name={'thumbnail_url'} className={style.upload}  valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload {...uploadProps} listType="picture-card">
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>房间图片</div>
                                </div>
                            </Upload>
                        </Form.Item>
                        <div>
                            <Button type={"primary"} onClick={handleUpload}>上传</Button>
                        </div>
                    </div>
                </div>


                <div style={{position:'relative'}}>
                    <div style={{position:'absolute',left:'40%'}}>
                        <Form.Item>
                            <Space>
                                <Button type="primary" htmlType="submit">
                                    提交
                                </Button>
                            </Space>
                        </Form.Item>
                    </div>
                </div>

            </Form>
        </div>
    );

}

export default PublicHome;