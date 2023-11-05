
import style from './comp1.module.scss'
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";


const Comp1 = () => {
    const { bookName,useDate } = useSelector((state:RootState) => state.book)
    const dispatch = useDispatch();
    const change = () => {
        dispatch({
           type:"add2",
           val: 10
        })
    }
    return(
      <div >
          测试reducer
          <br/>
          {useDate}
          <Button type={"primary"} onClick={change}>按钮</Button>
      </div>
    )
}
export default Comp1;



