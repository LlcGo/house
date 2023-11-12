import myAxios from "../MyAxio.ts";
import {house} from "../../pages/front/index/FrontIndex.tsx";


/**
 * login
 * @param body
 * @param options
 * @constructor
 */

// export async function Login(body: API.UserAddRequest, options?: { [key: string]: any }) {
//     return myAxios<API.BaseResponselong>('/api/user/add', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         data: body,
//         ...(options || {}),
//     });
// }

//API.BaseResponselong 返回值


export interface User{
    username?:string,
    userPass?:string
    createTime?: string
    email?: string
    hobby?: string
    id?: number
    idCard?: string
    job?: string
    phone?: string
    role?: string
    sex?: string
    status?: 1
    userAvatar?: string
    userDesc?: string
    userDisplayName?: string
}

export interface Order{
    records?: [],
    total?: number,
    size?: number,
    current?: number,
    orders?: [],
    searchCount?: boolean,
    pages?: number
}



export interface CustomerUser{

}


export async function UserLogin(body : User):Promise<User> {
    return myAxios('/login/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data:body
    });
}

// export async function registerUser(body : IUser) {
//     return myAxios('/users/regex', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         params:{
//             username: body.name,
//             password: body.password,
//             confirm: body.confirm
//         }
//     });
// }

// export async function updatePassword(body : IUser) {
//     return myAxios('/users/changPwd', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         params:{
//             name: body.name,
//             newPwd: body.password,
//             oldPwd: body.oldPassword,
//             confirmPwd: body.confirm
//         }
//     });
// }

export async function getUserList() {
    return myAxios('/users/selectAll', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function deleteUser(body : number) {
    return myAxios('/users/deleteUser', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            id:body
        }
    });
}


export async function getIndexModel ():Promise<Array<house[]>>{
    return myAxios('/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}


export async function getOrders ():Promise<Order>{
    return myAxios('/admin/order', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}




