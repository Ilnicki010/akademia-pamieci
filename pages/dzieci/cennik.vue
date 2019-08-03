<template>
  <div>
    <transition name="slide-up">
      <section v-if="loaded" class="content">
        <h1>CENNIK</h1>
        <ul class="oferts-list">
          <li class="ofert ofert--one">
            <strong>1900 zł</strong>opłata roczna
          </li>
          <li class="ofert ofert--two">
            <strong>975 zł</strong>Opłata semestralna (2 raty w roku)
          </li>
          <li class="ofert ofert--three">
            <strong>
              1 rata x 270 i
              <br />7 rat x 240 zł
            </strong>Opłata ratalna (8 raty w roku)
          </li>
          <li class="ofert ofert--four">
            <strong>180 zł</strong>Koszt materiałów na cały rok nauki
          </li>
          <li class="ofert ofert--five ofert--rose">
            <strong>70 zł</strong>Zajęcia indywidualne 60 min
          </li>
          <li class="ofert ofert--six ofert--rose">
            <strong>40 zł</strong>Odrabianie opuszczonych zajęć 60 min
          </li>
          <li class="ofert ofert--seven ofert--rose">
            <strong>?</strong>Mikrogrupy (2-4 osób) - cena ustalana indywidualnie
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
        content: '1900 zł';
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
      grid-area: 2 / 1 / 3 / 3;
      &::after {
        content: '720 zł';
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
      grid-area: 2 / 3 / 3 / 5;
      &::after {
        content: '240 zł';
        position: absolute;
        bottom: -25%;
        font-size: 7rem;
        color: $white;
        opacity: 0.2;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
      }
    }
    .ofert--four {
      grid-area: 3 / 1 / 4 / 6;
      background: none;
      color: $dark_blue;
    }
    .ofert--five {
      grid-area: 4 / 1 / 4 / 6;
      &::after {
        content: '70 zł';
        position: absolute;
        bottom: -25%;
        font-size: 7rem;
        color: $white;
        opacity: 0.2;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
      }
    }
    .ofert--six {
      grid-area: 5 / 1 / 5 / 6;
    }
    .ofert--seven {
      grid-area: 6 / 1 / 6 / 6;
    }
    .ofert--six {
      &::after {
        content: '40 zł';
        position: absolute;
        bottom: -25%;
        font-size: 7rem;
        color: $white;
        opacity: 0.2;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
      }
    }
    .ofert--seven {
      &::after {
        content: '? ? ?';
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