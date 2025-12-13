<script setup lang="ts">

import type { Product } from '@/components/interfaces/product.interfaces';
import baseUrl from '@/main';
import { useCounterStore } from '@/store/counter';
import axios from 'axios';
import { ref } from 'vue';

const counter =useCounterStore();
let products = ref<Product[]>([]);
axios.get("http://127.0.0.1:8001/api/products")
     .then((res)=>{
          console.log(res.data)
          products.value= res.data.product;
          
     })
     .catch((error)=>{
          console.log(error);
     });
     console.log(products.value);
</script>
<template>
     <div class="conatiner">
          <div class="text-end">
               <router-link to="products/create" class="btn btn-success">Create product</router-link>
          </div>
          <div class="card">
               <div class="card-header p-2 text-center">
                    Manage product <span class="badge text-danger bg-primary">{{ counter.count }}</span>
               </div>
               <div class="responsive">
                    <table class="table">
                         <thead>
                              <tr class="p-2">
                                   <th>Id</th>
                                   <th>Name</th>
                                   <th>Photo</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr v-for="product in products" :key="product.id">
                                   <td>{{ product.id }}</td>
                                   <td>{{ product.name }}</td>
                                   <td><img
                                             :src="product.photo ? baseUrl + product.photo : ''"
                                             alt=""
                                             width="60"
                                             />
                                             </td>
                                  
                                   <td class="d-flex gap-2">
                                        <router-link :to="`product-details/${product.id}`" class="btn btn-primary">
                                             view
                                        </router-link>
                                        <router-link :to="`product-edit/${product.id}`" class="btn btn-outline-primary">
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