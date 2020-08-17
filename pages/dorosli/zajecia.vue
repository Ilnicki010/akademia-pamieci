<template>
  <div class="aboutLessonsWrapper">
    <transition name="slide-up">
      <section v-if="loaded">
        <header class="siteHeader">
          <h1>Kursy krótkie, długie, on-line i stacjonarne</h1>
          <span>(6 i 8-godzinne)</span>
        </header>
        <div class="courseParts">
          <div class="part-wrapper">
            <h2>Kursy długie</h2>
            <article class="part part--one">
              <h3>
                <span>1. Techniki pamięciowe dla dorosłych, część 1</span>
                <span>(32 godz, 16 spotkań raz w tygodniu po 2 godz.)</span>
              </h3>
              <p>
                Podstawowe techniki pamięciowe (Zakładki Osobiste, Zakładki
                Liczbowe, Mapy Myśli, Pokój Rzymski, Technika Słów Zastępczych,
                Łańcuchowa Metoda Zapamiętywania)
              </p>
              <p>
                Trening szczególnie polecany: studentom i doktorantom,
                pracownikom naukowym oraz wszystkim osobom, które świadomie
                kształtują swój rozwój oraz osobom po 50 roku życia, wszystkim
                chcącym zwiększyć i przedłużyć sprawność swojego mózgu,
                nastawionym na rozwój i nowe, ciekawe doświadczenia.
              </p>
            </article>
            <article class="part part--one">
              <h3>
                <span>1. Techniki pamięciowe dla dorosłych, część 2</span>
                <span>(32 godz, 16 spotkań raz w tygodniu po 2 godz.)</span>
              </h3>
              <p>
                Doskonalący trening dla zaawansowanych (Główny System
                Pamięciowy)
              </p>
              <p>
                Trening szczególnie polecany: studentom i doktorantom,
                pracownikom naukowym oraz wszystkim osobom, które świadomie
                kształtują swój rozwój oraz osobom po 50 roku życia, wszystkim
                chcącym zwiększyć i przedłużyć sprawność swojego mózgu,
                nastawionym na rozwój i nowe, ciekawe doświadczenia.
              </p>
            </article>
          </div>
          <div class="part-wrapper">
            <h2>Kursy krótkie</h2>
            <article class="part part--one">
              <h3>
                <span>2. Techniki pamięciowe dla początkujących</span>
                <span>(8 godz.)</span>
              </h3>
              <h4>
                <span
                  >Techniki pamięciowe: Zakładki Liczbowe + Zakładki Osobiste +
                  Łańcuchowa Metoda Zapamiętywania</span
                >
              </h4>
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
              <h3>
                <span>3. Pokój Rzymski </span>
                <span>(6 godz.)</span>
              </h3>
              <h4>
                <span
                  >Techniki pamięciowe: Pokój Rzymski + Łańcuchowa Metoda
                  Zapamiętywania</span
                >
              </h4>
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
                <li>
                  wyćwiczenie praktycznych zastosowań technik pamięciowych
                </li>
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
  .part-wrapper {
    margin-bottom: 60px;
    h2 {
      margin-bottom: 20px;
    }
  }
  .part {
    padding: 0 10px;

    span {
      word-break: break-word;
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
      margin-top: 30px;
      max-width: 90%;
    }
  }
}
</style>
