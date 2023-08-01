<template>
  <MainFrame>
    <template #sideLeft>
      <n-menu :options="menuList" style="box-sizing: border-box" default-expand-all></n-menu>
    </template>
    <template #content>
      <div class="text-area">
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
            <V3Emoji @clickEmoji="addEmoji" size="mid" :custom-size="customSize" :model-value="trends.content"
                     fix-pos="downright" style="width: 26px" :options-name="optionsName">
              <div style="display: flex;align-items: center;height: 30px"><SmileOutlined style="color: brown;font-size: 20px">
              </SmileOutlined><div style="display: flex;align-items: center;margin-left: 5px"><span style="font-size: 10px;width: 30px">表情</span></div></div>
            </V3Emoji>
          </div>
          <div class="t-item" style="display: flex;align-items: center;margin-left: 50px">
            <PictureOutlined style="color: cadetblue;font-size: 20px"></PictureOutlined>
            <div style="width: 40px;margin-left: 5px">图片</div>
          </div>

          <div style="margin-left: 70%" class="item">
            <n-button type="info" @click="publish">发表</n-button>
          </div>
        </div>
      </div>
      <div class="trends">
        <div class="trends-item" v-for="(tu,index) of trendUsers" :key="index" style="margin-bottom: 10px">
          <n-card footer-style="padding-bottom:0px;" header-style="padding-bottom:5px;">
            <template #header>
              <div style="display: flex;align-items: center;">
                <n-avatar
                    round
                    size="medium"
                    :src="tu.avatar"
                />
                <div style="margin-left: 10px"><span style="color: gray">{{ tu.username }}</span></div>
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
                <n-image v-for="img of tu.contentPic" height="200" :src="img"
                         style="margin-right: 10px;margin-bottom: 10px"/>
              </div>
            </template>
            <template #footer>
              <div style="display: flex;height: 45px;">
                <div class="trends-btn">
                  <n-icon :component="ShareSocialOutline" color="gray" size="25"/>
                  <div style="margin-left: 5px"><span>分享</span></div>
                </div>
                <div class="trends-btn" @click="showComment(tu)">
                  <n-icon :component="ChatboxEllipsesOutline" color="gray" size="25"/>
                  <div style="margin-left: 5px"><span>评论</span></div>
                </div>
                <div class="trends-btn">
                  <n-icon :component="HeartOutline" color="gray" size="25"/>
                  <div style="margin-left: 5px"><span>喜欢</span></div>
                </div>
              </div>
              <div class="t-comment" v-show="tu.showCommentFlag" style="margin-bottom: 20px">
                <div>
                  <n-input
                      v-model:value="myComment.content"
                      type="textarea"
                      maxlength="200"
                      placeholder="#评论"
                      show-count
                      :autosize="commentArea"
                      style="border: none;font-size: 16px"
                  />
                </div>
                <div class="text-fu">
                  <div class="t-item" style="display: flex;align-items: center">
                    <V3Emoji @clickEmoji="addCommentEmoji" :custom-size="customSize" :model-value="trends.content"
                             fix-pos="downright" style="width: 26px;display: flex;align-items: center" :options-name="optionsName">
                      <div style="display: flex;align-items: center;height: 30px"><SmileOutlined style="color: brown;font-size: 20px">
                      </SmileOutlined><div style="display: flex;align-items: center;margin-left: 5px"><span style="font-size: 10px;width: 30px">表情</span></div></div>
                    </V3Emoji>
                    <div style="width: 40px"></div>
                  </div>
                  <div class="t-item" style="display: flex;align-items: center">
                    <PictureOutlined style="color: cadetblue;font-size: 20px"></PictureOutlined>
                    <div style="width: 40px;margin-left: 5px">图片</div>
                  </div>

                  <div style="margin-left: 72%" class="item">
                    <n-button type="info" @click="publishComment">发表</n-button>
                  </div>
                </div>
                <n-card style="border:none;margin-bottom: 2px" class="sty-co" v-for="(co,index) of tu.comments" footer-style="padding-bottom:10px;" header-style="padding-bottom:8px;padding-top:8px;" content-style="padding-bottom:6px;">
                  <template #header>
                    <div style="display: flex;align-items: center;">
                      <n-avatar
                          round
                          size="small"
                          :src="co.avatar"
                      />
                      <div style="margin-left: 10px"><span style="color: gray;font-size: 12px">{{ co.username }}</span></div>
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
    </template>
  </MainFrame>

</template>

<script lang="ts" setup>
import MainFrame from "@/components/MainFrame.vue"
import {MenuOption, NIcon} from 'naive-ui'
import {
  TimeOutline,
  PersonCircleOutline,
  BookmarkOutline,
  ShareSocialOutline,
  ChatboxEllipsesOutline,
  HeartOutline
} from "@vicons/ionicons5";
import {Component, h, ref} from "vue";
import {FireOutlined, StarOutlined, PictureOutlined,SmileOutlined} from '@ant-design/icons-vue'
import V3Emoji from 'vue3-emoji'
import Clamp from '@/components/Clamp.vue'

const myComment= ref({
  content: ""
})
function showComment(tu) {
  tu.showCommentFlag = !tu.showCommentFlag
}

const trendUsers = ref([
  {
    trendId: 1001,
    username: "fearless77",
    avatar: "https://image.meiye.art/pic_C_I6p1zvMvb2-56U1A9uQ?imageMogr2/thumbnail/560x/interlace/1",
    content: "今天天气很好呀,今天天气很好呀手动阀评手动阀；手动阀是地方手动方式地方是地方手动阀手动方式地方 审代奥索欧迪芬就手动阀手动阀方送到佛我 我是地方神判断发是的封建士大夫手动方式地方手动方式电风扇电风扇打法士大夫怕手动发外网额撒旦飞洒的",
    contentPic: [
      "https://image.meiye.art/Fv8zYJQM6S3WJeMzPNQHKSA89r6J?imageMogr2/thumbnail/470x/interlace/1",
      "https://image.meiye.art/FjCI1XicLNGF-JQ9cFL9QjprOw71?imageMogr2/thumbnail/470x/interlace/1",

    ],
    showCommentFlag: false,
    comments: [
      {
        commentId: "100",
        username: "heqin11",
        avatar: "https://image.meiye.art/pic_C_I6p1zvMvb2-56U1A9uQ?imageMogr2/thumbnail/560x/interlace/1",
        content: "哈哈哈,写得好啊",
        replyId: 111,
      }
    ]
  },
  {
    trendId: 1002,
    username: "fearless77",
    avatar: "https://image.meiye.art/pic_C_I6p1zvMvb2-56U1A9uQ?imageMogr2/thumbnail/560x/interlace/1",
    content: "位符扫地方阿斯阀手动阀扫地方奥索扫地方阿松大发啊；位符扫地方阿斯阀手动阀扫地方奥索扫地方阿松大发啊",
    contentPic: [
      "https://image.meiye.art/Fv8zYJQM6S3WJeMzPNQHKSA89r6J?imageMogr2/thumbnail/470x/interlace/1",
    ],
    showCommentFlag: false,
    comments: [
      {
        commentId: "100",
        username: "heqin11",
        avatar: "https://image.meiye.art/pic_C_I6p1zvMvb2-56U1A9uQ?imageMogr2/thumbnail/560x/interlace/1",
        content: "哈哈哈,",
        replyId: 111,
      },{
        commentId: "100",
        username: "heqin11",
        avatar: "https://image.meiye.art/pic_C_I6p1zvMvb2-56U1A9uQ?imageMogr2/thumbnail/560x/interlace/1",
        content: "哈哈哈,写得好啊",
        replyId: 111,
      }
    ]
  }
])

function addEmoji(e) {
  trends.value.content += e
}

function addCommentEmoji(e){
  myComment.value.content+=e
}

function publish() {
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
const trends = ref({
  content: ""
})
const textArea = {
  minRows: 5,
  maxRows: 5,
}
const commentArea={
  minRows: 1,
  maxRows: 1,
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

.text-fu {
  display: flex;
  align-items: center;
}

.item:hover {
  color: cornflowerblue;
  cursor: pointer;
}

.text-area {
  height: 210px;
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