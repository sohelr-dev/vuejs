<script setup lang="ts">



import type { PostFake } from '@/components/interfaces/Post.interfaces';
import axios from 'axios';
import { ref } from 'vue';

let posts = ref<PostFake[]>([]);
axios.get("https://jsonplaceholder.typicode.com/posts")
     .then((res)=>{
          // console.log(res.data)
          posts.value= res.data;
          
     })
     .catch((error)=>{
          console.log(error);
     });
     console.log(posts.value);
</script>
<template>
     <div class="conatiner">
          <div class="card">
               <div class="card-header p-2">
                    Manage Post
               </div>
               <div class="responsive">
                    <table class="table">
                         <thead>
                              <tr class="p-2">
                                   <th>Id</th>
                                   <th>User Id</th>
                                   <th>Body</th>
                                   <th>Title</th>
                                   <th>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                              <tr v-for="postitem in posts" :key="postitem.id">
                                   <td>{{ postitem.id }}</td>
                                   <td>{{ postitem.userId }}</td>
                                   <td>{{ postitem.body }}</td>
                                   <td>{{ postitem.title }}</td>
                                   <td>
                                        <router-link :to="`post-details/${postitem.id}`" class="btn btn-primary">
                                             view
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