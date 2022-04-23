<template>
  <footer class="mt-auto">
    <div class="custom__footer">
      <div class="custom__footer--left">
        <div class="custom__footer--col-1">
          <h3><router-link class="custom__footer--header" :to="{name: 'Home'}">Finalstep</router-link></h3>

          <ul class="svg">
            <li>
              <a href="#"><youTube class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><twitter class="svg-icon" /></a>
            </li>
            <li>
              <a href="#"><linkedin class="svg-icon" /></a>
            </li>
          </ul>
        </div>

        <div class="custom__footer--col-2">
          <ul class="">
          <li class="nav-item"><router-link  :to="{name: 'Home'}" class="nav-link px-2 text-muted">Home</router-link></li>
          <li class="nav-item"><router-link  :to="{name: 'Blog'}" class="nav-link px-2 text-muted">Blog</router-link></li>
          <li class="nav-item"><router-link  :to="{name: 'Alphabase'}" class="nav-link px-2 text-muted">Alphabase</router-link></li>
          <li class="nav-item"><router-link  :to="{name: 'About'}" class="nav-link px-2 text-muted">About</router-link></li>
          </ul>
        </div>

        <div class="custom__footer--col-3">
          <ul class="">
          <li class="nav-item"><router-link  :to="{name: 'FAQS'}" class="nav-link px-2 text-muted">FAQs</router-link></li>
          <li class="nav-item"><router-link  :to="{name: 'Service'}" class="nav-link px-2 text-muted">Service</router-link></li>
          <li class="nav-item"><router-link  :to="{name: 'Contact'}" class="nav-link px-2 text-muted">Contact</router-link></li>
          <li class="nav-item"><router-link  :to="{name: 'Contact'}" class="nav-link px-2 text-muted">Sign In</router-link></li>
          </ul>
        </div>
      </div>

      <div class="custom__footer--right mt-auto">
          <p class="text-center text-muted">Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "@/assets/Icons/youtube-brands.svg"
import twitter from "@/assets/Icons/twitter-brands.svg"
import linkedin from "@/assets/Icons/linkedin-brands.svg"
export default {
  name: "footer-vue",
  components: {
    youTube,
    twitter,
    linkedin,
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
footer{
  padding: 50px 25px;
  background-color: #303030;

  .custom__footer{
    display: flex;
    flex-direction: column;
    gap: 32px;
    //border: 2px solid blue;
    @media (min-width: 800px){
      flex-direction: row;
      //border: 2px solid red;
      gap: 0px;
    }

    > div {
      display: flex;
      flex: 1;
      //border: 2px solid green;
    }

    &--left{
      //border: 2px solid yellow;
      gap: 32px;
      color: $defaultWhite;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (min-width: 800px){
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
    }

    &--header{
      font-size: 24px;
      color: $defaultWhite;
      text-decoration: none;
      font-weight: 600;
      font-family: $heroText, serif;
      //border: 2px solid green;
    }

    &--col-1,
    &--col-2,
    &--col-3{
      gap: 32px;
      display: flex;
      flex: 1;
      @media(min-width: 800px){
        gap: 0;
      }
    }

    &--col-1{
      flex-direction: column;

      h3{
        text-align: center;
        @media (min-width: 800px){
          text-align: initial;
        }
      }

      ul{
        margin-top: auto;

        li{
          display: flex;
          align-items: center;
        }
      }
    }

    &--col-2,
    &--col-3{
      ul{
        height: 100%;
        padding: 0;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        //border: 2px solid red;
        @media (min-width: 800px) {
          flex-direction: column;
        }
        .nav-link{
          font-size: 1.2rem !important;
          font-weight: 500 !important;
          color: $defaultWhite !important;
          text-decoration: none !important;
          margin-bottom: -10px;
          font-family: $buttonCta, serif;
          &:hover{
            font-size: 1rem !important;
          }
        }
      }
    }

    &--right{
      gap: 32px;
      color: $defaultWhite;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px){
        align-items: flex-end;
        gap: 0;
      }
    }


  }

  ul{
    gap: 16px;
    list-style: none;
    display: flex;
  }

  .svg{
    padding: 0;
    @media (min-width: 800px){
      transform: translateY(-200%);
    }
  }

  .svg-icon{
    width: 30px;
    height: auto;
    color: $defaultWhite;
    padding: 0px;
  }
}
</style>