<template>
  <main v-if="loaded" class="homeWrapper">
    <section class="ctaSection">
      <div class="content">
        <h1>
          Dołącz do grona ludzi świadomie korzystających z możliwości swojego
          umysłu
        </h1>
        <p>
          Zapraszamy na treningi, które rozwiną możliwości Twojej pamięci.
          Poznasz na nich techniki pamięciowe, które powszechnie znane nie są
          jednak wykorzystywane przez wielu. Bądź lepszy od siebie samego z
          wczoraj. Dołącz do grona ludzi świadomie korzystających z
          niesamowitych możliwości swojego umysłu.
        </p>
        <p>
          Wszystko jest możliwe!
        </p>
        <nav class="buttons">
          <nuxt-link
            to="/oferta"
            class="button button--ghost button--ghost--dark_blue"
            >Sprawdź ofertę</nuxt-link
          >
          <cta-button />
        </nav>
      </div>
      <asset-icon class="asset" />
      <contact-info class="contact-info" />
    </section>
  </main>
</template>

<script>
import contactInfo from '@/components/contactInfo'
import ctaButton from '@/components/ctaButton'
import siteHeaderMenu from '@/components/siteHeaderMenu'
import assetIcon from '@/assets/svg/asset.svg'
export default {
  components: { contactInfo, siteHeaderMenu, assetIcon, ctaButton },
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
    display: flex;
    flex-direction: column;
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
