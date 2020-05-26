<template>
  <div class="aboutLessonsWrapper">
    <transition name="slide-up">
      <section v-if="loaded">
        <header class="siteHeader">
          <h1>O ZAJĘCIACH</h1>
          <p>
            LEO MANIAK to program dla dzieci w wieku 8-13 lat. Zajęcia
            prowadzone są w 2 grupach wiekowych: 8-10 i 11-13 lat, spotkania 1
            raz w tygodniu po 120 minut, 30 spotkań (60 godzin zajęć) w roku –
            grupy od 5 do max. 10 osób W oparciu o program szkoły podstawowej
            pokazujemy konkretne metody skutecznego przyswajania wiedzy.
            Wszechstronny rozwój kompetencji dziecka owocuje większą pewnością
            siebie, nastawieniem na poszukiwanie rozwiązań i zaangażowaniem.
            Dbamy, by pod okiem najlepszych trenerów dziecko z łatwością
            opanowało ortografię, strategię mistrzowskiego czytania oraz
            wytrenowało pamięć i koncentrację. Wykształcamy nawyk skutecznego
            notowania, sprawnego kojarzenia faktów i rozwiązywania
            skomplikowanych zadań. Ciekawe materiały czynią naukę jeszcze
            bardziej atrakcyjną.
            <br />Licencjonowany program Leo Maniak składa się z 4 części:
          </p>
        </header>
        <div class="courseParts">
          <article class="part part--one">
            <h2>
              <span>1 ROK PROGRAMU</span>
              <span>(30 SPOTKAŃ)</span>
            </h2>
            <h3>
              <span>ORTOGRAFIA</span>
              <span>(11 SPOTKAŃ)</span>
            </h3>
            <p>
              W ramach zajęć programu Leo Maniak dzieci w atrakcyjny i wesoły
              sposób poznają ortografię języka polskiego. Poprzez barwne i
              zabawne obrazy zapamiętują pisownię konkretnych słów. Uczą się
              ortografii wszystkimi zmysłami, poprzez wzrok, słuch oraz ruch.
              Wprowadzane są w świat zasad ortografii, korzystając z zabaw,
              zagadek i rebusów. W tej części programu wprowadzamy pierwsze
              techniki ułatwiające koncentrację i ćwiczymy pamięć. Uczymy dzieci
              również żonglowania, co poza ciekawą formą ruchu jest dobrym
              ćwiczeniem na koncentrację, wpływa na lepszą koordynację ruchową
              oraz usprawnia współpracę dwóch półkul mózgowych.
            </p>
            <h3>
              <span>CZYTANIE I NOTOWANIE</span>
              <span>(19 SPOTKAŃ)</span>
            </h3>
            <p>
              Zajęcia mają charakter treningu. Dzieci poznają zestaw ćwiczeń,
              dzięki którym poprawiają tempo czytania, koncentrację oraz
              rozumienie tekstu i zapamiętywanie przeczytanych informacji.
              Poprzez systematyczny trening uczą się efektywnej pracy z tekstem
              – wybierają najistotniejsze informacje i odpowiadają pełnym
              zdaniem na pytania. Zajęcia wzbogacone są twórczymi działaniami
              związanymi z treścią czytanych tekstów, m.in. efektownymi
              eksperymentami naukowymi. Przedstawiamy dzieciom i trenujemy z
              nimi notowanie na zasadzie „map myśli”. Pokazujemy, jak
              wykorzystać „mapy myśli” do przygotowania pracy domowej, napisania
              planu wypracowania, powtórzenia materiału do sprawdzianu, itp.
              Kontynuujemy trening żonglowania.
            </p>
          </article>
          <article class="part part--two">
            <h2>
              <span>2 ROK PROGRAMU</span>
              <span>(30 SPOTKAŃ)</span>
            </h2>
            <h3>
              <span>PAMIĘĆ I KONCENTRACJA</span>
              <span>(15 SPOTKAŃ)</span>
            </h3>
            <p>
              Zajęcia mają charakter treningu zawierającego szereg ćwiczeń
              usprawniających pamięć i koncentrację. Dzieci poznają wiele
              technik pamięciowych i trenują je w oparciu o informacje
              zaczerpnięte z programu szkolnego. Zapamiętują wiele przydatnych w
              dalszym toku nauki danych w sposób nie tylko łatwy, ale przede
              wszystkim trwały (m.in. województwa, daty historyczne, wysokości
              gór, dopływy rzek). Doskonalą swoją zdolność koncentracji dzięki
              zabawom sprawnościowym, łamigłówkom i ćwiczeniom gimnastykującym
              umysł. Jest to również doskonały trening twórczego myślenia.
              Dzięki opanowanej w tym module metodzie zapamiętywania liczb,
              dzieci są w stanie efektywnie przyswoić informacje wymagające w
              tradycyjnym podejściu żmudnego pamięciowego uczenia.
            </p>
            <h3>
              <span>
                KONCENTRACJA,
                <br />AUTOPREZENTACJA, <br />LOGICZNE MYŚLENIE
              </span>
              <span>(15 SPOTKAŃ)</span>
            </h3>
            <p>
              Poza treningiem technik pamięciowych poznanych w poprzednich
              modułach w tej części dzieci uczą się, jak skutecznie i efektownie
              zaprezentować swoją wiedzę. Uczymy również, jak pokonać strach
              przed wystąpieniami.
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
    padding: 0 10px;
    h3 {
      margin-top: 3vh;
    }
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
    .part--two {
      text-align: right;
      border-right: 1.2px solid $dark_blue;
      border-left: none;
      margin-left: auto;
    }
  }
}
</style>
