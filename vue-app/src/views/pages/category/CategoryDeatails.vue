<script setup lang="ts">
import type { CategoryType } from '@/components/interfaces/category.interfaces';
import defaultCategory from '@/components/interfaces/category.interfaces';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route =useRoute();
const queryId =route.params.id

// const categoryDeatails = ref<CategoryFake | null>(defaultCategory);
const categoryDeatails = reactive<CategoryType >(defaultCategory);

axios.get(`http://127.0.0.1:8001/api/categories/${queryId}`)
     .then((res)=>{
          console.log(res);
          if(res.status ===200 || res.status ===201){
               // categoryDeatails.value = res.data;
               //for reactive
               Object.assign(categoryDeatails,res.data);
          }
     })
     .catch((error)=>{
          console.log(error);
     })

</script>
<template>
     <div class="conatiner">
          <div class="card">
               <div class="card-header">
                    Category Details {{ queryId }}
               </div>
               <div class="responsive">
                    <table class="table">
                         <tbody>
                              <tr>
                                  <th>Id</th>
                                   <td>{{ categoryDeatails?.id }}</td>
                              </tr>
                              <tr>
                                  <th>Body</th>
                                   <td>{{ categoryDeatails?.name }}</td>
                              </tr>
                              <tr>
                                  <th>Active(Yes/No)</th>
                                   <td>{{ categoryDeatails?.is_inactive }}</td>
                              </tr>
                              <tr>
                                  <th>Create Category</th>
                                   <td>{{ categoryDeatails?.created_at }}</td>
                              </tr>                
                         </tbody>
                    </table>
               </div>
          </div>
     </div>
</template>
