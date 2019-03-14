<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 v-if="loading" text-xs-center style="margin: 25% 0;">
        <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
      </v-flex>
      <v-flex xs12 v-else>
        <v-card>
          <v-card-title>
            <h1 class="primary--text"> Auftrags ID: <span class="font-weight-light">{{ pcJob.id }}</span></h1>
          </v-card-title>
          <v-divider class="primary"></v-divider>
          <v-card-text>
            <div>
              <p class="subheading mb-0">
                <span class="font-weight-bold">Angefragt am: </span>{{ pcJob.date | date }} <br>
                <span class="font-weight-bold">E-Mail: </span><a :href="'mailto:'+ pcJob.email">{{ pcJob.email }}</a> <br>
                <span class="font-weight-bold">Tel.: </span>{{ pcJob.phone }} <br>
                <span class="font-weight-bold">Gaming/Straming: </span> {{ pcJob.gaming }}% <br>
                <span class="font-weight-bold">Office/Hausgebrauch: </span> {{ pcJob.office }}% <br>
                <span class="font-weight-bold">3D CAD: </span> {{ pcJob.cad }}% <br>
                <span class="font-weight-bold">Videoschnitt: </span> {{ pcJob.video }}% <br>
                <span class="font-weight-bold">Speicherplatz: </span> {{ pcJob.storage }}% <br>
                <span class="font-weight-bold">Budget: </span> {{ pcJob.budget }}% <br>
                <span class="font-weight-bold">Anmerkungen: </span>
              </p>
              <p>
                {{ pcJob.description }}
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ViewpcJob',
  props: ['id'],
  computed: {
    pcJob () {
      return this.$store.getters.loadedPcJob(this.id)
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
