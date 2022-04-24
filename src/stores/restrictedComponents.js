import {defineStore} from 'pinia'

export const useRestrictStore = defineStore('restrict', {
   state: () => ({
      register: false,
      login: false,
   }),
   actions:{
      setRegister(boolean){
         this.register = boolean;
      },
      setLogin(boolean){
         this.login = boolean;
      }
   }
})