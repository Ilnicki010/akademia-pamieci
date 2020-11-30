<template>
  <main class="wrapper">
    <h1>NASZA OFERTA</h1>
    <nav class="menu">
      <nuxt-link to="/dzieci/" class="button button--primary button--rose"
        >Dzieci</nuxt-link
      >
      <nuxt-link to="/dorosli" class="button button--primary button--orange"
        >Dorośli</nuxt-link
      >
      <nuxt-link to="/seniorzy" class="button button--primary button--dark_blue"
        >Seniorzy</nuxt-link
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
.wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100vh;
  h1 {
    text-align: center;
  }
  .menu {
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
  .wrapper {
    max-width: 100%;
    .menu {
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
