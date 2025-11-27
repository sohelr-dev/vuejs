<script setup>
import TeamCard from './TeamCard.vue';

</script>

<template>
     <div class="container m-4 p-2">
          <div class="row">
               <div class="col-md-4">
                    <TeamCard
                    name="SOHEL RANA"
                    designation="Developer"
                    
                    >

               </TeamCard>
               </div>
               <div class="col-md-4">
                    <TeamCard
                    name="Rahat Bhai"
                    designation="Laravel Developer"
                    
                    >
                   
                         <img src="../assets/image/11.jpg" alt="" class="w-25 h-25">
                   
               </TeamCard>
               </div>
               <div class="col-md-4">
                    <TeamCard
                    
                    designation="Developer"
                    
                    >

               </TeamCard>
               </div>
               <div class="col-md-4">
                    <TeamCard
                    name="Roxi "
                    designation="React Developer"
                    photo = ""
                    >

               </TeamCard>
               </div>
          </div>

     </div>
</template>