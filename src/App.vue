<template>
  <v-app>
    <Navigation />
  
      <router-view class="mt-5"></router-view>
  
    <Footer />
  </v-app>
</template>

<script>
import Navigation from './components/layouts/Navigation'
import Footer from './components/layouts/Footer'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>
