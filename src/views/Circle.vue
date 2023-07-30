<template>
  <MainFrame>
    <template #sideLeft>
      <n-menu :options="menuList" style="box-sizing: border-box" default-expand-all></n-menu>
    </template>
    <template #content>
      <div class="text-area" >
        <div class="text-input">
          <n-input
              v-model:value="trends.content"
              type="textarea"
              maxlength="1000"
              placeholder="#发动态"
              show-count
              :autosize="textArea"
              style="border: none;font-size: 16px"
          />
        </div>
        <div>
        </div>
        <div class="text-fu">
          <div class="t-item" style="display: flex;align-items: center">
            <V3Emoji @clickEmoji="addEmoji" size="mid" :custom-size="customSize" :model-value="trends.content" fix-pos="downright" style="width: 26px" :options-name="optionsName"></V3Emoji>
            <div style="width: 40px">表情</div>
          </div>
            <div class="t-item" style="display: flex;align-items: center">
              <n-icon :component="PictureOutlined" color="skyblue" size="25"></n-icon>
              <div style="width: 40px;margin-left: 5px">图片</div>
            </div>

          <div style="margin-left: 65%" class="item"><n-button type="info" @click="publish">发表</n-button></div>
        </div>
      </div>
      <div class="trends">
          <div class="trends-item" v-for="tu of trendUsers" style="margin-bottom: 10px">
            <n-card  footer-style="padding-bottom:0px;" header-style="padding-bottom:5px;">
              <template #header>
                  <div style="display: flex;align-items: center;">
                    <n-avatar
                        round
                        size="medium"
                        :src="tu.avatar"
                    />
                    <div style="margin-left: 10px"><span style="color: gray">{{tu.username}}</span></div>
                  </div>
              </template>
              <template #default>
                <div>
                  <n-ellipsis expand-trigger="click" line-clamp="3" :tooltip="false">
                    {{tu.content}}
                  </n-ellipsis>
                </div>
                <div style="display: flex;flex-wrap: wrap">
                  <n-image v-for="img of tu.contentPic" height="200" :src="img" style="margin-right: 10px;margin-bottom: 10px"/>
                </div>
              </template>
              <template #footer>
                <div style="display: flex;height: 45px;">
                  <div class="trends-btn">
                    <n-icon :component="ShareSocialOutline" color="gray" size="25"/>
                    <div style="margin-left: 5px"><span>分享</span></div>
                  </div>
                  <div class="trends-btn">
                    <n-icon :component="ChatboxEllipsesOutline" color="gray" size="25"/>
                    <div style="margin-left: 5px"><span>评论</span></div>
                  </div>
                  <div class="trends-btn">
                    <n-icon :component="HeartOutline" color="gray" size="25"/>
                    <div style="margin-left: 5px"><span>喜欢</span></div>
                  </div>
                </div>
              </template>
            </n-card>
          </div>
      </div>
    </template>
  </MainFrame>

</template>

<script lang="ts" setup>
import MainFrame from "@/components/MainFrame.vue"
import {MenuOption, NIcon} from 'naive-ui'
import {TimeOutline,PersonCircleOutline,BookmarkOutline,ShareSocialOutline,ChatboxEllipsesOutline,HeartOutline} from "@vicons/ionicons5";
import {Component, h,ref} from "vue";
import {FireOutlined,StarOutlined,PictureOutlined} from '@ant-design/icons-vue'
import V3Emoji from 'vue3-emoji'

const showModal = false
const trendUsers = [
  {
    username:"fearless77",
    avatar:"https://image.meiye.art/pic_C_I6p1zvMvb2-56U1A9uQ?imageMogr2/thumbnail/560x/interlace/1",
    content:"今天天气很好呀",
    contentPic:[
      "https://image.meiye.art/Fv8zYJQM6S3WJeMzPNQHKSA89r6J?imageMogr2/thumbnail/470x/interlace/1",
      "https://image.meiye.art/FjCI1XicLNGF-JQ9cFL9QjprOw71?imageMogr2/thumbnail/470x/interlace/1",

    ]
  },
  {
    username:"fearless77",
    avatar:"https://image.meiye.art/pic_C_I6p1zvMvb2-56U1A9uQ?imageMogr2/thumbnail/560x/interlace/1",
    content:"今天天气很好呀",
    contentPic:[
      "https://image.meiye.art/Fv8zYJQM6S3WJeMzPNQHKSA89r6J?imageMogr2/thumbnail/470x/interlace/1",
    ]
  }
]

function addEmoji(e){
  trends.value.content+=e
  console.log(e)
}
function publish(){
  console.log(trends)
}

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

const customSize= {
  'V3Emoji-width': '500px',
  'V3Emoji-height': '20rem',
  'V3Emoji-fontSize': '1.4rem',
  'V3Emoji-itemSize': '20px'
};

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuList :MenuOption[] = [
  {
    label: "最新",
    key: "最新",
    icon: renderIcon(TimeOutline)
  },
  {
    label: "最热",
    key: "最热",
    icon:renderIcon(FireOutlined)
  },
  {
    label: "关注",
    key: "关注",
    icon:renderIcon(StarOutlined)
  },
  {
    label: "我的圈子",
    key: "我的圈子",
    icon:renderIcon(PersonCircleOutline)
  },
  {
    label: "圈子分类",
    key: "圈子分类",
    icon:renderIcon(BookmarkOutline),
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
const trends = ref({
  content:""
})
const textArea = {
  minRows:5,
  maxRows:5,
}
</script>

<style scoped>
.trends-btn{
  flex: 1;
  border-top: #f2f2f2 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;

}
.trends-btn:hover{
  cursor: pointer;
}

V3Emoji:last-child{
  margin-left: 200px;
}
.t-item:hover{
  color: cornflowerblue;
  cursor: pointer;
}

.item{
  display: flex;
  margin-left: 20px;
  height: 40px;
  align-items: center;
}
.text-fu{
  display: flex;
  align-items: center;
}
.item:hover{
  color: cornflowerblue;
  cursor: pointer;
}

.text-area{
  height: 210px;
  margin-bottom: 5px;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  border-color: white;
  margin-bottom: 10px;
}


</style>