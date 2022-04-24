import { defineStore } from "pinia";

export const useHomeStore = defineStore("home",{
   state: () =>({
      data: 'Titulo',
      json: null
   }),
   actions: {
      async getJSON(){
         const response = await fetch("http://localhost:5000/");
         const json = await response.json();
         this.json = json;
      }
   }
})