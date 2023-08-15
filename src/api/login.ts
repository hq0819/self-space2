import {group, Result} from "@/api/api";
import {AxiosResponse} from "axios";

const api = group("/api/user")

class User{
    username:string
    passoword:string
}
class UserInfo{
    rowId:string
    username:string
    gender:string
    avatar:string
    positionType:string
    createTime:string
}

async function userLogin(user:User):Promise<AxiosResponse<Result<UserInfo>>> {
    return  await api.post<any,AxiosResponse<Result<UserInfo>>,any>('/login', user);
}


export {User,userLogin}