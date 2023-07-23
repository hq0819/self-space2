<template>
    <div style="padding-left: 20px;width: 700px;height: 112px;">
      <div style="display: flex;align-items: center;border-bottom: 1px #f2f2f2 solid;background-color: white;margin-bottom: 20px">
        <div style="margin-left: 30px;margin-top: 8px">
          <n-avatar round style="width: 100px;height: 100px;margin-right: 20px" src="https://img0.baidu.com/it/u=1257177296,511470069&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"/>
        </div>
        <div style="display: flex;">
          <div>
            <div><span style="font-size: 30px;font-weight: 500;margin-bottom: 20px">贺钦11</span></div>
            <n-breadcrumb separator="|">
              <n-breadcrumb-item>0粉丝</n-breadcrumb-item>
              <n-breadcrumb-item>0关注</n-breadcrumb-item>
              <n-breadcrumb-item>来到个人空间的第76天</n-breadcrumb-item>
            </n-breadcrumb>
          </div>
        </div>
      </div>
      <div style="background-color: white">
          <div style="border-bottom: 1px #f2f2f2 solid;box-sizing: border-box;padding: 15px"><p style="font-size: 20px;line-height: 0">数据概览</p></div>
          <div class="info-module">
            <div>
              <p style="font-size: 18px;padding: 12px;line-height:0;color: darkslategray">总粉丝数</p>
              <div style="height: 30px;font-size: 30px;padding-left: 10px;box-sizing: border-box">
                <n-number-animation ref="numberAnimationInstRef" from="0" to="112"/>
              </div>
            </div>
            <div>
              <p style="font-size: 18px;padding: 12px;line-height:0;color: darkslategray">文章展现数</p>
              <div style="height: 30px;font-size: 30px;padding-left: 10px;box-sizing: border-box">
                <n-number-animation ref="numberAnimationInstRef" from="0" to="4322"/>
              </div>
            </div>
            <div>
              <p style="font-size: 18px;padding: 12px;line-height:0;color: darkslategray">文章阅读数</p>
              <div style="height: 30px;font-size: 30px;padding-left: 10px;box-sizing: border-box">
                <n-number-animation ref="numberAnimationInstRef" from="0" to="4322"/>
              </div>
            </div>
            <div>
              <p style="font-size: 18px;padding: 12px;line-height:0;color: darkslategray">文章点赞数</p>
              <div style="height: 30px;font-size: 30px;padding-left: 10px;box-sizing: border-box">
                <n-number-animation ref="numberAnimationInstRef" from="0" to="6432"/>
              </div>
            </div>
            <div>
              <p style="font-size: 18px;padding: 12px;line-height:0;color: darkslategray">文章评论数</p>
              <div style="height: 30px;font-size: 30px;padding-left: 10px;box-sizing: border-box">
                <n-number-animation ref="numberAnimationInstRef" from="0" to="12"/>
              </div>
            </div>
            <div>
              <p style="font-size: 18px;padding: 12px;line-height:0;color: darkslategray">文章收藏数</p>
              <div style="height: 30px;font-size: 30px;padding-left: 10px;box-sizing: border-box">
                <n-number-animation ref="numberAnimationInstRef" from="0" to="552"/>
              </div>
            </div>
          </div>
      </div>

    </div>

</template>

<style scoped>
.info-module div{
  width: 200px;
  height: 120px;
  background-color: #f7f8fa;
}
.info-module{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding: 18px 14px;
  justify-items: center;
  grid-row-gap: 14px;
}
</style>

<script setup lang="ts">

</script>