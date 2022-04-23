<template>
  <div class="service__home container-fluid">
    <div class="service__home--img"></div>
      <div class="service__home--cardSection">
        <h3 class="our-service">Our Service</h3>
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4 service__home--customCol">
            <div class="card">
              <i class="fa-solid fa-network-wired"></i>
              <div class="card-body">
                <h5 class="card-title">Network Installation</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 service__home--customCol">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-shield-halved"></i>
              <div class="card-body">
                <h5 class="card-title">CCTV Installation</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 service__home--customCol">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-graduation-cap"></i>
              <div class="card-body">
                <h5 class="card-title">Educational Services</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col-xs-12 col-sm-6 col-md-4 service__home--customCol">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-code"></i>
              <div class="card-body">
                <h5 class="card-title">Software Development</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 service__home--customCol">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
              <div class="card-body">
                <h5 class="card-title">Graphic Design</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 service__home--customCol">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-layer-group"></i>
              <div class="card-body">
                <h5 class="card-title">ICT Consultancy</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
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
  .service__home{
    background-image: url(../../assets/images/finalstep_eng.jpg);
    min-height: 90vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 50px;

    @media only screen and (max-width: 600px){
    }

    @media only screen and (min-width: 900px) and (max-width: 1200px){
    }

    
    &--customCol{

        @media only screen and (max-width: 600px){
          width: 18rem !important;
          margin-left: -37px;
        }
        @media only screen and (min-width: 800px) and (max-width: 1200px){
          //border: 2px solid green;
          margin-left: -18px;
          padding: 0;
          width: 19rem;
          display: flex;
          flex-wrap: wrap;
        }
        @media only screen and (max-width: 688px) and (min-width: 688px){
          padding-left: 0px;
          //border: 2px solid blue;
        }


    }

    &--cardSection{

      .row{
        padding: 20px;
        padding-left: 4.5%;


      @media only screen and (max-width: 600px){
        margin-bottom: -40px !important;
      }

      @media only screen and (min-width: 900px) and (max-width: 1200px){
        //border: 2px solid red;
      }
      @media only screen and (max-width: 688px) and (min-width: 688px){
        padding: 10px 0px;
      }

      }
      .card{
        background: rgba( 255, 255, 255, 0.4 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        width: 21rem;
        @media only screen and (max-width: 600px){
          width: 19rem !important;
          margin-bottom: 20px;
        }
        @media only screen and (max-width: 393px) and (min-width: 393px){
          margin-left: 12px;
        }
        @media only screen and (max-width: 414px) and (min-width: 412px){
          width: 21rem !important;
          margin-left: 5px;
        }
        @media only screen and (min-width: 600px) and (max-width: 1200px){
          width: 17rem !important;
          margin-left: 15px;
        }
        @media only screen and (max-width: 688px) and (min-width: 688px){
          margin-left: 10px !important;
          margin-bottom: 10px;
        }

        .card-title{
          font-family: $heroText, serif;
          word-spacing: 0.13ch;
          letter-spacing: 0.13ch;
          text-transform: uppercase;
          margin-bottom: 20px;
          color: $defaultBlack;
          font-weight: 600;
        }

        .card-text{
          font-family: $paragraphText, serif;
          letter-spacing: 0.09ch;
          margin-bottom: 20px;
          color: $defaultBlack;
        }
        .custom-btn{
          background: transparent !important;
          border: none;
          border-radius: 50px;
          padding-right: 30px;
          padding-left: 30px;
          font-size: 1.2rem;
          letter-spacing: 0.09ch;
          color: $primaryColor;
          font-family: $buttonCta, serif;
          font-weight: 500;

          &:hover{
            background-color: $primaryColor !important;
            color: $defaultWhite;
            border: none !important;

            .ft-arrow{
              color: $defaultWhite;
            }
          }
          
        }

        .card-body{
          margin-top: 20px;
        }
      }
    }

    .fa-solid{
      font-size: 4rem;
      margin: 50px 0 0 20px;
      color: $primaryColor;
    }

    .ft-arrow{
      color: $primaryColor;
      font-size: 1rem;
      margin: 10px 0 0 10px !important;

      &:hover{
        color: white !important;
      }
    }
  }

  .our-service{
    text-align: center;
    font-family: $heroText, serif;
    font-size: 2.5rem;
    color: $defaultBlack;
    font-weight: 600;

    @media only screen and (max-width: 600px){
      margin-top: -15px;
    }
  }
</style>