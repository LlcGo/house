import myAxios from "../MyAxio.ts";


/**
 * login
 * @param body
 * @param options
 * @constructor
 */

export async function Login(body: API.UserAddRequest, options?: { [key: string]: any }) {
    return myAxios<API.BaseResponselong>('/api/user/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body,
        ...(options || {}),
    });
}

