<script setup lang="ts">
import type { CategoryType } from '@/components/interfaces/category.interfaces';
import defaultCategory from '@/components/interfaces/category.interfaces';

import axios from 'axios';
import { reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';



const category =reactive<CategoryType>(defaultCategory);
console.log(category);
const route =useRoute();
const navigate=useRouter();
const queryId =route.params.id;



axios.get(`http://127.0.0.1:8001/api/categories/${queryId}`)
     .then((res)=>{
          console.log(res);
          if(res.status ===200 || res.status ===201){
               
               // Object.assign(categorydetails,res.data);
               Object.assign(category,res.data);

               console.log(category);    
          }
     })
     .catch((error)=>{
          console.log(error);
     })


function formSubmit(){
     axios.patch(`http://127.0.0.1:8001/api/categories/${queryId}`,category)
     .then((res)=>{
          // console.log(res);
          if(res){
               alert("Update SuccessFull ." );
               navigate.push("/category");
               
          }
     })
     .catch((err)=>{
          console.log(err);
     })

}

</script>
<template>
     <div class="container">
          <h1 class="text-center">Category Edit </h1>
           <h5 class="text-end"><router-link to="/category" class=" btn btn-outline-primary">Back</router-link></h5>
          <div class="card">
               <form @submit.prevent="formSubmit">
                    <input type="hidden" v-model="category.id">
                    <div class="mt-2">
                         <label for="userId" class="form-label">User Id</label>
                         <input type="text"  v-model="category.name" id="userId" class="form-control">
                    </div>
                    <div class="mt-2">
                         <label for="body" class="form-label">Body</label>
                         <input type="text" v-model="category.is_inactive" id="body" class="form-control">
                    </div>
                    
                    <div class="mt-2 text-end">
                         <button type="submit" class="btn btn-primary ">Update Category</button>
                    </div>
               </form>
          </div>
     </div>
</template>