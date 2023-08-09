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
      <mavon-editor ref="edite" style="min-height: 650px" @save="save" @change="change" @imgAdd="addImg" />
    </div>
</template>

<script lang="ts" setup>
import {ref,reactive,inject,h} from 'vue'
import {addArticle} from '@/api/article'
import { useDialog } from 'naive-ui'
import {upload} from "@/api/common";

const reload = inject("reload");
const dialog = useDialog();
const article = reactive({
  title:"",
  content:'',
})
const edite = ref({})

function addImg(name:string,file:File){
  upload(file).then(res=>{
    edite.value.$img2Url(name,res.data.data)
  })
}

function publishArticle(){
  addArticle(article).then(res=>{
    if(res.data.code<0){
      dialog.error({
        content: ()=>h("div",res.data.msg)
      })
    }else {
      dialog.success({
        content: ()=>h("div",res.data.msg)
      })
    }
  })
  reload()
}

function change(value,render){
  article.content= render
}


const save = ref((a,b)=>console.log("12321"));


</script>
