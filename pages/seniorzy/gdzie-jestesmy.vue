<template>
  <div>
    <transition name="slide-up">
      <section v-if="loaded" class="content">
        <h1>GDZIE JESTEŚMY</h1>
        <div class="adressList">
          <article class="adress">
            <strong
              >Zajęcia odbywają się w zaprzyjaźnionej szkole Leonardo
              School</strong
            >
            <p>ul. Jantarowa 13/2 Gdynia Obłuże</p>
            <p>Zapisy pod numerem: +48 509 203 761</p>
          </article>
          <article class="adress">
            <strong>Zajęcia online</strong>
            <p>Zajęcia prowadzone są na komercyjnej platformie ZOOM</p>
          </article>
          <article class="adress">
            <strong>Więcej wkrótce...</strong>
          </article>
        </div>
      </section>
    </transition>
    <section class="map"></section>
  </div>
</template>

<script>
export default {
  layout: 'singe-page',

  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
  created() {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.content {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .adressList {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    margin-top: 40px;
    .adress {
      text-align: left;
      flex: 1;
      margin: 10px 0;
      border-left: 1px solid $violet;
      padding-left: 10px;
    }
  }
  .button {
    margin-top: 5vh;
    max-width: 200px;
  }
}
@media screen and (min-width: 720px) {
  .content > .adressList {
    flex-direction: row;
    flex-wrap: wrap;
    .adress {
      min-width: 30%;
      margin: 20px 10px;
    }
  }
}
</style>
