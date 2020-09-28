/* eslint-disable no-undef */
/* eslint-disable no-console */
export default {
  data () {
    return {
      isTheme: '',
      dark: false
    }
  },
  created () {
    this.$nuxt.$on('theme', (data) => {
      this.isTheme = data
      this.isTheme === 'dark' ? this.dark = true : this.dark = false
    })
  },
  methods: {
  }
}
