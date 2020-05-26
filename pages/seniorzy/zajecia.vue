<template>
  <div class="aboutLessonsWrapper">
    <transition name="slide-up">
      <section v-if="loaded">
        <header class="siteHeader">
          <h1>O ZAJĘCIACH</h1>
          <p>
            Serdecznie zapraszamy wszystkich seniorów na treningi, które rozwiną
            możliwości Twojej pamięci. Nasze zajęcia to nie tylko duża dawka
            wiedzy, ale również pozytywnej energii i przekraczania swoich
            granic. Natomiast każde spotkanie pełne wyzwań, powinno zakończyć
            się relaksem i oczyszczeniem umysłu. Nasi trenerzy doskonale wiedzą
            jak to osiągnąć i uczą odpowiednich technik. Pamiętaj, zawsze jest
            dobry moment żeby zacząć pracę nad sobą. Mózg jest nam potrzebny do
            końca życia, dbajmy o niego każdego dnia.
            <br />
            <strong>Bądź lepszy od siebie samego z wczoraj.</strong>
          </p>
        </header>
        <div class="courseParts">
          <article class="part part--one">
            <h2>
              <span>SEMESTR 1</span>
            </h2>
            <p>
              Kurs wprowadzający w świat technik pamięciowych skrojony
              specjalnie dla seniorów. Odpowiada na potrzebę radzenia sobie z
              kłopotami z pamięcią. Rozwija umiejętności zapamiętywania
              dowolnych informacji. Trenujemy podstawowe techniki pamięciowe
              (Łańcuchowa Metoda Zapamiętywania, Zakładki Osobiste, Pokój
              Rzymski, Zakładki Liczbowe, Mapy Myśli, Technika Słów Zastępczych,
              zapamiętywanie osób).
            </p>
          </article>
          <article class="part part--two">
            <h2>
              <span>SEMESTR 2</span>
            </h2>
            <p>
              Wstęp do Głównego Systemu Pamięciowego, czyli techniki pomagającej
              zapamiętywać liczby. Mnóstwo ciekawych i rozwijających ćwiczeń i
              wiele okazji do rozbudowania umiejętności zapamiętywania liczb.
            </p>
          </article>
          <article class="part part--one">
            <h2>
              <span>SEMESTR 3</span>
            </h2>
            <p>
              Sposób na zapamiętywanie liczb, czyli Główny System Pamięciowy, to
              okazja to wielu ciekawych ćwiczeń i stymulowania mózgu.
              Umiejętności zawarte w tej części programu pozwolą na niezwykły
              skok wydajności mózgu i rozwój pamięci.
            </p>
          </article>
          <article class="part part--two">
            <h2>
              <span>SEMESTR 4</span>
            </h2>
            <p>
              Poziom mistrzowski dostępny dla każdego (oczywiście dla każdego,
              kto przeszedł przez wszystkie poprzednie części programu).
              Swobodne zastosowanie technik pamięciowych oraz używanie kilku
              technik jednocześnie daje dużą swobodę w zapamiętywaniu oraz w
              przypominaniu sobie dowolnych informacji.
            </p>
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
    h2 {
      span {
        word-break: break-word;
      }
    }
  }
  .part--one,
  .part--two {
    text-align: left;
    border-left: 1.2px solid $dark_blue;
  }
}
@media screen and (min-width: 720px) {
  .siteHeader {
    max-width: 70vw;
  }
  .courseParts {
    justify-content: center;
    .part {
      margin-top: 15vh;
    }
    .part--one {
      max-width: 70%;
    }
    .part--two {
      max-width: 60%;
      text-align: right;
      border-right: 1.2px solid $rose;
      border-left: none;
      margin-left: auto;
    }
  }
}
</style>
