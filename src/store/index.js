import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogPosts: [],
    postLoaded: null,
    finalstepBlogHTML: "Write your blog title here...",
    finalstepBlogTitle: "",
    finalstepBlogPhotoName: "",
    finalstepBlogPhotoFileURL: null,
    finalstepBlogPhotoPreview: null,
    editPost: null,
    user: null,
    profileEmail: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
    isAdmin:null,
    selectedCategory: "",
    commentName: "",
    commentEmail: "",
    commentMessage: "",
  },
  getters:{
    blogPostTrending(state){
      return state.blogPosts.slice(0, 3)
    },
  },
  mutations: {
    newBlogPost(state, payload){
      state.finalstepBlogHTML = payload
    },
    newCommentName(state, payload){
      state.commentName = payload
    },
    newCommentEmail(state, payload){
      state.commentEmail = payload
    },
    newCommentMessage(state, payload){
      state.commentMessage = payload
    },

    filterBlogPost(state, payload){
      state.blogPosts = state.blogPosts.filter((post) => post.blogID !== payload)
    },

    updateBlogTitle(state, payload){
      state.finalstepBlogTitle = payload;
    },

    setBlogState(state, payload){
      state.finalstepBlogTitle = payload.blogTitle;
      state.finalstepBlogHTML = payload.blogHTML;
      state.finalstepBlogPhotoFileURL = payload.blogCoverPhoto;
      state.finalstepBlogPhotoName = payload.blogCoverPhotoName;
      state.selectedCategory = payload.category;
    },

    fileNameChange(state, payload){
      state.finalstepBlogPhotoName = payload;
    },

    createFileURL(state, payload){
      state.finalstepBlogPhotoFileURL = payload;
    },

    openPhotoPreview(state){
      state.finalstepBlogPhotoPreview = !state.finalstepBlogPhotoPreview;
    },

    setProfileInfo(state, doc){
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileUsername = doc.data().username;
      state.isAdmin = doc.data().isAdmin;
    },

    setProfileInitials(state){
      state.profileInitials = state.profileUsername.match(/(\b\S)?/g).join("")

    },

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
      commit("setProfileInitials") 
      console.log(dbResults);
    },
    async getPost({state}){
      const dataBase = await db.collection('blogPosts').orderBy('date', 'desc');
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some(post => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCategory: doc.data().category,
            blogTags: doc.data().tags,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
    },

    async getComment({state}){
      const dataBase = db.collection('postComments').orderBy('date', 'desc');
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if(!state.postComments.some(comment => comment.commentID === doc.id)){
          const data = {
            commentID: doc.data().commentID,
            commentName: doc.data().commentName,
            commentEmail: doc.data().commentEmail,
            commentMessage: doc.data().commentMessage,
          };
          state.postComments.push(data)
        }
      });
      state.postLoaded = true;
    },

    async updatePost({commit, dispatch}, payload){
      commit('filterBlogPost', payload);
      await dispatch("getPost");
    },
    async deletePost({commit}, payload) {
      const getPost = await db.collection('blogPosts').doc(payload);
      await getPost.delete();
      commit('filterBlogPost', payload);
    }
  },
  modules: {
  }
})
