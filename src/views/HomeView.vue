<template>
  <Navbar/> 

    <FuddyBanner class="mt-2 tablet:mt-5"></FuddyBanner>
    <HomeBanner class="mt-8 tablet:mt-14"></HomeBanner>

    <Footer class="mt-12 tablet:mt-20"></Footer>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
import FuddyBanner from '../components/FuddyBanner.vue'
import HomeBanner from '../components/HomeBanner.vue'
import Footer from '../components/Footer.vue'

document.title = 'FUDDY - Your kitchen mate'

import { useRestrictStore } from '../stores/restrictedComponents'
import { useUserStore } from '../stores/user'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig';

const restrictStore =useRestrictStore();
const userStore = useUserStore();

restrictStore.setAccessing(false);
restrictStore.setAuth(false);

</script>

<style>
  body{
    background-color: #FBF1F1;
  }
</style>
