<template>
  <div class="home">
    <HeroSection />
    <!--ServiceSection /-->
    <AboutSection />
    <UniqueSection />
    
  </div>
</template>

<script>
import HeroSection from '@/components/homeComponent/HeroSection.vue'
//import ServiceSection from '@/components/homeComponent/ServiceSection.vue'
import AboutSection from '@/components/homeComponent/AboutSection.vue'
import UniqueSection from '@/components/homeComponent/UniqueSection.vue'
export default {
  name: "Home",
  components: {
    HeroSection,
    //ServiceSection,
    AboutSection,
    UniqueSection,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";


</style>
