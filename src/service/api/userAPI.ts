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
}


export async function UserLogin(body : IUser) {
    return myAxios('/users/deleteUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            name:body.name,
            password:body.password,
        }
    });
}

