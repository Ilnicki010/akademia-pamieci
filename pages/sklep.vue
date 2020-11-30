<template>
  <main class="wrapper">
    <h1>SKLEP</h1>
    <div id="embedTable" data-embedtableid="283545070575026690"></div>
    <contact-info class="footer" />
  </main>
</template>

<script>
import siteHeaderMenu from '@/components/siteHeaderMenu'
import contactInfo from '@/components/contactInfo'
export default {
  components: { siteHeaderMenu, contactInfo },
  mounted() {
    let etScript = document.createElement('script')
    etScript.setAttribute('src', 'https://scripts.embedtables.com/script.js')
    etScript.async = true
    document.head.appendChild(etScript)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.wrapper {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
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
