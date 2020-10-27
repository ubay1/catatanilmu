<template>
  <div>
    <div v-if="error.statusCode === 404" class="notFound" />
    <h1 v-else>
      An error occurred
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.error)
  }
}
</script>
<style lang="scss">
    .notFound {
        background-image: url('../static/404.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 100vh;
        width: 100%;
        position: fixed;
    }
</style>
