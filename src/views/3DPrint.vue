<template>
  <div class="3dprint">
    
    <ParticlesHeader title="3D Druck" />

    <v-container>
      
      <v-layout row wrap>
        <v-flex xs12>
          <v-responsive>

            <h3 class="display-3">3D Druck</h3>

            <span class="subheading">Wir fertigen für Sie kleinere 3D Drucke an. Übermitteln Sie einfach Ihr Modell und wir setzen uns mit Ihnen in Verbindung.</span>

            <v-divider class="my-3"></v-divider>

            <v-flex xs12 sm8 offset-sm2 text-xs-center class="mt-4 mb-5">
              <SignUpForPrint />
              <!-- <v-btn dark class="blue lighten-2" large block>Uploaden</v-btn> -->
            </v-flex>

          </v-responsive>
        </v-flex>

        <v-flex xs12>
          <Heading title="Beispiele" />
        </v-flex>

        <v-flex xs12 text-xs-center v-if="loading">
          <v-progress-circular indeterminate class="primary--text" style="margin: 20% 0;"></v-progress-circular>
        </v-flex>

        <v-flex xs12 text-xs-right v-if="userIsAuthentificated">
          <v-btn large class="primary" to="3d-druck/neu">Neues Beispiel</v-btn>
        </v-flex>

        <Prints v-if="!loading" :prints="prints" />

      </v-layout>

    </v-container>

  </div>
</template>

<script>
import ParticlesHeader from '@/components/Shared/ParticlesHeader'
import Prints from '@/components/3DPrint/3DPrints'
import SignUpForPrint from '@/components/3DPrint/SignUpForPrint'

export default {
  name: 'ThreeDPrint',
  metaInfo: {
    title: '3D Druck',
    titleTemplate: '%s | Computerschmiede Jenbach'
  },
  components: {
    ParticlesHeader,
    Prints,
    SignUpForPrint
  },
  computed: {
    prints () {
      return this.$store.getters.loadedPrints
    },
    loading () {
      return this.$store.getters.loading
    },
    userIsAuthentificated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  }
}
</script>
