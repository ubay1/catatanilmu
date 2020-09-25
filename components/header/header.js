/* eslint-disable no-undef */
/* eslint-disable no-console */
export default {
  data () {
    return {
      isTheme: ''
    }
  },
  created () {
    this.$nuxt.$on('theme', (data) => {
      this.isTheme = data
    })
  },
  methods: {
  }
}
