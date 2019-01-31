<template>
  <div class="particles-cmp">
    <img class="main-logo" src="@/assets/logo.png" alt="">
    <vue-particles :particleSize="0" :lineOpacity="1" :clickEffect="true" :moveSpeed="2" :linesWidth="1" :linesDistance="100">
      
    </vue-particles>
  </div>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

export default {
 
}
</script>

<style scoped>
  #particles-js {
    background-image: url('../../assets/galaxy.jpg');
    background-repeat: repeat-x;
    height: 600px;
    border-bottom: 2px solid #3498db;
  }

  .main-logo {
    width: 30%;
    min-width: 350px;
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
