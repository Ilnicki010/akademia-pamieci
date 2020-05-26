<template>
  <transition name="slide-up">
    <div
      v-if="loaded"
      v-bind:class="{ 'theme-contrast': contrastMode }"
      class="singleWrapper"
    >
      <site-header-menu
        class="header"
        :showMenu="true"
        @changeTheme="contrastModeHandler"
      />
      <section class="contentWrapper">
        <nuxt />
        <cta-button class="cta-button" />
        <contact-info v-if="loaded" class="footer" />
      </section>
    </div>
  </transition>
</template>

<script>
import siteHeaderMenu from '@/components/siteHeaderMenu'
import ctaButton from '@/components/ctaButton'

import contactInfo from '@/components/contactInfo'
export default {
  components: { siteHeaderMenu, contactInfo, ctaButton },
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
  overflow-x: hidden;
  .contentWrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: $padding;
    margin-top: 10vh;
    .cta-button {
      position: relative;
      align-self: center;
      justify-self: center;
      margin-top: 10%;
    }
    .footer {
      margin-top: 10vh;
    }
  }
}
@media screen and (min-width: 720px) {
  .singleWrapper > .contentWrapper {
    padding: $desktop_padding;
  }
}
</style>
