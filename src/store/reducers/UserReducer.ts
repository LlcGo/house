let initialState = {
    userName: 'xw',
    age: 16
}

const UserReducer = (state = initialState, action: any) => {
    let {type, payload} = action;
    switch (type) {
        case "add" :
            return {...state ,...payload}
        case "dec" :
            return {...state ,...payload}
        default:
    }
    return state
}

export default UserReducer;
