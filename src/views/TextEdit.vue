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
import {ref,reactive,inject,h} from 'vue'
import api from "@/api/api";
import { useDialog } from 'naive-ui'
const reload = inject("reload");
const dialog = useDialog();
const article = reactive({
  title:"",
  content:'',
})

function publishArticle(){
  api.post("/article/addArticle",article).then(res=>{
    if (res.data.code === -1){
      dialog.error({
        content: ()=>h("div",res.data.msg)
      })
      return
    }
    dialog.success({
      content: ()=>h("div","发布成功")
    })
    reload()
  })
}
const save = ref((a,b)=>console.log("12321"));


</script>
