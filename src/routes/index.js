import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        // 초기화면 로그인 화면으로 redirect
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            // 함수형태로 컴포넌트를 지정하여 코드스플리팅 사용
            component: () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage.vue'),
        },
    ],
});