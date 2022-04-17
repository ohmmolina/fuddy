<template>
   <nav class="flex justify-between items-center mt-2 h-10 w-100 bg-light text-dark">
      
         <img src="@/assets/logo/fuddyPri.svg" alt="logo" class="relative w-24 ml-6 cursor-pointer">
         <ul class="flex">
            <li v-for="(option, index) in navOptions" :key="index" class="inline-block mr-4 cursor-pointer hover:bg-alt hover:font-bold pl-1 pr-1 rounded-lg">{{ option }}</li>
         </ul>
         <div class="flex items-center">
            <p class="mr-4 p-1 cursor-pointer hover:text-pri hover:underline">Log In</p>
            <div class="mr-6 p-1 rounded-lg gradient outline outline-offset-[-2px] outline-2 text-dark cursor-pointer font-semibold">
            <p class="bg-transparent pl-1 pr-1">Sign Up</p>
            </div>
         </div>
  </nav>
</template>

<script>
export default {
   name: 'Navbar',
   data() {
      return{
         navOptions: ['Profile','Recipes','Ingredients']
      }
   }
}
</script>

<style>
</style>