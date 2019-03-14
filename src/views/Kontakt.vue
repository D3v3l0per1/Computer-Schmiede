<template>
  <transition name="AnimateRoute" enter-active-class="animated fadeIn">
    <div class="kontact">
 
      <ParticlesHeader title="Treten Sie mit uns in Kontakt" />

      <ContactContent />

    </div>
  </transition>
</template>

<script>
import ParticlesHeader from '@/components/Shared/ParticlesHeader'
import ContactContent from '@/components/Contact/Content'

export default {
  name: 'Kontakt',
  metaInfo: {
    title: 'Kontakt',
    titleTemplate: '%s | Computerschmiede Jenbach'
  },
  components: {
    ParticlesHeader,
    ContactContent
  }
}
</script>
