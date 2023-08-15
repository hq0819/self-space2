import axios, {AxiosInstance} from "axios";


function group(prefix:string):AxiosInstance{
     let app = axios.create({
        baseURL: prefix,
        timeout: 6000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    });
     app.interceptors.request.use(config => {
         return config
     })
    app.interceptors.response.use(resp => {
        if (resp.data.msg==='请先登录'){
            localStorage.removeItem("userInfo")
        }
        return resp
    })
    return app
}

class PageInfo{
    pageSize:number = 1
    pageNum:number = 10
    orderBy:string
    condition:object
}
class Page<T>{
    pageSize:number
    pageNum:number
    total:number
    rows:Array<T>
    lastPage:boolean
}
class Result<T> {
    msg:string
    code: number
    data:T
}


export  {group,PageInfo,Page,Result}