<template>
  <main class="homeWrapper">
    <section class="ctaSection">
      <div class="content">
        <h1>
          Dołącz do grona ludzi świadomie
          korzystających z możliwości swojego umysłu
        </h1>
        <p>
          Przygotowaliśmy bogatą ofertę szkoleń z technik pamięciowych. Realizujemy je w
          Uniwersytetach Trzeciego Wieku, Centrach Kultury i w naszej placówce.
        </p>
        <nav class="buttons">
          <nuxt-link to="/seniorzy" class="button button--primary button--dark_blue">Seniorzy</nuxt-link>
          <nuxt-link to="/" class="button button--primary button--orange">Dzieci</nuxt-link>
        </nav>
      </div>
      <img v-if="loaded" src="@/assets/svg/asset.svg" alt="dodatek ozdobny" class="asset" />
      <contact-info class="contactInfo" />
    </section>
  </main>
</template>

<script>
import contactInfo from '@/components/contactInfo'
import siteHeaderMenu from '@/components/siteHeaderMenu'
export default {
  components: { contactInfo, siteHeaderMenu },
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
.homeWrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .ctaSection {
    .content {
      h1 {
        line-height: 1;
      }
    }
    .buttons {
      display: flex;
      .button {
        margin: 20px 20px 0 0;
        max-width: 160px;
        flex: 1;
      }
    }
    .asset {
      position: absolute;
      bottom: -21%;
      right: $padding;
      width: 20%;
    }
  }
}
@media screen and (min-width: 720px) {
  .homeWrapper {
    .ctaSection {
      .content {
        h1 {
          line-height: 1.125;
        }
        max-width: 65%;
        float: left;
      }
      .asset {
        width: 12%;
        right: $desktop_padding;
      }
    }
  }
}
</style>
