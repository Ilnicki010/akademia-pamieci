<template>
  <main class="kidsWrapper">
    <h1>ZAJĘCIA DLA DZIECI</h1>
    <nav class="kidsMenu">
      <nuxt-link to="/dzieci/zajecia" class="button button--primary button--rose">Nasze zajęcia</nuxt-link>
      <nuxt-link
        to="/dzieci/gdzie-jestesmy"
        class="button button--primary button--rose"
      >Gdzie jesteśmy</nuxt-link>
      <nuxt-link to="/dzieci/zapisy" class="button button--primary button--rose">Jak się zapisać</nuxt-link>
      <nuxt-link to="/dzieci/cennik" class="button button--primary button--rose">Cennik</nuxt-link>
    </nav>
    <contact-info class="footer" />
  </main>
</template>

<script>
import siteHeaderMenu from '@/components/siteHeaderMenu'
import contactInfo from '@/components/contactInfo'
export default {
  components: { siteHeaderMenu, contactInfo }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.kidsWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100vh;
  h1 {
    text-align: center;
  }
  .kidsMenu {
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .button {
      padding: 10px 20px;
      min-width: 80%;
      height: 50px;
    }
  }
  .footer {
    position: absolute;
    left: $padding;
    bottom: 30px;
  }
}
@media screen and (min-width: 720px) {
  .kidsWrapper {
    max-width: 100%;
    .kidsMenu {
      flex-direction: row;
      justify-content: center;
      .button {
        min-width: 200px;
        margin: 0 10px;
      }
    }
    .footer {
      left: $desktop_padding;
    }
  }
}
</style>