<template>
  <v-dialog persistent v-model="signUpDialog">
    <v-btn class="accent" large slot="activator">3D Modell senden</v-btn>
    <v-card>
      <form @submit.prevent="onSignUpAndUploadFile">
        <v-layout row wrap>
          <v-card-text>
            <v-flex xs12>
              <h1 class="font-weight-thin blue--text text--lighten-2">3D Druckauftrag übermitteln </h1>
            </v-flex>
          </v-card-text>

          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm6 class="pa-2">
                <v-text-field name="email" id="email" v-model="email" label="E-Mail Adresse" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 class="pa-2">
                <v-text-field name="phone" id="phone" v-model="phone" label="Telefonnummer *" required></v-text-field>
              </v-flex>
              <v-flex xs12 class="pr-3 pl-3">
                <h3 class="headline">Farben & Materialien</h3>
                <v-slider v-model="color" :tick-labels="ticksLabelsColors" :max="2" step="1" ticks="always" tick-size="2"></v-slider>
                <v-text-field label="Eigene Farbe" :disabled="color !== 2" v-model="custom_color"></v-text-field>
                <!-- <v-text-field name="alternate_color" id="alternate_color" v-model="alternate_color" label="Ihr Wunsch:"></v-text-field> -->
              </v-flex>
              <v-flex xs12 class="pr-3 pl-3">
                <h3 class="headline">Druckqualität</h3>
                <v-slider v-model="print_quality" :tick-labels="ticksLabelsQualities" :max="2" step="1" ticks="always" tick-size="2"></v-slider>
              </v-flex>
              <v-flex xs12 class="pr-3 pl-3">
                <v-textarea  name="description" id="description" v-model="description" label="Anmerkungen"></v-textarea>
              </v-flex>
              <v-flex xs12 class="pr-3 pl-3">
                <v-btn color="accent" @click="onPickFile">Datei hochladen</v-btn>
                <input type="file" style="display: none;" ref="fileInput" accept="*" @change="onFilePicked">
              </v-flex>
              <v-flex xs12>
                <small>* Telefonnummer optional für schnellere Reaktionszeit angeben </small>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          
          <v-card-actions>
            <v-btn flat class="red--text darken-1" @click="signUpDialog = false">Schließen</v-btn>
            <v-btn flat class="blue--text darken-1" :disabled="!formIsValid"  type="submit">Absenden</v-btn>
          </v-card-actions>
        </v-layout>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      signUpDialog: false,
      ticksLabelsColors: [
        'weißes PLA, matt',
        'schwarzes PLA, matt',
        'andere'
      ],
      ticksLabelsQualities: [
        'Fein',
        'Standard',
        'Entwurf'
      ],
      email: '',
      phone: '',
      color: '',
      custom_color: '',
      print_quality: '',
      description: '',
      file: null
    }
  },
  computed: {
    formIsValid () {
      return this.email !== '' && this.phone !== '' 
    }
  },
  methods: {
    onSignUpAndUploadFile () {
      if (!this.formIsValid) {
        return
      }
      const applyPrint = {
        email: this.email,
        phone: this.phone,
        color: this.color,
        custom_color: this.custom_color,
        print_quality: this.print_quality,
        description: this.description,
        file: this.file,
        date: new Date()
      }
      console.log(applyPrint)
      this.$store.dispatch('createJob', applyPrint)
      this.$router.push('/')
      // this.signUpDialog = false
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.fileUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.file = files[0]
    }
  }
}
</script>

<style>
  .v-dialog {
    max-width: 500px;
    width: 100%;
  }
</style>
