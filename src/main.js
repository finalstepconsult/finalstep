import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vue2Editor from "vue2-editor";
import AOS from "aos"
import "aos/dist/aos.css"
import VueParticles from 'vue-particles'

//import * as VueAos from 'vue-aos'

Vue.use(Vue2Editor);
Vue.use(VueParticles)

Vue.config.productionTip = false;

new Vue({
  created(){
    AOS.init({disable: "phone"})
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
