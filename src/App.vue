<script setup lang="ts">
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorHover: 'cornflowerblue',
    primaryColorSuppl:"cornflowerblue",
  },
  Input:{
    boxShadowFocus:"none"
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
  }
}

</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view></router-view>
  </n-config-provider>


</template>
