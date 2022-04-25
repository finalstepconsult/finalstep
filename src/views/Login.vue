<template>
  <div class="login__section container-fluid">
      <div class="row login__section--row">
          <div class=" col-xs-12 col-sm-6 col-md-4 login__section--col">
              <div class="right-bar"></div>
          </div>
          <div class=" col-xs-12 col-sm-6 col-md-8 login__section--col"></div>
      </div>
      <div class="login__section--main">
          <div class="row gx-1">
              <div class="col-md-4 col1">
                  <div class="right-barTwo">
                        <h2 class="text-center"><router-link :to="{name: 'Home' }">Finalstep Account</router-link></h2>
                        <div class="login-svg">
                            <loginSvg class="loginSvg"/>
                        </div>
                        <div class="login-social">
                            <h3>Social Media Platform:</h3>
                            <i class="bi bi-facebook"></i>
                            <i class="bi bi-twitter"></i>
                            <i class="bi bi-linkedin"></i>
                        </div>
                  </div>
              </div>
              <div class="col-md-8 col2">
                    <form action="">
                        <h2>Hello! Welcome back.</h2>
                        <p>log in with your data that you entered during your registration</p>

                        <!-- Email Input -->
                        <div class="form-outline mb-3">
                            <label class="form-label" for="form2Example1">Email</label>
                            <input type="email" id="form2Example1"  v-model="finalstepUserEmail" required name="" class="form-control" placeholder="johndoe@example.com">
                        </div>

                        <!-- Password input -->
                        <div class="form-outline mb-3">
                            <label class="form-label" for="form2Example2">Password</label>
                            <input type="password" id="form2Example2" v-model="finalstepUserPassword" required class="form-control"/>
                        </div>

                        <!-- 2 column grid layout for inline styling -->
                        <div class="row mb-4">
                            <div class="col d-flex justify-content-center">
                                <!-- Checkbox -->
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" required value="" id="form2Example31" checked />
                                    <label class="form-check-label" for="form2Example31"> Remember me </label>
                                </div>
                            </div>
                            <div class="col">
                                <!-- Simple link -->
                                <router-link :to="{name: 'ForgetPassword'}" class="forget-password">Forgot password?</router-link>
                            </div>
                        </div>

                        <div class="text-danger register-danger" v-if="err">{{this.errMsg}}</div>

                        <!-- Submit button -->
                        <button type="button" class="btn btn-primary btn-block mb-4" @click.prevent="logIn">Login</button>

                        <!-- Register buttons -->
                        <div class="text-center d">
                            <p class="para2">Not registered yet? <router-link :to="{name: 'Register'}">Register</router-link></p>
                        </div>
                    </form>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import loginSvg from '../assets/svg/login.svg'
import firebase from "firebase/app";
import "firebase/auth";
export default {
    components:{
        loginSvg,
    },
    data() {
        return{
            finalstepUserEmail: "",
            finalstepUserPassword: "",
            err: null,
            errMsg: "",
        }
    },
    methods: {
        logIn(){
            firebase.auth().signInWithEmailAndPassword(this.finalstepUserEmail, this.finalstepUserPassword)
            .then(() => {
                this.$router.push({name: "Home"})
                this.err = false;
                this.errMsg = ""
                console.log(firebase.auth().currentUser.uid)
            }).catch((err => {
                this.err = true;
                this.errMsg = err.message;
            }))
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
    .login__section{
        //border: 2px solid red;
        height: 100vh;
        position: relative;

        &--row{
            height: 100%;
        }

        &--col{
            //border: 2px solid green;
            padding: 0;

            .right-bar{
                background-color: darken($primaryColor, 20%);
                height: 100%;
            }
        }

        &--main{
            position: absolute;
            //border: 2px solid blue;
            width: 80%;
            top: 6%;
            padding: 0px 0px;
            right: 13.5%;
            box-shadow:  1px 1px 10px #1a0000,
                        -1px -1px 10px #240000;
            @media only screen and (min-width: 700px) and (max-width: 1200px){
            
            }
            @media only screen and (min-width: 300px) and (max-width: 700px){
                width: 90%;
                right: 5%;
                height: 125vh;
            }
            @media only screen and (min-width: 300px) and (max-width: 600px){
                height: 135vh;
            }
            @media only screen and (min-width: 375px) and (max-width: 375px){
                height: 150vh;
            }

            .row{
                //border: 2px solid green;
                padding: 0px !important;
                
            }

            .col1{
                
                .right-barTwo{
                    background-color: darken($primaryColor, 20%);
                    height: 100%;
                    @media only screen and (min-width: 300px) and (max-width: 700px){
                       height: 130%;
                    }

                    h2{
                        a{
                           color: $defaultWhite; 
                        }
                        color: $defaultWhite;
                        font-family: $heroText, serif;
                        letter-spacing: 0.10ch;
                        //border: 1px solid white;
                        transform: translateY(7vh);

                    }
                }

                .login-svg{
                    //border: 2px solid green;
                    transform: translateY(10vh);
                }

                .loginSvg{
                    margin-left: 25px;
                    @media only screen and (min-width: 700px) and (max-width: 1200px){
                        margin-left: -10px;
                    }
                    @media only screen and (min-width: 300px) and (max-width: 700px){
                       margin-left: 60px;
                    }
                    @media only screen and (min-width: 300px) and (max-width: 500px){
                       margin-left: 10px;
                    }
                }

                .login-social{
                    transform: translateY(15vh);
                    text-align: center;
                    padding: 10px;
                    @media only screen and (min-width: 700px) and (max-width: 1200px){
                        text-align: left;
                    }
                    @media only screen and (min-width: 300px) and (max-width: 700px){
                       display: none;
                    }

                    h3{
                        font-family: $paragraphText, serif;
                        color: $defaultWhite;
                        font-size: 1.2rem;
                        word-spacing: 0.15ch;
                        letter-spacing: 0.10ch;
                        @media only screen and (min-width: 700px) and (max-width: 1200px){
                            font-size: 1rem;
                        }
                    }

                    .bi{
                        color: $defaultWhite;
                        font-size: 2rem;
                        margin-left: 20px;
                    }
                }
            }

            .col2{
                padding: 20px;
                //background-color: $defaultWhite;

                form{
                    padding: 10px 100px;
                    align-items: center;
                    @media only screen and (min-width: 700px) and (max-width: 1200px){
                        padding: 10px 10px !important;
                    }
                    @media only screen and (min-width: 300px) and (max-width: 700px){
                       margin-top: 100px;
                       padding: 10px 10px !important;
                    }
                    

                    h2{
                        font-size: 1.5rem;
                        font-family: $heroText, serif;
                        font-weight: 600;
                        word-spacing: 0.15ch;
                        color: $primaryColor;
                        margin-bottom: 10px;
                    }
                    p{
                        font-family: $heroText, serif;
                        word-spacing: 0.15ch;
                        width: 70%;
                        opacity: .7;
                        margin-bottom: 40px;
                    }

                    label{
                        //border: 2px solid green;
                        font-family: $heroText, serif;
                        margin-top: 3px;
                        letter-spacing: 0.13ch;
                        font-weight: 500;
                        font-size: .9rem;
                    }
                    input[type=email],
                    input[type=password]{
                        border-radius: 50px;
                        padding-left: 20px;
                        width: 80%;
                        margin-top: -5px;
                        font-family: $heroText, serif;
                        font-weight: 500;
                        letter-spacing: 0.13ch;
                        @media only screen and (min-width: 300px) and (max-width: 700px){
                            width: 100%;
                        }
                        @media only screen and (min-width: 300px) and (max-width: 700px){
                            height: 45px;
                        }

                        &:focus{
                            outline: 0;
                            border: 0;
                        }
                    }

                    input::placeholder{
                        font-family: $heroText,serif;
                        letter-spacing: 0.13ch;
                        font-size: .9rem;

                        &:focus{
                            border: none !important;
                        }
                    }

                    input[type=checkbox]{
                        border: 1px solid darken($primaryColor, 20%);
                    }
                    input:checked[type=checkbox]{
                        background-color: darken($primaryColor, 20%);
                    }

                    .forget-password{
                        font-family: $heroText, serif;
                        font-weight: 500;
                        font-size: .9rem;
                        color: darken($primaryColor, 20%);
                    }

                    .btn{
                        margin-top: 30px;
                        width: 80%;
                        background-color: darken($primaryColor, 20%);
                        border: none;
                        border-radius: 50px;
                        font-family: $heroText, serif;
                        letter-spacing: 0.13ch;
                        @media only screen and (min-width: 300px) and (max-width: 700px){
                            width: 100%;
                        }
                        
                        &:focus{
                            outline: none;
                            border: none !important;
                        }
                        &:hover{
                            background-color: darken($primaryColor, 10%);
                        }
                    }


                    .d{
                        width: 80%;
                        @media only screen and (min-width: 700px) and (max-width: 1280px){
                            width: 100%;
                        }
                        @media only screen and (min-width: 300px) and (max-width: 700px){
                            width: 100%;
                        }
                    }

                    .para2{
                        opacity: 1 !important;
                        font-family: $heroText, serif;
                        font-size: .9rem;
                        font-weight: 500;
                        text-align: center;
                        margin-left: 15%;
                        @media only screen and (min-width: 900px) and (max-width: 1280px){
                            text-align: left !important;
                            margin-left: 0px;
                        }
                        @media only screen and (min-width: 700px) and (max-width: 990px){
                            text-align: left;
                            margin-left: 0px;
                        }
                        @media only screen and (min-width: 300px) and (max-width: 700px){
                            text-align: center;
                            margin-left: 0px;
                            width: 100%;
                        }

                        a{
                            margin-left: 7px;
                            color: darken($primaryColor, 7%);
                            font-family: $heroText, serif;
                            letter-spacing: 0.10ch;
                            font-size: 1rem;
                            border: 2px dotted darken($primaryColor, 20%);
                            border-radius: 50px;
                            padding: 7px 15px;
                            @media only screen and (min-width: 300px) and (max-width: 700px){
                                border: none;
                                margin-left: 0px;
                                padding: 0px;
                            }

                            &:hover{
                                background-color: darken($primaryColor, 10%);
                                color: $defaultWhite;
                                border: none;
                            }
                        }
                    }
                }
            }


        }
    }

    .register-danger{
        width: 80%;
        font-weight: 500;
        font-family: $heroText, serif;
        word-spacing: 0.13ch;
        letter-spacing: 0.10ch;
    }
</style>