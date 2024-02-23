<template lang="pug">
.main
  .home.page
    .textLogo
      h1(slot="placeholder") Black History Month 
      h2 Spokane 
  .explanationBox
    h3 Black History In Spokane ?
    .explanationBoxBreak
    <img class="monPic" alt="monument" src="@/assets/images/PeteBarrow.jpeg">
      br
      span Rev. Peter Barnabus Barrow
      br
      p Rev. Peter Barnabus Barrow stands as a towering figure in both the annals of Black history and the narrative of Spokane's pioneering spirit. Born into the shackles of slavery, he rose from the depths of oppression to become a beacon of resilience 
      p and progress. His journey from the battlefields of the Civil War to the corridors of power in the Mississippi Legislature, and ultimately to the nascent city of Spokane, epitomizes the indomitable spirit of the human soul yearning for freedom and 
      p opportunity. Reverend Barrow's pivotal role as one of the founders of Calvary Baptist Church, the first Black church in Spokane, signifies not only the establishment of a spiritual sanctuary but also the birth of a resilient community amidst the 
      p challenges of racism and discrimination. Moreover, Reverend Barrow's legacy extends beyond the confines of religious leadership. His fervent advocacy for the rights of farmers and Black citizens, coupled with his foray into business ventures and 
      p political activism, underscores his multifaceted contributions to both the Black community and the broader Spokane society. In an era marred by racial prejudice and systemic barriers, Barrow's unwavering commitment to uplifting his fellow citizens 
      p serves as a timeless reminder of the transformative power of perseverance and solidarity. As we reflect on Reverend Barrow's journey, let us draw inspiration from his remarkable resilience and resolve, and strive to emulate his spirit of resilience 
      p and empowerment in our own endeavors, fostering a more inclusive and equitable future for all.
      br
      br
  
    .explanationBoxBreakA
      br
      br

  .button-wrapper
    nuxt-link.btn(to="/celebratebhm") How To Celebrate ?
    nuxt-link.btn(to="/donate") Donate
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
.textLogo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

.explanationBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid white;
  border-width: 2px;
  padding: 10px;
  .explanationBoxBreak {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .explanationBoxBreakA {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
}
.animationBox {
  height: 20em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.main {
  background-color: black;
}
p {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: white;
}

h1 {
  margin-right: 0;
  font-size: 180px;
  width: 100rem;
  background: -webkit-linear-gradient(red, yellow, green);
  text-shadow: 2.5px 2.5px whitesmoke;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h2::before {
  content: 'Spokane';
  font-size: 150px;
  margin-left: 1.2em;
  background: -webkit-linear-gradient(red, yellow, green);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadein 2s;
  animation-timing-function: 4s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 0;
  }
}
h3 {
  font-size: 85px;
  margin-left: 70px;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h4 {
  font-size: 35px;
  margin-left: 30px;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.handR {
  position: absolute;
  bottom: 120em;
  width: 100%;
}
.handL {
  position: absolute;
  bottom: 118em;
  width: 100%;
}

.monPic {
  width: 40%;
  height: 40%;
}

.fourl {
  position: relative;
  width: 20%;
  height: 20%;
  left: 40em;
}
.jToday {
  width: 40%;
  height: 20%;
  padding: 20px;
}

span {
  color: red;
  font-size: 30px;
  font-style: italic;
  font-family: cursive;
}

.juneteenth-Today {
  color: red;
  font-size: 30px;
  font-style: italic;
  font-family: cursive;
  padding-left: 18em;
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
    margin-right: 0;
    font-size: 60px;
    background: -webkit-linear-gradient(red, yellow, green);
    text-shadow: 2.5px 2.5px whitesmoke;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 {
    margin-right: 220em;
    height: 10px;
    font-size: 5%;
    background: -webkit-linear-gradient(red, yellow, green);
    text-shadow: 2.5px 2.5px whitesmoke;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h3 {
    font-size: 20px;
    text-align: center;
    margin-left: 0;
  }
  .explanationBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: solid white;
    border-width: 2px;
    padding: 10px;
    .explanationBoxBreak {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .explanationBoxBreakA {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .jToday {
    width: 100%;
    height: 20%;
    padding: 20px;
  }

  #content {
    float: none;
    width: 100%;
  }

  #navigation {
    float: none;
    width: auto;
  }
}
</style>
