<template>
  <main class="adultsWrapper">
    <h1>ZAJĘCIA DLA DOROSŁYCH</h1>
    <nav class="adultsMenu">
      <nuxt-link to="/dorosli/zajecia" class="button button--primary button--orange">Nasze zajęcia</nuxt-link>
      <nuxt-link to="/dorosli/cennik" class="button button--primary button--orange">Cennik</nuxt-link>
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
.adultsWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100vh;
  h1 {
    text-align: center;
  }
  .adultsMenu {
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
  .adultsWrapper {
    max-width: 100%;
    .adultsMenu {
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