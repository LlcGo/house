
import style from './comp1.module.scss'
import {Button} from "antd";
import {FastForwardOutlined} from "@ant-design/icons";

const Comp1 = () => {
    return(
      <div className={style.box}>
          组件1
          <Button type={"primary"}>按钮</Button>
          <FastForwardOutlined />
      </div>
    )
}
export default Comp1;



