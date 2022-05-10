<template>
    <div class="container-fluid marquee__section ">
        <h2 class="hotTopic__header mb-4 marquee_text">
          <span>Trending</span> Stories
        </h2>
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-4 col-lg-3 customCol " :post="post" v-for="(post, index) in blogPostTrending" :key="index">
              <router-link to="/">
              <div class="card blogList__section--card">
                <img :src="post.blogCoverPhoto" class="card-img-top blogList__section--img" alt="...">
                <div class="card-body blogList__section--body">
                  <a href="#" class="blogList__section--category">{{post.blogCategory}}</a>
                  <h5 class="card-title blogList__section--title">{{post.blogTitle}}</h5>
                  <p class="text-muted">by Ezechimere</p>
                  <p class="card-text blogList__section--text" v-html="post.blogHTML"></p>
                  <div class="blogList__section--cardFooter">
                    <p class="text-muted">3 minutes read</p>
                    <router-link :to="{name: 'PostDetail', params:{blogid: post.blogID}}" class="blogList__section--readMore readMore">Continue Reading <i class="fas fa-long-arrow-alt-right"></i></router-link>
                  </div>
                  <!--date{{new Date(post.blogDate).toLocalString('en-us', {dateStyle: "long"})}}-->
                </div>
              </div>
              </router-link>
            </div>

        </div>
    </div>

</template>

<script>
export default {
  props: [],
  components: {    
  },

  data() {
    return{
    }
  },

  computed: {
    blogPostTrending(){
      return this.$store.getters.blogPostTrending
    }
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
.marquee__section{

  .hotTopic__header{
    margin-top: 30px;
  }

}
    /*background-color: $defaultWhite;
    @media only screen and (max-width: 600px){
      margin-top: -20px;
    }
    @media only screen and (min-width: 900px) and (max-width: 1200px){
    }

    .marquee_text{
        //border: 2px solid red;
        font-family: $heroText, serif !important;
        font-size: 2.5rem;
        font-weight: 600;

        @media only screen and (max-width: 600px){
          margin-top: 20px;
          font-size: 2rem;
          padding-top: 20px;
          margin-bottom: 7px !important;
        }

        span{
            font-family: $heroText, serif !important;
            font-size: 2.5rem;
            color: $primaryColor;
  
          @media only screen and (max-width: 600px){
            margin-top: 20px;
            font-size: 2rem;
          }
        }
    }

    .row{
      //border: 2px solid red;
      padding-left: 35px;
      @media only screen and (max-width: 600px){
      }
      @media only screen and (min-width: 900px) and (max-width: 1200px){
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: -40px;
      }
 
    }
    .customCol{
      padding: 0 !important;
      width: 25rem;
      margin-left: 20px !important;
      @media only screen and (max-width: 600px){
        width: 28rem !important;
      }
      @media only screen and (min-width: 900px) and (max-width: 1200px){
        width: 18rem;
        transform: translateX(-2%)
      }
    }

    .blogList__section--card{
      margin-top: -20px;
      width: 100%;
        @media only screen and (max-width: 600px){
          width: 20rem !important;
          //margin-left: -21px;
        }
       /* @media only screen and (max-width: 414px) and (min-width: 414px){
          margin-left: -15px !important;
          margin-bottom: 10px;
        }
        @media only screen and (max-width: 375px) and (min-width: 375px){
          margin-left: -35px;
          margin-bottom: 10px;
        }
        @media only screen and (max-width: 393px) and (min-width: 393px){
          margin-left: -27px;
          margin-bottom: 10px;
        }
        @media only screen and (max-width: 412px) and (min-width: 412px){
          margin-left: -17px;
          margin-bottom: 10px;
        }
        @media only screen and (min-width: 900px) and (max-width: 1200px){
        }*

    }*/

</style>