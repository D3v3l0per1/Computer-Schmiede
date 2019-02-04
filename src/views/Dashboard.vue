<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="primary--text font-weight-light">Dashboard</h1>
        <hr class="primary">
      </v-flex>
      <v-flex xs12 sm6 md4 v-for="job in loadedJobs" :key="job.id" class="pa-2">
        <v-card>
          <v-card-text>
            <div>
              <span class="font-weight-bold">E-Mail:</span> {{ job.email }} <br>
              <span class="font-weight-bold">Tel.:</span> {{ job.phone }} <br>
              <span class="font-weight-bold">Farbe:</span> {{ job.color }} <br>
              <span class="font-weight-bold">Qualität:</span> {{ job.print_quality }} <br>
              <!-- <span class="font-weight-bold">E-Mail:</span> {{ job.email }} <br> -->
              <v-btn class="primary" small :to="job.fileUrl">Datei hochladen</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Dashboard',
  metaInfo: {
    title: 'Dashboard',
    titleTemplate: '%s | Computerschmiede Jenbach'
  },
  computed: {
    loadedJobs () {
      return this.$store.getters.loadedJobs
    }
  },
  // methods: {
  //   downloadFile () {
  //     window.open(this.job.fileUrl, '_blank')
  //     // this.$router.go('')
  //   }
  // }
}
</script>
