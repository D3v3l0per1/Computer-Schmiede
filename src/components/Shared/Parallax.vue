<template>
  <v-parallax :src="image"></v-parallax>
</template>

<script>
export default {
  name: 'Parallax',
  props: ['image'],
}
</script>
