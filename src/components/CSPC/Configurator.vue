<template>
  <div class="text-xs-center">
    <v-dialog persistent scrollable v-model="configurator" max-width="800px">
      <v-btn class="accent" large slot="activator">Jetzt Konfigurator öffnen</v-btn>
      <!-- <form @submit.prevent="onApplyJob"> -->
      <v-card>        
          <v-card-title>
            <h1 class="primary--text font-weight-light">Der PC Konfigurator</h1>
          </v-card-title>
          
          <v-divider></v-divider>

          <v-card-text>

            <v-layout row wrap>

              <v-flex xs12>
                <h2>Kontaktdaten</h2>
                <v-divider class="mt-2 mb-2"></v-divider>
              </v-flex>

              <v-flex xs12 sm6 class="pa-2">
                <v-text-field id="email" v-model="email" label="E-Mail"></v-text-field>
              </v-flex>

              <v-flex xs12 sm6 class="pa-2">
                <v-text-field id="phone" v-model="phone" label="Telefonnummer"></v-text-field>
              </v-flex>

              <v-flex xs12>
                <h2>Bereiche</h2>
                <v-divider class="mt-2 mb-2"></v-divider>
              </v-flex>

              <v-flex xs12 class="mt-3" v-for="slider in sliders" :key="slider.id">
                <v-layout row wrap>
                  <v-flex xs12>
                    <h3 class="grey--text font-weight-light">{{ slider.label }}</h3>
                  </v-flex>
                  <v-layout row wrap class="ml-3 mr-3">
                    <v-flex class="pr-3">
                      <v-slider
                        v-model="slider.slider"
                        :step="10"
                        ticks
                        thumb-label
                      ></v-slider>
                    </v-flex>
                  </v-layout>
                </v-layout>
              </v-flex>

              <v-flex xs12>
                <v-radio-group v-model="pcOrLaptop" :mandatory="false">
                  <v-radio label="Stand PC" value="pc"></v-radio>
                  <v-radio label="Laptop"  value="laptop"></v-radio>
                </v-radio-group>
              </v-flex>

              <v-flex xs12 class="ml-3 mr-3">
                <v-slider v-model="inches" label="Zoll" :disabled="!buyLaptop" :tick-labels="ticksInches" :max="4" step="1"></v-slider>
              </v-flex>

              <v-flex xs12>
                <v-textarea label="Anmerkungen" v-model="description"></v-textarea>
              </v-flex>

            </v-layout>

          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat class="red--text" @click="configurator = false">Schließen</v-btn>
            <v-btn class="primary" :disabled="!formIsValid" @click="onApplyJob">Absenden</v-btn>
          </v-card-actions>
      
      </v-card>
      <!-- </form> -->
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'Configurator',
  data () {
    return {
      configurator: false,
      email: '',
      phone:'',
      pcOrLaptop: 'pc',
      description: '',
      inches: '',
      ticksInches: [
        '12"',
        '13"',
        '14"',
        '15"',
        '17"'
      ],
      sliders: [
        { label: 'Office- und Hausgebrauch', slider: 0 },
        { label: 'Speicherplatz', slider: 0 },
        { label: 'Video- und Bildbearbeitung', slider: 0 },
        { label: 'Gaming', slider: 0 },
        { label: '3D CAD', slider: 0 },
        { label: 'Ästhetik', slider: 0 },
        { label: 'Budget', slider: 0 }
      ]
    }
  },
  computed: {
    formIsValid () {
      return this.email !== '' && this.phone !== '' 
    },
    buyLaptop () {
      return this.pcOrLaptop === 'laptop'
    }
  },
  methods: {
    onApplyJob () {
      if (!this.formIsValid) {
        return
      }
      const jobObj = {
        email: this.email,
        phone: this.phone,
        gaming: this.sliders[0].slider,
        office: this.sliders[1].slider,
        cad: this.sliders[2].slider,
        video: this.sliders[3].slider,
        storage: this.sliders[4].slider,
        budget: this.sliders[5].slider,
        description: this.description,
        date: new Date()
      }  
      // console.log(jobObj)
      this.$store.dispatch('createPcJob', jobObj)
      this.$router.push('/')
    },
  }
}
</script>
