<template>
  <div>
    <transition name="slide-up">
      <section v-if="loaded" class="content">
        <h1>JAK SIĘ ZAPISAĆ</h1>
        <p>
          W celu zapisania dziecka do grupy prosimy o kontakt telefoniczny w celu przeprowadzenia krótkiego wywiadu, oraz przypisania do odpowiedniej grupy
          <br />tel. 509 203 761 lub wysłać maila na biuro@akademiapamiecigdynia.pl a oddzwonimy
        </p>
        <nuxt-link
          to="/dzieci/gdzie-jestesmy"
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