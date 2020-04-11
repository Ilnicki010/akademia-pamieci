<template>
  <div class="aboutLessonsWrapper">
    <transition name="slide-up">
      <section v-if="loaded">
        <header class="siteHeader">
          <h1>Kursy krótkie, on-line i stacjonarne</h1>
          <span>(6 i 8-godzinne)</span>
        </header>
        <div class="courseParts">
          <article class="part part--one">
            <h2>
              <span>1. Techniki pamięciowe dla początkujących</span>
              <span>(8 godz.)</span>
            </h2>
            <h3>
              <span
                >Techniki pamięciowe: Zakładki Liczbowe + Zakładki Osobiste +
                Łańcuchowa Metoda Zapamiętywania</span
              >
            </h3>
            <ul>
              <li>
                szybkie zapamiętywanie różnorodnych danych w określonej
                kolejności
              </li>
              <li>gimnastyka pamięci</li>
              <li>zapamiętywanie dowolnych ciągów informacji</li>
              <li>ćwiczenie koncentracji uwagi</li>
              <li>ćwiczenie wyobraźni</li>
              <li>ćwiczenie kreatywności</li>
            </ul>
          </article>
          <article class="part part--two">
            <h2>
              <span>2. Pokój Rzymski </span>
              <span>(6 godz.)</span>
            </h2>
            <h3>
              <span
                >Techniki pamięciowe: Pokój Rzymski + Łańcuchowa Metoda
                Zapamiętywania</span
              >
            </h3>
            <ul>
              <li>
                uświadomienie procesów zachodzących podczas zapamiętywania i
                wydobywania informacji
              </li>
              <li>
                nauka technik pamięciowych, które usprawniają procesy
                zapamiętywania.
                <ul>
                  <li>Łańcuchowa Metoda Zapamiętywania</li>
                  <li>Pokój Rzymski</li>
                </ul>
              </li>
              <li>wyćwiczenie praktycznych zastosowań technik pamięciowych</li>
              <li>zapamiętywanie dowolnych ciągów informacji</li>
              <li>
                uświadomienie roli emocji w procesie zapamiętywania (myślenie
                pozytywne)
              </li>
              <li>ćwiczenie koncentracji uwagi</li>
              <li>ćwiczenie wyobraźni</li>
              <li>ćwiczenie kreatywności</li>
            </ul>
          </article>
        </div>
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
.aboutLessonsWrapper {
  position: relative;
  height: 100%;
  section {
    height: 100%;
  }
}
.siteHeader {
  text-align: center;
  max-width: 80vw;
  margin: auto;
}
.courseParts {
  margin-top: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  .part {
    margin-top: 15%;
    padding: 0 20px;
    h3 {
      margin-top: 3vh;
    }
    span {
      white-space: nowrap;
      &:last-child {
        font-size: 80%;
        opacity: 0.8;
      }
    }
  }
  .part--one,
  .part--two {
    text-align: left;
    border-left: 1.2px solid $dark_blue;
  }
}
ul {
  list-style-type: disc;
}
@media screen and (min-width: 720px) {
  .siteHeader {
    max-width: 70vw;
  }
  .courseParts {
    justify-content: center;
    .part {
      margin-top: 15vh;
      max-width: 90%;
    }
  }
}
</style>
