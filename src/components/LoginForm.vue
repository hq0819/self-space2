<template>
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

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {FormInst} from "naive-ui";
import axios from "axios";
const api = axios.create({
  baseURL:"/api",
  timeout:3000,
  headers:{
    'Content-Type': 'application/json;charset=UTF-8'
  }

});
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
  const p = formRef.value?.validate()
  p?.then(
      ()=>{
        api.post(
            "/user/login",
            {
              username:user.value.username,
              password:user.value.password
            }
        ).then(res =>{
          console.log(res)
          if(res.data.code==-1){
            console.error(res.data.message)
          }
          console.log(res.data)
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