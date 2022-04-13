<template>
  <div class="about__section container">
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
    padding: 50px;
    background-color: $defaultWhite;
    padding-top: 80px !important;
    //width: 700px;

    .row{
     // border: 2px solid blue;
      width: 100%;
      margin: 0;
      padding: 0;
    }

    &--customCol{
     // border: 2px solid green;
      padding: 0;
      position: relative;
    }


    &--midText{
      position: absolute;
      top: 15.5%;
      right: 5%;
      width: 45%;
      background-color: darken($primaryColor, 20%);
      color: $defaultWhite;
      padding: 40px;


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

        span{
          color: $primaryColor;
          font-family: $heroText, serif;
          font-size: 3rem;
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
      }
    }

    .customBtn{
      background-color: darken($primaryColor, 20%);
      color: $defaultWhite;
      font-family: $buttonCta, serif;
      padding:20px 20px;
      width: 300px;
      margin-top: 50px;


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
}
</style>