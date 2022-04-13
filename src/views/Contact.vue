<template>
    <div class="container-fluid contact__section">
        <div class="contact__section--zero">
            <vue-particles class="particles" 
                :particleSize="7" 
                color="#fff" 
                linesColor="#f03"
                shapeType="circle"
                :moveSpeed="0">
            </vue-particles>

            <div class="contact__section--text">
                <h2 class="contact__section--textHero">Contact Us</h2>
                <p class="contact__section--subText">
                    ICT Consultancy Service, WAEC NECO JAMB Services, Web development, Graphic Design, 
                    Network Installation, Computer Repairs and Lots More - consult us
                </p>
            </div>

        </div>

        <div class="row contact__section--row1">
            <form class="contact__section--form" ref="form" @submit.prevent="sendEmail">
                <label>Full Name</label>
                <input type="text" name="user_name" v-model="fullName" required placeholder="John Doe">
                <label>Email</label>
                <input type="email" name="user_email" v-model="email" required placeholder="Johndoe@example.com">
                <label>Message</label>
                <textarea  class="contact__section--msg" name="message" v-model="msgArea" required placeholder="Your message here!"></textarea>
                <input type="submit" value="Send Message" class="btn-success">
            </form>
        </div>

        <div class="contact__section--social">
            <h3>Follow Us on our Social Media Platform</h3>
            <router-link to="/" class="social-cover">
                <i class="fa-brands fa-facebook fa_icon"></i><span>Facebook</span>
            </router-link>
            <router-link to="/" class="social-cover">
            <i class="fa-brands fa-twitter fa_icon"></i><span>Twitter</span>
            </router-link>
            <router-link to="/" class="social-cover">
            <i class="fa-brands fa-whatsapp fa_icon"></i><span>Whatapp</span>
            </router-link>
            <router-link to="/" class="social-cover">
            <i class="fa-brands fa-linkedin-in fa_icon"></i><span>linkedin</span>
            </router-link>
        </div>

        <div class="contact__section--address">
            <div class="customerCare">
                <h3>Customer Care Line</h3>
                <p>+234-81-089-3202</p>
            </div>

            <div class="customerCare">
                <h3>Head Office</h3>
                <p>No9 Ejikeme Plaza
                    Nitel junction Nnewi, 
                    Anambra State.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
    data(){
        return{
            fullName: '',
            email: '',
            msgArea: ''
        }
    },
    methods: {
        sendEmail() {
        emailjs.sendForm('service_finalstep', 'contact_finalstep', this.$refs.form, 'tAygTjLdCRjtbXShV',{
            name: this.fullName,
            email: this.email,
            msgArea: this.msgArea,
        })
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
            // Reset form field
            this.fullName = ''
            this.email = ''
            this.msgArea = ''
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
.contact__section{
    padding: 0;
    margin-bottom: 100px;
    &--zero{
        //border: 2px solid red;
        background-color: darken($primaryColor, 20%);
        height: 80vh;
        z-index: 1;
        position: relative;
    }

    .particles{
        z-index: -1;
        height: inherit;
        margin: 0;
        padding: 0;
        position: absolute;
        width: 100%;
    }

    &--textHero{
        color: $secondaryColor;
        text-align: center;
        font-family: $strongText;
        letter-spacing: 00.13ch;
        font-size: 3rem;
        padding-top: 20px;
        @media only screen and (max-width: 600px){
            padding-top: 40px;
        }

        @media only screen and (min-width: 600px) and (max-width: 1200px){
            padding-top: 90px;
        }
    }

    &--subText{
        width: 50%;
        transform: translateX(50%);
        color: $defaultWhite;
        opacity: .8;
        text-align: center;
        margin-top: 20px;
        @media only screen and (max-width: 600px){
            width: 90%;
            transform: translateX(6%);
            font-size: 1.4rem;
            margin-top: 50px;
            line-height: 2rem;
            font-family: $paragraphText, serif;
            opacity: 1;
        }

        @media only screen and (min-width: 600px) and (max-width: 1200px){
            margin-top: 30px;
            width: 95%;
            transform: translateX(2.5%);
        }
    }

    &--form{
        //border: 2px solid green;
        display: flex;
        flex-direction: column;
        width: 700px;
        transform: translateX(47%);
        position: absolute;
        top: 40%;
        z-index: 1;
        background-color: $secondaryColor;
        border-radius: 10px;
        padding: 30px;
        box-shadow:  1px 1px 5px #8b0000,
             -1px -1px 5px #bb0000;

        
        @media only screen and (max-width: 600px){
            transform: translateX(3.5%);
            width: 100%;
            padding: 20px;
            top: 54%;
        }

        @media only screen and (min-width: 600px) and (max-width: 1200px){
            //border: 2px solid green !important;
            transform: translateX(7.5%);
            width: 90%;
            top: 60%;
        }
    }

    label{
        margin-bottom: 7px;
        color: $defaultBlack;
        font-family: $paragraphText, serif;
        font-size: 1.1rem;
        letter-spacing: 0.13ch;
        font-weight: bold;
        opacity: .8;
        @media only screen and (max-width: 600px){
            margin-bottom: 10px;
            margin-top: 10px;
            opacity: 1;
            font-size: 1.3rem;
        }
    }

    input[type=text], [type=email]{
        margin-bottom: 20px;
        height: 50px;
        padding-left: 20px;
        @media only screen and (max-width: 600px){
            border: 1px solid rgba(34, 34, 34, 0.867);
            margin-bottom: 30px;
            height: 70px;
        }
    }


    input[type=submit]{
        margin-bottom: 20px;
        height: 50px;
        border:  none;
        outline: none;
    }

    &--msg{
        height: 200px;
        margin-bottom: 20px;
        padding-left: 20px;
        padding-top: 10px;
    }

    &--social{
        margin-left: 10px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        width: 300px;
        @media only screen and (max-width: 600px){
            z-index: 1;
            margin-top: 500px;
            display: block;
            margin-left: 0px;
            background-color: #fff;
            width: 100%;
            padding: 20px;
        }

        @media only screen and (min-width: 600px) and (max-width: 1200px){
            z-index: 1;
            margin-top: 500px;
            display: block;
            margin-left: 0px;
            background-color: #fff;
            width: 100%;
            padding: 20px;
        }

        h3{
            font-size: 1rem;
            font-family: $heroText, serif;
            word-spacing: 0.13ch;
            margin-bottom: 20px;
            @media only screen and (max-width: 600px){
                //border: 2px solid red;
                padding-left: 10px;
                font-size: 1.3rem;
                line-height: 2rem;
            }
            @media only screen and (min-width: 600px)and (max-width: 1200px){
                padding-left: 10px;
                font-size: 1.3rem;
                line-height: 2rem;
            }
        }

        /*.social-cover{
            border: 2px solid green;
            display: flex;
            justify-content: space-around;
        }*/

        .fa_icon{
            //border: 1px solid darken($primaryColor, 20%);
            border-radius: 50%;
            font-size: 2rem;
            padding: 10px;
            margin-bottom: 10px;
            background-color: darken($primaryColor, 20%);
            color: #fff;
            @media only screen and (max-width: 600px){
                margin-left: 30px;
            }
            @media only screen and (min-width: 600px) and (max-width: 1200px){
                margin-left: 25px;
            }
        }

        span{
            margin-left: 20px;
            font-family: $buttonCta, serif;
            margin-top: 10px !important;
            letter-spacing: 0.13ch;
            font-weight: bold;
            @media only screen and (max-width: 600px){
                display: none;
            }
        }
    }

    &--address{
        transform: translate(385%, -230%);
        width: 20%;
        z-index: 1;
        @media only screen and (max-width: 600px){
            transform: translate(0%, 10%); 
            width: 100%;
            //border: 2px solid red;
            padding: 20px;
        }
        @media only screen and (min-width: 600px) and (max-width: 1200px){
            transform: translate(0%, 10%); 
            width: 100%;
            //border: 2px solid red;
            padding: 20px;
        }

        h3{
            font-family: $heroText, serif;
            font-size: 1rem;
            word-spacing: 0.13ch;
            margin-bottom: -2px;
        }

        p{
            margin-bottom: 20px;
            font-family: $paragraphText, serif;
            letter-spacing: 0.13ch;
        }
    }

}
</style>