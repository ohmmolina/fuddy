<template>
   <nav
   :class="'sticky flex justify-between items-center top-0 py-2 min-h-10 max-h-20 '+navColors">
      <router-link to = "/">
         <img
         :src="imgLogo"
         alt="logo"
         class="relative w-16 ml-4 cursor-pointer
         tablet:w-20 tablet:ml-6
         laptop:w-24 laptop:ml-8
         desktop:w-28 desktop:ml-12">
      </router-link>
      <ul
      class="flex"
      v-if="restrictStore.auth">
         <li v-for="(option, index) in navOptions" :key="index" class="inline-block mr-4 cursor-pointer hover:bg-alt hover:font-bold pl-1 pr-1 rounded-lg">
            {{ option }}
         </li>
      </ul>
      <div
      class="flex items-center text-xs laptop:text-md desktop:text-lg"
      v-if="!restrictStore.auth ^ restrictStore.accessing">
         <router-link to = "/login">
            <p 
            class="mr-1 p-1 cursor-pointer hover:text-pri hover:underline
            tablet:mr-2
            laptop:mr-6
            desktop:mr-8">
               Log In
            </p>
         </router-link>
         <router-link to = "/register">
            <div
            class="mr-4 p-1 gradientButton text-dark
            tablet:mr-8 laptop:mr-12 desktop:mr-20">
               <p 
               class="px-1 tablet:px-2 laptop:px-3 laptop:py-1 desktop:px-4">
                  Sign Up
               </p>
            </div>
         </router-link>   
      </div>
      <div
      :class="display"
      v-else
      @click="userStore.logoutUser">
         <p 
         class="mr-4 p-1 cursor-pointer hover:text-pri hover:underline">
            Log Out
         </p>
      </div>
  </nav>

</template>

<script setup>
const navOptions = ['Profile','Recipes','Ingredients'];
const fuddyPry = new URL('../assets/logo/fuddyPri.svg', import.meta.url).href;
const fuddyLight = new URL('../assets/logo/fuddyLight.svg', import.meta.url).href;



import { useUserStore } from '../stores/user';
import { useRestrictStore } from '../stores/restrictedComponents';

const userStore = useUserStore();
const restrictStore = useRestrictStore();

var navColors = 'bg-light text-dark';
var imgLogo = fuddyPry;
var display = '';

if (restrictStore.accessing){
   navColors = 'text-ligth bg-dark';
   imgLogo = fuddyLight;
   display = 'invisible';
}
</script>

<style>
</style>