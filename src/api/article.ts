import {group,PageInfo,Page,Result} from "@/api/api";
import {AxiosResponse} from "axios";
import {RouteParamValue} from "vue-router";
import {Comment} from "@/api/comment";
const api = group("/api/article")

class Article{
    articleId:number
    title:string
    authorId:number
    author:string
    content:string
    desc:string
    timeAgo:string
    coverUrl:string
    createTime:string
    supportCount:string
    scanCount:string
    commentCount:string
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
async function queryDetail(id: string | RouteParamValue[]):Promise<AxiosResponse<Result<Page<Article>>>>{
    return await api.post("/queryDetail/"+id);
}

async function queryArticleComment(pageInfo: PageInfo): Promise<AxiosResponse<Result<Page<Comment>>>> {
    return  await api.post("/queryArticleComment", pageInfo);
}



export {addArticle,addSupport,queryRecommendArticles,Article,queryDetail,queryArticleComment}