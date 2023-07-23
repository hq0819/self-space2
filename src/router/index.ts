import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import CreateCenter from "@/views/CreateCenter.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path:"/detail",
      component: ArticleDetail
    },
    {
      path:"/createCenter",
      component: CreateCenter
    }
  ]
})

export default router
