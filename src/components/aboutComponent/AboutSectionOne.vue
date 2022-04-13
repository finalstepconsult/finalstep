<template>
  <div class="aboutSectionOne container-fluid" >

      <div class="aboutSectionOne__zero">
          <div class="row aboutSectionOne__row">
              <div class="col-md-3">
                    <div class="card aboutSectionOne__card text-white mb-3" style="width: 18rem;">
                        <div class="card-header">
                            <img src="../../assets/images/team.png" alt="" style="width: 7rem;" class="aboutSectionOne__img">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Who we are</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <button class="explore" @click="showWhoWeAre">Continue Reading</button>
                    </div>
              </div>
              <div class="col-md-3">
                    <div class="card aboutSectionOne__card text-white  mb-3" style="width: 18rem;">
                        <div class="card-header"><img src="../../assets/images/team.png" alt="What we do" style="width: 7rem;" class="aboutSectionOne__img">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">What we do</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <button class="explore" @click="showWhatWeDo">Continue Reading</button>
                    </div>
              </div>
              <div class="col-md-3">
                    <div class="card aboutSectionOne__card text-white  mb-3" style="width: 18rem;">
                        <div class="card-header">
                            <img src="../../assets/images/team.png" alt="" style="width: 7rem;" class="aboutSectionOne__img">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Alphabase</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <button class="explore" @click="showAlphabase">Continue Reading</button>
                    </div>
              </div>
              <div class="col-md-3">
                    <div class="card aboutSectionOne__card text-white mb-3" style="width: 18rem;">
                        <div class="card-header">
                            <img src="../../assets/images/team.png" alt="" style="width: 7rem;" class="aboutSectionOne__img">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Consult Us</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>

                        <router-link :to="{name: 'Service'}" class="explore text-center">Continue Reading</router-link>
                    </div>
              </div>
          </div>
      </div>

        <div class="aboutSectionOne__one">
            <div class="who-we-are" v-show="whoWeAre">
                <div class="aboutSectionOne__displayFlow" v-if="mobileView">

                </div>

                <div class="aboutSectionOne__displayFlow" v-else>
                    <p>This is who we are</p>
                </div>

 
          </div>
          <div class="what-we-do" v-show="whatWeDo">
              <p>THis is what we do</p>
          </div>
          <div class="alphabase" v-show="alphabase">
              <p>THis is alphabase</p>
          </div>
        </div>
  </div>
</template>

<script>
//import Modal from '@/components/modalComponent/Modal.vue'
export default {
    data(){
        return{
            aboutCardDisplayed: false,
            whoWeAre: false,
            whatWeDo: false,
            alphabase: false,
            mobileView: null,
            windowWidth: null,
            isModalVisible: false,
        }
    },
    components: {
        //Modal
    },
    created(){
        window.addEventListener('resize', this.checkScreenSize);
        this.checkScreenSize();
    },
    methods: {
        displayAboutCard() {
            this.aboutCardDisplayed = !this.aboutCardDisplayed
        },
        showWhoWeAre(){
            this.whoWeAre = !this.whoWeAre
            this.whatWeDo = false
            this.alphabase = false
        },
        showWhatWeDo(){
            this.whatWeDo = !this.whatWeDo
            this.whoWeAre = false
            this.alphabase = false
        },
        showAlphabase(){
            this.alphabase = !this.alphabase
            this.whoWeAre = false
            this.whatWeDo = false
        },

        //detects our screen size
        checkScreenSize(){
            this.windowWidth = window.innerWidth;

            if (this.windowWidth <= 750){
                this.mobileView = true;
                console.log(this.mobileView)
                return;
            }

            this.mobileView = false;
            return;
        },

        showModal() {
            this.isModalVisible = true;
        },

        closeModal() {
            this.isModalVisible = false;
        }
    }


}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
    .aboutSectionOne{
        //border: 2px solid blue;
        padding: 0;
        padding:20px 20px 20px 35px;
        margin-bottom: 20px;
        @media only screen and (max-width: 600px){
            padding-top: -20px !important;
            margin-top: -80px;
            padding-left: 0;
            padding-right: 0;
            margin-bottom: 300px;
            
        } 

        &__row{
            @media only screen and (max-width: 600px){
                //border: 2px solid green;
                padding-left: 10px;
                width: 100%;
            }
        }

        &__card{
            background-color: lighten($primaryColor, 70%);
            @media only screen and (max-width: 600px){
                //border: 2px solid red !important;
                width: 23rem !important;
                margin-bottom: 40px !important;
            }


            .card-body{
                .card-title{
                    font-family: $heroText, serif;
                    color: $defaultBlack;
                }

                .card-text{
                    font-family: $buttonCta, serif;
                    color: $defaultBlack;
                }
            }

            .explore{
                color: $defaultWhite;
                background-color: darken($primaryColor, 20%);
                font-family: $buttonCta, serif;
                font-weight: bold;
                border: none;
                border-radius: inherit;
                padding: 3px;
                display: inline-block;
                letter-spacing: 0.07ch;
                word-spacing: 0.07ch;

                &:hover{
                    background-color: $primaryColor;
                }

            }
        }

    }
</style>