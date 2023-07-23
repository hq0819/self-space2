<template>
  <div class="p-parent">
    <div class="topBar">
      <img src="https://image.meiye.art/pic_1629252411847IQAmOH-mmKQ50dtldfmdb?imageMogr2/thumbnail/470x/interlace/1" alt="" style="margin-left: 25%">
      <div style="display: flex;align-items: center"><span style="font-size: 20px;height: 30px">创作者中心</span></div>
    </div>
    <div class="p_container">
      <div class="side-left">
        <div style="width: 224px;height: 48px;text-align: center;margin-top: 15px">
          <n-button type="info" style="width: 200px;height: 45px">写文章</n-button>
        </div>
          <n-menu
              :options="menuOptions"
              :default-expanded-keys="defaultExpandedKeys"
              @update:expanded-keys="handleUpdateExpandedKeys"
              style="margin-bottom: 5px;"
          />
      </div>
      <div class="content">
        <component :is="changeContent()"></component>
      </div>
      </div>

  </div>
</template>

<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { defineComponent, h, Component as C,reactive} from 'vue'
import { NIcon  } from 'naive-ui'
import {Home,BarChart,Bookmarks,BuildSharp,LeafSharp} from '@vicons/ionicons5'
import CenterInfo from "@/views/CenterInfo.vue";

const contents = reactive({
  CenterInfo
});

function changeContent(){
  return contents.CenterInfo
}


function renderIcon (icon: C) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(Home),
  },
  {
    label: '内容管理',
    key: 'article',
    icon: renderIcon(Bookmarks),
    children:[
      {
        label: '文章管理',
        key: 'article'
      }
    ]
  },
  {
    label: '数据中心',
    key: 'content',
    icon: renderIcon(BarChart),
    children:[
      {
        label: '内容数据',
        key: 'contentDate'
      },
      {
        label: '粉丝数据',
        key: 'fansDate'
      }
    ]
  },
  {
    label: '创作成长',
    key: 'create',
    icon: renderIcon(LeafSharp),
    children:[
      {
        label: '创作灵感',
        key: 'createIdea'
      }
    ]
  },
  {
    label: '创建工具',
    key: 'createTools',
    icon: renderIcon(BuildSharp),
    children:[
      {
        label: '文章导入发布',
        key: 'exportAndImport'
      }
    ]
  },
]
</script>

<style scoped>
.p-parent{
  box-sizing: border-box;
  background-color: #f2f3f5;
  clear: both;
  min-height: 1100px;
}

.p_container{
  display: flex;
  justify-content: center;
}

.side-left{
  background-color: white;
  width: 224px;
  height: 930px;
  position: sticky;
  top: 20px;
}



.topBar {
  height: 60px;
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  display: flex;
}
</style>