<template>
  <div>
    <div>hello ini custom</div>
    <Nuxt keep-alive :keep-alive-props="{max: 10}" />
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
  }
}
</script>

<style lang="scss">

</style>
