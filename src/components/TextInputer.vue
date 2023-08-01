<template>
  <div class="t-item" style="display: flex;align-items: center">
    <V3Emoji @clickEmoji="item.onClick" :custom-size="customSize" :model-value="item.content"
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
    <n-button type="info" @click="item.publishClick">发表</n-button>
  </div>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import {FireOutlined, StarOutlined, PictureOutlined,SmileOutlined} from '@ant-design/icons-vue'
import V3Emoji from 'vue3-emoji'
import {ref} from 'vue'
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
const TextInputerProp = defineProps({
  clickEmoji:{
    type: Function,
    default:()=>{}
  },
  bindContent:{
    default:""
  },
  publishClick:{
    type:Function,
    default:()=>{}
  }

})

const item = ref({
  onClick: TextInputerProp.clickEmoji,
  content: TextInputerProp.bindContent,
  publishClick: TextInputerProp.publishClick
})
</script>

