<template>
  <v-container>

    <!-- HEADING -->
    <h1 class="display-2">{{ title }}</h1>
    <v-divider class="mt-2 mb-2"></v-divider>

    <!-- Body with Items -->
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="item in items" :key="item.title" class="mt-3" text-xs-center>

        <!-- Image/Icon -->

        <img :src="item.icon" class="teaser-img" alt="">

        <!-- Text Content -->
      
        <div>
          <h5 class="teaser-headline mb-1">{{ item.title }}</h5>
          <p>{{ item.text }}</p>
        </div>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  props: ['title', 'items']
}
</script>

<style scoped>
.teaser {
  margin-top: 20px;
  }

  .teaser-img {
    width: 70px;
    /* height: 64px; */
  }
  
  .teaser-headline {
    font-size: 1.5em;
  }
</style>
