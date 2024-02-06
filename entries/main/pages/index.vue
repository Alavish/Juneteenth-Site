<template lang="pug">
.main
  .home.page
    .textLogo
      h1(slot="placeholder") Black History Month 
      h2 Spokane 
  .explanationBox
    h3 Black History In Spokane ?
    .explanationBoxBreak
    <img class="monPic" alt="monument" src="@/assets/images/FBurgCMaxey.png">
      br
      span Frank Burgess & Carl Maxey 
      br
      p Spokane, like many places in the United States, has its own history enriched by the contributions of notable African Americans. One such figure is Frank Burgess, an exceptional athlete and influential individual who made his mark in Spokane 
      p Frank Burgess was a basketball sensation at Gonzaga University during the late 1950s. Despite facing racial prejudices and challenges during his time, Burgess excelled both on and off the court. He became the first African American to lead the NCAA in scoring, achieving an average of 32.4 points per game in the 1960 season. His remarkable talent and resilience in the face of adversity not only made him a local sports hero but also a symbol of determination and excellence.
      p Burgess's legacy extends beyond his basketball prowess. He became an inspiration for many young athletes, demonstrating the power of perseverance and dedication. His achievements paved the way for future generations of black athletes in Spokane and beyond, breaking barriers and proving that talent knows no racial boundaries.
      p Moreover, Spokane has seen the emergence of other influential African American figures. For instance, activist and educator Carl Maxey left an indelible mark on the city. Maxey fought against racial discrimination, advocating for civil rights and equality in Spokane. His efforts helped create a more inclusive and equitable community, leaving a lasting impact on the city's social and legal landscape.
      p These stories of remarkable individuals like Frank Burgess and Carl Maxey highlight the resilience, determination, and contributions of African Americans in shaping Spokane's history. Their legacies serve as a testament to the power of perseverance, inspiring generations to strive for excellence and equality in all aspects of life.
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
