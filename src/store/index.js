import Vue from 'vue'
import Vuex from 'vuex'
import WidgetStore from './WidgetStore.js'
import WapStore from './WapStore.js'
import userStore from './user.store.js'
import MsgStore from './MsgStore.js'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    WidgetStore,
    userStore,
    WapStore,
    MsgStore
  }
})
