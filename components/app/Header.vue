<template lang="pug">
header.inner
  nav(@click="toggleMenu")
    AppHamburger(v-if="!menuActive")
  #nav-bar(:class='{ expanded: menuActive }')
    .inner(@click="toggleMenu")
      .top-container
        AppHamburger(:active="menuActive")
      .body-container 
        h3(@click='navLink("/")') Home Page
        h3(@click='navLink("/celebrate")') Celebrate
        h3(@click='navLink("/businesses")') Black Business Scroll
        h3(@click='navLink("/donate")') Donate
      .footer-container
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.$log('clicked')
      this.menuActive = !this.menuActive
    },
    navLink(route) {
      this.menuActive = !this.menuActive

      setTimeout(() => {
        this.$router.push(route)
      }, 600)
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  margin-top: 20px;
  position: absolute;
  width: 100%;
  text-align: right;
  z-index: 1000;
  right: 10em;

  &.inner {
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      height: 2.5rem;
      width: 18.5rem;
      padding-left: 0rem;
      padding-right: 4rem;
      margin-right: 0rem;
      background: black;
      z-index: 1;

      .link-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        transform: skew(-45deg);

        .n-link {
          text-decoration: none;
          color: pink;
          font-weight: 600;
        }
      }
    }
    @include media-breakpoint-down(sm) {
      width: 12.5rem;
      height: 5rem;
      padding-left: 5rem;
      padding-right: unset;
      margin-right: -3rem;

      .link-container {
        .link-style {
          display: none;
        }
      }
    }
  }
}

#nav-bar {
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  width: 30%;
  max-width: 25rem;
  text-align: right;
  color: black;
  transition: 0.25s linear;
  z-index: 1000;

  &.expanded {
    transform: translateX(0%);
  }

  .inner {
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100vh;
    background: white;
    padding: 1rem;

    .top-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      img {
        width: 3rem;
      }
    }

    .body-container {
      margin-top: 3rem;
      h3 {
        font-size: $text-h5;
        cursor: pointer;
      }

      n-link {
        font-size: $text-h5;
        cursor: pointer;
      }
    }

    .footer-container {
      margin-top: auto;
      display: flex;
      justify-content: flex-end;

      .icon-container {
        background: pink;
        height: 3rem;
        width: 3rem;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        img {
          height: auto;
          width: 2rem;
        }
      }
    }
  }
}

.logo {
  position: fixed;
  width: 3rem;
  margin-left: 3rem;
  margin-top: -0.75rem;

  @include media-breakpoint-down(sm) {
    width: 4.5rem;
    margin-left: 1rem;
    margin-top: -1rem;
  }
}
</style>
