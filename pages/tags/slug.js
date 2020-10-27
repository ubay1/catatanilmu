/* eslint-disable no-console */
import Header from '@/components/header/header.vue'
import PostCard from '@/components/PostCard'

export default {
  // name: 'TagPage',
  components: {
    Header,
    PostCard
  },
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .where({ tags: { $contains: params.slug } })
      .fetch()

    const articlesByTag = articles.filter((article) => {
      const articleTags = article.tags.map(x => x.toLowerCase())
      return articleTags.includes(params.slug) // cari yang true
    })
    return {
      articlesByTag
    }
  },
  data () {
    return {
      routeName: ''
    }
  },
  created () {
    this.routeName = this.$route.name
  },
  methods: {
    capitalise (text) {
      return text.charAt(0).toUpperCase() + text.slice(1)
    }
  },
  head () {
    return {
      title: `Articles Tagged - ${this.capitalise(this.$route.params.slug)}`,
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${this.$config.baseUrl}/tags/${this.$route.params.slug}`
        }
      ]
    }
  }
}
