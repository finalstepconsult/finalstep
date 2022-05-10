<template>
  <div class="post__detail container" v-if="currentBlog">
    <div class="post__detail--changes" v-if="isAdmin">
      <button class="btn btn-danger btn-delete" @click="deletePost">Delete</button>
      <button class="btn btn-primary btn-edit" @click="editPost">Edit</button>
    </div>

  <div class="post__detail--heroText">
    <h2>{{this.currentBlog[0].blogTitle}}</h2>
    <p class="text-muted">posted on: {{new Date (this.currentBlog[0].blogDate).toLocaleString("en-us", {dateStyle: "long"})}}</p>
  </div>

    <img class="post__detail--heroImg" :src="this.currentBlog[0].blogCoverPhoto" alt="">
    <div class="post__detail--content" v-html="this.currentBlog[0].blogHTML"></div>

  <button>
      <ShareNetwork :popup="{width: 400, height: 200}" 
          :network="network"
          :url="getURL"
          title="Awesome Article"
          description="This is an awesome article for awesome readers">
          <span>Share on Facebook</span>
      </ShareNetwork>
  </button>

  <hr />
    <div class="post__detail--comment">
      <h3>Write a comment</h3>
      <div class="post__detail--comment-form">

          <div class="comment-sec1">
            <input type="text" name="" id="" placeholder="Name" v-model="commentName">
            <input type="email" name="" id="" placeholder="Email" v-model="commentEmail">
          </div>
          <textarea type="text" name="" id="" placeholder="Write your comment" v-model="commentMessage"></textarea>
          <button class="btn-success btn btn-comment" @click="uploadComment">Send Message</button>

      </div>
    </div>
  </div>
</template>

<script>
//import firebase from "firebase/app";https://lindaojo.com/blog/awesome-article
import "firebase/storage";
//import db from '../firebase/firebaseInit';
export default {
  name: "PostDetail",
  data(){
    return{
      currentBlog: null,
      err: null,
      errMsg: null,
      network: "facebook",

    }
  },
  async mounted(){
    this.currentBlog = await this.$store.state.blogPosts.filter(post => {
      return post.blogID === this.$route.params.blogid;
    }),

    console.log(this.getURL)
  },


  computed:{
    getURL(){
      return this.$route.query.name;
    },
    isAdmin(){
      return this.$store.state.isAdmin;
    },
    /*commentName: {
      get(){
          return this.$store.state.commentName;
      },
      set(payload){
          this.$store.commit("newCommentName", payload);
      }
    },
    /*commentEmail: {
      get(){
          return this.$store.state.commentEmail;
      },
      set(payload){
          this.$store.commit("newCommentEmail", payload);
      }
    },
    commentMessage: {
      get(){
          return this.$store.state.commentMessage;
      },
      set(payload){
          this.$store.commit("newCommentMessage", payload);
      }
    },*/
  },

  methods: {
    deletePost(){
      this.$store.dispatch("deletePost", this.currentBlog[0].blogID)
      this.$router.push({name: "Blog"})
    },
    editPost(){
      this.$router.push({name: 'EditPost', params: {blogid: this.currentBlog[0].blogID}})
    },
    /*uploadComment(){
      if(this.commentName.length !== 0 && this.commentEmail !== 0 && this.commentMessage !== 0){
        async() => {
          const timestamp = Date.now();
          const dataBase = db.collection("postComments").doc();

          await dataBase.set({
            commentID: dataBase.id,
            commentName: this.commentName,
            commentEmail: this.commentEmail,
            commentMessage: this.commentMessage,
            date: timestamp,
          });
          await this.$store.state.dispatch("getComment");
          this.$router.push({name: "PostDetail", params: {blogid: this.currentBlog[0].blogID}})

        }
      }
      this.err = true;
      this.errMsg = "Please ensure the fields are filled";
      setTimeout(() => {
        this.err = false
      }, 5000);
      return  //main IF ends here
    }*/
  },

}
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";
    *,
    *::after,
    *::before{
      box-sizing: border-box;
    }
  .post__detail{
    padding: 0px;
    //max-width: 900px;

    hr{
      width: 70%;
    }
    &--changes{
      padding: 10px;
      display: flex;
      justify-content: space-between;

      .btn-delete,
      .btn-edit{
        width: 10%;
        height: 20%;
        letter-spacing: 0.13ch;
        font-family: $strongText,serif;
      }
    }

    &--heroText{
      padding: 10px;

      h2{
        font-family: $heroText, serif;
        letter-spacing: 0.09ch;
      }

      p{
        font-family: $paragraphText, serif;
      }
    }

    &--heroImg{
      width: 70%;
      height: 400px
    }

    &--content{
      font-family: $paragraphText, serif;
      margin-bottom: 90px;

      h1,h2,h3,h4,h5,h6{
        font-family: $heroText, serif;
      }
      p{
        font-family: $paragraphText, serif;
      }
    }

    &--comment{
      text-align: center;
      width: 70%;

      h3{
        margin-top: 10px;
        font-family: $strongText, serif;
        font-size: 1.5rem;
      }
      .comment-sec1{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        input{
          width: 48%;
          height: 50px;
          padding-left: 10px;
          border: none;
          outline: none; 
          border-left: 1px solid darken($primaryColor, 20px)
        }

        input:active{
          border: none;
          outline: none;
        }

        input:focus{
          border-bottom: 2px solid darken($color: $primaryColor, $amount: 20%);
        }
      }

      textarea{
        margin-top: 10px;
        width: 100%;
        height: 200px;
        padding-left: 10px;
        padding-top: 10px;
        border: none;
        outline: none;
        border-left: 1px solid darken($primaryColor, 20px);

        &:focus{
          border-bottom: 2px solid darken($color: $primaryColor, $amount: 20%);          
        }
      }
    }
  }

  .btn-comment{
    width: 70%;
    margin-bottom: 70px;
    font-family: $strongText, serif;
    background-color: darken($primaryColor, 20%);
    border: none;
    transition: .5s ease-in;

    &:hover{
      background-color: darken($primaryColor, 10%);
      transition: .5s ease-in;
    }
  }
  
</style>