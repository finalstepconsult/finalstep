<template>
  <div class="service__section container">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-8 service__section--customCol">
                <div class="row customRow gy-5">
                    <div class="col-xs-12 col-sm-12 col-md-3 gx-2">
                        <div class="card" data-aos="fade-up" style="width: 12rem;">
                            <div class="card-header text-center">Computer Repairs</div>
                            <img src="../../assets/images/code_icon.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text text-center">Assembly and Repairs of Computer Systems</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 gx-1">
                        <div class="card" data-aos="fade-up" style="width: 12rem;">
                            <div class="card-header text-center">Graphics Design</div>
                            <img src="../../assets/images/graphic_icon.png" class="card-img-top customImg" alt="...">
                            <div class="card-body">
                                <p class="card-text text-center">Assembly and Repairs of Computer Systems</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 gx-1">
                        <div class="card" data-aos="fade-up" style="width: 12rem;">
                            <div class="card-header text-center">Web Development</div>
                            <img src="../../assets/images/code_icon.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text text-center">Assembly and Repairs of Computer Systems</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-3 gx-1">
                        <div class="card" data-aos="fade-up" style="width: 12rem;">
                            <div class="card-header text-center">Networking</div>
                            <img src="../../assets/images/network_logo.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text text-center">Assembly and Repairs of Computer Systems</p>
                            </div>
                        </div>
                    </div>
                </div>

          <div class="row  customRow1">
              <div class="col-xs-12 col-sm-12 col-md-3 gx-2">
                <div class="card" data-aos="fade-up" style="width: 12rem;">
                    <div class="card-header text-center">Business Center</div>
                    <img src="../../assets/images/business_logo.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center">Assembly and Repairs of Computer Systems</p>
                    </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 gx-1">
                <div class="card" data-aos="fade-up" style="width: 12rem;">
                    <div class="card-header text-center">NECO Services</div>
                    <img src="../../assets/images/neco_logo.png" class="card-img-top customImg img2" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center">Assembly and Repairs of Computer Systems</p>
                    </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 gx-1">
                <div class="card" data-aos="fade-up" style="width: 12rem;">
                    <div class="card-header text-center">WAEC Services</div>
                    <img src="../../assets/images/waec_logo.png" class="card-img-top img1" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center">Assembly and Repairs of Computer Systems</p>
                    </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-3 gx-1">
                <div class="card" data-aos="fade-up" style="width: 12rem;">
                    <div class="card-header text-center">Server Security</div>
                    <img src="../../assets/images/sheild_icon.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-center">Assembly and Repairs of Computer Systems</p>
                    </div>
                </div>
              </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-4 service__section--customCol1" 
            data-aos="fade-up" 
            data-aos-duration="3000">
            <h2 class="">
                Consult us for your <span>ICT Services</span>
            </h2>
            <p>
                Consult us for you ICT Solutions, we provide quality and 
                top notch services to our valuable customers, 
                <span>our customers our priority</span>.
                Achieve a higher level of efficiency in your business today <span><img src="../../assets/Icons/winking_face_icon.png" class="icon-img" /></span>
            </p>

            <router-link :to="{name: 'Contact'}" class="btn-service hero__text--button">Consult Us  <i class="fas fa-long-arrow-alt-right fa_arrow"></i></router-link>
        </div>
    </div>
  </div>
</template>

<script>
//import Arrow from '@/assets/Icons/arrow-right-light.svg'
export default {
    components: {
        //Arrow,
    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
.service__section{
    background-color: #ffffff;
    padding: 0px 40px 0px 40px;
    border: 2px solid red;
    @media only screen and (max-width: 600px){
    
    }


  img{
    //border: 2px solid red;
    padding: 40px;
    box-shadow:  1px 1px 10px #bebebe,
             -1px -2px 5px #ffffff;
    background-color: $secondaryColor;
    @media only screen and (max-width: 600px){
        padding: 70px;
    }
  }

  .customRow{
    margin-top: 10px;
  }

  .customRow1{
    
    .img1{
        //border: 2px solid blue;
        padding: 0 !important;
    }
    .img2{
        //border: 2px solid blue;
        padding: 30px !important;
    }

    .card{
        @media only screen and (max-width: 600px){
            margin-top: 40px !important;
        }
    }

  }

  .card{
    background: #fff;
    box-shadow:  2px 2px 5px #cfcfcf,
             -7px -7px 10px #ffffff;
    //animation: jumpInfinite 7s infinite;
    @media only screen and (max-width: 600px){
        width: 18rem !important;
        .card-header{
            background-color: #fff;
            color: $defaultBlack;
            font-family: $paragraphText, serif;
            font-size: 1.7rem;
            font-weight: bold;
            word-spacing: 0.23ch;
            letter-spacing: 0.13ch;
        }

        .card-text{
            font-family: $strongText, serif;
            font-size: 1.4rem;
            color: $defaultBlack;
            opacity: .7;
            font-weight: 600;
            word-spacing: 0.23ch;
            letter-spacing: 0.10ch;

        }
    }
    
    @media only screen and (min-width: 360px) and (max-width: 360px){
        width: 17rem !important;
    }
    @media only screen and (min-width: 393px) and (max-width: 393px){
        width: 19rem !important;
    }
    @media only screen and (min-width: 414px) and (max-width: 414px){
        width: 20.5rem !important;
    }
  }

  &--customCol1{
    //border: 2px solid red;
    padding: 50px 20px;
    @media only screen and (max-width: 600px){
    }


    h2{
        font-family: $heroText, sans-serif;
        font-weight: 400;
        font-size: 3rem;
        opacity: .9;
        letter-spacing: 0.02ch;
        word-spacing: 0.07ch;

        span{
            font-family: $heroText, sans-serif;
            color: $primaryColor;
            font-weight: 400;
            font-size: 3rem;
        }

        @media only screen and (max-width: 600px){
            font-weight: 700;
            opacity: none !important;
            font-size: 2.4rem;
            letter-spacing: 0.09ch;
            word-spacing: 0.13ch;
        }

    }

    p, span{
        margin-top: 70px;
        line-height: 2.5rem;
        font-size: 1.3rem;
        word-spacing: 0.02ch;
        letter-spacing: 0.02ch;
        flex-wrap: 500;
        font-family: $paragraphText,serif;

        @media only screen and (max-width: 600px){
            font-size: 1.7rem;
            font-weight: 500;
            line-height: 3rem;
            word-spacing: 0.13ch;
            letter-spacing: 0.09ch;
        }
    }

    .btn-service{
        margin-top: 50px !important;
        border: 2px solid red;
        display: inline-block;

        @media only screen and (max-width: 600px){
            width: 100%;
            color: $primaryColor;
            font-size: 1.7rem;

            &:hover{
                background-color: $primaryColor;
                color: $defaultWhite;
                border: none;
            }
        }
    }

    .fa_arrow{
        @media only screen and (min-width: 375px) and (max-width: 375px){
            margin-left: 10px !important;
        } 

        @media only screen and (max-width: 600px){
            margin-left: 25px;
        } 
    }

    .icon-img{
        background-color: #fff !important;
        box-shadow: none !important;
        width: 50px;
        height: 50px;
        padding: 0 !important;
        z-index: -1;
        margin-right: 30px !important;

        @media only screen and (max-width: 600px){
            width: 80px;
            height: 80px;
        }
    }
  }


}

@keyframes jumpInfinite{
    0%{
        margin-top: 0;
    }
    50%{
        margin-top: 10px;
    }
    100%{
        margin-top: 0;
    }
}
</style>