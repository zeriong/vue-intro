import {createStore} from "vuex";
import router from "@/routes";
import routes from "@/routes";

const store = createStore({
    state: {
        isLoggedIn: !!localStorage.getItem("loginUser"),
        userName: "",
    },
    // 직접적으로 상태값을 변경하는 변경 함수(mutation)이다.
    mutations: {
        setLogin: (state, payload) => {
            state.userName = payload;
            state.isLoggedIn = true;
        },
        setLogout: (state) => {
            localStorage.removeItem("loginUser");
            state.userName = "";
            state.isLoggedIn = false;
            alert("로그아웃 되었습니다.");
            router.push("/login");
        }
    },
    // mutations 를 통해 상태값을 변경할 때 비동기처리가 필요한 경우에 자주 사용
    actions: {
        login: ({commit}, payload) => {
            console.log("이것은 페이로드", payload)
            const users = JSON.parse(localStorage.getItem('users'));
            const isExistUser = users.find(userData => userData.username === payload.username);

            if (!isExistUser) return alert('가입되지 않은 회원입니다.');

            if (isExistUser.password === payload.password) {
                commit("setLogin", payload.username);
                payload.resetForm();
                const { username, nickname } = isExistUser
                localStorage.setItem("loginUser", JSON.stringify({username, nickname}));
                alert(`${isExistUser.nickname}님 어서오세요!`);
                routes.push("/main");
            }
            else alert("비밀번호가 일치하지 않습니다.");
        }
    },
    // 특정 스테이트를 가공해서 보여주고 싶은 경우 사용 or 기본 상태값을 보여주고 싶을때도 사용 가능
    getters: {
        // loginState: (state) => state.isLoggedIn,
    },
})

export default store;