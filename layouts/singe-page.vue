<template>
  <transition name="slide-up">
    <div v-if="loaded" v-bind:class="{ 'theme-contrast' : contrastMode }" class="singleWrapper">
      <site-header-menu class="header" :showMenu="true" @changeTheme="contrastModeHandler" />
      <section class="contentWrapper">
        <nuxt />
        <contact-info v-if="loaded" class="footer" />
      </section>
    </div>
  </transition>
</template>

<script>
import siteHeaderMenu from '@/components/siteHeaderMenu'
import contactInfo from '@/components/contactInfo'
export default {
  components: { siteHeaderMenu, contactInfo },
  data() {
    return {
      loaded: false,
      contrastMode: null
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    contrastModeHandler(e) {
      this.contrastMode = e
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.singleWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  .contentWrapper {
    position: relative;
    padding: $padding;
    margin-top: 20vh;
    .footer {
      position: relative;
      margin-top: 20vh;
    }
  }
}
@media screen and (min-width: 720px) {
  .singleWrapper > .contentWrapper {
    padding: $desktop_padding;
  }
}
</style>