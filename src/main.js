import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import AOS from "aos"
import "aos/dist/aos.css"
import VueParticles from 'vue-particles'
//import VueMarquee from 'vue-marquee-component'
import firebase from "firebase/app";
import "firebase/auth";


Vue.use(Vue2Editor)
Vue.use(VueParticles)
//Vue.use(VueMarquee)

Vue.config.productionTip = false;


let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    new Vue({
      created(){
        AOS.init({disable: "phone"})
      },
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
    
  }
})



//import * as VueAos from 'vue-aos'


