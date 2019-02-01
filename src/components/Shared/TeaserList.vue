<template>
  <v-container>
    <v-layout row wrap>

      <!-- Start PC Configurator -->
      <v-flex xs12 text-xs-center>

        <v-card class="mb-5">
          <v-card-text>
            <h1 class="font-weight-regular mt-5 mb-5">Der Computer Konfigurator ist in Arbeit ;)</h1>
          </v-card-text>
        </v-card>

      </v-flex>
      <!-- End PC Configurator -->

      <v-flex xs12>
        <v-container>
          
          <v-layout row wrap class="mb-4">

            <!-- Start the Component Block  -->
            <v-flex xs12 v-for="item in blocks" :key="item.title">
              <v-card flat color="grey lighten-5" class="pa-3">
                <v-layout row wrap>

                  <!-- Start Image Part -->
                  <v-flex xs12 sm4>
                    <v-img :src="item.imageUrl" height="200px" contain>
                      <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                        <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
                      </v-layout>
                    </v-img>
                  </v-flex>
                  <!-- End Image Part -->

                  <!-- Start Content Part -->
                  <v-flex xs12 sm7 offset-sm1>
                    <h2>{{ item.title }}</h2>
                    <v-divider class="mb-2 mt-1"></v-divider>
                    <p>{{ item.content }}</p>
                  </v-flex>
                  <!-- End Content Part -->
              
                </v-layout>
              </v-card>
            </v-flex>
            <!-- End the Component Block  -->

          </v-layout>

        </v-container>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>
