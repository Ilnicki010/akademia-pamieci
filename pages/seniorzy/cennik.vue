<template>
  <div>
    <transition name="slide-up">
      <section v-if="loaded" class="content">
        <h1>CENNIK</h1>
        <ul class="oferts-list">
          <li class="ofert ofert--one">
            <strong>469 zł</strong>16 spotkań 1,5 godz/ 1 raz w tyg
          </li>
        </ul>
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .oferts-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0;
    margin-top: 5vh;
    .ofert {
      background: $dark_blue;
      color: $white;
      padding: 20px 10px;
      margin: 10px;
      border-radius: $radius;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      strong {
        font-size: 2rem;
        padding-bottom: 20px;
      }
    }
    .ofert--rose {
      background: $rose;
    }
    .ofert--one {
      grid-area: 1 / 1 / 2 / 6;
      background: $rose;
      &::after {
        content: '469 zł';
        position: absolute;
        bottom: -40%;
        font-size: 10rem;
        color: $white;
        opacity: 0.2;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
      }
    }
  }
}
@media screen and (min-width: 720px) {
  .content {
    .button {
      margin-top: 10vh;
    }
    .oferts-list {
      width: 92%;
    }
  }
}
</style>
