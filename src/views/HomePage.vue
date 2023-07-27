<template>
    <div class="p-parent">
      <TopBar></TopBar>
      <div class="p_container">
        <div class="side-left">
          <n-menu :options="menuOptions" style="box-sizing: border-box"></n-menu>
        </div>
        <div class="content">
          <div class="content-header">
              <div>
              </div>
          </div>
          <div class="content-body">
            <div class="body-header">
              <n-button quaternary size="large">推荐</n-button>
              <n-button quaternary size="large">最新</n-button>
              <n-select :options="options" v-model:value="value" style="width: 120px;margin-left: 440px;" show-arrow clearable/>
            </div>
            <div class="body-list">
              <n-list hoverable clickable show-divider @click="toDetail">
                <n-list-item v-for="article of articles" style="padding: 8px;box-sizing: border-box">
                  <div style="width: 682px;height: 110px">
                    <div class="item_header">
                      <n-breadcrumb separator="|">
                        <n-breadcrumb-item> {{article.author}}</n-breadcrumb-item>
                        <n-breadcrumb-item> {{article.timeAgo}}月前</n-breadcrumb-item>
                        <n-breadcrumb-item>{{article.lang}}</n-breadcrumb-item>
                        <n-breadcrumb-item ></n-breadcrumb-item>
                      </n-breadcrumb>
                    </div>
                    <div class="item_body" style="height: 80px;width: 696px;margin-top: 3px;display: flex; border-left: 5px;border-right: 5px">
                      <div style="flex: 5;display: flex;flex-direction: column;justify-content: center;">
                        <h3 style="line-height:0">{{article.title}}</h3>
                        <n-ellipsis style="max-width: 490px" line-clamp="2">
                          {{ article.content }}
                        </n-ellipsis>
                      </div>
                      <div style="flex: 1;margin-right: 10px" v-if="isShow(article.picUrl)">
                        <img :src="article.picUrl" style="width: 125px;height: 80px;background-size: cover"  />
                      </div>
                    </div>
                  </div>
                  <n-breadcrumb separator="">
                    <n-breadcrumb-item > <n-icon><eye/></n-icon>{{article.seeCnt}}</n-breadcrumb-item>
                    <n-breadcrumb-item> <n-icon><HeartCircle/></n-icon>{{article.likeCnt}}</n-breadcrumb-item>
                    <n-breadcrumb-item > <n-icon><ChatboxEllipsesOutline/></n-icon>{{article.comentCnt}}</n-breadcrumb-item>
                    <n-breadcrumb-item ></n-breadcrumb-item>
                  </n-breadcrumb>

                </n-list-item>
              </n-list>

            </div>
          </div>
        </div>
        <div class="side-right" style="position: sticky;top: 20px;display: flex;flex-direction: column;align-items: center;justify-content: space-around">
          <n-image src="https://image.meiye.art/pic_1628412272226?imageMogr2/thumbnail/470x/interlace/1" width="250"></n-image>
          <n-image src="https://image.meiye.art/pic_1628412639248?imageMogr2/thumbnail/470x/interlace/1" width="250"></n-image>
          <n-image src="https://image.meiye.art/pic_1632576099845vNJ2S1E6weDTx7Ti1EQ1Z?imageMogr2/thumbnail/470x/interlace/1" width="250"></n-image>

        </div>
      </div>

    </div>

</template>


<script lang="ts" setup >

const articles = [
  {
    author: "heqin11",
    title:"为什么越来越多的公司选择了go?",
    timeAgo: "5",
    class: "后端",
    lang: "golang",
    content:"越来越多的互联网大厂开始使用Go语言了，譬如腾讯、美团、滴滴、百度、Google、bilibili...",
    picUrl: `https://img2.baidu.com/it/u=2152476749,2593185558&fm=253&fmt=auto&app=138&f=JPEG?w=397&h=581`,
    comentCnt: 123,
    likeCnt: 290,
    seeCnt:100
  },
  {
    author: "heqin11",
    title:"java目前的就业行情如何？",
    timeAgo: "5",
    class: "后端",
    lang: "java",
    content:"越来越多的互联网大厂开始使用Go语言了，譬如腾讯、美团、滴滴、百度、Google、bilibili...",
    picUrl: `https://img2.baidu.com/it/u=2152476749,2593185558&fm=253&fmt=auto&app=138&f=JPEG?w=397&h=581`,
    comentCnt: 123,
    likeCnt: 290,
    seeCnt:100
  },
  {
    author: "heqin11",
    title:"java目前的就业行情如何？",
    timeAgo: "5",
    class: "后端",
    lang: "java",
    content:"越来越多的互联网大厂开始使用Go语言了，譬如腾讯、美团、滴滴、百度、Google、bilibili...",
    picUrl: `https://img2.baidu.com/it/u=2152476749,2593185558&fm=253&fmt=auto&app=138&f=JPEG?w=397&h=581`,
    comentCnt: 123,
    likeCnt: 290,
    seeCnt:100
  },
  {
    author: "heqin11",
    title:"java目前的就业行情如何？",
    timeAgo: "5",
    class: "后端",
    lang: "java",
    content:"越来越多的互联网大厂开始使用Go语言了，譬如腾讯、美团、滴滴、百度、Google、bilibili...",
    picUrl: `https://img2.baidu.com/it/u=2152476749,2593185558&fm=253&fmt=auto&app=138&f=JPEG?w=397&h=581`,
    comentCnt: 123,
    likeCnt: 290,
    seeCnt:100
  },
  {
    author: "heqin11",
    title:"java目前的就业行情如何？",
    timeAgo: "5",
    class: "后端",
    lang: "java",
    content:"越来越多的互联网大厂开始使用Go语言了，譬如腾讯、美团、滴滴、百度、Google、bilibili...",
    picUrl: `https://img2.baidu.com/it/u=2152476749,2593185558&fm=253&fmt=auto&app=138&f=JPEG?w=397&h=581`,
    comentCnt: 123,
    likeCnt: 290,
    seeCnt:100
  }
]
import type { MenuOption } from 'naive-ui'
import { h, ref, Component } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NIcon,NButton,NSelect} from 'naive-ui'
import TopBar from "@/components/TopBar.vue";
import {CodeSlashOutline,MusicalNotesSharp,Tv,FunnelOutline,CafeSharp,Camera,Book,Construct,BarcodeOutline,Eye,HeartCircle,ChatboxEllipsesOutline} from '@vicons/ionicons5'

const router = useRouter()
const route = useRoute()
function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
function isShow(picUrl:string) {
  return picUrl!=null && picUrl != ''
}
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
const toDetail = ()=>router.push("/detail")
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
    height: 150px;
    width: 720px;
    margin-bottom: 20px;
    background-color: white;
  }
  .content-body{
    width: 720px;
    background-color: white;
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