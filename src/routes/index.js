import { createRouter, createWebHistory } from "vue-router";

const routes = [
    // 초기화면 로그인 화면으로 redirect
    {
        path: "/",
        redirect: "login",
    },
    {
        path: '/login',
        // 함수형태로 컴포넌트를 지정하여 코드스플리팅 사용
        component: () => import('../modules/intro/views/IntroPage.vue'),
    },
    {
        path: '/signup',
        component: () => import('../modules/intro/views/SignupPage.vue'),
    },
    {
        path: '/main',
        component: () => import('../modules/main/views/MainPage.vue'),
    },

    // fallback router 처리
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../common/views/NotFoundPage.vue'),
    },
]

const router = createRouter({
    strict: true,
    history: createWebHistory(),
    routes,
});

export default router