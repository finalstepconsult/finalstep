<template>
  <div class="container reset__password">
      <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal"/>
      <Loading v-if="loading"/>
      <div class="reset__password--card">
            <div class="text-center d">
                <p class="para2">Back to <router-link :to="{name: 'Login'}">Login</router-link></p>
            </div>
          <h2 class="reset__password--headText">
              Reset Password
          </h2>
          <p>Forgot your password? Enter your email to reset it</p>

            <div class="reset__password--input">
                <input type="email" name="" id="" placeholder="Email Here" v-model="finalstepUserEmail">
            </div>
            <button class="btn btn-sm btn-success" @click.prevent="resetPassword">Reset</button>
      </div>
  </div>
</template>

<script>
import Modal from "@/components/modalComponent/Modal.vue"
import Loading from "@/components/modalComponent/loading.vue"
import firebase from "firebase/app";
import "firebase/auth";
export default {
    name: "ForgetPassword",
    components: {
        Modal,
        Loading,
    },
    data(){
        return{
            finalstepUserEmail: "",
            modalActive: null,
            modalMessage: "",
            loading: null,
        }
    },

    methods: {
        resetPassword(){
            this.loading = true;
            firebase
            .auth()
            .sendPasswordResetEmail(this.finalstepUserEmail)
            .then(() => {
                this.modalMessage = "A password reset link have been sent to your email";
                this.loading = false;
                this.modalActive = true;
            })
            .catch(err => {
                this.modalMessage = err.message;
                this.loading = false;
                this.modalActive = true;
            })
        },
        closeModal(){
            this.modalActive = !this.modalActive;
            this.finalstepUserEmail = "";
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
    .reset__password{
        //border: 2px solid green;
        padding:50px 0px;
        height: 100vh;
        width: 100%;
        

        &--card{
            width: 50%;
            text-align: center;
            transform: translate(50%, 30%);
            padding: 20px 0px;
            //background-color: #fff;
            min-height: 250px;
            box-shadow:  0px 0px 5px #1a0000,
                        0px 0px 5px #240000;

            p{
                font-family: $heroText, serif;
                font-weight: 500;
                color: $defaultBlack;
                font-size: 1rem;
                opacity: .8;
            }
        }

        &--headText{
            font-family: $heroText, serif;
            font-weight: 500;
            color: $defaultBlack;
            font-size: 1.7rem;
        }

        &--input{
            margin-top: 30px;
            margin-bottom: 20px;

            input{
                width: 70%;
                height: 40px;
                border-radius: 50px;
                border: 1px solid $defaultBlack;padding-left: 15px;

                &::placeholder{
                    font-family: $heroText, serif;
                    font-weight: 500;
                }

                &:focus{
                    border: 1px solid red !important;
                }
            }
        }

        button{
            width: 30%;
            border-radius: 50px;
            font-family: $buttonCta, serif;
            font-size: 1.1rem;
            letter-spacing: 0.13ch;
            background-color: darken($primaryColor, 20%);
            border: none;
            margin-bottom: 20px;

            &:hover{
                background-color: darken($primaryColor, 10%);   
            }
        }

                    .para2{
                        opacity: 1 !important;
                        font-family: $heroText, serif;
                        font-size: .9rem;
                        font-weight: 500;
                        margin-bottom: 20px;
                        margin-top: 20px;
                    

                        a{
                            margin-left: 7px;
                            color: darken($primaryColor, 7%);
                            font-family: $heroText, serif;
                            letter-spacing: 0.10ch;
                            font-size: 1rem;
                            //border: 2px dotted darken($primaryColor, 20%);
                            border-radius: 50px;
                            padding: 7px 15px;

    

                                

                            &:hover{
                                background-color: darken($primaryColor, 10%);
                                color: $defaultWhite;
                                border: none;

                                @media only screen and (min-width: 300px) and (max-width: 700px){
                              
                                        background-color: none  !important;

                                }
                            }
                        }
                    }
    }
</style>