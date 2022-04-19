<template>
  <div class="home">
    <HeroSection />
    <!--ServiceSection /-->
    <AboutSection />
    <UniqueSection />
    <ServiceHome />
    <BlogMarquee />
    <FAQ />
    
  </div>
</template>

<script>
import HeroSection from '@/components/homeComponent/HeroSection.vue'
//import ServiceSection from '@/components/homeComponent/ServiceSection.vue'
import AboutSection from '@/components/homeComponent/AboutSection.vue'
import UniqueSection from '@/components/homeComponent/UniqueSection.vue'
import ServiceHome from '@/components/homeComponent/ServiceHome.vue'
import BlogMarquee from '@/components/homeComponent/BlogMarquee.vue'
import FAQ from '@/components/homeComponent/FAQ.vue'

export default {
  name: "Home",
  components: {
    HeroSection,
    //ServiceSection,
    AboutSection,
    UniqueSection,
    ServiceHome,
    BlogMarquee,
    FAQ,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variable.scss";


</style>
