<template>
  <div class="__main_block">
    <Header />
    <!-- <ColorModePicker /> -->
    <div class="main_doc">
      <!-- <PostCard
        v-for="post in articleAll"
        :key="post.path"
        :post="post"
        :total="allArticles.length"
        :class="{dark}"
      /> -->
      <PostCard
        :articles="paginatedArticles"
        :total="allArticles.length"
        :nameroute="routeName"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import getContent from '@/utils/getContent'
import PostCard from '@/components/PostCard'

export default {
  components: {
    Header,
    PostCard
  },
  async asyncData ({ $content, app, params, error }) {
    try {
      const content = await getContent($content, params, error)
      // eslint-disable-next-line no-console
      // console.log(content)
      return {
        allArticles: content.allArticles,
        paginatedArticles: content.paginatedArticles
      }
    } catch (error) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  data () {
    return {
      routeName: ''
    }
  },
  created () {
    this.routeName = this.$route.name
    // eslint-disable-next-line no-console
    // console.log(this.routeName)
  },
  mounted () {
    // eslint-disable-next-line no-console
    // console.log(this.$route)
  },
  head () {
    return {
      title: `Page ${this.$route.params.page} - Catatan Ilmu`
    }
  }
}
</script>
