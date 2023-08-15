<template>
  <MainFrame>
    <template #sideLeft>
      <n-menu :options="menuList" style="box-sizing: border-box" default-expand-all></n-menu>
    </template>
    <template #content>
      <div class="text-area">
        <div class="text-input">
          <n-input
              v-model:value="trend.content"
              type="textarea"
              maxlength="1000"
              placeholder="#发动态"
              show-count
              :autosize="textArea"
              style="border: none;font-size: 16px"
          >
          </n-input>
        </div>
        <div>
        </div>
        <div class="text-fu">
          <div class="t-item" style="display: flex;align-items: center">
            <V3Emoji @clickEmoji="addEmoji" size="mid" :custom-size="customSize" :model-value="trend.content" class="v3Emoji"
                     fix-pos="downright" style="width: 26px" :options-name="optionsName">
              <div style="display: flex;align-items: center;height: 30px"><SmileOutlined style="color: brown;font-size: 20px">
              </SmileOutlined><div style="display: flex;align-items: center;margin-left: 5px"><span style="font-size: 10px;width: 30px">表情</span></div></div>
            </V3Emoji>
          </div>
          <div class="t-item" style="display: flex;align-items: center;margin-left: 50px">
            <n-popover trigger="click" raw :show-arrow="false" placement="bottom">
              <template #trigger>
                <div style="display: flex">
                  <PictureOutlined style="color: cadetblue;font-size: 20px"></PictureOutlined>
                  <div style="width: 40px;margin-left: 5px">图片</div>
                </div>
              </template>
              <div style="width: 200px;height: 100px;background-color: white">
                <n-upload
                    accept="image"
                    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
                    list-type="image-card"
                    :default-file-list="fileList"
                    :custom-request="picUpload"
                >
                  点击上传
                </n-upload>
              </div>
            </n-popover>
          </div>
          <div style="margin-left: 70%" class="item">
            <n-button type="info" @click="publish">发表</n-button>
          </div>
        </div>
      </div>
      <div class="trends">
        <div class="trends-item" v-for="tu of trendsList" :key="tu.id" style="margin-bottom: 10px">
          <n-card footer-style="padding-bottom:0px;" header-style="padding-bottom:5px;">
            <template #header>
              <div style="display: flex;align-items: center;">
                <n-avatar
                    round
                    size="medium"
                    :src="tu.avatar"
                />
                <div style="margin-left: 10px"><span style="color: gray">{{ tu.author }}</span></div>
              </div>
            </template>
            <template #default>
              <div>
                <Clamp max-of-line="2">
                  <template #default>
                    {{ tu.content }}
                  </template>
                </Clamp>
              </div>
              <div style="display: flex;flex-wrap: wrap">
                <n-image v-for="img of tu.pics" height="200" :src="img"
                         style="margin-right: 10px;margin-bottom: 10px"/>
              </div>
            </template>
            <template #footer>
              <div style="display: flex;height: 45px;">
                <div class="trends-btn">
                  <n-icon :component="ShareSocialOutline" color="gray" size="25"/>
                  <div style="margin-left: 5px"><span>分享</span></div>
                </div>
                <div class="trends-btn" @click="showComment(tu.id)">
                  <n-icon :component="ChatboxEllipsesOutline" color="gray" size="25"/>
                  <div style="margin-left: 5px"><span>评论</span></div>
                </div>
                <div class="trends-btn">
                  <n-icon :component="HeartOutline" color="gray" size="25"/>
                  <div style="margin-left: 5px"><span>喜欢</span></div>
                </div>
              </div>
              <div class="t-comment" v-show="commentShowFlag" style="margin-bottom: 20px">
                <TextInputer @pulishComment="publishMessage" :id="tu.id"></TextInputer>
                <div class="text-fu">

                </div>
                <n-card style="border:none;margin-bottom: 2px" class="sty-co" v-for="co of commentResult.rows" :key="co.id" footer-style="padding-bottom:10px;" header-style="padding-bottom:8px;padding-top:8px;" content-style="padding-bottom:6px;">
                  <template #header>
                    <div style="display: flex;align-items: center;">
                      <n-avatar
                          round
                          size="small"
                          :src="co.avatar"
                      />
                      <div style="margin-left: 10px"><span style="color: gray;font-size: 12px">{{ co.author }}</span></div>
                    </div>
                  </template>
                  <template #default>
                    <Clamp #default max-of-line="3" line-height="10px" font-size="10px">
                      {{co.content}}
                    </Clamp>
                  </template>
                  <template #footer>
                    <div style="display: flex;align-items: center">
                      <div style="display: flex;align-items: center">
                        <n-icon :component="HeartOutline" color="gray" size="15"/>
                        <div style="margin-left: 5px"><span style="font-size: 9px">点赞</span></div>
                      </div>
                      <div style="display: flex;align-items: center;margin-left: 12px">
                        <n-icon :component="ChatboxEllipsesOutline" color="gray" size="15"/>
                        <div style="margin-left: 5px"><span style="font-size: 9px">回复</span></div>
                      </div>
                    </div>
                  </template>
                </n-card>
              </div>
            </template>
          </n-card>
        </div>
      </div>
      <div v-if="bottom" style="background-color: #f2f2f2;text-align: center">到达底部</div>
    </template>
  </MainFrame>

</template>

<script lang="ts" setup>
import MainFrame from "@/components/MainFrame.vue"
import {MenuOption, NIcon, UploadCustomRequestOptions, useDialog} from 'naive-ui'
import {
  BookmarkOutline,
  ChatboxEllipsesOutline,
  HeartOutline,
  PersonCircleOutline,
  ShareSocialOutline,
  TimeOutline
} from "@vicons/ionicons5";
import {Component, h, inject, onMounted, reactive, ref} from "vue";
import {FireOutlined, PictureOutlined, SmileOutlined, StarOutlined} from '@ant-design/icons-vue'
import V3Emoji from 'vue3-emoji'
import Clamp from '@/components/Clamp.vue'
import TextInputer from '@/components/TextInputer.vue'
import {publishTrends, PublishTrendsPO, queryTrends, Trends,queryTrendsComment} from '@/api/trends'
import {Page, PageInfo} from '@/api/api'
import {upload} from "@/api/common";
import _ from 'lodash'
import {FileInfo} from "naive-ui/lib/upload/src/interface";
import {Comment} from "@/api/comment";

const reload = inject("reload");
const dialog = useDialog();
let commentResult = new Page()
let commentShowFlag = ref(false)
function showComment(id:string) {
  if(commentShowFlag.value){
    commentShowFlag.value = false
  }else {
    let pageInfo = new PageInfo();
    pageInfo.orderBy = "t.create_time desc"
    pageInfo.condition = {
      "t.row_id":id,
      "type":"T"
    }
    queryTrendsComment(pageInfo).then(res=>{
      commentResult = res.data.data
    })
    console.log(commentResult)
    commentShowFlag.value = true
  }
}
let pageInfo = reactive<PageInfo>({
  pageNum: 1,
  pageSize: 10,
  condition:{},
  orderBy:"create_time desc",
});
let trendsList = reactive<Trends[]>([])
let page:Page<Trends>

onMounted(()=>{
  queryTrends(pageInfo).then(res=>{
    page = res.data.data
    trendsList.push(...res.data.data.rows)
  })
})

const trend = reactive<PublishTrendsPO>({
  content:"",
  pics:[]
})

const fileList = reactive<Array<FileInfo>>([])
function addEmoji(e) {
  trend.content += e
}

const  picUpload = ref((options: UploadCustomRequestOptions)=>{
  let file = options.file.file as File
  upload(file).then(res=>{
    options.file.url = res.data?.data
    fileList.push(options.file)
  })
})
function publish() {
  trend.pics = _.map(fileList, e => e.url as string)
  publishTrends(trend).then(res=>{
    if(res.data.code===-1){
      dialog.error({
        content: res.data.msg
      })
      return
    }
    dialog.success({
      content:res.data.msg
    })
    reload()
  })

}

const bottom = ref(false)
function publishMessage(e,id){
  console.log(id,e.value)
}
const doScroll = (event)=>{
  if(page ===undefined || page.lastPage){
    return
  }
  //滚动离顶部的距离
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//滚动的总高度
  let documentScrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
//浏览器窗口的高度(页面可见高度)
  let getWindowHeight = document.documentElement.clientHeight || document.body.clientHeight;
  if (scrollTop+getWindowHeight===documentScrollHeight && !page.lastPage){
    pageInfo.pageNum+=1
    queryTrends(pageInfo).then(res=>{
      page = res.data.data
      bottom.value = res.data.data.lastPage
      trendsList.push(...res.data.data.rows)
    })
  }
}

onMounted(()=>{
  window.addEventListener('scroll', doScroll,{ passive: false})
})



const optionsName = {
  'Smileys & Emotion': '笑脸&表情',
  'Food & Drink': '食物&饮料',
  'Animals & Nature': '动物&自然',
  'Travel & Places': '旅行&地点',
  'People & Body': '人物&身体',
  Objects: '物品',
  Symbols: '符号',
  Flags: '旗帜',
  Activities: '活动'
};

const customSize = {
  'V3Emoji-width': '500px',
  'V3Emoji-height': '20rem',
  'V3Emoji-fontSize': '1.4rem',
  'V3Emoji-itemSize': '20px'
};

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuList: MenuOption[] = [
  {
    label: "最新",
    key: "最新",
    icon: renderIcon(TimeOutline)
  },
  {
    label: "最热",
    key: "最热",
    icon: renderIcon(FireOutlined)
  },
  {
    label: "关注",
    key: "关注",
    icon: renderIcon(StarOutlined)
  },
  {
    label: "我的圈子",
    key: "我的圈子",
    icon: renderIcon(PersonCircleOutline)
  },
  {
    label: "圈子分类",
    key: "圈子分类",
    icon: renderIcon(BookmarkOutline),
    children: [
      {
        label: '后端',
        key: '后端'
      },
      {
        label: '前端',
        key: '前端'
      },
      {
        label: '客户端',
        key: '客户端'
      },
      {
        label: '其它',
        key: '其它'
      },
    ]
  },

]

const textArea = {
  minRows: 3,
  maxRows: 3,
}

</script>

<style scoped>
.trends-btn {
  flex: 1;
  border-top: #f2f2f2 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;

}

.trends-btn:hover {
  cursor: pointer;
}
.text-fu {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

V3Emoji:last-child {
  margin-left: 200px;
}

.t-item:hover {
  color: cornflowerblue;
  cursor: pointer;
}

.item {
  display: flex;
  margin-left: 20px;
  height: 40px;
  align-items: center;
}



.item:hover {
  color: cornflowerblue;
  cursor: pointer;
}

.text-area {

  margin-bottom: 5px;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  border-color: white;
  margin-bottom: 10px;
}

.sty-co:hover{
  background-color: #f2f2f2;
}

</style>