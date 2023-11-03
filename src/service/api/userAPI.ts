import myAxios from "../MyAxio.ts";


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


interface IUser{
  name?:string,
  password?:string
  confirm?:string
  oldPassword?:string
}


export async function UserLogin(body : IUser) {
    return myAxios('/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data:body
    });
}

export async function registerUser(body : IUser) {
    return myAxios('/users/regex', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            username: body.name,
            password: body.password,
            confirm: body.confirm
        }
    });
}

export async function updatePassword(body : IUser) {
    return myAxios('/users/changPwd', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            name: body.name,
            newPwd: body.password,
            oldPwd: body.oldPassword,
            confirmPwd: body.confirm
        }
    });
}

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




