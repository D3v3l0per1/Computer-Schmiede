<template>
  <div class="particles-header">

    <!-- Heading Text -->
    <div class="header white--text">
      <h1 class="font-weight-thin">{{ title }}</h1>
    </div>

    <!-- Particles -->
    <vue-particles 
      :particleSize="0"
      :lineOpacity="1"
      :clickEffect="true"
      :moveSpeed="2"
      :linesWidth="1"
      :linesDistance="100">
    </vue-particles>
  
  </div>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

export default {
  props: ['title']
}
</script>

<style scoped>
  #particles-js {
    background-image: url('../../assets/galaxy.jpg');
    background-repeat: repeat-x;
    height: 300px;
    border-bottom: 2px solid #3498db;
  }

  .header {
    position: absolute;
    top: 280px;
    left: 2%;
  }

  .header > h1  {
    font-size: 300%;
  }

  /* Media Query for the HEader */
  @media (max-width: 556px) {
    .header {
      top: 300px; 
    }

    .header > h1 {
      font-size: 200%;
    }
  }
</style>
