<script setup>
     defineProps({
          titile:String,
          // price:String
          price:{
               type:String,
               default:0
          },
          button:{
               type:String,
               default:"Get Started"
          },
          primaryClass:{
               class:String,
               default:"btn-primary"
          },
          btnDisable: {
               type: Boolean,
               default: false
          },
          id:Number
     })
</script>
<template>
  <div class="card mb-4 rounded-3 shadow-sm">
    <div class="card-header py-3">
      <h4 class="my-0 fw-normal">{{ titile }}</h4>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title">
        ${{ price }}<small class="text-body-secondary fw-light">/mo</small>
      </h1>
      <slot>
          Same as to card
      </slot>
      <input type="text" name="" id=""  :disabled="btnDisable">
      <router-link :to="`plain-details/${id}`" type="button" :class="`w-100 btn btn-lg btn-outline-primary ${primaryClass}`" >
        {{ button }}
      </router-link>
    </div>
  </div>
</template>
