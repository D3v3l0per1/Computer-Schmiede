<template>
  <v-layout row justify-start>
    <v-dialog v-model="maps" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-btn slot="activator" class="primary" dark>Finden Sie uns hier</v-btn>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="maps = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Finden Sie uns hier</v-toolbar-title>
        </v-toolbar>
        <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d675.1992250571651!2d11.7736794!3d47.3963955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4777d5fd0f49792d%3A0xe768f2e0c8de7368!2sComputerschmiede+Jenbach+e.U.!5e0!3m2!1sde!2sat!4v1536219755177" style="border: 0" allowfullscreen></iframe>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'GoogleMaps',
  data () {
    return {
      maps: false
    }
  }
}
</script>

<style lang="scss" scoped>
.maps {
  border: 0;
  width: 100%;
  height: 100vh;
}
</style>
