import {group, Result} from "@/api/api";
import {AxiosRequestConfig} from "axios";

let api = group("/api/file");
async function upload(file:File):Promise<AxiosRequestConfig<Result<string>>>{
    let formData = new FormData();
    formData.append("file",file)
    console.log(formData);
    return await api.post("/upload",formData,{
       headers:{
           'Content-Type': 'multipart/form-data'
       }
   })
}


export {upload}