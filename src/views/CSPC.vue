<template>
  <div class="cspc">
    
    <ParticlesHeader title="Der Schmiede PC" />

    <Parallax />

  </div>
</template>

<script>
import ParticlesHeader from '@/components/Shared/ParticlesHeader'
import Parallax from '@/components/CSPC/Parallax'

export default {
  name: 'CSPC',
  metaInfo: {
    title: 'Computerschmiede PC',
    titleTemplate: '%s | Computerschmiede Jenbach'
  },
  components: {
    ParticlesHeader,
    Parallax
  }
}
</script>
