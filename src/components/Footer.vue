<template>
   <footer class="justify-center bg-dark">
      <div class="flex justify-center bg-transparent p-8">
         <img src="../assets/social/facebookAlt.svg" alt="" class="w-8 mr-10 bg-transparent">
         <img src="../assets/social/twitterAlt.svg" alt="" class="w-8 mr-10 bg-transparent">
         <img src="../assets/social/githubAlt.svg" alt="" class="w-8 bg-transparent">
      </div>
      <div class="flex justify-center bg-transparent">
         <ul class="flex justify-evenly w-1/2 mt-4 bg-transparent font-mina text-xs text-alt">
            <li v-for="(section, index) in sections" :key=index class="bg-transparent">{{section}}</li>
         </ul>
      </div>
      <p class="mt-12 pb-4 bg-transparent text-pri text-center text-[10px]">© 2022 by ohmmolina</p>
   </footer>
</template>

<script setup>
const sections = ['About', 'Privacy', 'Terms of Use', 'Jobs'];
</script>

<style>

</style>