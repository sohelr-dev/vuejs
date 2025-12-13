<script setup lang="ts">


import defaultProduct, { type Product } from '@/components/interfaces/product.interfaces';
import { useCounterStore } from '@/store/counter';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'; // <-- Fix here

const product = reactive<Product>(defaultProduct);

const navigate = useRouter();

const counter =useCounterStore();
const newCount = ref(counter.count);

const onFileChange=(event:any)=>{
     product.photo_file = event.target.files[0];
}

function formSubmit() {
     // console.log(product)
     let formdata =new FormData();
     formdata.append('name',product.name);
     formdata.append('photo',product.photo_file as File);

     // console.log(formdata);
     formdata.forEach((value,key)=>{
          console.log(value + 'key' + key);
     })

     // console.log(formdata);
     // axios.post('http://127.0.0.1:8000/api/products', product);
     //for form data
     axios.post('http://127.0.0.1:8001/api/products',formdata,
           {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Accept':'application/json'
        },
      }
     )
     .then((res) => {
          // console.log(res.data.id);
          
          if (res.data) {
               console.log(res.data);
          // alert("product created successfully.");
          // navigate.push('/product');
          // product===defaultproduct;
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
          <h1 class="text-center">product Create {{ counter.count }}</h1>
          <div class="card">
               <form @submit.prevent="formSubmit">
                    <div class="mt-2">
                         <label for="userId" class="form-label">Name</label>
                         <input type="text" v-model="product.name"  id="userId" class="form-control">
                    </div>
                    <div class="mt-2">
                         <label for="body" class="form-label">photo</label>
                         <input type="file" @change="onFileChange" id="body" class="form-control">
                    </div>
                    <!-- <div class="mt-2">
                         <label for="body" class="form-label">Active</label>
                         <input type="text" v-model="product.is_inactive" id="body" class="form-control">
                    </div>
                     -->
                    <div class="mt-2 text-end">
                         <button type="submit" class="btn btn-primary ">Create product</button>
                    </div>
               </form>
          </div>
     </div>
</template>