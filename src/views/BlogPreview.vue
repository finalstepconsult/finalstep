<template>
  <div class="blog__preview post-view">
      <div class="container-fluid quillWrapper">
        <h2>{{this.blogTitle}}</h2>
        <img :src="blogCoverPhoto" alt="">
        <div class="post-content ql-editor" v-html="blogHTML"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: "PostPreview",
    computed: {
        blogTitle(){
            return this.$store.state.finalstepBlogTitle;
        },
        blogHTML(){
            return this.$store.state.finalstepBlogHTML;
        },
        blogCoverPhoto(){
            return this.$store.state.finalstepBlogPhotoFileURL;
        },
    }

}
</script>

<style lang="scss" scoped>
    .post-preview{
        min-height: 100%;


        .container-fluid{
            padding: 50px 25px;
        }
        
        .ql-editor{
            padding: 0;
        }

        .h2{
            margin-bottom: 16px;
            font-weight: 300;
            font-size: 32px;
        }
        
        img{
            width: 100%;
            margin-bottom: 32px;
        }
    }
</style>