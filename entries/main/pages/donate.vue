<template lang="pug">
.main
  .home.page
    .textLogo
      h1(slot="placeholder") Donate
  .donationsBox
    h3 Donate To BSU's
    p Once donate button is clicked, you can comment the BSU youd like to donate to.
    .universityBsuBox
      .eastern
        h3 Eastern
        <img class="EWU" alt="Epic" src="@/assets/images/EasternBSU.jpg">
        <img class="EWUl" alt="Elogo" src="@/assets/images/EWUlogo.png">
      .whitworth
        h3 Whitworth
        <img class="WHIT" alt="Wpic" src="@/assets/images/WhitworthBSU.jpg">
        <img class="WHITl" alt="Wlogo" src="@/assets/images/Whitworthlogo.png">
      .gonzaga
        h3 Gonzaga
        <img class="GU" alt="Gpic" src="@/assets/images/GonzagaBSU.jpg">
        <img class="GUl" alt="Glogo" src="@/assets/images/gonzagalogo.png">
  .button-wrapper
    nuxt-link.btn(to="/") Home
    <a style="background: #358e33 url(/images/red_logo.png) no-repeat 37px;color: #fff;text-decoration: none;font-family: Verdana,sans-serif;display: inline-block;font-size: 16px;padding: 15px 38px;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;box-shadow: 0 1px 0 0 #1f5a89;text-shadow: 0 1px rgba(0, 0, 0, 0.3);" href="https://donorbox.org/spokane-bsu-s?default_interval=o">Donate</a>
  .paypal-button-container
    


</template>

<script>
export default {
  name: 'Home',
  computed: {
    title() {
      if (this.$store.state.isMobile) {
        return 'Home - Mobile'
      } else if (this.$store.state.isTablet) {
        return 'Home - Tablet'
      } else {
        return 'Home - Desktop'
      }
    },
  },
  mounted() {
    this.animateOnScroll()
    this.animateOnScrollA()
  },
  methods: {
    causeError() {
      this.$log('PLEASE ')
      throw new Error('ERROR')
    },
    animateOnScroll() {
      this.$gsap.to('.handR', {
        x: -500,
        ease: 'Power1.easeInOut',
        delay: 1,
      })
    },
    animateOnScrollA() {
      this.$gsap.to('.handL', {
        x: 500,
        ease: 'Power1.sine',
        delay: 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
// .home {
// }

ul {
  font-size: 30px;
  color: #fff;
  list-style: disc;
  padding-left: 40px;
}
.donationsBox {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.donationsBoxBreakA {
  flex-direction: row;
  align-items: center;
  padding: 10px;
}
.btn {
  width: 9.5em;
}
.universityBsuBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  border: solid white;
  border-width: 2px;
}

.main {
  background-color: black;
}
h1 {
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    green 29%,
    #fff800 20%,
    #d80a0a 87%
  );
  background-size: 400px auto;
  color: #fff;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 10s linear infinite;
  animation-delay: 5s;
  display: inline-block;
  font-size: 190px;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.textLogo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  text-transform: uppercase;
}

p {
  color: white;
}

.EWUl {
  position: absolute;
  top: 30em;
  left: 11em;
  height: 4%;
  width: 15%;
}

.WHITl {
  position: absolute;
  top: 84em;
  left: 15em;
  height: 6%;
  width: 15%;
}

.GUl {
  position: absolute;
  top: 140em;
  left: 15em;
  height: 6%;
  width: 15%;
}

h3 {
  font-size: 85px;
  margin-left: 30px;
  background: #d80a0a;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;

  button,
  .btn {
    margin: 0.5rem 0;
  }

  @include media-breakpoint-up(md) {
    flex-direction: row;

    button,
    .btn {
      margin: 0 0.5rem;
    }
  }
}

@media only screen and (max-device-width: 480px) {
  h1 {
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      green 29%,
      #fff800 20%,
      #d80a0a 87%
    );
    background-size: 400px auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 5s linear infinite;
    animation-delay: 5s;
    display: inline-block;
    font-size: 100px;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
}

.EWUl,
.GUl,
.WHITl {
  display: none;
}

.WHIT,
.GU,
.EWU {
  width: 25em;
}
</style>
