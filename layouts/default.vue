<template>
  <div v-bind:class="{ 'theme-contrast' : contrastMode }">
    <site-header-menu :showMenu="false" @changeTheme="contrastModeHandler" />
    <nuxt />
  </div>
</template>

<style>
</style>
<script>
import siteHeaderMenu from '@/components/siteHeaderMenu'
export default {
  components: { siteHeaderMenu },
  methods: {
    contrastModeHandler(e) {
      this.contrastMode = e
    }
  },
  data() {
    return {
      contrastMode: false
    }
  }
}
</script>