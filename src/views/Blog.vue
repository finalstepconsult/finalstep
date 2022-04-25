<template>
  <div class="blog">
      <BlogHero />
      <BlogList />
      <BlogNewsletter />
      <!--Loading /-->
  </div>
</template>

<script>
import BlogHero from '@/components/blogComponent/BlogHero.vue'
import BlogList from '@/components/blogComponent/BlogList.vue'
import BlogNewsletter from '@/components/blogComponent/BlogNewsletter.vue'
//import Loading from '@/components/modalComponent/loading.vue'
export default {
    components: {
        BlogHero,
        BlogList,
        BlogNewsletter,
        //Loading,
    },


}
</script>

<style>

</style>