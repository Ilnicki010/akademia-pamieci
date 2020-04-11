<template>
  <main v-if="loaded" class="homeWrapper">
    <section class="ctaSection">
      <div class="content">
        <h1>
          Dołącz do grona ludzi świadomie
          korzystających z możliwości swojego umysłu
        </h1>
        <p>
          Seniorów zapraszamy na trening umysłu, dawkę pozytywnej energii i świetną zabawę.
          <br />Dzieci zapraszamy na zajęcia z ortografii, trening czytania i notowania, techniki pamięciowe, oraz autoprezentację.
        </p>
        <nav class="buttons">
          <nuxt-link to="/dorosli" class="button button--primary button--orange">Dorośli</nuxt-link>
          <nuxt-link to="/seniorzy" class="button button--primary button--dark_blue">Seniorzy</nuxt-link>
          <nuxt-link to="/dzieci" class="button button--primary button--rose">Dzieci</nuxt-link>
        </nav>
      </div>
      <asset-icon class="asset" />
      <contact-info class="footer" />
    </section>
  </main>
</template>

<script>
import contactInfo from '@/components/contactInfo'
import siteHeaderMenu from '@/components/siteHeaderMenu'
import assetIcon from '@/assets/svg/asset.svg'
export default {
  components: { contactInfo, siteHeaderMenu, assetIcon },
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
    position: relative;
    .content {
      h1 {
        line-height: 1;
      }
    }
    .buttons {
      display: flex;
      .button {
        margin: 5px 5px 5px 0;
      }
    }
    .asset {
      position: absolute;
      bottom: -35vh;
      right: $padding;
      width: 16%;
    }
  }
  .footer {
    position: absolute;
    left: 0;
    bottom: -30%;
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
        bottom: -50vh;
        right: 0;
      }
    }
  }
}
</style>
