<template>
  <div class="bg_all_post">
    <!-- <nuxt-link :to="post.path"> -->

    <div v-for="post of articles" :key="post.slug" class="list_articles">
      <div class="image">
        <nuxt-link :to="post.path">
          <img :src="post.image" alt="">
        </nuxt-link>
      </div>

      <div class="bg_main">
        <div class="title">
          <nuxt-link :to="post.path">
            {{ post.title }}
          </nuxt-link>
        </div>
        <nuxt-link class="deskripsi" :to="post.path">
          <div>
            {{ post.description }}
          </div>
        </nuxt-link>
        <div class="tag">
          <nuxt-link
            v-for="(itemTag, index) in post.tags"
            :key="`indexTag-${index}`"
            :to="`/tags/${itemTag}`"
          >
            {{ itemTag }}
          </nuxt-link>
        </div>
      </div>
    </div>

    <div v-if="total" class="constainer mx-auto my-5 max-w-5xl">
      <Paginations v-if="total > 5" :total="total" />
    </div>
    <!-- <div class="dibuat">
      <small>{{ $moment(post.createdAt).format('LLLL') }}</small>
    </div> -->
    <!-- </nuxt-link> -->
  </div>
</template>

<script>
import Paginations from '@/components/Paginations'
export default {
  components: {
    Paginations
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['articles', 'total', 'nameroute'],
  data () {
    return {
      // eslint-disable-next-line no-undef
      tags: []
    }
  },
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.nameroute)
  }
}
</script>

<style scoped></style>
