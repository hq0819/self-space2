<template>
    <div style="display: flex">
      <div class="title" style="width: 50%">
        <n-input placeholder="请输入文章标题" size="large" v-model:value="article.title" />
      </div>
      <div style="display: flex;justify-content: flex-end;align-items: center;width: 50%;box-sizing: border-box;padding-right: 40px">
        <div style="color: dimgray;box-sizing: border-box;padding-right: 50px">ctrl+s 保存草稿箱</div>
        <n-button strong secondary type="info" style="width: 90px;">草稿箱</n-button>
        <n-button type="info" style="width: 70px" @click="publishArticle">发布</n-button>
      </div>
    </div>
    <div>
      <mavon-editor style="min-height: 650px" v-model:model-value="article.content" @save="save"  />
    </div>
</template>

<script lang="ts" setup>
import {ref,reactive} from 'vue'
const value = ref("")

const article:object = reactive({
  title:"",
  content:'',
})

function publishArticle(){
  console.log(article.content)
}
const save = ref((a,b)=>console.log("12321"));


</script>
