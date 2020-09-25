<template>
  <div class="list_articles">
    <nuxt-link :to="post.path">
      <div class="tag">
        {{ post.tags }}
      </div>
      <div class="title">
        {{ post.title }}
      </div>
      <div class="deskripsi">
        {{ post.description }}
      </div>
      <div class="dibuat">
        <small>{{ $moment(post.createdAt).format('LLLL') }}</small>
      </div>
    </nuxt-link>
    <!-- <v-tags :tags="post.tags" />
    <nuxt-link :to="post.dir">
      Read more
    </nuxt-link> -->
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
