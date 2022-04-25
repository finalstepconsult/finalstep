<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation class="navbarApp" v-if="!navigation"/>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.fullPath">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
      <Footer v-if="!navigation"/>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Navigation from '@/components/appComponent/Navbar.vue'
import Footer from '@/components/appComponent/Footer.vue'
export default {
  name: "app",
  components: {Navigation, Footer},
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if(user){
        this.$store.dispatch("getCurrentUser");
      }
    })
    this.checkRoute();
    //console.log(firebase.auth().currentUser)
  },
  mounted() {},
  methods: {
    checkRoute(){
      if (this.$route.name === 'Login' ||
      this.$route.name === 'Register' ||
      this.$route.name === 'ForgetPassword'){
        this.navigation = true;
        return;
      }this.navigation = false;
    }
  },
  watch: {
    $route() {
      this.checkRoute()
    }
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import "@/assets/scss/variable.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  //overflow-x: hidden;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  //border: 2px solid $primaryColor;
  background-color: $secondaryColor;
  //margin: 0px 20px;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.navbarApp{
  z-index: 88888;
}


.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

  .fade-enter-active,
  .fade-leave-active{
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to{
    opacity: 0;
  }
  


  .slide-leave-active{
    transition: 1s;
  }
  .slide-enter{
    transform: translateX(100);
  }
  .slide-enter-to{
    transform: translateX(0);
  }
  .slide-leave-to{
    transform: translate(-100%, 0);
  }

.page-animation-enters,
.page-animation-leaves{
  transition: 3s ease-in-out;
}

.page-animation-leaves{
  transition: 7s ease-out;
}

ul li a {
  list-style: none !important;
  text-decoration: none;
}

@keyframes jumpInfinite {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 20px;
  }
  100% {
    margin-top: 0;
  }
}

</style>
