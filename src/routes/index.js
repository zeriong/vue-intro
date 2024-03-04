import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    // history 모드를 추가하여 url파라미터에 #을 없앨 수 있다.
    // history 모드를 추가하면 서버에서 해당 url 에 정의된 파일을 알 수 없게 된다.
    // 그렇기 때문에 배포를 하게되는 경우 Vue Router 도큐먼트에 History Mode 를 검색해서
    // Server Configuration 을 설정해주어야 한다.
    mode: 'history',
    routes: [
        // 초기화면 로그인 화면으로 redirect
        {
            path: '/',
            redirect: '/login'
        },

        {
            path: '/login',
            // 함수형태로 컴포넌트를 지정하여 코드스플리팅 사용
            component: () => import('../views/LoginPage.vue'),
        },
        {
            path: '/signup',
            component: () => import('../views/SignupPage.vue'),
        },

        // fallback router 처리
        {
            path: '*',
            component: () => import('../views/NotFoundPage.vue'),
        },
    ],
});