import axios, {AxiosInstance} from "axios";


function group(prefix:string):AxiosInstance{
     let app = axios.create({
        baseURL: prefix,
        timeout: 3000,
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

type PageInfo = {
    pageSize:number,
    pageNum:number,
    orderBy:string
    total:number
    condition:object
}
type Page<T> = {
    pageSize:number,
    pageNum:number,
    total:number,
    rows:Array<T>,
    lastPage:boolean
}
type Result<T> = {
    msg:string
    code: number
    data:T
}


export  {group,PageInfo,Page,Result}