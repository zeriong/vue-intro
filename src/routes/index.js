import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
    // 초기화면 로그인 화면으로 redirect
    {
        path: "/",
        // 로그인상태인 경우에는 main 페이지로 이동 / 아닌 경우 로그인으로
        redirect: (store.state.isLoggedIn) ? "/main" : "/login",
    },
    {
        path: '/login',
        // 함수형태로 컴포넌트를 지정하여 코드스플리팅 사용
        component: () => import('../modules/intro/views/LoginPage.vue'),
        meta: {
            needLogout: true,
        }
    },
    {
        path: '/signup',
        component: () => import('../modules/intro/views/SignupPage.vue'),
    },
    {
        path: '/main',
        component: () => import('../modules/main/views/MainPage.vue'),
        meta: {
            auth: true,
        },
    },

    // fallback router 처리
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/modules/common/views/NotFoundPage.vue'),
    },
]

const router = createRouter({
    strict: true,
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // console.log("to : ", to);
    // console.log("from : ", from);
    // 로그인 인증이 필요한 페이지인데 로그인을 하지 않았을 때
    if (to.meta.auth && !store.state.isLoggedIn) {
        alert("로그인이 필요한 페이지 입니다");
        next("/login");
        return;
    }
    // 로그인상태에서 로그인창으로 가려 하는 경우
    if (to.meta.needLogout && store.state.isLoggedIn) {
        alert("이미 로그인된 상태입니다.\n메인페이지로 이동합니다.");
        next("/main");
        return;
    }
    next();
});

export default router