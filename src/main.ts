import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import naive from "naive-ui";
import 'vfonts/Lato.css'
import './assets/common.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'vue3-emoji/dist/style.css'
import infiniteScroll from 'vue3-infinite-scroll-better'

import {createPinia} from "pinia";
const pinia = createPinia();



const app = createApp(App)
app.use(router)
app.use(naive)
app.use(mavonEditor)
app.use(pinia)
app.use(infiniteScroll)
app.mount('#app')
