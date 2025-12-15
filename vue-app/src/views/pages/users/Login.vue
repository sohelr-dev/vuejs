<script setup lang="ts">

// import api from '@/config/config';
// import { useAuthStore } from '@/store/auth';
import type { Users } from '@/components/interfaces/User.interfaces';
import defaultUsers from '@/components/interfaces/User.interfaces';
import { api } from '@/routes/api';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


  const form = reactive<Users>(defaultUsers);
  const errorMgs = reactive({
    'email':"",
    'password':"",
  })
  const router =useRouter();
//   const auth =useAuthStore();
  // console.log(auth.token);
  
  

  function handleLogin(){
    // console.log(form);
    api.post('login',form)
    .then((response)=>{
      console.log(response.data);
      if(response.data){
        console.log(response.data);
        localStorage.setItem('token',response.data.token);

        
        router.replace('/');
        alert('login successful');
      }else{
        alert('Login failed.');
      }
    })
    .catch((error)=>{
      // console.error(error);
      if(error.response.status ===422){
        errorMgs.email = error.response.data.errors.email[0];
        errorMgs.password = error.response.data.errors.password[0];
        alert('login failed .Please check your credentials');
      }
      if(error.response.status ===401){
        console.log(error.response);
        if(error.response.data.email){
          errorMgs.email = error.response.data.email;

        }else if(error.response.data.password){
          errorMgs.password = error.response.data.password;
        }
        // alert('login failed .Please check your credentials');
      }
    })

  }

  function validation(){
    const regExp = /^['a-zA-Z0-9._']{2,63}@[a-zA-Z0-9]{2,63}.[a-zA-Z]{2,5}$/;
    
    if(form.email ===''){
      errorMgs.email = "this filed is required";
    }else if(!regExp.test(String(form.email))){
      errorMgs.email = "Email is invalid";
    }else{
      errorMgs.email = "";
    }
    if(form.password ===''){
      errorMgs.password = "Password filed is required";
    }else{
      errorMgs.password = "";
    }
    if(errorMgs.email=='' && errorMgs.password==''){
      handleLogin();
    }
  }

</script>
<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card shadow p-4 login-card">

      <h3 class="text-center mb-4">Login</h3>

      <form @submit.prevent="validation">

        <div class="mb-3">
          <label>Email</label>
          <input
            type="text"
            v-model="form.email"
            class="form-control"
            placeholder="Enter your email"
            
          />
        </div>
        <span class="text-danger">{{ errorMgs.email }}</span>

        <div class="mb-3">
          <label>Password</label>
          <input
            type="password"
            v-model="form.password"
            class="form-control"
            placeholder="Enter your password"
            
          />
        </div>
        <span class="text-danger">{{ errorMgs.password }}</span>
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </form>
      <div class="text-center mt-3">
        Don't have an account? <router-link to="/register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-card {
  max-width: 400px;
  width: 100%;
  border-radius: 12px;
}

@media (max-width: 576px) {
  .login-card {
    padding: 20px;
  }
}
</style>
