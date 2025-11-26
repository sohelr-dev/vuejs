<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header text-center">User Form</div>

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
  </div>
</template>

<script setup>
import { ref } from "vue";

// form states
const name = ref("");
const email = ref("");
const password = ref("");
const gender = ref("");

// submit handler
function formSubmit() {
  console.log("Name:", name.value);
  console.log("Email:", email.value);
  console.log("Password:", password.value);
  console.log("Gender:", gender.value);

//   alert("Form submitted successfully!");
}
</script>

<style scoped>
</style>
