<script >
export default{
  setup(){
      const title = "Isdb-Welcome";
      const desc = "WDPF-65";
      const round = true;
      const trainees = ['Hakim','rakib','sofiqur','rasel'];
      const link = 'https://sohelit.com/eventhub';
      const test = ()=>{
        alert("Test Clicked")
      }
      return {title,desc,round,trainees,link,test};
      
    
  }
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      {{title}}
      <a :href="link" :target="_blank">Vist wbsite</a>
    </div>
  </header>

  <main>
    <h1> {{desc}}</h1>
    <div>
      <span v-if="round">Active</span>
      <span v-else="round">inactive</span>
    </div>
    <div>
      <ul>
        <li v-for="trainee in trainees" :key="trainee">{{ trainee }}</li>
      </ul>
    </div>
    <button type="button" @click="test">Click to test</button>
    <button type="button" @mouseover="test">Click to mousedown</button>
  </main>
</template>

<style scoped>
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