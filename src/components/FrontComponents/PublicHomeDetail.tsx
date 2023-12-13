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
    TreeSelect, Space, Calendar, theme, CalendarProps, UploadFile, UploadProps
} from "antd";
import TextArea from "antd/es/input/TextArea";
import {PlusOutlined} from "@ant-design/icons";
import style from './PublicHomeIndex.module.less'
import {Simulate} from "react-dom/test-utils";
import {RcFile} from "antd/es/upload";
import {publishSubmit} from "../../service/api/oderAPI.ts";

const PublicHomeDetail = () => {

    const [house,setHouse] = useState()
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const [form] = Form.useForm();
    const { token } = theme.useToken();
    const initInput = useRef();

    useEffect(()=>{
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


    const onFinish = (values: any) => {
        values.build_year =values['build_year'].format('YYYY-MM-DD')
        console.log(values)
        // console.log(form)
        // console.log(value)
    }

    const handleUpload = () => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file as RcFile);
        });
        setUploading(true);
    };

    const props: UploadProps = {
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
                                <Form.Item name={'rent_type'}  label="合租类型"  >
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
                                <Form.Item  name={"cetificate_no"}  label="房产证号" valuePropName="checked">
                                    <Input />
                                </Form.Item>
                                <Form.Item name={'direction'} label="朝向">
                                    <Input />
                                </Form.Item>
                                <Form.Item name={'home'} label="卧室数量">
                                    <Select >
                                        <Select.Option value="1">1</Select.Option>
                                        <Select.Option value="2">2</Select.Option>
                                        <Select.Option value="3">3</Select.Option>
                                        <Select.Option value="4">4</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name={'bedroom_num'} label="厨房数量">
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
                                <Form.Item name="build_year" label="建成年份" >
                                    <DatePicker showTime format="YYYY-MM-DD" />
                                </Form.Item>
                                <Form.Item name={'max_floor'} label="总楼层">
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>




                        <div>
                            <div  className={style.title}>
                                联系人信息
                            </div>
                            <div style={{marginTop:'6px'}}>
                                <Form.Item name={'contact_name'}  label="联系人姓名">
                                    <Input />
                                </Form.Item>
                            </div>
                        </div>
                    </div>



                </div>

                <div className={style.right}>
                    <div className={style.top}>
                        <Form.Item name={'month_rent'} label="月租金">
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
                        <Form.Item name={'has_air_conditioner'} label="是否有空调">
                            <Select >
                                <Select.Option value="0">没有空调</Select.Option>
                                <Select.Option value="1">有空调</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={'living_room_num'}  label="客厅数量">
                            <Select >
                                <Select.Option value="1">1</Select.Option>
                                <Select.Option value="2">2</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name={'toilet_num'} label="卫生间数量">
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
                        <Form.Item name={'has_elevator'} label="是否有电梯">
                            <Select>
                                <Select.Option value="1">有电梯</Select.Option>
                                <Select.Option value="0">没有电梯</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>


                    <div className={style.top3}>
                        <Form.Item  name={'contact_phone'} label="联系人电话">
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
                            <Upload {...props} listType="picture-card">
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

export default PublicHomeDetail;