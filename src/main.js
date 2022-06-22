import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./Services/api"
import Carousel3d from "vue-carousel-3d"
import "./index.css"


const app = createApp(App)
app.config.globalProperties.$appAxios = api
app.use(store)
app.use(router)
app.use(Carousel3d)


app.mount('#app')







