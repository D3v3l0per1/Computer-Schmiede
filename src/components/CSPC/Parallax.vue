<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-parallax v-for="item in blocks" :key="item.title" :src="item.background" height="700">
        <v-container>
          <v-layout row wrap justify-start>
            <v-flex xs12 sm8 md4 :class="item.class + ' pa-3 custom-parallax-container'" style="margin-top: 8%;" text-xs-center>
              <div>
                <img :src="item.imageUrl" style="height: 200px;" class="mt-3 mb-3" alt="">
                <h3 class="font-weight-regular grey--text text--lighten-1 mb-2">{{ item.title }}</h3>
                <p class="subheading">{{ item.content }}</p>
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
  data () {
    return {
      blocks: [
        {
          title: 'CPU (Prozessor)',
          content: 'Hierbei handelt es sich um das Herzstück eines jeden Computers. Wir achten bei der Auswahl auf hohe Leistung für Ihre eingesetzen Programme und Zukunftssicherheit.',
          class: 'offset-sm6',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fcpu.png?alt=media&token=3ae4498b-9ccf-4b11-9c1b-72c5477f4955', 
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2FIMG_20181130_1121381.jpg?alt=media&token=062c984a-8138-4cba-8c3d-c06d0a47fe69'
        },
        {
          title: 'Mainboard',
          content: 'Das Mainboard stellt die Kommunikation zwischen den Komponenten sicher und stellt die Basis für jeden PC dar. Wir wählen Boards mit hoher Zuverlässigkeit und guter Aufrüstbarkeit.',
          class: '',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fmainboard.png?alt=media&token=1fc08363-5994-4f47-a3c8-f5f9cd7bf61f',
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2FIMG_20181127_1316142.jpg?alt=media&token=13c16321-3ab0-4db0-a378-8e27d73c4c67'
        },
        {
          title: 'Gehäuse',
          content: 'Gute Kühlung der Komponenten spielt eine wichtige Rolle für deren Lebensdauer. Unsere Kunden haben zudem eine große Auswahl an individuellen Designs.',
          class: 'offset-sm6',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fcase.png?alt=media&token=600412d0-d398-40c2-be9b-3be6581f78ed',
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2FIMG_20180706_2308384.jpg?alt=media&token=0d30a01d-4484-4d9e-a401-359241b4fc70'
        },
        {
          title: 'RAM (Arbeitsspeicher)',
          content: 'Der RAM muss groß genug gewählt werden, um Sie beim Arbeiten oder Spielen nicht auszubremsen.',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fram.png?alt=media&token=11709ed7-3bb2-4ea2-a412-7e83a5136cbb',
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2FDSC_6629%20(2).JPG?alt=media&token=ef26780c-b1e8-4d04-8a95-f4455b2e8929'
        },
        {
          title: 'Grafikkarte',
          content: 'Um Ihre Spiele oder 3D/Videoanwendungen optimal zu beschleunigen haben wir die richtige Grafikkarte für Ihren PC',
          class: 'offset-sm6',
          imageUrl: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fgraka.png?alt=media&token=4bf34f5c-912d-4785-8f50-dce73af20bd9',
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fgrakaa.png?alt=media&token=01a8e55b-31f0-4f83-b013-ec35bae2660f'
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
