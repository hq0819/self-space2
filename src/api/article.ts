import axios from "axios";
const api = axios.create({
    baseURL:"/api/article",
    headers:{
        'Content-Type': 'application/json;charset=UTF-8'
    }
});


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
type Result<T> = {
    msg:string
    code: number
    data:T
}


async function addArticle(article: object): Promise<Result<object>> {
    let response = await api.post("/addArticle", article);
    return response.data
}
async function addSupport(id:string):Promise<Result<object>>{
    let res = await api.get("/addSupport",{
        params:{
            id
        }
    });
    return res.data
}
async function queryRecommendArticles(obj:PageInfo):Promise<Result<Page<Article>>>{
    let res = await api.post("/queryRecommendArticles",obj);
    return res.data
}

export {addArticle,addSupport,queryRecommendArticles,PageInfo,Article,Page}