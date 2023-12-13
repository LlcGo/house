import myAxios from "../MyAxio.ts";
import {FeedBack, Order, User} from "./userAPI.ts";


export interface result {
    code?: number
    msg?: string
    result?: null
}

export async function Mark(houseId: number): Promise<result> {
    return myAxios('/mark/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            houseId: houseId
        }
    });
}


export async function orderCreate(houseId: number, endDateStr: string): Promise<result> {
    return myAxios('/order/create', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            houseId: houseId,
            endDate: endDateStr
        }
    });
}

export async function deleteHouse(id: string): Promise<result> {
    return myAxios('/admin/delete', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            id: id,
        }
    });
}


export async function cancelOrder(id: string): Promise<result> {
    return myAxios('/admin/order/cancel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            orderId: id,
        }
    });
}

export async function uploadFile(key: number,file:FormData): Promise<result> {
    return myAxios(`/file/upload?key=${key}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        data:file
    });
}

export async function publishSubmit(key: number): Promise<result> {
    return myAxios('/admin/publish/submit', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            key:key
        }
    });
}

export async function replySubmit(Feedback:FeedBack): Promise<result> {
    return myAxios('/admin/feedback/reply/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data:Feedback
    });
}

export async function deleteFeedback(id:number): Promise<result> {
    return myAxios('/admin/feedback/delete', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            id:id
        }
    });
}

export async function deleteMark(id:number): Promise<result> {
    return myAxios('/admin/mark/cancel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            id:id
        }
    });
}

export async function initOrder(orderId:number): Promise<Order> {
    return myAxios('/order/pay', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            orderId:orderId
        }
    });
}

export async function paySubmit(orderId:number): Promise<result> {
    return myAxios('/order/pay/submit', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            orderId:orderId
        }
    });
}

export async function endOrder(orderId:number): Promise<result> {
    return myAxios('/order/pay/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            orderId:orderId
        }
    });
}




