<template>
  <div class="unique__section container-fluid">
      <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6 unique__section--customCol">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../assets/images/unique_img1.jpg" class="d-block w-100 carousel-img" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/images/unique_img2.jpg" class="d-block w-100 carousel-img" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../../assets/images/unique_img3.jpg" class="d-block w-100 carousel-img" alt="...">
                        </div>
                    </div>
                </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6 col-xl-6">
              <h2 class="unique__section--heroText">
                  What makes us <span>Unique</span>
              </h2>
              <div class="unique__section--body">
                  <i class="fa-solid fa-landmark"></i>
                  <div class="body-wrapper">
                        <h3>Our Company History</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellendus quam cupiditate beatae itaque nam aperiam!
                        </p>
                  </div>
              </div>
              <div class="unique__section--body">
                    <i class="fa-solid fa-rocket"></i>
                    <div class="body-wrapper">
                        <h3>Our success mission</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Repellendus quam cupiditate beatae itaque nam aperiam!
                            </p>
                    </div>
              </div>
              <div class="unique__section--body">
                  <i class="fa-solid fa-chart-line"></i>
                  <div class="body-wrapper">
                      <h3>Our future plan</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Repellendus quam cupiditate beatae itaque nam aperiam!
                      </p>
                  </div>
              </div>

          </div>
      </div>

    <!--a target="_blank" href="https://icons8.com/icon/JO9UtGgNOhSq/standard" class="opacity-25">Standard icon by Icons8</!--a-->
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";
.unique__section{
    padding: 25px;
    padding-left: 40px;
    @media only screen and (max-width: 600px){
        //border: 2px solid green;
        margin-top: 20px;
        padding: 10px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1400px){
    }

    &--customCol{
        padding: 0;
    }

    &--heroText{
        //border: 2px solid red;
        margin-bottom: 40px;
        font-size: 3rem;
        font-family: $heroText, serif;

        @media only screen and (max-width: 600px){
            //border: 2px solid green;
            font-size: 2.1rem;
            margin-top: 20px
        }
        @media only screen and (min-width: 900px) and (max-width: 1200px){
            font-size: 2rem;
            font-weight: 600;
        }

        span{
            color: $primaryColor;
            font-family: $heroText, serif;
        }

    }

    &--body{
        //border: 2px solid green;
        display: flex;
        padding: 0px 10px;

        .body-wrapper{
            //border: 2px solid black;
            width: 80%;
            margin-left: 40px;

            h3{
                //border: 2px solid blue;
                font-family: $paragraphText, serif;
                font-weight: 500;
                word-spacing: 0.13ch;
                color: $defaultBlack;
                @media only screen and (min-width: 900px) and (max-width: 1200px){
                    margin-top: -20px;
                    font-size: 1.4rem;
                }

            }

            p{ 
                font-size: .9rem;
                color: $defaultBlack;
                width: 100%;
                @media only screen and (min-width: 900px) and (max-width: 1200px){
                    margin-top: -7px;
                    margin-bottom: 30px;
                }
            }
        }

    }

    .fa-solid{
        color: red;
        font-size: 2.5rem;
        margin-top: 27px;
    }

    .carousel{
        height: initial !important;
    }

    .carousel-img{
        height: 100%;
        @media only screen and (min-width: 900px) and (max-width: 1200px){
            height: 46.5vh;
        }
    }


}

</style>