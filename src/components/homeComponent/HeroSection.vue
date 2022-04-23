<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 customCol">
              <div class="hero__text">
                  <h2 class="hero__text--main">
                      The <span>Finalstep</span> to improving your 
                      business
                  </h2>
                <div class="hero__button">
                    <router-link :to="{name: 'Blog'}" class="hero__button--btn">Our Blog</router-link>
                    <router-link :to="{name: 'Alphabase'}" class="hero__button--btn">Alphabase</router-link>
                </div>
              </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 customCol">
              <SVGoffice class="hero-svg"/>
          </div>
      </div>
      
  </div>
</template>

<script>
import SVGoffice from '@/assets/svg/heroSvg.svg'
export default {
    components: {
        SVGoffice,
    }

}
</script>

<style lang="scss" >
@import "@/assets/scss/variable.scss";

.customCol{
    padding: 20px 40px;
    @media only screen and (min-width: 900px) and (max-width: 1200px){
    }
}
.hero-svg{
    width: 600px;
    height: 400px;
    //border: 12px solid blue;
    @media only screen and (max-width: 600px) {
        //border: 2px solid red;
        margin: 0 -50px;
        width: 400px;
        height: 400px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1200px){
        width: 450px;
        height: 400px;
        margin: 0 -15px;
    }

}

.hero__text{
    min-height: 100%;
    @media only screen and (max-width: 600px) {
        margin: 0 -10px;
    }

    &--main{
        font-family: $paragraphText, sans-serif;
        font-weight: 700;
        font-size:5rem;
        @media only screen and (max-width: 600px) {
            font-size: 3rem;
            line-height: 4rem;
        
        }
        @media only screen and (min-width: 900px) and (max-width: 1200px){
            font-size: 4rem;
            font-weight: 500;
            margin-top: 40px;
        }


        span{
            color: $primaryColor;
        }

        margin-bottom: 40px;
    }



    &--button{
        border: 1px solid $primaryColor;
        border-radius: 50px;
        padding-right: 10px 30px;
        font-family: $buttonCta, serif;
        font-weight: 500;
        @media only screen and (max-width: 600px) {
            font-size: 1.3rem;
        
        }

        

    }
}

.hero__button{
    //border: 2px solid blue;
    margin: 0 -10px;
    @media only screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

    }


    &--btn{
        font-size: 1.7rem;
        color: $secondaryColor;
        border-radius: 50px;
        padding: 10px 30px;
        font-family: $buttonCta, serif;
        font-weight: 500;

                
        &:nth-child(1){
            margin-right: 20px;
            color: $defaultWhite;
            background-color: $primaryColor;
            word-spacing: 0.13ch;

            &:hover{
                background-color: darken($primaryColor, 20%);
                color: $defaultWhite;
            }

            @media only screen and (max-width: 600px){
                text-align: center;
                padding: 15px;
                width: 100%;
            }

        }

        &:nth-child(2){
            margin-right: 20px;
            color: $primaryColor;
            border: 1px solid $primaryColor;
            letter-spacing: 0.13ch;


            &:hover{
                background-color: darken($primaryColor, 20%);
                color: $defaultWhite;
                border: none !important;
            }

            @media only screen and (max-width: 600px){
                margin-top: 40px;
                text-align: center;
                padding: 15px;
                width: 100%;
            }
        }
    }
}
</style>