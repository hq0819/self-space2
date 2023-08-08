import {group, Result} from "@/api/api";
import {AxiosResponse} from "axios";

const api = group("/api/user")

type User={
    username:string
    passoword:string
}
type UserInfo={
    rowId:string,
    username:string,
    gender:string,
    avatar:string,
    positionType:string,
    ceateTime:string
}

async function userLogin(user:User):Promise<AxiosResponse<Result<UserInfo>>> {
    return  await api.post<any,AxiosResponse<Result<UserInfo>>,any>('/login', user);
}


export {User,userLogin}