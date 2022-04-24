<template>
   <Navbar/>
   <div class="text-center">
      Bienvenido {{userSave.email}}
   </div>
</template>

<script>
export default {
   data(){
      return{
         userSave: ''
      }
   },
   created(){
      onAuthStateChanged(auth, (user) => {
         this.userSave = user;
      })
   }}
</script>

<script setup>
import Navbar from '../components/Navbar.vue'

import { useRestrictStore } from '../stores/restrictedComponents'
import { useUserStore } from '../stores/user'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';

const restrictStore =useRestrictStore();
const userStore = useUserStore();

if(userStore.userData){
   restrictStore.setLogin(true)
   restrictStore.setRegister(true)
}
</script>

<style>

</style>