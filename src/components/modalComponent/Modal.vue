<template>
  <div class="modal">
      <div class="modal-content">
        <p class="card cardCustom">{{this.modalMessage}}</p>
        <button @click="closeModal">close</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    props: ["modalMessage"],
    methods:{
        closeModal(){
            this.$emit('close-modal');
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variable.scss";
  .modal{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: rgba(0,0,0,0.7);

    .modal-content{
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 8px;
      width: 300px;
      padding: 40px 30px;
      background-color: $secondaryColor;

      .card{
        text-align: center;
        padding: 20px;
              background-color: $secondaryColor;
            box-shadow:  0px 0px 5px #1a0000,
                        0px 0px 5px #240000;

      }

      .cardCustom{
        font-family: $heroText, serif !important;
        font-weight: 500;
      }

      button{
        align-self: center;
        margin-top: 10px;
        padding:5px 20px;
        border-radius: 30px;
        border: none;
        background-color: darken($primaryColor, 20%);
        color: $defaultWhite;
        letter-spacing: 0.13ch;
        width: 50%;
      }
    }
  }
</style>