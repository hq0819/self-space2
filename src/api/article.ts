import {group,PageInfo,Page,Result} from "@/api/api";
import {AxiosResponse} from "axios";
const api = group("/api/article")

type Article = {
    articleId:number,
    title:string,
    authorId:number,
    author:string,
    picUrl:string,
    content:string,
    timeAgo:string,
    createTime:string
}



async function addArticle(article: object): Promise<AxiosResponse<Result<Object>>> {
    return  await api.post("/addArticle", article);
}
async function addSupport(id:string):Promise<Result<object>>{
    let res = await api.get("/addSupport",{
        params:{
            id
        }
    });
    return res.data
}
async function queryRecommendArticles(obj:PageInfo):Promise<AxiosResponse<Result<Page<Article>>>>{
   return await api.post("/queryRecommendArticles",obj);

}

export {addArticle,addSupport,queryRecommendArticles,Article}