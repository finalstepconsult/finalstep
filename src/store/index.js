import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogCardTemplate: [
      {blogTitle: "Waec reg is ongoing", blogHeroPhoto: "image 1", blogDatePulished: "May 1, 2021"},
      {blogTitle: "Jam Reprinting have started", blogHeroPhoto: "image 2", blogDatePulished: "May 1, 2021"},
      {blogTitle: "Windows not Booting [SOLVED]", blogHeroPhoto: "image 3", blogDatePulished: "May 1, 2021"},
      //{blogTitle: "SERVER Spec for you bank services", blogHeroPhoto: "image 4", blogDatePulished: "May 1, 2021"},
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
