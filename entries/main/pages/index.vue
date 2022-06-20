<template lang="pug">
.main
  .home.page
    <a href="https://www.14four.com/">
    <img class="fourl" alt="logo" src="@/assets/images/14fourlogo.png" />
    </a>
    .textLogo
      h1(slot="placeholder") Juneteenth
      h2 Spokane 
  .animationBox
    <img class="handR" alt="title" src="@/assets/images/lefthandchained.png">
    <img class="handL" alt="title" src="@/assets/images/righthandchained.png">
  .explanationBox
    h3 What is Juneteenth ?
    .explanationBoxBreak
    <img class="monPic" alt="monument" src="@/assets/images/monument.jpeg">
      span Juneteenth 
      p Short for “June Nineteenth” marks the day when federal troops arrived in Galveston, Texas in 1865 to take control of the state and ensure that all enslaved people be freed. The troops’ arrival came a full two and a half years after the signing of the Emancipation Proclamation. 
      p Juneteenth honors the end to slavery in the United States and is considered the longest-running African American holiday. On June 17, 2021, it officially became a federal holiday. Confederate General Robert E. Lee had surrendered at Appomattox Court House two months earlier in Virginia, but slavery had remained relatively unaffected in Texas—until U.S. General Gordon Granger stood on Texas soil and read General Orders No. 3: “The people of Texas are informed that, in accordance with a proclamation 
      p from the Executive of the United States, all slaves are free.”Confederate General Robert E. Lee had surrendered at Appomattox Court House two months earlier in Virginia, but slavery had remained relatively unaffected in Texas—until U.S.  General Gordon Granger stood on Texas soil and read General Orders No. 3: “The people of Texas are informed that, in accordance with a proclamation from the Executive of the United States, all slaves are free.”
      br
      br
      <span class="juneteenth-Today"> Juneteenth Today</span>
    .explanationBoxBreakA
      br
      br
      <img class="jToday" alt="today" src="@/assets/images/juneteenthToday.jpeg">
      p Today Juneteenth commemorates African American freedom and emphasizes education and achievement. It is a day, a week, and in some areas, a month marked with celebrations, guest speakers, picnics and family gatherings. It is a time for  reflection and rejoicing. It is a time for assessment, self-improvement and for planning the future. Its growing popularity signifies a level of maturity and dignity in America long over due. In cities across the country, people of all races, nationalities and religions are joining hands to truthfully acknowledge a period in our history that shaped and continues to influence our society today. Sensitized to the conditions and experiences of others, only then can we make significant and lasting improvements in our society.
  .button-wrapper
    nuxt-link.btn(to="/celebrate") How To Celebrate ?
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
  font-size: 250px;
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
