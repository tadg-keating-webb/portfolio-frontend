import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import tooltip from "./directives/tooltip.js";
import "@/assets/css/tooltip.css";
import { createWebHistory, createRouter } from 'vue-router'
import AdminComponent from './components/admin/AdminComponent.vue';
import HomeComponent from './components/HomeComponent.vue';

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/admin', component: AdminComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App)
    .use(router)
    .directive("tooltip", tooltip)
    .mount('#app')
