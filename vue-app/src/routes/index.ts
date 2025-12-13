import CategoryCreate from "@/views/pages/category/CategoryCreate.vue";
import CategoryDeatails from "@/views/pages/category/CategoryDeatails.vue";
import CategoryEdit from "@/views/pages/category/CategoryEdit.vue";
import ManageCategories from "@/views/pages/category/ManageCategories.vue";
import Compare from "@/views/pages/Compare.vue";
import Form from "@/views/pages/Form.vue";
import Home from "@/views/pages/Home.vue";
import ManagePost from "@/views/pages/ManagePost.vue";
import PlanDetails from "@/views/pages/Plan-details.vue";
import PostCreate from "@/views/pages/PostCreate.vue";
import PostDetails from "@/views/pages/PostDetails.vue";
import PostEdit from "@/views/pages/PostEdit.vue";
import Princing from "@/views/pages/Princing.vue";
import ProductCreate from "@/views/pages/Product/ProductCreate.vue";
import ProductList from "@/views/pages/Product/ProductList.vue";
import UserCreate from "@/views/pages/users/UserCreate.vue";
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
          {path:'/category',component:ManageCategories},
          {path:'/category-details/:id',component:CategoryDeatails},
          {path:'/categories/create',component:CategoryCreate},
          {path:'/category-edit/:id',component:CategoryEdit},
          {path:'/create-user',component:UserCreate},
          //product
          {path:'/product',component:ProductList},
          {path:'/product-details/:id',component:CategoryDeatails},
          {path:'/products/create',component:ProductCreate},
          {path:'/product-edit/:id',component:CategoryEdit},

     ]
});
export default myRouter