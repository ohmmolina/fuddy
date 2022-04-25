<template>
   <footer class="justify-center bg-dark">
      <div class="flex justify-center pt-2">
         <img v-for="(logo, index) in social" :key="index"
            :src="'src/assets/social/'+logo" 
            alt="" 
            class="w-6 mx-4 pt-1 cursor-pointer
            laptop:w-8 laptop:mx-10 laptop:pt-4
            desktop:w-8 desktop:mx-10 desktop:pt-6">
      </div>
      <div class="flex justify-center my-6 laptop:my-8 desktop:my-10">
         <ul
            class="flex justify-evenly font-poppins text-[0.6rem] text-alt
            laptop:text-sm">
            <li
            v-for="(section, index) in sections" :key=index
            class="mx-4 desktop:mx-8"> 
               {{section}}
            </li>
         </ul>
      </div>
      <p class="mt-10 pb-3 text-pri text-center text-[10px]
      laptop:text-xs laptop:mt-10 desktop:mt-16">
         © 2022 by ohmmolina
      </p>
   </footer>
</template>

<script setup>
const social = ['facebookAlt.svg','twitterAlt.svg','githubAlt.svg']
const sections = ['About', 'Privacy', 'Terms', 'Jobs'];
</script>

<style>

</style>