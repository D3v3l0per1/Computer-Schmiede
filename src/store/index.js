import Vue from 'vue'
import Vuex from 'vuex'

import prints from './prints/index'
import user from './user/index'
import shared from './shared/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: user,
    prints: prints,
    shared: shared
  }
})
