import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/views/HomePage.vue";
import ArticleDetail from "@/views/ArticleDetail.vue";
import CreateCenter from "@/views/CreateCenter.vue";
import TextEdit from '@/views/TextEdit.vue'
import Circle from "@/views/Circle.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            name:"articleDetail",
            path: "/detail/:id",
            component: ArticleDetail
        },
        {
            path: "/createCenter",
            component: CreateCenter
        },
        {
            path: "/textEdit",
            component: TextEdit
        },
        {
            path: "/circle",
            component: Circle
        }
    ]
})


export default router
