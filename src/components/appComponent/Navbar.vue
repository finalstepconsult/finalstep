<template>
  <nav class="container-fluid customContainer" :class="[isSticky ? stickyClass : '']">
    <div class="mobileNav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" v-show="mobile">
        <div class="container-fluid">
          <router-link :to="{name: 'Home'}" class="nav-list" >Finalstep</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" @click="closeMenu" :class="[menuIsClose ? menuClose : '']">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link :to="{name: 'Home'}" ><li class="nav-list"><i class="fas fa-home menuList-icon"></i><span>Home</span></li></router-link>
              <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-blog menuList-icon"></i><span>Blog</span></li></router-link>
              <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-blog menuList-icon"></i><span>Alphabase</span></li></router-link>
              <router-link :to="{name: 'About'}" ><li class="nav-list"><i class="fas fa-info-circle menuList-icon"></i><span>About Us</span></li></router-link>
              <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-hand-holding-usd menuList-icon"></i><span>Service</span></li></router-link>
              <router-link :to="{name: 'Blog'}"><li class="nav-list"><i class="fas fa-sms menuList-icon"></i><span>Contact</span></li></router-link>

            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
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
            <router-link class="nav-link" v-if="!user" :to="{name: 'Login'}"><li class="nav-item">Login <i class="bi bi-box-arrow-in-right"></i></li></router-link>
          </ul>
          <div class="profile" ref="profile" @click="toggleProfileMenu" v-if="user">
            <span>F{{ this.$store.state.profileInitials }}</span>
            <div class="profile-menu" v-show="profileMenu">
              <div class="info">
                <p class="initials">F{{ this.$store.state.profileInitials }}</p>
                <div class="right">
                  <p>{{this.$store.state.profileEmail}}</p>
                  <p>{{this.$store.state.profileUsername}}</p>
                </div>
              </div>
              <div class="options">
                  <router-link :to="{name: 'Profile'}" class="option">
                    <userIcon class="icon" />
                    <p>profile</p>
                  </router-link>
                  <router-link :to="{name: 'CreatePost'}" class="option" v-if="isAdmin">
                    <userIcon class="icon" />
                    <p>Create Post</p>
                  </router-link>
                  <div to="/" class="option" @click="signOut">
                    <signOutIcon class="icon" />
                    <p>Log Out</p>
                  </div>

              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
//import db from '../../firebase/firebaseInit';
import userIcon from "../../assets/Icons/user-alt-light.svg"
import signOutIcon from "../../assets/Icons/sign-out-alt-regular.svg"
export default {
name: "Navbar",
components:{
  userIcon,
  signOutIcon,
},
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
    profileMenu: null,
    menuClose: 'menu-close',
    menuIsClose: null,
  }
},

created(){
  window.addEventListener('resize', this.checkScreenSize);
  window.addEventListener('scroll', this.handleScroll);
  this.checkScreenSize();
  //this.getUserAdmin();


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

  closeMenu(){
    this.menuIsClose = !this.menuIsClose;
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
  },

  toggleProfileMenu(e){
    if(e.target == this.$refs.profile){
      this.profileMenu = !this.profileMenu;
    }
  },

  signOut(){
    firebase.auth().signOut();
    window.location.reload();
  },
},

computed:{
  user(){
    return this.$store.state.user;
  },
  isAdmin(){
    return this.$store.state.isAdmin;
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

  .navbar-light .navbar-toggler{
    border: none !important;
  }

  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
      outline: none;
      box-shadow: none;
  }

.navbar-collapse {
  position: fixed;
  top: 50px;
  left: 0;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  background-color: $defaultWhite;
  height: 100%;
}

.navbar-collapse.collapsing {
  left: -75%;
  transition: height 0s ease;
}

.navbar-collapse.show {
  left: 0;
  transition: left 300ms ease-in-out;
}

.navbar-toggler.collapsed~.navbar-collapse {
  transition: left 500ms ease-in-out;
}

.menu-close{

  .navbar-collapse.collapsing {
    left: -75%;
    transition: height 0s ease;
  }
}

    .navbar-light .navbar-toggler-icon {
        background-image: none;
        border: none !important;
    }

    .navbar-light .navbar-toggler-icon::after {
        content: "\f0c9";
        font-family: "FontAwesome";
        font-size: 32px;
        color: #333;
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
    color: $primaryColor;
    font-size: 1.1rem;
    font-family: $heroText;
    border-bottom: 1px solid $secondaryColor;
    padding: 20px 20px;
    text-align: left;
    font-weight: 500;
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

    .profile{
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: $defaultWhite;
      background-color: darken($primaryColor, 20%);

      span{
        pointer-events: none;
      }

      .profile-menu{
        position: absolute;
        top: 60px;
        right: 0;
        width: 250px;
        background-color: darken($primaryColor, 20%);
        box-shadow: 0 4px 6px -1px rgba(0,0,0, 0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

        .info{
          display: flex;
          align-items: center;
          padding: 15px;
          border-bottom: 1px solid #fff;

          .initials{
            position: initial;
            width: 40px;
            height: 40px;
            background-color: #fff;
            color: darken($primaryColor, 10%);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
          }

          .right{
            flex: 1;
            margin-left: 24px;

            p:nth-child(1){
              font-size: 12px;
              margin-bottom: 0px;
            }
            p:nth-child(2){
              font-size: 14px;
              //margin-bottom: 0px;
            }

          }
        }

        .options{
          padding: 15px;


          .option{
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;

            .icon{
              width: 25px;
              height: auto;
            }

            p{
              font-size: 1rem;
              margin-left: 15px;
              margin-top: 15px;
            }

            &:last-child{
              margin-bottom: 0px;
            }
          }
        }
      }
    }

</style>