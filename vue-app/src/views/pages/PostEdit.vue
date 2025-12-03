<script setup lang="ts">
import type { PostFake } from '@/components/interfaces/Post.interfaces';
import defaultPost from '@/components/interfaces/Post.interfaces';
import axios from 'axios';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import PostDetails from './PostDetails.vue';


const post =reactive<PostFake>(defaultPost);
console.log(post);
const route =useRoute();
const queryId =route.params.id;



axios.get(`https://jsonplaceholder.typicode.com/posts/${queryId}`)
     .then((res)=>{
          console.log(res);
          if(res.status ===200 || res.status ===201){
               
               // Object.assign(postdetails,res.data);
               Object.assign(post,res.data);

               console.log(post);    
          }
     })
     .catch((error)=>{
          console.log(error);
     })


function formSubmit(){
     axios.patch(`https://jsonplaceholder.typicode.com/posts/${queryId}`,post)
     .then((res)=>{
          // console.log(res);
          if(res){
               alert("Update SuccessFull .\n" +
                    "userId :" +post.userId + "\n" +
                    "Body :" + post.body + "\n" +
                    "Title : " + post.title + "\n" +
                    "id : " + post.id
               );
          }
     })
     .catch((err)=>{
          console.log(err);
     })

}

</script>
<template>
     <div class="container">
          <h1 class="text-center">Post Edit </h1>
           <h5 class="text-end"><router-link to="/posts" class=" btn btn-outline-primary">Back</router-link></h5>
          <div class="card">
               <form @submit.prevent="formSubmit">
                    <input type="hidden" v-model="post.id">
                    <div class="mt-2">
                         <label for="userId" class="form-label">User Id</label>
                         <input type="text"  v-model="post.userId" id="userId" class="form-control">
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