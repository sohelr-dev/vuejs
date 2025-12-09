<script setup lang="ts">
import { useUserStore } from '@/store/user';

import { reactive, ref } from 'vue';

interface User{
     id:number;
     name:string;
}
const userData =useUserStore();

// const user =ref<User>({
//      id : userData.user.id,
//      name : userData.user.name,
// })
const user =ref<User>(userData.user);

console.log(user);


function formSubmit(){
     console.log(user.value);
     userData.user =user.value;
     userData.setLocal();
}



</script>
<template>
     <div class="container">
          <h1 class="text-center">User Create {{ user }}</h1>
          <div class="card">
               <form @submit.prevent="formSubmit">
                    <div class="mt-2">
                         <label for="userId" class="form-label">Id</label>
                         <input type="text" v-model="user.id"  id="userId" class="form-control">
                    </div>
                    <div class="mt-2">
                         <label for="body" class="form-label">Name</label>
                         <input type="text" v-model="user.name" id="body" class="form-control">
                    </div>
                    
                    <div class="mt-2 text-end">
                         <button type="submit" class="btn btn-primary ">Create User</button>
                    </div>
               </form>
          </div>
     </div>
</template>