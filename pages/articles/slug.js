/* eslint-disable no-console */
export default {
  async asyncData ({ $content, params, error }) {
    try {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found'
      })
    }
  },
  data () {
    return {
      isTheme: ''
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    capitalise (text) {
      return text.charAt(0).toUpperCase() + text.slice(1)
    }
  },
  head () {
    return {
      title: `${this.capitalise(this.article.title)} - Catatan Ilmu`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        }
      ]
    }
  }
}
