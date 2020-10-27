<template>
  <div>
    {{ post }} <br><br>

    <p v-if="$fetchState.pending">
      Fetching mountains...
    </p>
    <p v-else-if="$fetchState.error">
      An error occured :(
    </p>
    <div v-else>
      <h1>Nuxt Mountains</h1>
      <ul>
        <li v-for="mountain of mountains" :key="`index-${mountain.id}`">
          {{ mountain.title }}
        </li>
      </ul>
      <button class="bg-red-500 px-1 py-1 rounded-md shadow-md text-white" @click="$fetch">
        Refresh
      </button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'custom',
  async fetch () {
    this.mountains = await this.$nuxt.$nuxtRepository.index()
  },
  async asyncData ({ app, params, error }) {
    // eslint-disable-next-line no-unused-vars
    const id = params.id
    try {
      const post = await app.$nuxtRepository.show(1)
      // eslint-disable-next-line no-console
      console.log(post)
      return { post }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error(error))
    }
  },
  data () {
    return {
      dataPost: this.post,
      mountains: []
    }
  },
  activated () {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  fetchOnServer: true,
  fetchDelay: 2000
}
</script>
