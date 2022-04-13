<template>
  <nav class="container-fluid customContainer" :class="[isSticky ? stickyClass : '']">
    <div class="mobileNav">
      <div class="mobileNav__control" v-show="mobile">
        <router-link :to="{name: 'Home'}" class="navBrand" >Finalstep</router-link>
        <i @click="toggleMobileMenu" class="bi bi-list mobileMenu" :class="[isTr ? hideHam : '']" v-show="mobile"></i>
        <i @click="checkIsTr" class="bi bi-x mobile-menu-close" v-show="isTr" :class="[isTr ? dspClose : '']"></i>
      </div>
      <transition name="slide">
        <ul class="mobile-nav__container" v-show="mobileView">
          <router-link :to="{name: 'Home'}"><li class="nav-list"><i class="fas fa-home menuList-icon"></i><span>Home</span></li></router-link>
          <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-blog menuList-icon"></i><span>Blog</span></li></router-link>
          <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-blog menuList-icon"></i><span>Alphabase</span></li></router-link>
          <router-link :to="{name: 'About'}"><li class="nav-list"><i class="fas fa-info-circle menuList-icon"></i><span>About Us</span></li></router-link>
          <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-hand-holding-usd menuList-icon"></i><span>Service</span></li></router-link>
                    <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-sms menuList-icon"></i><span>Contact</span></li></router-link>

          <!--router-link :to="{name: 'Register'}"><li class="nav-list btn btn__join--us">Join Us <i class="fas fa-sign-in-alt fs"></i></li></!--router-link-->


          <section class="socials-menu-icon"> 
            <i class="fa fa-facebook sc-icon"></i>
            <i class="fab fa-twitter sc-icon"></i>
            <i class="fab fa-youtube sc-icon"></i>
          </section>
        </ul>
      </transition>
    </div>

    <div class="desktopNav" v-show="!mobile">
      <div class="container-fluid">
        <header class="d-flex flex-wrap justify-content-center py-3 ">
          <router-link :to="{name: 'Home'}" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
            <span class="fs-4">Finalstep</span>
          </router-link>

          <ul class="nav nav-pills">
            <router-link class="nav-link active" aria-current="page" :to="{name: 'Home'}"><li class="nav-item">Home</li></router-link>
            <router-link class="nav-link" :to="{name: 'Blog'}"><li class="nav-item">Blog</li></router-link>
            <router-link class="nav-link" :to="{name: 'Alphabase'}"><li class="nav-item">Alphabase</li></router-link>
            <router-link class="nav-link" :to="{name: 'About'}"><li class="nav-item">About Us</li></router-link>
            <router-link class="nav-link" :to="{name: 'Service'}"><li class="nav-item">Service</li></router-link>
          </ul>
        </header>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
name: "Navbar",
data() {
  return {
    showMore: false,
    mobile: null,
    mobileView: null,
    desktopView: null,
    windowWidth: null,
    windowHeight: null,
    isSticky: false,
    isTr: false,
    dspClose: 'dspClose',
    hideHam: 'hideHam',
    stickyClass: 'is_sticky',
    scrollPosition: 0,
    isRotate: false,
    transition: false,
    rotateClass: 'is-rotate',
  }
},

created(){
  window.addEventListener('resize', this.checkScreenSize);
  window.addEventListener('scroll', this.handleScroll);
  this.checkScreenSize();
},

unmounted() {
  window.removeEventListener('scroll', this.handleScroll)
},

methods : {
  //detects our screen size
  checkScreenSize(){
    this.windowWidth = window.innerWidth;

    if (this.windowWidth <= 750){
      this.mobile = true;
      return;
    }
    this.mobile = false;
    this.mobileView = false;
    return;
  },

  handleScroll() {
    this.scrollPosition = window.scrollY
    if(this.scrollPosition >= 100) {
        this.isSticky = true
    }
    else{
        this.isSticky = false
    }
  },


  //Toggle the hamburger mobile menu
  toggleMobileMenu(){
    this.mobileView = true;
    this.desktopView = false
    if(this.mobileView){
      this.isTr = true;
    }
  },

  checkIsTr(){
    this.mobileView = false
    this.isTr = !this.isTr;
  }
}


}
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";
  .customContainer{
    padding: 0 !important;
  }

  .is_sticky{
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    -webkit-transition: background-color .5s ease-out;
    transition: background-color .5s ease-out;
    -o-transition: background-color .5s ease-out;
    transition: .5s ease-out;
  }

  .menuList-icon{
    font-size: 1.5rem;
    padding-right: 20px;  
  }

  .mobileNav__control{
    //border: 2px solid red;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 5px;
    height: 10vh;
  }

  .navBrand{
    //border: 2px solid red;
    text-decoration: none;
    padding: 5px;
    font-size: 1.2rem;
    font-family: $heroText serif;
    font-weight: 600;
    word-spacing: 2px;
    display: inline-block;
    text-align: center;
    padding-top: 15px;
    //background-color: red;
  }

  .mobileMenu{
    font-size: 2.7rem;
    //border: 2px solid red;
    padding-top: -40px !important;

  }

  a{
    text-decoration: none;
  }

  .mobile-nav__container{
    //border: 2px solid blue;
    height: 100vh;
    background-color: $primaryColor;
    list-style: none;
    padding: 0;
    width: 77%;
  }

  .nav-list{
    color: $secondaryColor;
    font-size: 1.5rem;
    font-family: $heroText;
    border-bottom: 1px solid $secondaryColor;
    padding: 30px 20px;
    text-align: left;
  }


    .mobile-menu-close{
      //border: 2px solid red;
      width: 70px;
      height: 80px;
      color: $primaryColor;   
    }

    .bi-x{
      font-size: 3.5rem;
      text-align: center;
      margin-top: -10px;
    }

    .dspClose{
      display: block;
    }

    .hideHam{
      display: none !important;
    }

    @keyframes slidein {
      0%{
        transform: translateX(-900px);
      }
      100%{
        transform: translateX(0);
      }
  }

  
    .is-rotate{
        transition: .1s ease-in;
        transform: rotate(180deg);
    }

    .socials-menu-icon{
        //border: 2px solid blue;
        margin-top: 45px;
        padding: 7px;
        width: 100%;

        .sc-icon{
            padding: 10px;
            font-size: 20px;
            border: 2px solid lightgrey;
            border-radius: 50%;
            margin-left: 30px;
            transform: translateX(30%);
            color: $secondaryColor;
        }
    }

    .fs{
        margin-left: 10px;
    }

    //Mobile css navbar ends here


    //desktop css navbar begings 
    .active{
      background-color: $primaryColor !important;
      &:hover{
        background-color: lighten($primaryColor, 10%) !important;
      }
    }
    .nav-link{
      color: $defaultBlack;
      font-family: $heroText;
      font-weight: 600;

      &:hover{
        font-weight: 600;
        color: lighten($primaryColor, 10%);
      }
    }

</style>