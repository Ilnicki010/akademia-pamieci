<template>
  <header class="mainHeaderWrapper">
    <nuxt-link to="/" class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </nuxt-link>
    <nav v-if="showMenu" class="menu">
      <nuxt-link
        class="button button--ghost button--ghost--rose"
        to="/seniorzy/zajecia"
      >Nasze zajęcia</nuxt-link>
      <nuxt-link
        class="button button--ghost button--ghost--orange"
        to="/seniorzy/gdzie-jestesmy"
      >Gdzie jesteśmy</nuxt-link>
      <nuxt-link
        class="button button--ghost button--ghost--blue"
        to="/seniorzy/zapisy"
      >Jak się zapisać</nuxt-link>
    </nav>
    <div class="iconsWrapper">
      <!-- <input type="checkbox" v-model="themeMode" @change="contrastModeHandler($event)" />
      <label for="toggleContrast">
        <img src="@/assets/svg/contrast-icon.svg" />
      </label>
      <img class="icon" src="@/assets/svg/font-size-icon.svg" alt="zmiana wielkości czcionki" />-->
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  props: {
    showMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      themeMode: null
    }
  },
  methods: {
    contrastModeHandler(e) {
      console.log(this.themeMode)

      this.$emit('changeTheme', this.themeMode)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.mainHeaderWrapper {
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .logo {
    flex: 1;
    img {
      height: 60px;
    }
  }
  .menu {
    flex: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $xx-small;
    order: 1;
    .button {
      padding: 0 14px;
      height: 40px;
      margin: 0 2px;
    }
  }
  .iconsWrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}
@media screen and (min-width: 720px) {
  .mainHeaderWrapper {
    padding-left: 50px;
    padding-right: 50px;
    .menu {
      order: 0;
      .button {
        padding: 10px 40px;
      }
    }
  }
}
</style>