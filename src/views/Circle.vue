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
              style="border: none;"
          />
        </div>
        <div class="text-fu">
          <n-popover trigger="click" placement="bottom-start" >
            <template #trigger>
              <div style="width: 60px" class="item"><n-icon size="22" :component="SmileOutlined"></n-icon><div class="wenzi">表情</div></div>
            </template>
            <template #default>
              <div style="width: 400px;height: 400px"></div>
            </template>
          </n-popover>
          <div style="width: 60px" class="item"><n-icon size="22" :component="PictureOutlined"></n-icon><div class="wenzi">图片</div></div>
          <div style="margin-left: 65%" class="item"><n-button type="info">发表</n-button></div>
        </div>

      </div>
      <div class="trends"></div>
    </template>
  </MainFrame>

</template>

<script lang="ts" setup>
import MainFrame from "@/components/MainFrame.vue"
import {MenuOption, NIcon} from 'naive-ui'
import {TimeOutline,PersonCircleOutline,BookmarkOutline} from "@vicons/ionicons5";
import {Component, h,ref} from "vue";
import {FireOutlined,StarOutlined,SmileOutlined,PictureOutlined} from '@ant-design/icons-vue'
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
.wenzi{
  margin-left: 5px;
  width: 30px;
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
  margin-top: 10px;
}
.item:hover{
  color: cornflowerblue;
  cursor: pointer;
}

.text-area{
  height: 210px;
  margin-bottom: 15px;
  background-color: white;
  box-sizing: border-box;
  padding: 20px;
  border-color: white;
}
.trends{
  height: 800px;
  background-color: white;
}

</style>