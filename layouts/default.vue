<template>
  <div class="mainWrapper">
    <div>
      <site-header-menu :showMenu="false" />
      <nuxt />
    </div>
  </div>
</template>

<style>
.mainWrapper {
  width: 100vw;
}
</style>
<script>
import siteHeaderMenu from '@/components/siteHeaderMenu'
export default {
  components: { siteHeaderMenu },
  methods: {}
}
</script>
