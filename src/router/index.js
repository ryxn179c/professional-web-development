import { createRouter, createWebHashHistory } from "vue-router";
import LoginForm from "../views/LoginForm.vue";
import HomeForm from "../views/HomeForm.vue";

const routes = [
  { path: "/", component: LoginForm },
  { path: "/home", component: HomeForm },
];

const router = createRouter({
  history: createWebHashHistory(), // Cambiado de createWebHistory() a createWebHashHistory()
  routes,
});

export default router;
