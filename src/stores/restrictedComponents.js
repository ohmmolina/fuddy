import {defineStore} from 'pinia'

export const useRestrictStore = defineStore('restrict', {
   state: () => ({
      auth: false,
      accessing: false,
   }),
   actions:{
      setAuth(boolean){
         this.auth = boolean;
      },
      setAccessing(boolean){
         this.accessing = boolean;
      }
   }
})