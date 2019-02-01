<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg4>
        <div>
          <h1 class="mb-2">Computerschmiede Jenbach</h1>
          <p>
            <strong>Adresse:</strong> Huberstraße 41, 6200 Jenbach <br>
            <strong>Tel.:</strong> +43 699 11 77 1000 <br> 
            <strong>Email:</strong> office@computerschmiede-jenbach.at <br><br> 
          </p>
          <h1 class="mb-2">Öffnungszeiten</h1>
          <p>
            Mo: 9:00 - 12:00 / 13:00 - 18:30 <br>
            Di: 9:00 - 12:00 / 13:00 - 18:30 <br>
            Mi: 13:00 - 18:30 <br>
            Do: 9:00 - 12:00 / 13:00 - 18:30 <br>
            Fr: 9:00 - 12:00 / 13:00 - 18:30 <br>
            Sa: 9:00 - 13:00 <br>

          </p>
          <GoogleMaps />
        </div>
      </v-flex>
      <v-flex xs12 sm6 md8 lg4>
        <v-img src="https://media.firmenabc.at/pictures/f8f96e0f-8813-4e1c-a773-a164a0748159B1-650.jpg">
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
          </v-layout>
        </v-img>
      </v-flex>
      <v-flex xs12 lg4>
        <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d675.1992250571651!2d11.7736794!3d47.3963955!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4777d5fd0f49792d%3A0xe768f2e0c8de7368!2sComputerschmiede+Jenbach+e.U.!5e0!3m2!1sde!2sat!4v1536219755177" style="border: 0" allowfullscreen></iframe>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import GoogleMaps from '@/components/Contact/Maps'

export default {
  name: 'ContactContent',
  components: {
    GoogleMaps
  }
}
</script>

<style scoped>
  .maps {
    width: 100%;
    height: 400px;
  }
</style>
