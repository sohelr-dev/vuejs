<script setup lang="ts">
import type { CategoryType } from '@/components/interfaces/category.interfaces';
import defaultCategory from '@/components/interfaces/category.interfaces';
import { useCounterStore } from '@/store/counter';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'; // <-- Fix here

const category = reactive<CategoryType>(defaultCategory);

const navigate = useRouter();

const counter =useCounterStore();

const newCount = ref(counter.count);

function formSubmit() {
     let formdata =new FormData();
     formdata.append('name',category.name);
     formdata.append('is_inactive',category.is_inactive.toString());
     // axios.post('http://127.0.0.1:8000/api/categories', category);
     //for form data
     axios.post('http://127.0.0.1:8001/api/categories', formdata)
     .then((res) => {
          console.log(res.data.id);
          if (res.data) {
          alert("Category created successfully.");
          // navigate.push('/category');
          category===defaultCategory;
          // counter.count = res.data.name;
          }
     })
     .catch((error) => {
          console.log(error);
     });
}

function updateValue(){
     counter.count=newCount.value;
     counter.setLocal();

     // localStorage.setItem('UpdateValue',String(counter.count));

}
// console.log(Number(localStorage.getItem("UpdateValue")));
// counter.count = localStorage.getItem("UpdateValue");


</script>
<template>
     <div class="container">
         <div>
               <input type="text" v-model="newCount" >
               <button @click="updateValue" type="submit">update</button>
         </div>
          <h1 class="text-center">Category Create {{ counter.count }}</h1>
          <div class="card">
               <form @submit.prevent="formSubmit">
                    <div class="mt-2">
                         <label for="userId" class="form-label">Name</label>
                         <input type="text" v-model="category.name"  id="userId" class="form-control">
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