<template>
  <transition name="AnimateRoute" enter-active-class="animated fadeIn">
    
    <div class="about">
      <ParticlesHeader title="Wilkommen in der Schmiede" />

      <Parallax parallax_items="parallax_items" />
    </div>

  </transition>
</template>

<script>
import ParticlesHeader from '@/components/Shared/ParticlesHeader'
import Parallax from '@/components/About/Parallax'

export default {
  name: 'Ueber_uns',
  metaInfo: {
    title: 'Über uns',
    titleTemplate: '%s | Computerschmiede Jenbach'
  },
  components: {
    ParticlesHeader,
    Parallax
  }
}
</script>
