<template>
  <footer class="contactWrapper">
    <phone-icon />
    <p>+48 509 203 761</p>
    <mail-icon />
    <p>biuro@akademiapamiecigdynia.pl</p>
    <facebook-icon />
    <p>/akademiapamiecigdynia</p>
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
  position: absolute;
  bottom: 0;
  color: $dark_blue;
  font-size: $xx-small;
  display: grid;
  grid-template-columns: 15px auto;
  grid-column-gap: 10px;
  grid-template-rows: 20px 20px 20px;
  grid-template-areas: '. .' '. .' '. .';
  float: left;
  text-align: left;
  position: absolute;
  bottom: 50px;
  svg {
    height: 15px;
  }
}
</style>