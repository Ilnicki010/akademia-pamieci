<template>
  <div>
    <transition name="slide-up">
      <section v-if="loaded" class="content">
        <h1>JAK SIĘ ZAPISAĆ</h1>
        <p>
          Poniżej lista miejsc i osób odpowiedzialnych za zapisy w danej lokalizacji:
          <br />Juz wkrótce...
          <br />Nie znalazłeś tu miejsca w którym mogłyby odbywać się nasze zajęcia?
          <br />Zadzwoń i nam o tym opowiedz 😃
        </p>
        <nuxt-link
          to="/seniorzy/gdzie-jestesmy"
          class="button button--ghost button--ghost--dark_violet"
        >Gdzie jesteśmy</nuxt-link>
      </section>
    </transition>
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
  }
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
  p {
    margin-top: 40px;
  }
  .button {
    margin-top: 5vh;
    max-width: 200px;
  }
}
@media screen and (min-width: 720px) {
  .content {
    .button {
      margin-top: 10vh;
    }
  }
}
</style>