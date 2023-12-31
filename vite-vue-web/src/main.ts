import { createApp } from "vue"
import { createPinia } from "pinia"
import "./assets/styles/index.scss"
import App from "./App.vue"
import router from "./router"
import "@/utils/modules/vant.config"
const app = createApp(App)
const pinia = createPinia()
app.use(pinia).use(router)

app.mount("#app")
