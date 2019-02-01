<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 class="pa-2" v-for="print in prints" :key="print.id">
      <v-card>
        <v-img :src="print.imageUrl">
          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate class="primary--text"></v-progress-circular>
          </v-layout>
        </v-img>
        <v-divider></v-divider>
        <v-card-title>
          <div style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
            <h2 class="primary--text" style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">{{ print.title }}</h2>
            <!-- <span class="font-weight-bold">Datum: </span> Lol -->
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="primary--text" :to="'/3d-druck/' + print.id">Mehr dazu</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['prints']
}
</script>
