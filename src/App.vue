<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
import {nextTick, provide, ref} from 'vue'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorHover: 'cornflowerblue',
    primaryColorSuppl:"cornflowerblue",
  },
  Input:{
    boxShadowFocus:"none",
  },
  Menu:{
    itemIconColorHover:"cornflowerblue",
    itemIconColorChildActive:"cornflowerblue",
    itemTextColorHover:"cornflowerblue",
    itemColorActive:"#eaf2ff",
    itemTextColorActive:"black",
    itemTextColorChildActive:"cornflowerblue",
    itemIconColorChildActiveHover:"cornflowerblue",
    itemTextColorChildActiveHover: "cornflowerblue",
    itemTextColorActiveHover:"cornflowerblue",
    itemColorActiveHover:"#eaf2ff",
    itemIconColorActive:"cornflowerblue",
    itemIconColorActiveHover:"cornflowerblue",
    itemHeight:"48px",
  },
  Card:{
    paddingSmall:"5px"
  }

}
const flag = ref(true);
function reload(){
  flag.value = false
  nextTick(()=>{
    flag.value = true
      }
  )
}
provide("reload",reload)

</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-dialog-provider>
      <router-view v-if="flag"></router-view>
    </n-dialog-provider>
  </n-config-provider>


</template>
