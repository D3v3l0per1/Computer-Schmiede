<template>
  <div>

    <!-- ############ START TOOLBAR ############ -->

    <v-toolbar fixed dark>
    
      <v-toolbar-side-icon @click="sidenav = true"></v-toolbar-side-icon>
      
      <!-- Title -->
      <v-toolbar-title class="hidden-sm-and-down">
        <router-link to="/" tag="span" style="cursor: pointer;">
          <img src="@/assets/logo.png" class="pt-2 pb-1" style="height: 60px;" contain alt="">
        </router-link>
      </v-toolbar-title>


      <v-spacer></v-spacer>
      
      <!-- SignUp & SignIn -->
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left>exit_to_app</v-icon>
          Abmelden
        </v-btn>
      </v-toolbar-items>
    
    </v-toolbar>

    <!-- ############ START TOOLBAR ############ -->

    <!-- ############ START SIDENAV ############ -->

    <v-navigation-drawer dark fixed temporary v-model="sidenav">

      <!-- Title -->
      <v-card class="grey darken-4">
        <img src="@/assets/logo.png" style="width: 100%;" class="pt-3 pb-3">
      </v-card>

      <v-divider></v-divider>

      <!-- Items -->
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>

        <!-- Logout Btn -->
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Abmelden</v-list-tile-title>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <!-- ############ END SIDENAV ############ -->


  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      sidenav: false,
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    menuItems () {
      let menuItems = [
        { title: 'Home', icon: 'dashboard', link: '/' },
        { title: 'Über uns', icon: 'supervisor_account', link: '/about' },
        { title: 'Computerschmiede PC', icon: 'desktop_windows', link: '/computerschmiede-pc' },
        { title: '3D Druck', icon: 'move_to_inbox', link: '/3d-druck' },
        { title: 'Kontakt', icon: 'android', link: '/kontakt' },
        // { title: 'Sign In', icon: 'lock_open', link: '/signin' },
        // { title: 'Sign Up', icon: 'face', link: '/signup' }
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { title: 'Home', icon: 'dashboard', link: '/' },
          { title: 'Über uns', icon: 'supervisor_account', link: '/about' },
          { title: 'Computerschmiede PC', icon: 'desktop_windows', link: '/computerschmiede-pc' },
          { title: '3D Druck', icon: 'move_to_inbox', link: '/3d-druck' },
          { title: 'Kontakt', icon: 'android', link: '/kontakt' },
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
