/*
 * @Description: 路由配置
 * @Version: 2.0
 * @Autor: Wsl
 * @Date: 2020-04-27 17:56:50
 * @LastEditors: Wsl
 * @LastEditTime: 2020-05-06 11:46:58
 */
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import(/* webpackChunkName: "test" */ '../views/Test.vue'),
    },
    {
        path: '/test2',
        name: 'Test2',
        component: () => import(/* webpackChunkName: "test2" */ '../views/Test2.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
