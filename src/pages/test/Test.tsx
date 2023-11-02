import {Button} from "antd";
import useSelection from "antd/es/table/hooks/useSelection";
import {useDispatch, useSelector} from "react-redux";
import store from "../../store";


const tochange = () => {

}


const Test = () => {
    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    // console.log()
    return <div>
        hello
        <div>
            {user.age}
        </div>

        <Button onClick={()=>{dispatch({
               type: 'add',
               payload: { userName: '66666666666666666666', age: 17}
        })}}>change</Button>
    </div>


}

export default Test;
