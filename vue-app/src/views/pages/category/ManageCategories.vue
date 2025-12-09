<script setup lang="ts">

import type { CategoryType } from '@/components/interfaces/category.interfaces';
import { useCounterStore } from '@/store/counter';
import axios from 'axios';
import { ref } from 'vue';
const counter =useCounterStore();
let categories = ref<CategoryType[]>([]);
axios.get("http://127.0.0.1:8000/api/categories")
     .then((res)=>{
          // console.log(res.data)
          categories.value= res.data;
          
     })
     .catch((error)=>{
          console.log(error);
     });
     console.log(categories.value);
</script>
<template>
     <div class="conatiner">
          <div class="text-end">
               <router-link to="categories/create" class="btn btn-success">Create Category</router-link>
          </div>
          <div class="card">
               <div class="card-header p-2 text-center">
                    Manage Category <span class="badge text-danger bg-primary">{{ counter.count }}</span>
               </div>
               <div class="responsive">
                    <table class="table">
                         <thead>
                              <tr class="p-2">
                                   <th>Id</th>
                                   <th>Name</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr v-for="category in categories" :key="category.id">
                                   <td>{{ category.id }}</td>
                                   <td>{{ category.name }}</td>
                                  
                                   <td class="d-flex gap-2">
                                        <router-link :to="`category-details/${category.id}`" class="btn btn-primary">
                                             view
                                        </router-link>
                                        <router-link :to="`category-edit/${category.id}`" class="btn btn-outline-primary">
                                             Edit
                                        </router-link>
                                   </td>

                              </tr>
                         </tbody>

                    </table>
               </div>

          </div>
     </div>
</template>
<style scoped>
</style>