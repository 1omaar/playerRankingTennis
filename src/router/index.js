import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Error from '@/views/Error.vue';

const routes = [
    {
        name:"Home",
        path:'/',
        component:Home,
       
    },
    {
        name:"Error",
        path:"/:catchAll(.*)",
        component:Error,
        
    }
];
  const router =createRouter({
    history:createWebHistory(),
    routes 
})
export default router