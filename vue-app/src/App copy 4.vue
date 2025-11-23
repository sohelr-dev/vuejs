<script setup>
import { ref } from 'vue';
import src from './assets/image/image2.jpg';
import src2 from '/public/16.jpg';


  const title = "Isdb-Welcome";
  const desc = "WDPF-65";
  const round = true;
  const trainees = ['rokki','rakib','sofiqur','rasel'];
  const link = 'https://sohelit.com/eventhub';
  const test = ()=>{
    alert("Test Clicked")
  }
  const count=ref(0);
  const plus=()=>{
    count.value++;
    console.log(count.value);

  }
  const minus=()=>{
    count.value--;
  }

 const status = ref(true);
 const changestatus =ref("active");
  const changetogle=()=>{
    if(status.value){
      changestatus.value = 'active'
    }else{
      changestatus.value = 'inactive'
    }
    console.log(changestatus.value);


  }
</script>

<template>
  <div class="container-fluid">
    <header>
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  
      <div class="wrapper text-end">
        {{title}}
        <a :href="link" target="_blank">Vist wbsite</a>
      </div>
    </header>
    <div class="container mt-4">
      <section class="container gap-2">
        <img src="./assets/image/image.jpg" alt="img" class="img w-25 h-50">
        <img src="./assets/image/image2.jpg" alt="img" class="img w-25 h-25">
        <img src="/10.jpg" alt="img" class="img w-25 h-25">
        <img src="/public/15.jpg" alt="img" class="img w-25 h-25">
        <img :src="src2" alt="" class="img img-cover h-25 w-25">
      </section>

    </div>
  
    <main>
      <h2>
        {{ count }}
        <button type="button" @click="plus">Incriment</button>
        <button type="button" @click="minus">Discriment</button>
      </h2>
      <h1> {{desc}}</h1>
      <div >
        status : {{ changestatus }}
         <button type="button" @click="changetogle" >Click</button>
        <div class="bg-secondary">
          Round :
          <span v-if="round">Active</span>
          <span v-else="round">inactive</span>
        </div>
      </div>
      <div>
        <ul>
          <li v-for="trainee in trainees" :key="trainee">{{ trainee }}</li>
        </ul>
      </div>
      <button type="button" @click="test">Click to test</button>
      <button type="button" @mouseover="test">Click to mousedown</button>
    </main>

  </div>
</template>

<style >
  /* @import './assets/cusom.css'; */
  
  .img-wrap{
    display: flex;
    gap: 2px;
    height: 200px;
  }
  .img-wrap img{
    width: 200px;
    height: 200px;
  }
  header{
    background-color: rgb(111, 148, 136);
  }
  header {
    line-height: 1.5;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>