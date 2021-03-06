import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
import * as firebase from 'firebase'
import store from './store/index'
import './registerServiceWorker'

import Heading from '@/components/Shared/Heading'
import AlertCmp from '@/components/Shared/Alert'

import DateFilter from '@/filters/date'

Vue.config.productionTip = false

Vue.component('Heading', Heading)
Vue.component('app-alert', AlertCmp)

Vue.filter('date', DateFilter)

Vue.use(Meta, {
  keyName: 'metaInfo'
})

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyADeAvO4ODZft29Ny13zcx77kub64Hv2Os",
      authDomain: "computerschmiede-jenbach-3f809.firebaseapp.com",
      databaseURL: "https://computerschmiede-jenbach-3f809.firebaseio.com",
      projectId: "computerschmiede-jenbach-3f809",
      storageBucket: "computerschmiede-jenbach-3f809.appspot.com",
      messagingSenderId: "675435528597"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadPrints')
    this.$store.dispatch('loadJobs')
    this.$store.dispatch('loadPcJobs')
    // const messaging = firebase.messaging()
    // messaging.usePublicVapidKey('BBtvozxMSnCE6HAMONnpahTOgdd3O8J_wnVgPuH7vBb-jhBQio_WUFwUKT3c6Wsgd41EFb0w4g5vj2l78f2jOOk')
    // messaging.requestPermission()
    //   .then(() => {
    //     console.log('Notification permisson granted.')
    //     // TOODO(dev): 
    //   })
    //   .catch((err) => {
    //     console.log('Unable to get perms to notify', err)
    //   })
  }
}).$mount('#app')
