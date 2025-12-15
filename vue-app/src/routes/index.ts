import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/pages/Home.vue";
import Login from "@/views/pages/users/Login.vue";
import Princing from "@/views/pages/Princing.vue";
import Compare from "@/views/pages/Compare.vue";
import Form from "@/views/pages/Form.vue";
import PlanDetails from "@/views/pages/Plan-details.vue";

import ManagePost from "@/views/pages/ManagePost.vue";
import PostCreate from "@/views/pages/PostCreate.vue";
import PostDetails from "@/views/pages/PostDetails.vue";
import PostEdit from "@/views/pages/PostEdit.vue";

import ManageCategories from "@/views/pages/category/ManageCategories.vue";
import CategoryCreate from "@/views/pages/category/CategoryCreate.vue";
import CategoryDetails from "@/views/pages/category/CategoryDeatails.vue";
import CategoryEdit from "@/views/pages/category/CategoryEdit.vue";

import ProductList from "@/views/pages/Product/ProductList.vue";
import ProductCreate from "@/views/pages/Product/ProductCreate.vue";

import UserCreate from "@/views/pages/users/UserCreate.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, meta: { auth: true } },
    { path: "/login", component: Login, meta: { auth: false, nolayout: true } },
    { path: "/register", component: Login, meta: { auth: false, nolayout: true } },

    { path: "/price", component: Princing, meta: { guard: false } },
    { path: "/compare", component: Compare, meta: { guard: false } },
    { path: "/form", component: Form, meta: { auth: true } },
    { path: "/plan-details/:id", component: PlanDetails, meta: { auth: true } },

    // posts
    { path: "/posts", component: ManagePost, meta: { auth: true } },
    { path: "/posts/create", component: PostCreate, meta: { auth: true } },
    { path: "/post-details/:id", component: PostDetails, meta: { auth: true } },
    { path: "/post-edit/:id", component: PostEdit, meta: { auth: true } },

    // categories
    { path: "/category", component: ManageCategories, meta: { auth: true } },
    { path: "/category-details/:id", component: CategoryDetails, meta: { auth: true } },
    { path: "/categories/create", component: CategoryCreate, meta: { auth: true } },
    { path: "/category-edit/:id", component: CategoryEdit, meta: { auth: true } },

    // products
    { path: "/product", component: ProductList, meta: { auth: true } },
    { path: "/products/create", component: ProductCreate, meta: { auth: true } },

    { path: "/create-user", component: UserCreate, meta: { auth: true } },
  ],
});

router.beforeEach((to, from, next) => {
  const authenticated = !!localStorage.getItem("token");

  if (!authenticated && to.meta.auth) {
    next("/login");
  } else if (authenticated && !to.meta.auth  && to.meta.guard !== false) {
    next("/");
  } else {
    next();
  }
});

export default router;
