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


export interface house {
    address: string
    area: number
    bedroomNum: number
    buildYear: string
    cetificateNo: string
    city: string
    contactName: string
    contactPhone: string
    content: string
    createTime: string
    direction: string
    floor: number
    hasAirConditioner: number
    hasElevator?: null
    id: number
    kichenNum: number
    lastOrderEndTime?: null
    lastOrderStartTime?: null
    livingRoomNum: number
    longitudeLatitude: string
    maxFloor: number
    monthRent: number
    rentType: "whole"
    shareHouseList: null
    slideImgList: null
    slideUrl: []
    //"[\"/src/main/resources/static/assets/img/uploads/87ca276c-63aa-450c-9e17-34cf653c4e1d.jpg\",\"/src/main/resources/static/assets/img/uploads/c7f32cbb-27bd-4e87-b7b2-8b57647a2ba7.jpg\",\"/src/main/resources/static/assets/img/uploads/5619bbf4-26e7-4459-82de-8feba362e2cf.jpg\",\"/src/main/resources/static/assets/img/uploads/d117f50d-27a5-419f-9041-c8033ba56c63.jpg\",\"/src/main/resources/static/assets/img/uploads/df82f73b-bd7a-41a1-93ae-c6db2864a65e.jpg\",\"/src/main/resources/static/assets/img/uploads/c838d4bd-04c5-421e-b32e-38e549bfa1b7.jpg\"]"
    status: 0
    thumbnailUrl: string
    // "/src/main/resources/static/assets/img/uploads/87ca276c-63aa-450c-9e17-34cf653c4e1d.jpg"
    title: string
    toiletNum: number
    userId: number
}

export interface User {
    username?: string,
    userPass?: string
    createTime?: string
    email?: string
    hobby?: string
    id?: number
    idCard?: string
    job?: string
    phone?: string
    role?: string
    sex?: string
    status?: number
    userAvatar?: string
    userDesc?: string
    userDisplayName?: string
}

export interface OrderPage {
    records?: Array<Order>,
    total?: number,
    size?: number,
    current?: number,
    orders?: Array<Orders>,
    searchCount?: boolean,
    pages?: number
}

export interface Orders {
    column?: string,
    asc?: boolean
}


export interface Order {
    id?: number,
    createTime?: string,
    customerUserId?: number,
    ownerUserId?: number,
    houseId?: number,
    status?: number,
    monthRent?: number,
    dayNum?: number,
    totalAmount?: number,
    startDate?: number,
    endDate?: number,
    house?: house,
    customerUser?: User,
    ownerUser?: User
}


export interface FeedBack {
    /*反馈标题*/
    title?: string;
    /*反馈内容*/
    content?: string;
    /*用户id*/
    userId?: number;
    /*处理状态*/
    status?: number;
    /*回复内容*/
    reply?: string;
    /*联系人姓名*/
    contactName?: string;
    /*联系人邮箱*/
    contactEmail?: string;
    createTime?: string;
    id?: number
}

export interface Mark {
    //ID，主键，自动生成
    id?: number;
    //创建时间
    Date?: string;
    //收藏者id
    userId?: number;

    //房子id
    houseId?: number;

    //房子信息
    house?: house;
}

export interface MarkPage {
    records?: Array<Mark>,
    total?: number,
    size?: number,
    current?: number,
    orders?: Array<Orders>,
    searchCount?: boolean,
    pages?: number
}


export interface FeedBackPage {
    records?: Array<FeedBack>,
    total?: number,
    size?: number,
    current?: number,
    orders?: Array<Orders>,
    searchCount?: boolean,
    pages?: number,
}

export interface HouseSearchVO {
    /*页码*/
    page?: number,

    /*页面大小*/
    size?: number,

    /*房子出租状态 0未租出*/
    status?: 0,

    /*租房类型*/
    rentType?: string;
}

export interface HousePage{
    records?: Array<house>,
    total?: number,
    size?: number,
    current?: number,
    orders?: Array<Orders>,
    searchCount?: boolean,
    pages?: number,
}


export async function UserLogin(body: User): Promise<User> {
    return myAxios('/login/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: body
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

export async function deleteUser(body: number) {
    return myAxios('/users/deleteUser', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id: body
        }
    });
}


export async function getIndexModel(): Promise<Array<house[]>> {
    return myAxios('/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}


export async function getOrders(): Promise<OrderPage> {
    return myAxios('/admin/order', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function getFeedbacks(): Promise<FeedBackPage> {
    return myAxios('/admin/feedback', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}


export async function getMyHouse(): Promise<OrderPage> {
    return myAxios('/admin/home', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}


export async function getMyMark(): Promise<MarkPage> {
    return myAxios('/admin/mark', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function getHouse(houseVo:HouseSearchVO): Promise<HousePage> {
    return myAxios('/house',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{...houseVo}
    });
}


