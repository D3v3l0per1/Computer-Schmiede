<template>
  <v-layout row wrap>
    <v-flex xs12 lg6 v-for="pcJob in loadedPcJobs" :key="pcJob.id" class="pa-2">
      <v-card>
        <v-card-title>
          <span class="title">{{ pcJob.date | date }}</span>
          <!-- <span class="title"> <span class="font-weight-bold">ID: </span> <span class="font-weight-light primary--text">{{ job.id }}</span></span>           -->
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="primary" :to="'/pc-jobs/' + pcJob.id">Details</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Dashboard',
  metaInfo: {
    title: 'Dashboard',
    titleTemplate: '%s | Computerschmiede Jenbach'
  },
  computed: {
    loadedPcJobs () {
      return this.$store.getters.loadedPcJobs
    },
    loadedPcJob () {
      return this.$store.getters.loadedPcJob
    }
  }
}
</script>
