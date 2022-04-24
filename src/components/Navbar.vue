<template>
   <nav class="flex justify-between items-center mt-2 h-10 w-100 bg-light text-dark">
         <router-link to = "/">
            <img src="../assets/logo/fuddyPri.svg" alt="logo" class="relative w-24 ml-6 cursor-pointer">
         </router-link>
         <ul class="flex">
            <li v-for="(option, index) in navOptions" :key="index" class="inline-block mr-4 cursor-pointer hover:bg-alt hover:font-bold pl-1 pr-1 rounded-lg">{{ option }}</li>
         </ul>
         <div class="flex items-center">
            <router-link to = "/login">
               <p 
                  class="mr-4 p-1 cursor-pointer hover:text-pri hover:underline">
                  Log In
               </p>
            </router-link>
            <router-link to = "/register">
               <div
                  class="mr-6 p-1 gradientButton text-dark">
                  <p 
                     class="bg-transparent pl-1 pr-1">
                     Sign Up
                  </p>
               </div>
            </router-link>   
         </div>
  </nav>
</template>

<script setup>
const navOptions = ['Profile','Recipes','Ingredients'];
</script>

<style>
</style>