import Compare from "@/views/pages/Compare.vue";
import Form from "@/views/pages/Form.vue";
import Home from "@/views/pages/Home.vue";
import ManagePost from "@/views/pages/ManagePost.vue";
import PlanDetails from "@/views/pages/Plan-details.vue";
import PostCreate from "@/views/pages/PostCreate.vue";
import PostDetails from "@/views/pages/PostDetails.vue";
import PostEdit from "@/views/pages/PostEdit.vue";
import Princing from "@/views/pages/Princing.vue";
import { createRouter, createWebHistory } from "vue-router";

const myRouter =createRouter({
     history :createWebHistory(),
     routes:[
          {path:'/',component:Home},
          {path:'/price',component:Princing},
          {path:'/compare',component:Compare},
          {path:'/form',component:Form},
          {path:'/plain-details/:id',component:PlanDetails},
          {path:'/posts',component:ManagePost},
          {path:'/posts/create',component:PostCreate},
          {path:'/post-details/:id',component:PostDetails},
          {path:'/post-edit/:id',component:PostEdit},
     ]
});
export default myRouter