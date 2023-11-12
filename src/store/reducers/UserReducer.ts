import {User} from "../../service/api/userAPI.ts";


let initialState = {
    username: '',
}

const UserReducer = (state : User = initialState, action: any) => {
    let {type, payload} = action;
    switch (type) {
        case "addUser" :
            return {...state ,...payload}
        case "removeUser" :
            initialState.username = '';
            return 'success'
        default:
    }
    return state
}

export default UserReducer;
