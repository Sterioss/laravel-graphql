import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
    // {
    // path: '/example',
    // name: 'example',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/example.vue')
    // }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.APP_URL,
    routes
})
Vue.use(VueRouter)

export default router

