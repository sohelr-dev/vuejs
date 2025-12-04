<script setup lang="ts">
import type { CategoryType } from '@/components/interfaces/category.interfaces';
import defaultCategory from '@/components/interfaces/category.interfaces';
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router'; // <-- Fix here

const category = reactive<CategoryType>(defaultCategory);

const navigate = useRouter();

function formSubmit() {
     let formdata =new FormData();
     formdata.append('name',category.name);
     formdata.append('is_inactive',category.is_inactive.toString());
     // axios.post('http://127.0.0.1:8000/api/categories', category);
     //for form data
     axios.post('http://127.0.0.1:8000/api/categories', formdata)
     .then((res) => {
          console.log(res.data.id);
          if (res.data) {
          alert("Category created successfully.");
          // navigate.push('/category');
          category===defaultCategory;
          }
     })
     .catch((error) => {
          console.log(error);
     });
}
</script>
<template>
     <div class="container">
          <h1 class="text-center">Category Create </h1>
          <div class="card">
               <form @submit.prevent="formSubmit">
                    <div class="mt-2">
                         <label for="userId" class="form-label">Name</label>
                         <input type="text" v-model="category.name" id="userId" class="form-control">
                    </div>
                    <div class="mt-2">
                         <label for="body" class="form-label">Active</label>
                         <input type="text" v-model="category.is_inactive" id="body" class="form-control">
                    </div>
                    
                    <div class="mt-2 text-end">
                         <button type="submit" class="btn btn-primary ">Create category</button>
                    </div>
               </form>
          </div>
     </div>
</template>