<template>
  <div>
    <div class="md:w-2/3 mb-4">
      <input
        id="searchArticle"
        v-model="searchValue"
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        type="text"
        placeholder="Cari Article (tags/title)"
        @keyup="searchArticle()"
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    searchArticle () {
      this.$nuxt.$emit('searchArticle', this.searchValue)
    }
  }
}
</script>
