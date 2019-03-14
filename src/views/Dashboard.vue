<template>
  <div class="dashboard">

    <ParticlesHeader title="Dashboard" />

    <v-container>
      <v-layout row wrap>

        <!-- Print Jobs -->

        <v-flex xs12 sm6 class="pa-2">
          <v-layout row wrap>

            <v-flex xs12>
              <h1 class="primary--text font-weight-light">Druck Aufträge</h1>
              <hr class="primary">
            </v-flex>

            <v-flex xs12>
              <AllJobs />
            </v-flex>
          
          </v-layout>
        </v-flex>

        <!-- Computer PC Aufträge -->

        <v-flex xs12 sm6 class="pa-2">
          <v-layout row wrap>

            <v-flex xs12>
              <h1 class="primary--text font-weight-light">PC Konfigurator Aufträge</h1>
              <hr class="primary">
            </v-flex>

            <v-flex xs12>
              <AllPcJobs />
            </v-flex>
          
          </v-layout>
        </v-flex>
      
      </v-layout>
    </v-container>
  </div>
  
</template>

<script>
import ParticlesHeader from '@/components/Shared/ParticlesHeader'
import AllJobs from '@/views/AllJobs'
import AllPcJobs from '@/views/AllPcJobs'

export default {
  components: {
    ParticlesHeader,
    AllPcJobs,
    AllJobs
  }
}
</script>
