<template>
  <div class="create-post">
      <BlogCoverPreview  v-show="this.$store.state.finalstepBlogPhotoPreview"/>
      <Loading v-show="loading"/>
      <div class="container">
          <div :class="{invisible: !err}" class="err-msg">
              <p><span>Error:</span>{{this.errMsg}}</p>
          </div>
          <div class="blog-info">
              <input type="text" name="" id="" placeholder="Enter Blog Title" v-model="finalstepBlogTitle">
              <div class="upload-file">
                  <label for="blog-photo">Upload cover photo</label>
                  <input type="file" name="" ref="blogPhoto" @change="fileChange" id="blog-photo" accept=".png, .jpg, .jpeg">
                  <button class="preview" :class="{'button-inactive' : !this.$store.state.finalstepBlogPhotoFileURL}" @click="openPreview">Preview Photo</button>
                  <span>File Chosen: {{this.$store.state.finalstepBlogPhotoName}}</span>
              </div>
          </div>
          <div class="editor">
              <vue-editor @image-added="imageHandler" :editorOptions="editorSettings" v-model="finalstepBlogHTML" useCustomImageHandler/>
          </div>
          <div class="blog-actions">
              <button @click="uploadBlog">Pulish Post</button>
              <router-link class="router-button" :to="{name: 'BlogPreview'}">Post Preview</router-link>
          </div>
      </div>
  </div>
</template>


<script>
import BlogCoverPreview from "@/components/blogComponent/BlogCoverPreview.vue"
import Loading from "@/components/modalComponent/loading.vue"
import Quill from "quill";
window.Quill = Quill
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
import firebase from "firebase/app";
import "firebase/storage";
import db from '../firebase/firebaseInit';
export default {
    name: "CreatePost",
    components: {
        BlogCoverPreview,
        Loading,
    },
    data(){
        return{
            file: null,
            err: null,
            errMsg: null,
            editorSettings: {
                modules: {
                    imageResize: {},
                }
            },
            loading: null,
        }
    },
    computed: {
        profileId(){
            return this.$store.state.profileId;
        },
        blogCoverPhotoName(){
            return this .$store.state.finalstepBlogPhotoName;
        },
        finalstepBlogTitle: {
            get(){
                return this.$store.state.finalstepBlogTitle;
            },
            set(payload){
                this.$store.commit("updateBlogTitle", payload)
            }
        },
        finalstepBlogHTML: {
            get(){
                return this.$store.state.finalstepBlogHTML;
            },
            set(payload){
                this.$store.commit("newBlogPost", payload);
            }
        }
    },
    methods: {
        fileChange(){
            this.file = this.$refs.blogPhoto.files[0];
            const fileName = this.file.name
            this.$store.commit("fileNameChange", fileName);
            this.$store.commit("createFileURL", URL.createObjectURL(this.file));
        },
        openPreview(){
            this.$store.commit("openPhotoPreview");
        },
        imageHandler(file, Editor, cursorLocation, resetUpLoader){
            const storageRef = firebase.storage().ref();
            const docRef = storageRef.child(`documents/finalstepBlogPostPhotos/${file.name}`)
            //to upload photos to our firebase
            docRef.put(file).on("state_changed", (snapshot) => {
                console.log(snapshot)
            }, (err) => {
                console.log(err);
            }, async () => {
                const downloadURL = await docRef.getDownloadURL();
                Editor.insertEmbed(cursorLocation, "image", downloadURL);
                resetUpLoader();
            })
        },
        uploadBlog(){
            if(this.finalstepBlogTitle.length !== 0 && this.finalstepBlogHTML.length !== 0){
                if (this.file) {
                    this.loading = true;
                    const storageRef = firebase.storage().ref();
                    const docRef = storageRef.child(`documents/finalstepBlogCoverPhotos/${this.$store.state.finalstepBlogPhotoName}`)
                    docRef.put(this.file).on("state_changed", (snapshot) => {
                        console.log(snapshot)
                    }, (err) => {
                        console.log(err)
                        this.loading = false;
                    }, async () => {
                        const downloadURL = await docRef.getDownloadURL();
                        const timestamp = await Date.now();
                        const dataBase = await db.collection("blogPosts").doc();

                        await dataBase.set({
                            blogID: dataBase.id,
                            blogHTML: this.finalstepBlogHTML,
                            blogCoverPhoto: downloadURL,
                            blogCoverPhotoName: this.blogCoverPhotoName,
                            blogTitle: this.finalstepBlogTitle,
                            profileId: this.profileId,
                            date: timestamp,
                        });
                        this.loading = true;
                        this.$router.push({name: "PostDetail"})
                    })
                    return
                }
                this.err = true;
                this.errMsg = "Please make sure you uploaded a blog cover photo";
                setTimeout(() => {
                    this.err = false;
                }, 5000);
            }
            this.err = true;
            this.errMsg = "Please ensure that your Blog title and Blog Post has been filled";
            setTimeout(() => {
                this.err = false;
            }, 5000);
            return;
        }
    }
}
</script>


<style lang="scss">
    .create-post{
        position: relative;
        height: 100%;

        button{
            margin-top: 0;
        }

        .router-button{
            text-decoration: none;
            //color: #fff;
        }

        label,
        button,
        .router-button{
            transition: 0.5ms ease-in-out all;
            align-self: center;
            font-size: 14px;
            cursor: pointer;
            border-radius: 20px;
            padding: 12px 24px;
            color: #fff;
            background-color: #303030;
            text-decoration: none;

            &:hover{
                background-color: rgba(48, 48, 48, 0.7);
            }
        }

        .container{
            position: relative;
            height: 100%;
            padding: 10px 25px 60px;
        }

        //error styling
        .invisible{
            opacity: 0 !important;
        }

        .err-msg{
            width: 100%;
            padding: 12px;
            border-radius: 8px;
            color: #fff;
            margin-bottom: 10px;
            background-color: #303030;
            opacity: 1;
            transition: .5s ease all;

            p{
                font-size: .9rem;
            }

            span{
                font-weight: 600;
            }
        }

        .blog-info{
            display: flex;
            margin-bottom: 32px;

            input:nth-child(1){
                min-width: 300px;
            }

            input{
                transition: .5s ease-in-out all;
                padding: 10px 4px;
                border: none;
                border-bottom: 1px solid #303030;

                &:focus{
                    outline: none;
                    box-shadow: 0 1px 0 0 #303030;
                }
            }


            .upload-file{
                flex: 1;
                margin-left: 15px;
                position: relative;
                display: flex;

                input{
                    display: none;
                }

                .preview{
                    margin-left: 16px;
                    text-transform: initial;
                }

                span{
                    font-size: 1rem;
                    margin-left: 16px;
                    align-self: center;
                }
            }
        }

        .editor{
            height: 60vh;
            display: flex;
            flex-direction: column;

            .quillWrapper{
                position: relative;
                flex-direction: column;
                height: 100%;
            }

            .ql-container{
                display: flex;
                flex-direction: column;
                height: 100%;
                overflow: scroll;
            }
        }

        .ql-editor{
            padding: 20px 16px 30px;
        }

        .blog-actions{
            margin-top: 70px;

            button{
                margin-right: 16px;
            }
        }

        .button-inactive{
            opacity: .2;
        }
    }
</style>