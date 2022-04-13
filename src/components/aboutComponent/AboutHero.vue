<template>
  <div class=" container-fluid aboutHero__section">
    <vue-particles class="particles" 
        :particleSize="7" 
        color="#fff" 
        linesColor="#f03"
        shapeType="circle"
        :moveSpeed="0">
    </vue-particles>
    <div class="row aboutHero__section--row ">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutHero__section--customCol">
            <h3 class="aboutHero__section--heroText">Creating Solutions</h3>
            <p class="aboutHero__section--subtext opacity-75">
                Our mission is to create solution that will solve your ICT problems and improving your buiness
            </p>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 aboutHero__section--customCol1">
             <OfficeSvg class="office-svg" />
        </div>
    </div>
  </div>
</template>

<script>
import OfficeSvg from '@/assets/svg/officeSvg.svg'
export default {
    components: {
        OfficeSvg,
    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
    .aboutHero__section{
        background-color: darken($primaryColor, 20%);
        height: 80vh;
        padding: 0;
        position: relative;
        //border: 2px solid green;



        .particles{
            //z-index: 1;
            height: inherit;
            margin: 0;
            padding: 0;
            position: absolute;
            width: inherit;
            //border: 3px solid brown;
        }

        &--row{
            height: 100%;
            width: 100%;
        }


        &--customCol{
            height: 100%;
            @media only screen and (max-width: 600px){
                //border: 2px solid cyan;
                height: 50%;
            }
        }

        &--customCol1{
            //border: 2px solid blue;
            position: relative;
            @media only screen and (max-width: 600px){
                height: 50%;
            }
        }


        h3{
            color: $defaultWhite;
            margin: 200px 10px 10px 50px;
            font-family: $strongText, serif;
            font-size: 2rem;
            margin-bottom: 20px;
            letter-spacing: 0.05ch;
            word-spacing: 0.05ch;
            @media only screen and (max-width: 600px){
                margin: 70px 10px 30px 50px;
                font-size: 2.5rem;
            }

        }

        p{
            display: inline-block;
            color: $defaultWhite;
            width: 300px;
            margin-left: 50px;
            font-family: $heroText, serif;
            letter-spacing: 0.03ch;
            word-spacing: 0.03ch;
        }


        &--btn{
            color: $primaryColor;
            transform: translate(50%, -300%);
            z-index: 1;
        }

        .office-svg{
            position: absolute;
            height: 90%;
            //border: 3px solid orange;
            top: 30px;
            left: 40px;
            @media only screen and (max-width: 600px){
                top: 30px;
                left: -100px;
            }

        }
    }

</style>