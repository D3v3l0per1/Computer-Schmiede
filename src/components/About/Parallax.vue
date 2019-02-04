git d<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-parallax v-for="item in parallax_items" :key="item.title" :src="item.background">
        <v-container>
          <v-layout row wrap justify-start>
            <v-flex xs12 sm8 md4 :class="item.class + ' mt-5 pa-3 custom-parallax-container'" text-xs-center>
              <div>
                <img :src="item.icon" style="height: 100px;" alt="">
                <h3 class="font-weight-regular grey--text text--lighten-1 mb-2">{{ item.title }}</h3>
                <p class="subheading">{{ item.text }}</p>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-parallax>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  // props: ['parallax_items'],
  data () {
    return {
      parallax_items: [
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_1.png?alt=media&token=8ba5577a-6d6d-4671-94a9-a7fa0348d5aa',
          class: 'offset-sm4 offset-md8',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-1-1.png?alt=media&token=876735db-f07f-4d1b-8a45-7b732700887f',
          title: 'Persönliche Beratung im Geschäft',
          text: 'Wir bieten persönliche, ehrliche und unabhängige Beratung rund um den Computer.'
        },
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2FIMG_20190118_19412%C2%A75.jpg?alt=media&token=2936b046-7647-4bf3-9e4e-bfc3cf18e7ea',
          class: '',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-2-1.png?alt=media&token=f061f5c3-d567-45bc-aab5-d76620781486',
          title: 'Computer Service & EDV Dienstleistungen',
          text: 'Wir bieten bei anfallenden Servicefällen Rat und Information, sowie Hilfestellung für weitere Lösungsansätze. Gewisse Reparaturen werden in der hauseigenen Werkstatt durchgeführt.'
        },
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_3.png?alt=media&token=1c896c0e-350a-45ff-a941-57990d86e03a',
          class: 'offset-sm4 offset-md8',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-4-1.png?alt=media&token=ec137379-ea10-421d-bae6-02eaf45cd439',
          title: 'Kompetentes Team mit langjähriger Erfahrung',
          text: 'Wir stehen mit über 17 Jahren Erfahrung, bei Fragen rund um Produkte sowie bei Computerproblemen behilflich zur Seite.'
        },
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_4.png?alt=media&token=e6ada9b1-ad6d-4011-8aa2-392c1af4b9fb',
          class: '',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-5-1.png?alt=media&token=21b50f74-4301-4a69-917c-72c8392a507b',
          title: 'Verwendung von qualitativ hochwertigen Markenprodukten',
          text: 'Bei der Auswahl von Hardware setzen wir auf qualitativ hochwertige Produkte.'
        },
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_2.png?alt=media&token=b6ffbe8e-22fd-4d25-9d53-db66bf4de2a4',
          class: 'offset-sm4 offset-md8',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-6-1.png?alt=media&token=fc11f633-5beb-4a4a-8f80-e75dcb750944',
          title: 'Individuelle Lösungen und kostengünstige Varianten.',
          text: 'Wir beraten Sie gerne individuell über Ihr neues PC-System und können ein ihren Anforderungen entsprechendes Produkt empfehlen.'
        },
        {
          
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2F20180117_2004210.jpg?alt=media&token=6fbdfb5d-fca5-4d20-8a86-da80bde129b3',
          class: '',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-7-1.png?alt=media&token=0bc9fce7-8043-4f0e-9e00-172935c5e589',
          title: 'Wir sind für Sie da - auch nach dem Kauf',
          text: 'Nicht nur beim Kauf, sondern auch im Servicefall stehen wir unseren Kunden mit Rat und Tat zur Seite und unterstützen Sie gerne.'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .custom-parallax-container {
    background-color: rgba(0,0,0,.8);
    /* max-width: 500px; */
    border: 1px solid white;
  }
</style>
