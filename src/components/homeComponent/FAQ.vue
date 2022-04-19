<template>
  <div class="faq__section container-fluid">
        <h2 class="faq__section--heroText">Frequently Asked Questions</h2>
        <p class="faq__section--paragraphText">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et soluta rerum, ducimus eveniet sint cumque a consequatur.
        </p>

        <div class="row faq__section--row" >
            <div class="col-md-6 faq__section--col"></div>
            <div class="col-md-6 faq__section--col1">
                <div class="faq-list faq__section--faq1" @click="showFaq1" :class="[isActive1 ? activeClass : '']">
                    <h3>What is the Deadline for WAEC CASS Registration?</h3>
                    <p v-show="faq1">Waec Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Molestias, expedita.
                        Waec Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Molestias, expedita.
                    </p>
                </div>
                <div class="faq-list faq__section--faq2" @click="showFaq2" :class="[isActive2 ? activeClass : '']">
                    <h3>Have Jamb reprinting started?</h3>
                    <p v-show="faq2">jamb Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Molestias, expedita.
                    </p>
                </div>
                <div class=" faq-list faq__section--faq3" @click="showFaq3" :class="[isActive3 ? activeClass : '']">
                    <h3>Closing date for jamb registration?</h3>
                    <p v-show="faq3">jamb reg Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Molestias, expedita.
                    </p>
                </div>
                <div class="faq-list faq__section--faq4" @click="showFaq4" :class="[isActive4 ? activeClass : '']">
                    <h3>Why does my laptop freeze?</h3>
                    <p v-show="faq4">hardware Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Molestias, expedita.
                    </p>
                </div>
                <div class="faq-list faq__section--faq5" @click="showFaq5" :class="[isActive5 ? activeClass : '']">
                    <h3>What are network topologies?</h3>
                    <p v-show="faq5">network Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Molestias, expedita.
                    </p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
name:"faq",
data(){
    return{
        faq1: false,
        faq2: false,
        faq3: false,
        faq4: false,
        faq5: false,
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        activeClass: 'active',
    }
},

methods:{

    showFaq1(){
        this.faq1 = !this.faq1
        this.faq2 = false
        this.faq3 = false
        this.faq4 = false
        this.faq5 = false
        this.isActive1 = true
        this.isActive2 = false
        this.isActive3 = false
        this.isActive4 = false
        this.isActive5 = false
    },
    showFaq2(){
        this.faq2 = !this.faq2
        this.faq1 = false
        this.faq3 = false
        this.faq4 = false
        this.faq5 = false
        this.isActive1 = false
        this.isActive2 = true
        this.isActive3 = false
        this.isActive4 = false
        this.isActive5 = false
    },
    showFaq3(){
        this.faq3 = !this.faq3
        this.faq2 = false
        this.faq1 = false
        this.faq4 = false
        this.faq5 = false

        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = true
        this.isActive4 = false
        this.isActive5 = false
    },
    showFaq4(){
        this.faq4 = !this.faq4
        this.faq2 = false
        this.faq3 = false
        this.faq1 = false
        this.faq5 = false

        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = false
        this.isActive4 = true
        this.isActive5 = false
    },
    showFaq5(){
        this.faq5 = !this.faq5
        this.faq2 = false
        this.faq3 = false
        this.faq4 = false
        this.faq1 = false

        this.isActive1 = false
        this.isActive2 = false
        this.isActive3 = false
        this.isActive4 = false
        this.isActive5 = true
    }
}
}
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";
.faq__section{

    padding: 50px;

    &--heroText{
        text-align: center;
        font-size: 2.7rem;
        font-family: $heroText, serif;
        color: $defaultBlack;
        word-spacing: 0.20ch;
        letter-spacing: 0.09ch;
        font-weight: 500;
    }


    &--paragraphText{
        font-family: $strongText, serif;
        font-size: 1.2rem;
        width: 50%;
        text-align: center;
        margin-left: 25%;
        color: $defaultBlack;
        margin-top: 25px;
        
    }

    &--row{
        margin-top: 40px;
    }

    &--col1{
        //border: 2px solid blue;
        padding: 0;
    }

    .faq-list{
        //border: 2px solid green;
        width: 100%;
        padding: 0;

        h3{
            font-size: 1.2rem;
            padding: 20px;
            //border: 2px solid red;
            font-family: $heroText, serif;
            color: $defaultBlack;
            background-color: #fff;
            box-shadow: 0 2px 2px 0 rgba( 31, 38, 135, 0.37 );
            cursor: pointer;

            &:hover{
                background-color: $primaryColor;
                color: #fff;
            }
        }

        p{
            padding: 10px;
            padding-left: 15px;
            background-color: $defaultWhite;
            margin-top: -10px;
            font-family: $paragraphText, serif;
            font-size: 1rem;
            transition: 2s ease-in-out;
        }
    }

    .active{
        h3{
            background-color: $primaryColor;
            color: $defaultWhite;
        }
    }


}
</style>