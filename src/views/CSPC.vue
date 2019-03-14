<template>
  <transition name="AnimateRoute" enter-active-class="animated fadeIn">
    <div class="cspc">
      
      <ParticlesHeader title="Computerschmiede PCs und Laptops" />

      <v-container>
        <v-responsive>

          <h3 class="display-3">Ein Schritt zu Ihrem Wunschgerät</h3>

          <span class="subheading">Hier können Sie uns in wenigen Kategorien Ihre Anforderungen an das Gerät mitteilen, damit wir Sie anschließend genauer beraten können.</span>

          <v-divider class="my-3"></v-divider>

          <v-flex xs12 sm8 offset-sm2 text-xs-center class="mt-4 mb-5">
            <Configurator />
          </v-flex>

        </v-responsive>
      </v-container>

      <Parallax />

    </div>
  </transition>
</template>

<script>
import ParticlesHeader from '@/components/Shared/ParticlesHeader'
import Configurator from '@/components/CSPC/Configurator' 
import Parallax from '@/components/CSPC/Parallax'

export default {
  name: 'CSPC',
  metaInfo: {
    title: 'Computerschmiede PC',
    titleTemplate: '%s | Computerschmiede Jenbach'
  },
  components: {
    ParticlesHeader,
    Configurator,
    Parallax
  }
}
</script>
