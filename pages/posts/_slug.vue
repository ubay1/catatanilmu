<template>
  <div>
    <nuxt-link to="/">
      <div class="doc_header">
        <button>
          <font-awesome-icon :icon="['fas', icon]" class="icon" />
          <span>Back</span>
        </button>
      </div>
    </nuxt-link>
    <div class="mb-4 mt-2 doc_body">
      <nuxt-content :document="post" />
    </div>
  </div>
</template>
<script>
// import Prism from '~/plugins/prism'
export default {
  async asyncData ({ params, error, $content }) {
    try {
      const postPath = `/articles/${params.slug}`
      const [post] = await $content('articles', { deep: true })
        .where({ dir: postPath })
        .fetch()
      // eslint-disable-next-line no-console
      console.log(post)
      return { post }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  data () {
    return {
      icon: 'arrow-left'
    }
  },
  computed: {
    postInfo () {
      const post = this.post || {}
      const { body, ...rest } = post
      return rest
    }
  },
  mounted () {
    // Prism.highlightAll()
  },
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://nuxt-blog.com/' + this.post.dir
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  div.doc_header {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: #ff4d5c;
    color: #ffffff;
    padding: 10px;
    height: 50px;
    width: 50px;
    // box-shadow: 0px 2px 14px #1e1e3f;
    font-weight: bold;
    transition: .5s;
    cursor: pointer;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .icon {
        font-size: 14px;
        width: 12px;
      }
    }

    // &:hover {
    //   border-radius: 100%;
    //   transition: .5s;
    // }
  }

  .doc_body {
    margin: 10px;
  }
</style>
