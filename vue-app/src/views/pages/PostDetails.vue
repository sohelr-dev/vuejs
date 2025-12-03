<script setup lang="ts">
import type { PostFake } from '@/components/interfaces/Post.interfaces';
import defaultPost from '@/components/interfaces/Post.interfaces';
import axios from 'axios';
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route =useRoute();
const queryId =route.params.id

// const postdetails = ref<PostFake | null>(defaultPost);
const postdetails = reactive<PostFake >(defaultPost);

axios.get(`https://jsonplaceholder.typicode.com/posts/${queryId}`)
     .then((res)=>{
          console.log(res);
          if(res.status ===200 || res.status ===201){
               // postdetails.value = res.data;
               //for reactive
               Object.assign(postdetails,res.data);
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
                    Post Details {{ queryId }}
               </div>
               <div class="responsive">
                    <table class="table">
                         <tbody>
                              <tr>
                                  <th>Id</th>
                                   <td>{{ postdetails?.id }}</td>
                              </tr>
                              <tr>
                                  <th>Body</th>
                                   <td>{{ postdetails?.body }}</td>
                              </tr>
                              <tr>
                                  <th>Title</th>
                                   <td>{{ postdetails?.title }}</td>
                              </tr>
                              <tr>
                                  <th>User ID</th>
                                   <td>{{ postdetails?.userId }}</td>
                              </tr>                
                         </tbody>
                    </table>
               </div>
          </div>
     </div>
</template>
