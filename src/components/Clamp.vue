<template>
  <div class="wrap" ref="tre" :style="style">
    <slot></slot>
  </div>
  <div class="ell" v-show="obj.flag" @click="triggleContent" style="color: cornflowerblue" v-text="obj.str"></div>
</template>

<script lang="ts" setup>
import {ref,onMounted,defineProps} from 'vue'
const ClampProp = defineProps({
  maxOfLine:{
    type: Number,
    default:3
  },
  LineHeight:{
    type:String,
    default:"24px"
  },
  fontSize:{
    type:String,
    default:"1rem"
  }
});
const str= ref("展开")
const obj = ref({
  flag: false,
  str:""
})
const tre = ref<Element>(null)
const style = ref({
    fontSize:ClampProp.fontSize,
    lineHeight: ClampProp.LineHeight,
    color: 'dimgray',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    display: '-webkit-box',
    webkitBoxOrient: 'vertical',
    webkitLineClamp: ClampProp.maxOfLine,
})

const triggleContent = ref(()=>{
  if(obj.value.str==="展开"){
    style.value.webkitLineClamp=999
    obj.value.str = "收起"
    return
  }
  style.value.webkitLineClamp=ClampProp.maxOfLine
  obj.value.str = "展开"
})
onMounted(()=>{
  let value = tre.value;
  if(value.scrollHeight>value.style.webkitLineClamp*parseInt(value.style.lineHeight)){
    obj.value.flag = true
    obj.value.str="展开"
  }

})

</script>



<style scoped>
.ell:hover{
  cursor: pointer;
}
</style>