<template>
  <div class="parent">
    <n-dialog-provider>
      <TopBar></TopBar>
    </n-dialog-provider>
    <div class="detail-body" style="display: flex;justify-content: center" >
      <div class="detail-content" style="width: 820px;height: 900px;background-color: white;padding: 20px;box-sizing: border-box">
        <div >
          <n-thing>
              <template #header>
                <h2 style="line-height: 0.5em">{{ artItem.title }}</h2>
              </template>
            <template #description>
              <div style="display: flex;height:50px;align-items: center">
                <ul class="info">
                  <li>
                    <n-icon size="25">
                      <PersonCircleOutline></PersonCircleOutline>
                    </n-icon>
                    <span>{{artItem.author}}</span>
                  </li>
                  <li>
                    <n-icon size="25">
                      <TimeOutline></TimeOutline>
                    </n-icon>
                    <span style="vertical-align: center">{{artItem.createTime}}</span>
                  </li>
                </ul>


              </div>
            </template>
          </n-thing>
        </div>
        <div v-html="artItem.content">
        </div>

      </div>
      <div class="detail-right-side" style="width: 300px;height: 600px;background-color: white;margin-left: 20px;padding: 20px;box-sizing: border-box;position: sticky;top: 30px" >
        <div>
          <div style="display: flex;align-items: center;">
            <n-avatar round style="width: 55px;height: 55px;margin-right: 20px" src="https://img0.baidu.com/it/u=1257177296,511470069&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"/>
            <div>
              <span>{{ artItem.author }}</span>
              <div style="color: gray">{{artItem.positionType}}</div>
            </div>
          </div>
          <div style="margin-top: 6px">
            <n-button type="info" style="width: 90px;margin-right: 10px">关注</n-button>
            <n-button strong secondary type="info" style="width: 90px">私信</n-button>
          </div>
          <div style="margin-top: 20px;border-bottom: 1px solid #f2f3f5">
            <div style="display: flex;align-items: center">
              <n-icon-wrapper border-radius="15" size="30" color="#E1EFFF">
                <n-icon size="18" color="skyblue" :component="ThumbsUpSharp"/>
              </n-icon-wrapper>
              <p style="line-height:0;margin-left: 5px">获得点赞数 {{articleDetail.likeCnt}}</p>
            </div>
            <div style="margin-top: 3px;display: flex;align-items: center;margin-bottom: 8px">
              <n-icon-wrapper border-radius="15" size="30" color="#E1EFFF">
                <n-icon size="18" color="skyblue" :component="Eye"/>
              </n-icon-wrapper>
              <p style="line-height: 0;margin-left: 5px">浏览次数 {{articleDetail.seeCnt}}</p>
            </div>

          </div>
        </div>

        <div>
          <p>相关文章</p>
          <div class="re-list" v-for="re of recomandArticles" style="border-bottom: 1px solid #f2f3f5;margin-bottom: 10px">
            <div class="li-item">
              {{re.title}}
            </div>
            <div>
              <span>{{re.likeCnt}}点赞&nbsp; &nbsp;| </span>
              <span>&nbsp; &nbsp;{{re.commentCnt}}评论</span>
            </div>
          </div>
        </div>

      </div>



    </div>
  </div>
</template>

<script lang="ts" setup>
import TopBar from "@/components/TopBar.vue";
import {PersonCircleOutline,TimeOutline,Eye,ThumbsUpSharp}  from '@vicons/ionicons5'
import {NButton} from 'naive-ui'
import {useRoute} from 'vue-router'
import {onBeforeMount, onMounted, reactive, ref} from "vue";
import {Article,queryDetail} from "@/api/article";

const route = useRoute();
const recomandArticles = [

  {
    id:"123123",
    title:"住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪",
    likeCnt:342,
    seeCnt: 200,
    commentCnt:12
  },
  {
    id:"123123",
    title:"住在我心里孤独的 孤独的海怪 痛苦之王 开始厌倦 深海的光 停滞的海浪",
    likeCnt:342,
    seeCnt: 200,
    commentCnt:12
  }
]
const userInfo = {
  userId:"123",
  username:"贺钦11",
  positionType:"后端开发工程师"
}

const articleDetail = {
  likeCnt:342,
  seeCnt: 200
}
let artItem = ref({})

onMounted(()=>{
   let id = route.params.id;
  queryDetail(id).then(res=>{
    artItem.value = res.data.data
  })
})

</script>

<style scoped>
.li-item:hover{
  color: cornflowerblue;
  cursor: pointer;
}
.parent{
  background-color: #f2f3f5;
}
.info{
  display: flex;
  list-style: none;
  color: gray;
  padding: 0;
}
.info li{
  display: flex;
  align-items: center;
  margin-right: 30px;
}
</style>