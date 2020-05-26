<template>
  <footer class="contactWrapper">
    <phone-icon />
    <a href="tel:+48 509 203 761">+48 509 203 761</a>
    <mail-icon />
    <a href="mailto:biuro@akademiapamiecigdynia.pl"
      >biuro@akademiapamiecigdynia.pl</a
    >
    <facebook-icon />
    <a
      rel="noreferrer"
      target="_blank"
      href="https://facebook.com/akademiapamiecigdynia"
      >/akademiapamiecigdynia</a
    >
  </footer>
</template>

<script>
import phoneIcon from '@/assets/svg/phone-solid.svg'
import mailIcon from '@/assets/svg/envelope-solid.svg'
import facebookIcon from '@/assets/svg/facebook-square-brands.svg'
export default {
  components: { phoneIcon, mailIcon, facebookIcon }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
.contactWrapper {
  display: grid;
  grid-template-columns: 15px auto;
  grid-column-gap: 10px;
  grid-template-rows: repeat(3, 28px);
  grid-template-areas: '. .' '. .' '. .';
  float: left;
  text-align: left;
  margin-top: 20px;
  align-items: center;
  a {
    color: $dark_blue;
    font-size: $x-small;
  }
  svg {
    height: 15px;
  }
}
</style>
