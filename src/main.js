//import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// Para usar los iconos
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css"
import dayjs from 'dayjs'
import 'dayjs/locale/es'
dayjs.locale('es') //Configurar el idioma globalmente

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$date = dayjs

app.mount('#app')
