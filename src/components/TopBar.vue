<template>
  <div class="topBar">
    <div style="display: flex;margin-left: 340px">
      <div>
        <n-image
            src="https://image.meiye.art/pic_1629252408900IhHPr-5pm_oHqWKyxb9qf?imageMogr2/thumbnail/470x/interlace/1"
            height="60"></n-image>
      </div>
      <ul class="top-list">
        <li>
          <a href="#" style="text-decoration: none;color: inherit">
            <div style="width: 52px;height:60px;display: flex;justify-content: center;align-items: center">首页</div>
          </a>
        </li>
        <li>
          <a href="#" style="text-decoration: none;color: inherit">
            <div style="width: 52px;height:60px;display: flex;justify-content: center;align-items: center">沸点</div>
          </a>
        </li>
        <li style="margin-left: 600px">
          <n-input-group style="display: flex">
            <n-input style="width: 280px;" placeholder="请搜索" name="search"/>
            <n-button type="info" ghost>搜索</n-button>
          </n-input-group>

        </li>
        <li style="margin-left: 30px">
          <n-button-group>
            <n-button type="info" @click="toCreateCenter">创作中心</n-button>
            <n-popover trigger="hover" raw :show-arrow="false">
              <template #trigger>
                <n-button type="info" class="create-info">
                  <template #default>
                    <div></div>
                  </template>
                </n-button>
              </template>
              <div class="info-hidden">
                  <ul>
                    <li>
                      <div class="hidden-item">
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/69704c654798bb27cffca68e5a79976e.svg" alt="">
                        <div><span>写文章</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="hidden-item">
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/92ff1e17678887b64c952833d9d0dd0b.svg" alt="">
                        <div><span>写笔记</span></div>
                      </div>
                    </li>
                    <li>
                      <div class="hidden-item">
                        <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/b1008fc20ddf1733b5bd800ed4bcc18e.svg" alt="">
                        <div><span>草稿箱</span></div>
                      </div>
                    </li>
                  </ul>
              </div>
            </n-popover>
          </n-button-group>
          <div></div>

        </li>
        <li style="margin-left: 30px">
          <n-button strong secondary type="info" style="border-radius: 0">登录</n-button>
        </li>
        <li>
          <n-button strong secondary type="info" style="border-radius: 0">注册</n-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useRouter} from 'vue-router'
const router = useRouter();
const toCreateCenter = function () {
  router.push("/createCenter")
}
</script>

<style scoped>
.info-hidden{
  width: 300px;
  height: 85px;
  background-color: white;
}
.info-hidden ul li{
  list-style: none;
  display: inline-block;
}
.hidden-item{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
}
.hidden-item:hover{
  cursor: pointer;
  background-color: #f2f2f2;
}

.topBar {
  height: 60px;
  width: 100%;
  background-color: white;
  margin-bottom: 20px;
  display: flex;
}

.top-list li {
  display: inline-block;
  list-style: none;
  text-decoration: none;

}


.top-list {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
}

.create-info:hover div {
  border-top: 0;
  border-bottom: 6px solid white;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent
}

.create-info div {
  border-top: 6px solid white;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}


</style>

