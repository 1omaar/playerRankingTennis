import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Detail from '@/views/Detail.vue';

const routes = [
    {
        name:"Home",
        path:'/',
        component:Home,
       
    },
    {
        name:"Detail",
        path:"/detail",
        component:Detail,
        
    }
];
  const router =createRouter({
    history:createWebHistory(),
    routes 
})
export default router