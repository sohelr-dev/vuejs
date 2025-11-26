// import './assets/main.css'
import './assets/custom.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import App from './App.vue'
import myRouterView from './routes/index.ts'



createApp(App).use(myRouterView).mount('#app')