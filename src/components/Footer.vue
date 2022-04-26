<template>
   <footer class="justify-center bg-dark">  
      <div class="flex justify-center pt-2">
         <img v-for="logo in social"
            :key="logo.id"
            :src="logo.url()" 
            :alt="logo.name" 
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
const getUrl = name => new URL(`../assets/social/${name}.svg`, import.meta.url)

const social = [
   {
      id:1,
      name:'facebookAlt',
      url: function(){
         return getUrl(this.name).href
      }
   },
   {
      id:2,
      name:'twitterAlt',
      url: function(){
         return getUrl(this.name).href
      }
   },
   {
      id:3,
      name:'githubAlt',
      url: function(){
         return getUrl(this.name).href
      }
   }
]

const sections = ['About', 'Privacy', 'Terms', 'Jobs'];

</script>

<style>

</style>