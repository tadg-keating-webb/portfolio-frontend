import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import tooltip from "./directives/tooltip.js";
import "@/assets/css/tooltip.css";

createApp(App)
    .directive("tooltip", tooltip)
    .mount('#app')
