<template>

  <n-spin :show="spinFlag">
    <div class="form-login">
      <div class="leftSide"></div>
      <div class="form-item">
        <n-form ref="formRef" :model="user" :rules="rules">
          <n-form-item label="用户名"  path="username">
            <n-input v-model:value="user.username" placeholder=""/>
          </n-form-item>
          <n-form-item label="密码" path="password">
            <n-input type="password" v-model:value="user.password" placeholder="" />
          </n-form-item>
        </n-form>
        <n-button class="item" type="info"  @click="login">登录</n-button>
      </div>
    </div>
  </n-spin>


</template>
<script lang="ts" setup>
import {inject, ref,h} from 'vue'
import {FormInst, useDialog} from "naive-ui";
const dialog = useDialog();
const reload = inject("reload");
import api from '@/api/api'
let spinFlag = ref(false)
const formRef = ref<FormInst  | null>(null)
const rules = ref({
    username:{
      required:true,
      message:"请输入用户名"
    },
    password:{
      required:true,
      message:"请输入密码"

    }
})

function validateAll () {
  formRef.value?.validate((errors) => {
    if (errors) {
      console.error(errors)
    }
  })
}


const user = ref({
  username:"",
  password:""
})
function login() {
  spinFlag.value = true
  const p = formRef.value?.validate()
  p?.then(
      ()=>{
        api.post(
            "/user/login",
             user.value
        ).then(res =>{
          if(res.data.code === -1){
            dialog.error({
              content: ()=>h('p',{style:{
                "font-size":"20px"
                }},res.data.msg)
            })
           return
          }
          spinFlag.value = false
          dialog.destroyAll()
          sessionStorage.setItem("userInfo",JSON.stringify(res.data.data))
          reload()
        }).catch( e=>{
          console.log(e)
        })
      }
  )
}
</script>



<style scoped>
.item{
  width: 300px;
  margin-bottom: 5px;
}


.form-login{
  width:640px;
  height:300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #f2f3f5;
}

.leftSide{
  width: 300px;
  height: 200px;
  background-size: cover;
  background-image: url("https://image.meiye.art/pic_1628648674251?imageMogr2/thumbnail/560x/interlace/1");
}
.form-item{
  padding-top: 45px;
  margin-bottom: 5px;
  width: 300px;
  box-sizing: border-box;
}

</style>