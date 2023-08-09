<template>
    <div class="p-parent" >
        <TopBar></TopBar>
      <div class="p_container" ref="parent">
        <div class="side-left">
          <n-menu :options="menuOptions" style="box-sizing: border-box"></n-menu>
        </div>
        <div class="content">
          <div class="content-header">
            <n-carousel show-arrow autoplay effect="card"
                        prev-slide-style="transform: translateX(-100%) translateZ(-800px);"
                        next-slide-style="transform: translateX(20%) translateZ(-800px);"
            >
              <div style="display: flex;justify-content: center" v-for="url of imgUrls">
                <img class="carousel-img"  :src="url" style="height: 180px"/>
              </div>

            </n-carousel>
          </div>
          <div class="content-body">
            <div class="body-header">
              <n-button quaternary size="large">推荐</n-button>
              <n-button quaternary size="large">最新</n-button>
              <n-select :options="options" v-model:value="value" style="width: 120px;margin-left: 440px;" show-arrow clearable/>
            </div>
            <div class="body-list" style="box-sizing: border-box;padding: 10px;">
              <n-list hoverable clickable show-divider >
                <n-list-item @click="toDetail(article)" bordered v-for="article of articleList" :key="article.articleId" style="padding: 8px;box-sizing: border-box">
                  <n-thing>
                    <template #description>
                      <n-breadcrumb separator="|">
                        <n-breadcrumb-item> {{article.author}}</n-breadcrumb-item>
                        <n-breadcrumb-item> {{article.timeAgo}}月前</n-breadcrumb-item>
                        <n-breadcrumb-item>{{article.lang}}</n-breadcrumb-item>
                        <n-breadcrumb-item ></n-breadcrumb-item>
                      </n-breadcrumb>
                      <h3 style="line-height: 0">{{article.title}}</h3>
                      <div class="item_body" style="display: flex;">
                        <div style="flex: 5;display: -webkit-box;flex-direction: column;justify-content: center;
                              -webkit-line-clamp: 2;-webkit-box-orient: vertical; overflow: hidden;
                          " v-html="article.content">
                        </div>
                        <div style="flex: 1;margin-right: 10px" v-if="isShow(article.picUrl)">
                          <img :src="article.picUrl" style="width: 125px;height: 80px;background-size: cover"  />
                        </div>
                      </div>
                      <n-breadcrumb separator="">
                        <n-breadcrumb-item > <n-icon><eye/></n-icon>{{article.seeCnt}}</n-breadcrumb-item>
                        <n-breadcrumb-item> <n-icon><HeartCircle/></n-icon>{{article.likeCnt}}</n-breadcrumb-item>
                        <n-breadcrumb-item > <n-icon><ChatboxEllipsesOutline/></n-icon>{{article.comentCnt}}</n-breadcrumb-item>
                        <n-breadcrumb-item ></n-breadcrumb-item>
                      </n-breadcrumb>
                    </template>
                  </n-thing>
                </n-list-item>
              </n-list>

            </div>
          </div>
        </div>
        <div class="side-right" style="position: sticky;top: 20px;display: flex;flex-direction: column;align-items: center;justify-content: space-between">
          <n-image src="https://image.meiye.art/pic_1631421521140uLoptL8qOK2vDblKAEOw1?imageMogr2/thumbnail/560x/interlace/1" width="250"></n-image>
          <n-image src="https://image.meiye.art/pic_163142152104721MZZpUlSXvWBU2UB0mYt?imageMogr2/thumbnail/560x/interlace/1" width="250"></n-image>
          <n-image src="https://image.meiye.art/pic_163142152112746RAhC6D8vztH5065bhqh?imageMogr2/thumbnail/560x/interlace/1" width="250"></n-image>
        </div>
      </div>

    </div>
  <div v-if="bottom" style="background-color: #f2f2f2;text-align: center">到达底部</div>

</template>


<script lang="ts" setup >


import type { MenuOption } from 'naive-ui'
import {h, ref, Component, onBeforeUnmount, onMounted, reactive} from 'vue'
import { useRouter } from 'vue-router'
import { NIcon,NButton,NSelect} from 'naive-ui'
import TopBar from "@/components/TopBar.vue";
import {CodeSlashOutline,MusicalNotesSharp,Tv,FunnelOutline,CafeSharp,Camera,Book,Construct,BarcodeOutline,Eye,HeartCircle,ChatboxEllipsesOutline} from '@vicons/ionicons5'
import {queryRecommendArticles, Article} from '@/api/article'
import {PageInfo,Page} from '@/api/api'
const router = useRouter()
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
function isShow(picUrl:string) {
  return picUrl!=null && picUrl != ''
}
const articlePage = reactive<PageInfo>({
  pageSize:10,
  pageNum:1,
  orderBy:"create_time desc",
  total:0,
  condition:{}
})
let pageData:Page<Article>
const articleList = reactive<Article[]>([])
onMounted(()=>{
  queryRecommendArticles(articlePage).then(res=>{
    pageData = res.data.data
    res.data.data.rows.forEach(e=>articleList.push(e))
  })
})
const parent = ref({})
const bottom = ref(false)

const doScroll = (event)=>{
  if(pageData===undefined){
    return
  }
  //滚动离顶部的距离
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//滚动的总高度
  let documentScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
//浏览器窗口的高度(页面可见高度)
  let getWindowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  if (scrollTop+getWindowHeight===documentScrollHeight && !pageData.lastPage){
    articlePage.pageNum+=1
    queryRecommendArticles(articlePage).then(res=>{
      pageData = res.data.data
      bottom.value = res.data.data.lastPage
      res.data.data.rows.forEach(e=>articleList.push(e))
    })
  }
}

onMounted(()=>{
  window.addEventListener('scroll', doScroll,{ passive: false})
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', doScroll)
})

const menuOptions :MenuOption[] = [
  {
    label: "后端",
    key: "后端",
    icon: renderIcon(CafeSharp)

  },
  {
    label: "前端",
    key: "前端",
    icon: renderIcon(CodeSlashOutline)
  },

  {
    label: "SQL",
    key: "SQL",
    icon: renderIcon(FunnelOutline)

  },
  {
    label: "开发工具",
    key: "开发工具",
    icon: renderIcon(Construct)

  },
  {
    label: "代码人生",
    key: "代码人生",
    icon: renderIcon(BarcodeOutline)

  },
  {
    label: "阅读",
    key: "阅读",
    icon: renderIcon(Book)

  },
  {
    label: "音乐",
    key: "音乐",
    icon: renderIcon(MusicalNotesSharp)

  },
  {
    label: "照片",
    key: "照片",
    icon: renderIcon(Camera)

  },
  {
    label: "视频",
    key: "视频",
    icon: renderIcon(Tv)

  },
]
ref(menuOptions)
const value = ref('全部')
const options  = [
  {
    label: 'java',
    value: "java"
  },
  {
    label: 'golang',
    value: "golang"
  }
]
const toDetail = (article)=>router.push(
    {
      name:"articleDetail",
      params:{
        id:article.articleId
      }
    }
)

const imgUrls = [
  `https://image.meiye.art/pic_1631421521136iuvLk0g1Dtdd5F67jNnx6?imageMogr2/thumbnail/560x/interlace/1`,
  `https://image.meiye.art/pic_1631421521047lg9n63mGkg4NHchbl4m5j?imageMogr2/thumbnail/560x/interlace/1`,
  `https://image.meiye.art/pic_1631421521042p9Ynz_gHiZE3tM0pFhWap?imageMogr2/thumbnail/560x/interlace/1`,
]


</script>

<style scoped>

  .p-parent{
    box-sizing: border-box;
    background-color: #f2f3f5;
    clear: both;
  }
  .side-left{
    background-color: white;
    width: 180px;
    height: 492px;
    position: sticky;
    top: 20px;
  }
  .content{
    width: 720px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .side-right{
    background-color: white;
    width: 260px;
    height: 600px;
  }

  .p_container{
    display: flex;
    justify-content: center;
  }

  .content-header{
    height: 180px;
    width: 720px;
    margin-bottom: 20px;
    background-color: white;
  }
  .content-body{
    width: 720px;
    background-color: white;
    border-bottom: 50px solid #f2f3f5;
  }
  .body-header{
    box-sizing: border-box;
    height: 50px;
    width: 720px;
    padding: 6px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px #f2f3f5 solid;
  }

</style>