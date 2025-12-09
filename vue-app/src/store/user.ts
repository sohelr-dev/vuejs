import { defineStore } from "pinia";

export const useUserStore = defineStore('user',{
     state: ()=>{
          const saveData= localStorage.getItem('user');
          return{
               user: saveData?JSON.parse(saveData) :{id:1,name:"Sohel"}
          }
           
     },
     actions: {
          setLocal(){
                localStorage.setItem('user',JSON.stringify(this.user));
          }
     },
     
});