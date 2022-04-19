<template>
  <div class="service__home container-fluid">
      <div class="service__home--cardSection">
        <div class="row">
          <div class="col-md-4">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-rocket"></i>
              <div class="card-body">
                <h5 class="card-title">Network Installation</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-rocket"></i>
              <div class="card-body">
                <h5 class="card-title">CCTV Installation</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-rocket"></i>
              <div class="card-body">
                <h5 class="card-title">Educational Services</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-1">
          <div class="col-md-4">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-rocket"></i>
              <div class="card-body">
                <h5 class="card-title">Software Development</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-rocket"></i>
              <div class="card-body">
                <h5 class="card-title">Graphic Design</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary custom-btn">Explore <i class="fa-solid fa-arrow-right ft-arrow"></i></a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" style="width: 21rem;">
              <i class="fa-solid fa-rocket"></i>
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
    


    &--cardSection{

      .row{
        padding: 20px;
        padding-left: 4.5%;
      }
      .card{
        background: rgba( 255, 255, 255, 0.4 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 3.5px );
        -webkit-backdrop-filter: blur( 3.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );

        .card-title{
          font-family: $heroText, serif;
          word-spacing: 0.13ch;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .card-text{
          font-family: $paragraphText, serif;
          letter-spacing: 0.09ch;
          margin-bottom: 20px;
        }
        .custom-btn{
          background: transparent !important;
          border: 1px solid white;
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
      //border: 2px solid red;

      &:hover{
        color: white !important;
      }
    }
  }
</style>