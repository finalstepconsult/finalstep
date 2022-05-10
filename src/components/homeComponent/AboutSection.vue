<template>
  <div class="about__section container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-8 about__section--customCol">
        <img src="../../assets/images/finalstep_img.jpg" alt="finalstep business image" style="width: 30rem;" 
        class="about__section--heroImg">
        <div id="color-overlay"></div>
        <div class="about__section--midText">
          <h3>200+</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure vel fugiat.</p>
          <h3 class="h">700+</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi iure vel fugiat.</p>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 about__section--customCol1">
        <div class="about__section--heroText">
          <h2>Create <span>quality solutions</span> for your business </h2>
          <p>Our mission is to create solution that will solve your ICT problems and improving your buiness</p>
          <div class="btn btn-lg border customBtn">Know More</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";
  .about__section{
    //border: 2px solid red;
    //width: 700px;
    @media only screen and (min-width: 600px) and (max-width: 1400px){
      padding: 25px;
      background-color: $defaultWhite;
      padding-top: 40px !important;
    }
    @media only screen and (max-width: 600px){
     // border: 2px solid green;
      padding: 0 !important;
    }


    .row{
      width: 100%;
      margin: 0;
      padding: 0;

      @media only screen and (max-width: 600px){
       // border: 2px solid blue;
      }
    }
    

    &--customCol{
      padding: 0;
      position: relative;

      @media only screen and (max-width: 600px){
        width: 100%;
        height: 100vh;
      }
    }

    &--heroImg{
      @media only screen and (max-width: 600px){
        width: 100% !important;
        height: 100% !important;
      }
    }


    &--midText{
      position: absolute;
      top: 15.5%;
      right: 5%;
      width: 45%;
      background-color: darken($primaryColor, 20%);
      color: $defaultWhite;
      padding: 40px;

      @media only screen and (max-width: 600px){
        //border: 2px solid green;
        right: 10%;
        width: 80%;
        height: 90vh;
        top: 5%;
        //background-color: transparent;
        background: rgba(78, 1, 1, 0.4);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        border-radius: 10px;
        //border: 1px solid rgba( 255, 255, 255, 0.18 );
      }

      @media only screen and (min-width: 414px) and (max-width: 414px){
        height: 65vh;
        top: 18%;
      }

      @media only screen and (min-width: 375px) and (max-width: 375px){
        height: 80vh;
        top: 10%;
      }
      @media only screen and (min-width: 900px) and (max-width: 1200px){
        top: 7%;
      }

      h3{
        font-family: $paragraphText, serif;
        font-size: 3rem;
        margin-top: 20px;
      }

      p{
        font-family: $heroText, serif;
        margin-top: 20px;
        font-size: 1.2rem;
        word-spacing: 0.13ch;
        letter-spacing: 0.07ch;
      }

      .h{
        margin-top: 70px !important;
      }
    }

    &--heroText{
      h2{
        //border: 2px solid red;
        margin-top: 120px;
        font-family: $heroText, serif;
        font-size: 3rem;
        width: 100%;

        @media only screen and (max-width: 600px){
          margin-top: 40px;
          font-size: 2.1rem;
          color: $defaultBlack;
        }
        @media only screen and (min-width: 900px) and (max-width: 1200px){
          width: 100%;
          font-size: 2rem;
        }

        span{
          color: $primaryColor;
          font-family: $heroText, serif;
          font-size: 3rem;

          @media only screen and (max-width: 600px){
            font-size: 2.1rem;
          }
          @media only screen and (min-width: 900px) and (max-width: 1200px){
            font-size: 2rem;
            font-weight: 600;
          }
        }
      }

      p{
        font-family: $heroText, serif;
        font-size: 1.2rem;
        margin-top: 50px;
        font-weight: normal;
        opacity: .8;
        letter-spacing: 0.13ch;
        word-spacing: 0.13ch;
        color: $defaultBlack;

        @media only screen and (max-width: 600px){
          margin-top: 30px;
        }
        @media only screen and (min-width: 900px) and (max-width: 1200px){
          margin-top: 30px ;
        }

      }
    }

    .customBtn{
      background-color: darken($primaryColor, 20%);
      color: $defaultWhite;
      font-family: $buttonCta, serif;
      padding:20px 20px;
      width: 300px;
      margin-top: 50px;
      border-radius: 50px;

      @media only screen and (max-width: 600px){
        margin-top: 30px;
        padding:10px 10px;
        margin-left: 15px;
      }

      @media only screen and (min-width: 900px) and (max-width: 1200px){
        padding: 10px 10px;
      }    


      &:hover{
        background-color: $primaryColor;
        color: $secondaryColor;
        font-size: 1.5rem;
      }
    }

  }

  #color-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 30rem;
    height: 100%;
    // background-color: black;
    background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3));
    opacity: 0.6;

    @media only screen and (max-width: 600px){
      width: 100%;
    }
  }
</style>