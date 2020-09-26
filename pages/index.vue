<template>
  <div class="__main_block">
    <Header />
    <ColorModePicker />
    <div class="main_doc">
      <div class="bg_article">
        <PostCard
          v-for="post in posts"
          :key="post.path"
          :post="post"
          :class="{dark}"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/header.vue'
import ColorModePicker from '@/components/ColorModePicker'
import PostCard from '~/components/PostCard'
export default {
  components: {
    Header,
    PostCard,
    ColorModePicker
  },
  async asyncData ({ params, error, $content }) {
    try {
      const posts = await $content('articles', { deep: true }).fetch()
      // eslint-disable-next-line no-console
      console.log(posts)
      return { posts }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  data () {
    return {
      dark: false,
      isTheme: ''
    }
  },
  created () {
    this.$nuxt.$on('theme', (data) => {
      this.isTheme = data
      this.isTheme === 'dark' ? this.dark = true : this.dark = false
    })
  }
}
</script>

<style lang="scss" src="./home.scss"></style>
