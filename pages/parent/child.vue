<template>
  <div>
    <h1>I am the child view {{ test }}</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['foobar'],
  data () {
    return {
      test: this.foobar
    }
  }
}
</script>
