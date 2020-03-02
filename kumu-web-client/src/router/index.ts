import Vue from 'vue';
import VueRouter from 'vue-router';

import ChatMessage from '../views/ChatMessage.vue';
// import Test from '../views/Test.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'chatMessage',
        component: ChatMessage
    },
    {
        path: '/test',
        name: 'test',
        // test component file
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
