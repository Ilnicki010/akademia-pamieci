<template>
  <div>
    <transition name="slide-up">
      <section v-if="loaded" class="content">
        <h1>CENNIK</h1>
        <ul class="oferts-list">
          <li class="ofert ofert--one">
            <strong>1400 zł</strong>opłata jednorazowa za kursy długie
          </li>
          <li class="ofert ofert--two">
            <strong>360 zł</strong>Oplata jednorazowa za kursy krótkie, on-line
            i stacjonarne (6 i 8-godzinne, w trybie normalnym i intensywnym,
            grupy 5-10 osób)
          </li>
          <li class="ofert ofert--three">
            <strong>W cenie</strong>Wszystkie materiały są wliczone w cenę
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
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(3, 1fr);
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
      grid-column: 1 / span 6;
      background: $rose;
      &::after {
        content: '1400 zł';
        position: absolute;
        bottom: -40%;
        font-size: 10rem;
        color: $white;
        opacity: 0.2;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
      }
    }
    .ofert--two {
      grid-column: 1 / span 6;
      &::after {
        content: '360 zł';
        position: absolute;
        bottom: -25%;
        font-size: 7rem;
        color: $white;
        opacity: 0.2;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
      }
    }
    .ofert--three {
      grid-column: 1 / span 6;
      &::after {
        content: '0 zł';
        position: absolute;
        bottom: -25%;
        font-size: 7rem;
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
