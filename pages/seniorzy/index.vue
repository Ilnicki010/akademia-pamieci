<template>
  <main class="seniorWrapper">
    <h1>ZAJĘCIA DLA SENIORÓW</h1>
    <nav class="seniorsMenu">
      <nuxt-link
        to="/seniorzy/zajecia"
        class="button button--primary button--dark_blue"
        >Nasze zajęcia</nuxt-link
      >
      <nuxt-link
        to="/seniorzy/gdzie-jestesmy"
        class="button button--primary button--dark_blue"
        >Gdzie jesteśmy</nuxt-link
      >
      <nuxt-link
        to="/seniorzy/zapisy"
        class="button button--primary button--dark_blue"
        >Jak się zapisać</nuxt-link
      >
      <nuxt-link
        to="/seniorzy/cennik"
        class="button button--primary button--dark_blue"
        >Cennik</nuxt-link
      >
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
.seniorWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100vh;
  h1 {
    text-align: center;
  }
  .seniorsMenu {
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
  .seniorWrapper {
    max-width: 100%;
    .seniorsMenu {
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
