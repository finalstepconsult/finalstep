<template>
  <div class="about">
    <AboutHero class="about__zero" displayAboutCards />
    <AboutSectionOne class="about__one"/>
  </div>
</template>

<script>
import AboutHero from '@/components/aboutComponent/AboutHero.vue'
import AboutSectionOne from '@/components/aboutComponent/AboutSectionOne.vue'
export default {
  props: {
    //aboutCardDisplayed:Boolean,
  },
  data(){
    return{
      aboutCardDisplayed: false,
    }
  },
  components: {
        AboutHero,
        AboutSectionOne,
  },
  methods: {
    displayAboutCards(){
      this.aboutCardDisplayed = !this.aboutCardDisplayed
    }
  }

}
</script>

<style>
  .about__zero{

  }
  .about__one{

    transform: translateY(10%);
  }
</style>