<template>
  <div class="blog">
      <BlogHero />
      <BlogMarquee/>
      <BlogList />
      <BlogNewsletter />
      <!--Loading /-->
  </div>
</template>

<script>
import BlogHero from '@/components/blogComponent/BlogHero.vue'
import BlogMarquee from '@/components/homeComponent/BlogMarquee.vue'
import BlogList from '@/components/blogComponent/BlogList.vue'
import BlogNewsletter from '@/components/blogComponent/BlogNewsletter.vue'
//import Loading from '@/components/modalComponent/loading.vue'
export default {
    components: {
        BlogHero,
        BlogMarquee,
        BlogList,
        BlogNewsletter,
        //Loading,
    },



}
</script>

<style>

</style>