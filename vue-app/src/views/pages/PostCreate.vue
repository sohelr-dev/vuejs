<script setup lang="ts">
import type { PostFake } from '@/components/interfaces/Post.interfaces';
import defaultPost from '@/components/interfaces/Post.interfaces';
import axios from 'axios';
import { reactive } from 'vue';


const post =reactive<PostFake>(defaultPost);



function formSubmit(){
     // console.log(post.userId);
    axios.post('https://jsonplaceholder.typicode.com/posts',post)
     .then((res)=>{
          console.log(res.data.id);
          if(res.data){
               alert("Post Update successfully .");
          }

     })
     .catch((error)=>{
          console.log(error);
     })

}



</script>
<template>
     <div class="container">
          <h1 class="text-center">Post Create </h1>
          <div class="card">
               <form @submit.prevent="formSubmit">
                    <div class="mt-2">
                         <label for="userId" class="form-label">User Id</label>
                         <input type="text" v-model="post.userId" id="userId" class="form-control">
                    </div>
                    <div class="mt-2">
                         <label for="body" class="form-label">Body</label>
                         <input type="text" v-model="post.body" id="body" class="form-control">
                    </div>
                    <div class="mt-2">
                         <label for="title" class="form-label">Title</label>
                         <input type="text" v-model="post.title" id="title" class="form-control">
                    </div>
                    <div class="mt-2 text-end">
                         <button type="submit" class="btn btn-primary ">Create Post</button>
                    </div>
               </form>
          </div>
     </div>
</template>