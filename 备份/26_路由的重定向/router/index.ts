import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import Detail from "@/views/Detail.vue";
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
            name: 'news',
            children:[
                {
                    path: "detail/:id/:title/:content",
                    component: Detail,
                    name:'Detail',
                    // 布尔写法， 仅支持params传参
                    // props:true
                    // 函数写法,query与params都支持
                    props(route){
                        return {
                            id:route.params.id,
                            title:route.params.title,
                            content:route.params.content
                        }
                    }
                }
            ]
        },
        {
            path:'/',
            redirect:'/home'
        }
    ]
})

export default router