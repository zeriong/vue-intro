import Vue from 'vue'
import App from './App.vue'
import router from "@/routes";

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router, // 라우터 추가
}).$mount('#app')