<template>
  <div>
    <transition name="slide-up">
      <section v-if="loaded" class="content">
        <h1>ZAPISZ SIĘ</h1>
        <p>Aby przejść do formularza zapisu, kliknij poniższy przycisk.</p>
        <p>
          Masz pytania zadzwoń
          <a class="content__link" href="tel:509203761">509 203 761</a>
        </p>
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
  .content__link {
    color: $dark_blue;
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
