<template>
  <main class="seniorWrapper">
    <h1>ZAJĘCIA DLA SENIORÓW</h1>
    <nav class="seniorsMenu">
      <nuxt-link to="/seniorzy/zajecia" class="button button--primary button--rose">Nasze zajęcia</nuxt-link>
      <nuxt-link
        to="/seniorzy/gdzie-jestesmy"
        class="button button--primary button--orange"
      >Gdzie jesteśmy</nuxt-link>
      <nuxt-link to="/seniorzy/zapisy" class="button button--primary button--blue">Jak się zapisać</nuxt-link>
    </nav>
    <contact-info />
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
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
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
  }
}
</style>