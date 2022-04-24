import { createRouter, createWebHistory } from "vue-router";

import HomeView from "./views/HomeView.vue"
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";

const routes = [
    { path: '/', component: HomeView},
    { path: "/register", component: Register},
    { path: "/login", component: Login},
];

const history = createWebHistory();

const router = createRouter({
    history,
    routes,
});

export default router;
