<template>
  <div class="container py-4">
    <div class="card">
      <div class="row">

      
      <div class="col-md-6">
        <div class="card-header text-center">User Form (Ref)</div>
  
        <form @submit.prevent="formSubmit">
          
          <!-- Name -->
          <div class="form-floating mb-3">
            <input 
              type="text" 
              v-model="name" 
              class="form-control" 
              placeholder="Your name"
            />
            <label>Your Name</label>
          </div>
  
          <!-- Email -->
          <div class="form-floating mb-3">
            <input 
              type="email" 
              v-model="email" 
              class="form-control" 
              placeholder="Email"
            />
            <label>Email Address</label>
          </div>
  
          <!-- Password -->
          <div class="form-floating">
            <input 
              type="password" 
              v-model="password" 
              class="form-control" 
              placeholder="Password"
            />
            <label>Password</label>
          </div>
  
          <!-- Gender -->
          <div class="m-3">
            <label>Gender: </label>
  
            <div class="form-check mt-2">
              <input 
                class="form-check-input" 
                type="radio" 
                v-model="gender" 
                value="Male"
              />
              <label class="form-check-label">Male</label>
            </div>
  
            <div class="form-check form-check-inline">
              <input 
                class="form-check-input" 
                type="radio" 
                v-model="gender" 
                value="Female"
              />
              <label class="form-check-label">Female</label>
            </div>
          </div>
  
          <!-- Submit -->
          <div class="m-3 text-end">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
  
        </form>

      </div>
      <div class="col-md-6">
        <h1 class="text-center"> Second user Form (Reactive)</h1>
        <form class="m-4" @submit.prevent="formSubmit2">
          
          <!-- Name -->
          <div class="form-floating mb-3">
            <input 
              type="text" 
              v-model="user.title" 
              class="form-control" 
              placeholder="Your name"
            />
            <label>Tittle</label>
          </div>
  
          <!-- detaills -->
          <div class="form-floating mb-3">
            <input 
              type="text" 
              v-model="user.details" 
              class="form-control" 
              placeholder="Email"
            />
            <label>Details</label>
          </div>
  
          <!-- Submit -->
          <div class="m-3 text-end">
            <button class="btn btn-primary" type="submit">Submit</button>
          </div>
  
        </form>

      </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Users } from "@/components/interfaces/User.interfaces";
import { reactive, ref } from "vue";
interface Post{
  title:String;
  details:String;
};
// const user = reactive<Post>({
//   title:'',
//   details:''
// });
const user = reactive<Users>({
  title:'',
  details:''
});
function formSubmit2(){
  console.log("titile:",user.title);
  console.log("details:",user.details);

  console.log("----------------");
}

// form states 
const name = ref({id:1,fullname:"AI Rahat Islam"});
const email = ref("");
const password = ref("");
const gender = ref("");

// submit handler
function formSubmit() {
  console.log("nameID: ", name.value.id);
  console.log("fullname: ", name.value.fullname);
  console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  console.log("Gender:", gender.value);

//   alert("Form submitted successfully!");
}
</script>

<style scoped>
</style>
