<template>
  <div class="p-parent">
    <n-dialog-provider>
      <TopBar></TopBar>
    </n-dialog-provider>
    <div class="p_container">
      <div class="sideLeft">
        <slot name="sideLeft"></slot>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="sideRight">
        <slot name="sideRight"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopBar from "@/components/TopBar.vue";
</script>

<style scoped>
.p-parent{
  box-sizing: border-box;
  background-color: #f2f3f5;
  clear: both;
}
.p_container{
  display: flex;
  justify-content: center;
}
.sideLeft{
  background-color: white;
  width: 180px;
  height: 492px;
  position: sticky;
  top: 20px;
}
.content{
  width: 720px;
  margin-left: 20px;
  margin-right: 20px;
}

.sideRight{
  background-color: white;
  width: 260px;
  height: 600px;
  position: sticky;
  top: 20px;
}

</style>