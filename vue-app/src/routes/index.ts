import Compare from "@/views/pages/Compare.vue";
import Form from "@/views/pages/Form.vue";
import Home from "@/views/pages/Home.vue";
import Princing from "@/views/pages/Princing.vue";
import { createRouter, createWebHistory } from "vue-router";

const myRouter =createRouter({
     history :createWebHistory(),
     routes:[
          {path:'/',component:Home},
          {path:'/price',component:Princing},
          {path:'/compare',component:Compare},
          {path:'/form',component:Form},
     ]
});
export default myRouter