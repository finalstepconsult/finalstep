<template>
  <div class="blog">
      <BlogHero />
      <BlogList />
      <BlogNewsletter />
  </div>
</template>

<script>
import BlogHero from '@/components/blogComponent/BlogHero.vue'
import BlogList from '@/components/blogComponent/BlogList.vue'
import BlogNewsletter from '@/components/blogComponent/BlogNewsletter.vue'
export default {
    components: {
        BlogHero,
        BlogList,
        BlogNewsletter,
    },


}
</script>

<style>

</style>