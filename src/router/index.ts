import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/about",
            component: About,
            name: 'about'
        },
        {
            path: "/home",
            component: Home,
            name: 'home'
        },
        {
            path: "/news",
            component: News,
            name: 'news'
        },
    ]
})

export default router