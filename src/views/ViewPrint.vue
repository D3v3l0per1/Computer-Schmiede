<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 v-if="loading" text-xs-center style="margin: 25% 0;">
        <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
      </v-flex>
      <v-flex xs12 v-else>
        <v-card>
          <v-card-title>
            <h1 class="primary--text">{{ print.title }}</h1>
          </v-card-title>
          <v-divider></v-divider>
          <v-img :src="print.imageUrl" style="max-height: 600px;">
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
               <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
            </v-layout>
          </v-img>
          <v-divider class="primary"></v-divider>
          <v-card-text>
            <div>
              <p class="font-italic">Gepostet am <span class="font-weight-bold">{{ print.date | date }}</span></p>
              <v-divider class="mb-3"></v-divider>
              <p style="white-space: pre;">{{ print.description }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ViewPrint',
  props: ['id'],
  computed: {
    print () {
      return this.$store.getters.loadedPrint(this.id)
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
