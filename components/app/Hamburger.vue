<template lang="pug">
  .hamburger.hamburger--squeeze(:class='{"is-active": active}' @click='onClick')
    .hamburger-box
      .hamburger-inner
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    active: {
      type: Boolean,
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.hamburger {
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: $green-primary;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  width: 35px;
  margin-top: -2px;
  margin-left: 15px;
  z-index: 1000 !important;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  height: 5px;
  background-color: $green-primary;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: '';
  display: block;
  width: 35px;
}

.hamburger-inner::before {
  top: -10px;
  margin-left: 0px;
}

.hamburger-inner::after {
  bottom: -10px;
  margin-left: 0px;
}
.hamburger--squeeze .hamburger-inner {
  transition-duration: 0.075s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  // transform: skew(-20deg);
}

.hamburger--squeeze .hamburger-inner::before {
  transition: top 0.075s 0.12s ease, opacity 0.075s ease;
}

.hamburger--squeeze .hamburger-inner::after {
  transition: bottom 0.075s 0.12s ease,
    transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--squeeze.is-active .hamburger-inner,
.hamburger--squeeze.is-active .hamburger-inner::before,
.hamburger--squeeze.is-active .hamburger-inner::after {
  margin-left: 0;
  background-color: $green-primary;
}

.hamburger--squeeze.is-active .hamburger-inner {
  background-color: transparent;
  transform: rotate(40deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 40px;
}

.hamburger--squeeze.is-active .hamburger-inner::before {
  top: 0;
  transition: top 0.075s ease, opacity 0.075s 0.12s ease,
    background-color 0.075s ease;
  // transform: skew(40deg);
}

.hamburger--squeeze.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-80deg);
  transition: bottom 0.075s ease,
    transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1),
    background-color 0.075s ease;
}
</style>
