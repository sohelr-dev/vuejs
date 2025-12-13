// import './assets/main.css'
import './assets/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import myRouterView from './routes/index.ts'
import { createPinia } from 'pinia'

const baseUrl= 'http://127.0.0.1:8001/';
export default baseUrl;

const pinia =createPinia();


createApp(App)
.use(myRouterView)
.use(pinia)
.mount('#app')