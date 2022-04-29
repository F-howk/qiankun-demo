import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { registerMicroApps} from "qiankun";

registerMicroApps([{
    name: "app1", // app name registered
    entry: "http://localhost:8083",
    container: "#about",
    activeRule: "/about/app1",
}, ]);
createApp(App).use(store).use(router).mount('#app')