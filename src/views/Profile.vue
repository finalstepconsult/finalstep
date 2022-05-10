<template>
  <div class="profile">
        <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
        <div class="container">
            <h2>Account Settings</h2>
            <div class="profile-info">
                <div class="initials">F{{$store.state.profileInitials}}</div>
                <div class="admin-badge">
                    <adminIcon class="icon" />
                    <span>admin</span>
                </div>
                <div class="input">
                    <label for="username">Username</label>
                    <input type="text" name="" id="username" v-model="finalstepUserUsername">
                </div>
                <div class="input">
                    <label for="username">Email</label>
                    <input type="email" disabled name="" id="email" v-model="finalstepUserEmail">
                    <input type="checkbox"  name="" id="email" v-model="isAdmin">
                </div>
                    <button @click="updateProfile">Save Changes</button>
            </div>
        </div>
  </div>
</template>

<script>
import Modal from "@/components/modalComponent/Modal.vue"
import adminIcon from "../assets/Icons/user-crown-light.svg"
export default {
    name: "profile",
    components: {
        Modal,
        adminIcon,
    },
    data(){
        return{
            modalMessage: "Changes were saved",
            modalActive: null,
        }
    },
    methods: {
        closeModal(){
            this.modalActive = !this.modalActive;
        },
        updateProfile(){
            this.$store.dispatch("updateUserSetings");
            this.modalActive = !this.modalActive;
        }
    },
    computed:{
        finalstepUserUsername: {
            get(){
                return this.$store.state.profileUsername;
            },
            set(payload){
                this.$store.commit("changeFinalstepUserUsername", payload);
            },
        },
        finalstepUserEmail(){
            return this.$store.state.profileEmail;
        },
        isAdmin(){
          return this.$store.state.isAdmin;
        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
  /*  .profile{
       border: 2px solid green;
        .container{
            max-width: 1400px !important;
            border: 2px solid black;
            //padding: 60px 25px;

            h2{
                text-align: center;
                margin-bottom: 16px;
                font-weight: 300;
                font-size: 32px;
            }

            .profile-info{
                border-radius: 8px;
                padding: 32px;
                background-color: #f1f1f1;
                display: flex;
                flex-direction: column;
                max-width: 600px;
                margin: 32px auto;

                .initials{
                    position: initial;
                    width: 80px;
                    height: 80px;
                    font-size: 32px;
                    background-color: darken($primaryColor, 20%);
                    color: #fff;
                    display: flex;
                    align-self: center;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50px;
                }

                .admin-badge{
                    display: flex;
                    align-self: center;
                    color: #fff;
                    font-size: 14px;
                    padding: 8px 24px;
                    border-radius: 8px;
                    background-color: darken($primaryColor, 20%);
                    margin: 16px 0;
                    text-align: center;
                    text-transform: capitalize;

                    .icon{
                        width: 14px;
                        height: auto;
                        margin-right: 8px;
                    }
                }

                .input{
                    margin: 16px 0;

                    label{
                        font-size: 14px;
                        display: block;
                        padding-bottom: 6px;
                        font-family: $heroText, serif;
                    }

                    input{
                        width: 100%;
                        border: none;
                        background-color: #fff;
                        padding: 8px;
                        height: 50px;
                        font-family: $heroText, serif;

                        &:focus{
                            outline: none;
                        }
                    }
                }

                button{
                    align-self: center;
                    padding: 10px;
                    background-color: darken($primaryColor, 20%);
                    color: #fff;
                    border: none;
                }
            }
        }
    }*/
</style>