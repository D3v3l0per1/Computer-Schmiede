<template>
  <v-parallax dark :src="image">
    <v-layout align-center column justify-center class="content">
      <h1 class="display-2 mb-3" style="background: rgba(0,0,0,.8); padding: 2px 10px; border: 2px solid white;"><span class="font-weight-regular">{{ text }}</span></h1>
      <v-btn flat outline class="white--text" :to="'/' + btn_link">{{ btn_text }}</v-btn>
    </v-layout>
  </v-parallax>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Parallax',
  props: ['text', 'image', 'btn_text', 'btn_link'],
  created () {
    if (this.text !== '') {
      $('.content').hide()
    }
  }
}
</script>
