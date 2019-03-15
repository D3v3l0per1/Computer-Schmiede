<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 v-if="loading" text-xs-center style="margin: 25% 0;">
        <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
      </v-flex>
      <v-flex xs12 v-else>
        <v-card>
          <v-card-title>
            <h1 class="primary--text"> Auftrags ID: <span class="font-weight-light">{{ job.id }}</span></h1>
          </v-card-title>
          <v-divider class="primary"></v-divider>
          <v-card-text>
            <div>
              <h2>Kontaktdaten</h2>
              <v-divider class="mb-2"></v-divider>
              <p class="mb-0">
                <span class="font-weight-bold">Angefragt am: </span>{{ job.date | date }} <br>
                <span class="font-weight-bold">E-Mail: </span><a :href="'mailto:'+ job.email">{{ job.email }}</a> <br>
                <span class="font-weight-bold">Tel.: </span>{{ job.phone }} <br>
              </p>
              <h2 class="mt-3">Details</h2>
              <v-divider class="mb-2"></v-divider>
              <p class="mb-2">
                <span class="font-weight-bold">Farbe: </span>{{ job.color }} <br>
                <span class="font-weight-bold">Qualität: </span>{{ job.print_quality }} <br>
              </p>
              <h2>Anmerkungen</h2>
              <v-divider class="mb-2"></v-divider>
              <p class="ml-3" style="white-space: pre-line;">
                {{ job.description }}
              </p>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat class="primary--text" @click="DownloadFile">Download File</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ViewJob',
  props: ['id'],
  metaInfo: {
    title: '3D Druck Auftrag',
    titleTemplate: '%s | Computerschmiede Jenbach'
  },
  computed: {
    job () {
      return this.$store.getters.loadedJob(this.id)
    },
    loading () {
      return this.$store.getters.loading
    },
    userIsAuthentificated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    DownloadFile () {
      window.open(this.job.fileUrl, '_blank')
    }
  }
}
</script>
