<template>
  <div>
    <div>
      <site-header-menu :showMenu="false" />
      <nuxt />
    </div>
  </div>
</template>

<style>
</style>
<script>
import siteHeaderMenu from '@/components/siteHeaderMenu'
export default {
  components: { siteHeaderMenu },
  methods: {}
}
</script>
