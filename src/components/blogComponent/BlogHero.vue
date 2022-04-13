<template>
  <div class="container-fluid blogHero">
            <vue-particles class="particles" 
                :particleSize="7" 
                color="#fff" 
                linesColor="#f03"
                shapeType="circle"
                :moveSpeed="0">
            </vue-particles>
        <div class="blogHero__text">
            <h2 class="blogHero__text--textHero">Finalstep Blog</h2>
            <p class="blogHero__text--subText">
                Finalstep blog is a top blog for Students, Schools, banks and computer firms.
                We provide to you upto date articles on Jamb, WAEC, NECO and lots more.
            </p>
            <div class="btn btn-lg blogHero__text--button"><i class="fa-solid fa-share-from-square share_icon"></i></div> <span class="opacity-75 shares">37k SHARES</span>
            <div class="blogHero__text--search">
                <i class="bi bi-search"></i>
                <input type="text" name="" id="" class=" fa-brands fa-searchengin" placeholder="What are you looking for?">
                <button type="submit" class="btn btn-sm btnSearch">Search</button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            isClicked: false,
            clickedClass: 'is_clicked'
        }
    },

    methods:{
        checkClicked(){
            this.isClicked = true
            console.log(this.isClicked)
        },
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";
    .blogHero{
        background-color: darken($primaryColor, 20%);
        height: 80vh;
        padding: 0;
        z-index: 1;
        position: relative;

        .particles{
            z-index: -1;
            height: inherit;
            margin: 0;
            padding: 0;
            position: absolute;
            width: inherit;
        }

        .blogHero__text{
            padding: 30px 70px 0 70px;
            @media only screen and (max-width: 600px){
                padding: 30px 10px 0 10px; 
            }

                
            &--textHero{
                color: $defaultWhite;
                font-family: $strongText;
                font-size: 3rem;
                margin: 40px 0 40px 0px;
                display: inline-block;
                letter-spacing: .03ch;
                @media only screen and (max-width: 600px){
                    font-size: 2rem;
                }
                
            }

            &--subText{
                display: block;
                text-align: left;
                font-weight: 500;
                color: $defaultWhite;
                width: 500px;
                letter-spacing: 0.07ch;
                margin-bottom: 40px;
                @media only screen and (max-width: 600px){
                    margin-top: 30px;
                    text-align: left;
                    width: 100%;
                    line-height: 2.2rem;
                    font-size: 1.3rem;
                    opacity: .9;
                }
            }

            &--button{
                border: 1px solid $secondaryColor;
                margin-bottom: 40px;
                @media only screen and (max-width: 600px){
                    margin-top: 30px;
                }


                .share_icon{
                    color: $secondaryColor;
                    @media only screen and (max-width: 600px){
                        font-size: 2rem;
                        padding: 10px;
                    }
                }
            }


            &--search{
                border: 1px solid $defaultWhite;
                background-color: darken($primaryColor, 20%);
                width: 100%;
                height: 50px;
                box-shadow: 1px 1px 1px $secondaryColor,
                -1px -1px 1px $secondaryColor;
                //padding: 0px 20px;
                margin-bottom: 40px;
                position: relative;

                &:focus-within{
                    background-color: #fff;
                    .bi-search{
                        color: black !important;
                    }

                    .btnSearch{
                        display: block;
                    }
                }
                @media only screen and (max-width: 600px){
                    height: 70px;
                    margin-top: 30px;
                }

                input{
                    height: 100%;
                    outline: none;
                    border: none !important;
                    background-color: darken($primaryColor, 20%);
                    width: 89%;
                    padding-left: 60px;
                    font-family: $buttonCta, serif;
                    @media only screen and (max-width: 600px){
                        width: 75%;
                    }

                }

                input::-webkit-input-placeholder{
                    color: $defaultWhite;
                    font-size: 1.3rem;
                    font-weight: 400;
                    //padding-left: 10px;
                    @media only screen and (max-width: 600px){
                        display: none !important;
                        color: transparent;
                    }
                }


                input:focus{
                    background-color: #fff;
                }

                input:focus::-webkit-input-placeholder{
                    display: none;
                }
                span{
                    //color: $secondaryColor;
                    margin-top: 40px;
                }

                .bi-search{
                    color: #fff !important;
                    margin-right: 20px;
                    position: absolute;
                    left: 20px;
                    top: 20%;

                    @media only screen and (max-width: 600px){
                        font-size: 1.2rem;
                        top: 30%;
                    }
                }

                .btnSearch{
                    color: #fff;
                    background-color: darken($primaryColor, 20%);
                    border: 1px solid #fff;
                    display: none;
                    top: 14%;
                    right: 20px;
                    position: absolute;
                    padding: 7px 10px;

                    @media only screen and (max-width: 600px){
                        font-size: 1.2rem;
                        top: 20%;
                    }
                }
            }

            .shares{
                color: $defaultWhite !important;
                font-family: $strongText, serif;
                margin-left: 10px;
                @media only screen and (max-width: 600px){
                    font-size: 1.2rem;
                    letter-spacing: 0.13ch;
                }
            }

        }
    }

    .is_clicked{
        .bi-search{
            color: $defaultBlack;
        }
    }
</style>