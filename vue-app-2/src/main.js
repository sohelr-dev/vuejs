// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Team from './components/Team.vue'

const myroute =createRouter({
     history: createWebHistory(),
     routes:[
          {path:'/',component:Home},
          {path:'/team',component:Team},
     ]
})

createApp(App).use(myroute).mount('#app')
