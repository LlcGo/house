import myAxios from "../MyAxio.ts";
import {User} from "./userAPI.ts";


export interface result {
    code?: number
    msg?: string
    result? : null
}
export async function Mark(houseId: number): Promise<result> {
    return myAxios('/mark/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
       params:{
           houseId:houseId
       }
    });
}



export async function orderCreate(houseId:number,endDateStr:string): Promise<result> {
    return myAxios('/order/create', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            houseId:houseId,
            endDate:endDateStr
        }
    });
}