import {User} from "../../service/api/userAPI.ts";


let initialState = {
    username: '',
}

const UserReducer = (state : User = initialState, action: any) => {
    let {type, payload} = action;
    switch (type) {
        case "addUser" :
            // alert(1)
            // console.log('redux--->',payload,type)
            // state = payload
            return {...state ,...payload}
        case "removeUser" :
            initialState.username = '';
            return 'success'
        default:
    }
    // console.log('redux--->',state)
    return state
}

export default UserReducer;
