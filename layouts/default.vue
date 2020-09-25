<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">

</style>
