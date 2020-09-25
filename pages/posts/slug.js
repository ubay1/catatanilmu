/* eslint-disable no-console */
export default {
  components: {
  },
  async asyncData ({ $content, params }) {
    console.log(params.slug)
    const posts = await $content(params.slug, params.slug).fetch()
    return { posts }
  },
  data () {
    return {
      icon: 'arrow-left'
    }
  }
}
