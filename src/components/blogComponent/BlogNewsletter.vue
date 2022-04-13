<template>
    <div class="blog__newsletter container-fluid">
        <div class="blog__newsletter--main d-flex">
          <h1 class="blog__newsletter--text">Suscribe to our NewsLetter</h1>
          <div class="input-group mb-3 blog__newsletter--inputGroup">
            <input type="text" class="form-control blog__newsletter--input" placeholder="Enter your email " aria-label="Recipient's username" aria-describedby="basic-addon2">
            <button type="submit" class="input-group-text blog__newsletter--submit btn btn-primary" id="basic-addon2">Subscribe</button>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
    .blog__newsletter{
        background-color: darken($primaryColor, 20%);

        &--main{
            justify-content: space-between;
            padding: 80px 40px;
            @media only screen and (max-width: 600px){
                //border: 2px solid green;
                display: flex;
                flex-direction: column !important;
                padding: 30px 0;
                align-items: center;
            }
        }

        &--text{
            color: $defaultWhite;
            font-family: $buttonCta, serif;
            font-size: 2rem;
            margin-top: 3px;
            @media only screen and (max-width: 600px){
                //border: 2px solid cyan;
                font-size: 1.4rem;
                width: inherit;
                margin-bottom: 20px;
            }

        }

        &--inputGroup{
            width: 40%;
            @media only screen and (max-width: 600px){
                width: 90%;

            }
        }

        &--input{

            &:focus{
                outline: none !important;
                border: none !important;
            }

        }

        &--submit{
            font-family: $paragraphText, serif;
            border: 1px solid $defaultWhite;
        }
    }

    input::-webkit-input-placeholder{
        color: $defaultWhite;
        font-size: 1rem;
        font-weight: 400;
    }

    input{
        background-color: darken($primaryColor, 20%);
    }

    input:focus{
        background-color: #fff;
        border: none !important;
        outline: none !important
    }

    input:focus::-webkit-input-placeholder{
        color: $defaultBlack
    }

</style>