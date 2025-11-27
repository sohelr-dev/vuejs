<script setup>
defineProps({
     name:{
          type:String,
          default:"N/A"
     },
     designation:{
          type:String,
          default:"Worker"
     },
     
     
})

</script>
<template>
  <div class="card" style="width: 18rem">
    <slot>
     

    </slot>
    <div class="card-body">
      <h5 class="card-title">{{name}}</h5>
      <p class="card-text">
        {{ designation }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<style scoped></style>
