import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogCardTemplate: [
      {blogTitle: "Waec reg is ongoing", blogHeroPhoto: "image 1", blogDatePulished: "May 1, 2021"},
      {blogTitle: "Jam Reprinting have started", blogHeroPhoto: "image 2", blogDatePulished: "May 1, 2021"},
      {blogTitle: "Windows not Booting [SOLVED]", blogHeroPhoto: "image 3", blogDatePulished: "May 1, 2021"},
      //{blogTitle: "SERVER Spec for you bank services", blogHeroPhoto: "image 4", blogDatePulished: "May 1, 2021"},
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileUsername: null,
    profileId: null,
    //profileInitials: null,
  },
  mutations: {
    setProfileInfo(state, doc){
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileUsername = doc.data().username;
    },

    /*setProfileInitials(state){
      state.profileInitials = state.profileUsername.match(/(\b\S)?/g).join("") +
      state.profileEmail.match(/(\b\S)?/g).join("");
    },*/

    updateUser(state, payload){
      state.user = payload;
    },
  },
  actions: {
    //get current user
    async getCurrentUser({commit}) {
      const finalstepDatabase = await db.collection('users').doc(firebase.auth().currentUser.uid);
      const dbResults = await finalstepDatabase.get();
      commit("setProfileInfo", dbResults);
      //commit("setProfileInitials") 
      console.log(dbResults);
    }
  },
  modules: {
  }
})
