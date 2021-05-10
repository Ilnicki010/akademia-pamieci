<template>
  <transition name="slide-down">
    <header v-if="loaded" class="header">
      <nuxt-link to="/" class="logo">
        <img src="@/assets/images/logo.png" alt="Przejdź do strony głównej" />
      </nuxt-link>
      <input class="menu-btn" type="checkbox" id="menu-btn" />
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li>
          <button class="main-link">Dorośli</button>
          <ul class="submenu submenu--adults">
            <li>
              <nuxt-link class="item" to="/dorosli/zajecia"
                >Nasze zajęcia</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="item" to="/dorosli/gdzie-jestesmy"
                >Gdzie jesteśmy</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="item" to="/dorosli/cennik">Cennik</nuxt-link>
            </li>
            <li>
              <nuxt-link class="item" to="/dorosli/zapisy">Zapisy</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <button class="main-link">Seniorzy</button>
          <ul class="submenu submenu--seniors">
            <li>
              <nuxt-link class="item" to="/seniorzy/zajecia"
                >Nasze zajęcia</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="item" to="/seniorzy/gdzie-jestesmy"
                >Gdzie jesteśmy</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="item" to="/seniorzy/zapisy">Zapisy</nuxt-link>
            </li>
            <li>
              <nuxt-link class="item" to="/seniorzy/cennik">Cennik</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <button class="main-link">Dzieci</button>
          <ul class="submenu submenu--kids">
            <li>
              <nuxt-link class="item" to="/dzieci/zajecia"
                >Nasze zajęcia</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="item" to="/dzieci/gdzie-jestesmy"
                >Gdzie jesteśmy</nuxt-link
              >
            </li>
            <li>
              <nuxt-link class="item" to="/dzieci/zapisy">Zapisy</nuxt-link>
            </li>
            <li>
              <nuxt-link class="item" to="/dzieci/cennik">Cennik</nuxt-link>
            </li>
          </ul>
        </li>
        <li>
          <a class="button" href="/kalendarz-kursow">Kalendarz kursów</a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/akademiapamiecigdynia/"
            target="_blank"
            rel="noreferrer"
            class="button"
            >Aktualności</a
          >
        </li>
        <li>
          <a
            class="button button--ghost button--ghost--dark_blue news"
            href="/sklep"
            >Sklep</a
          >
        </li>
      </ul>
    </header>
  </transition>
</template>

<script>
import contrastIcon from '@/assets/svg/contrast-icon.svg'
import fontSizeIcon from '@/assets/svg/font-size-icon.svg'
import logo from '@/assets/svg/logo.svg'
export default {
  components: { contrastIcon, fontSizeIcon, logo },
  data() {
    return {
      theme: 'default',
      showMenu: true,
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    closeMenu() {
      this.showMenu = false
    }
  },
  watch: {
    $route() {
      document.getElementById('menu-btn').checked = false
      document.querySelectorAll('.item').forEach(el => {
        el.blur()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

/* header */

.header {
  background: $white;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 3;
  .logo {
    display: block;
    float: left;
    padding: 10px 20px;
    text-decoration: none;
    img {
      max-width: 120px;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
    li {
      button {
        display: block;
        padding: 10px 20px;
        text-decoration: none;
        font-size: calc(#{$regular} + 10px);
        font-family: 'Josefin Sans', sans-serif;
        cursor: pointer;
        &:focus {
          border: 3px solid $yellow;
          outline: none;
        }
      }
      .news {
        width: 130px;
        margin: auto;
        margin-bottom: 20px;
      }
      .submenu--kids {
        li {
          background: $rose;
        }
      }
      .submenu--seniors {
        li {
          background: $dark_blue;
        }
      }
      .submenu--adults {
        li {
          background: $orange;
        }
      }
      ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 10px;

        li {
          padding: 10px 30px;
          color: $white;
          margin: 5px;
          border-radius: 2px;
          transition: all 0.3s ease-out;
        }
      }
    }
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;

    .main-link {
      border: none;
      background: none;
      &:focus {
        border: 3px solid $yellow;
        outline: none;
      }
    }
  }
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
    .navicon {
      background: $dark_blue;
      display: block;
      height: 3px;
      border-radius: 10px;
      position: relative;
      transition: background 0.2s ease-out;
      width: 30px;
      &::after,
      &::before {
        background: $dark_blue;
        border-radius: 10px;
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        transition: all 0.2s ease-out;
        width: 100%;
      }
    }
  }
  .menu-btn {
    display: none;
    &:checked ~ .menu {
      max-height: initial;
    }
    &:checked ~ .menu-icon .navicon {
      background: transparent;
    }
    &:checked ~ .menu-icon .navicon:before {
      transform: rotate(-45deg);
    }
    &:checked ~ .menu-icon .navicon:after {
      transform: rotate(45deg);
    }
    &:checked ~ .menu-icon:not(.steps) .navicon:before,
    &:checked ~ .menu-icon:not(.steps) .navicon:after {
      top: 0;
    }
  }
}

.header .menu-icon .navicon:before {
  top: 10px;
}

.header .menu-icon .navicon:after {
  top: -10px;
}

@media (min-width: 48em) {
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 25px;
    .logo {
      flex: 1;

      img {
        max-width: 120px;
      }
    }
    .menu {
      clear: none;
      float: right;
      max-height: none;
      display: flex;
      flex: 3;
      justify-content: center;
      display: flex;
      align-items: center;
      .news {
        margin-bottom: 0;
        flex: 1;
      }
      li {
        padding: 0;
        a {
          padding: 10px 30px;
        }
        display: flex;
        flex-direction: column;

        .main-link {
          font-size: $regular;
          color: $dark_blue;
          margin: 0 10px;
          border-radius: $radius;
          font-family: 'Open Sans', sans-serif;
          text-align: center;
          position: relative;
          &:hover ~ .submenu,
          &:focus ~ .submenu {
            visibility: visible;
            opacity: 1;
            animation: slide 0.3s both;
          }
          &:hover {
            transform: scale(1);
            cursor: default;
          }
          &::after {
            content: '+';
            margin-left: 10px;
          }
        }

        .submenu {
          z-index: 999;
          position: absolute;
          top: 6vh;
          margin: auto;
          padding: 20px 0;
          background: transparent;
          font-size: $x-small;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          visibility: hidden;
          opacity: 0;
          transition: 0.2s ease-out;
          transition-property: opacity, visibility;
          &:focus-within {
            visibility: visible;
            opacity: 1;
          }
          li {
            a {
              text-align: left;
              &:focus {
                border: 2px solid $yellow;
                border-radius: $radius;
              }
            }
          }
          &:hover,
          &:focus {
            visibility: visible;
            opacity: 1;
            animation: slide 0.3s both;
          }
        }
      }
    }
  }
  .header .menu-icon {
    display: none;
  }
}
@keyframes slide {
  from {
    transform: translateX(-15px);
  }
  to {
    transform: translateX(0);
  }
}
</style>
