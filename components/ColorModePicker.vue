<template>
  <div class="colorMode">
    <ul>
      <!-- <li v-for="color of colors" :key="color"> -->
      <component
        :is="`icon-${color}`"
        v-if="color === 'light' ? 'light' : 'dark'"
        :class="getClasses(color)"
        @click="$colorMode.preference = color"
      />
    </ul>
  </div>
</template>

<script>
// import IconSystem from '@/assets/color_mode/system.svg?inline'
import IconLight from '@/assets/color_mode/light.svg?inline'
import IconDark from '@/assets/color_mode/dark.svg?inline'
// import IconSepia from '@/assets/color_mode/sepia.svg?inline'

export default {
  components: {
    // IconSystem,
    IconLight,
    IconDark
    // IconSepia
  },
  data () {
    return {
      color: 'light'
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      this.$nuxt.$emit('theme', this.$colorMode.value)
      // eslint-disable-next-line no-console
      this.color = this.$colorMode.preference === 'light' ? 'dark' : 'light'
      return {
        preferred: color === this.$colorMode.preference === 'light' ? 'dark' : 'light',
        selected: color === this.$colorMode.value === 'light' ? 'dark' : 'light'

      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 7px;
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}

svg.feather.feather-moon {
  border-color: #091a28 !important;
  color: #091a28 !important;
  box-shadow: -2px 2px 0px #091a28;
}

svg.feather.feather-sun {
  border-color: #4ca495 !important;
  color: #4ca495 !important;
  box-shadow: 2px 2px 0px #4ca495;
}
</style>
