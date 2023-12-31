<template lang="pug">
     <a href="https://itsantsstudios.com"> <img class="antlogo" alt="logo" src="@/assets/images/antfooter.png"> </a>

</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  background: black;
  width: 100%;
}

.antlogo {
  position: relative;
  background: black;
  left: 100rem;
  width: 10rem;
}
@media only screen and (max-device-width: 480px) {
  .antlogo {
    position: relative;
    background: blue;
    left: 100rem;
    width: 10rem;
  }
}
</style>
