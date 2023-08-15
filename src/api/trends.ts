import {group,PageInfo,Page,Result} from "@/api/api";
import {AxiosResponse} from "axios";
import {Comment} from "@/api/comment";

const api = group("/api/trends");

type Trends = {
    id :string,
    author:string
    authorId:number
    avatar:string
    content:string
    pics:Array<string>
    createTime:string
}

type PublishTrendsPO = {
    content:string
    pics:Array<string>
}


async function queryTrends(pageInfo: PageInfo): Promise<AxiosResponse<Result<Page<Trends>>>> {
    return  await api.post("/queryTrends", pageInfo);
}

async function publishTrends(po:PublishTrendsPO): Promise<AxiosResponse<Result<Page<Trends>>>> {
    return  await api.post("/publish", po);
}

async function queryTrendsComment(pageInfo: PageInfo): Promise<AxiosResponse<Result<Page<Comment>>>> {
    return  await api.post("/queryTrendsComment", pageInfo);
}

export {Trends,PublishTrendsPO,queryTrends,publishTrends,queryTrendsComment}