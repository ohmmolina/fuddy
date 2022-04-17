<template>
  <Navbar/>
  <HomeMain/>
  <Footer/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import HomeMain from '@/components/HomeMain.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar,
    HomeMain,
    Footer,
  },
  mounted() {
    document.title = 'FUDDY - Your kitchen mate'
  }
}
</script>

<style>
  *{
    background-color: #FBF1F1;
  }
</style>
