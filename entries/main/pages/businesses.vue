<template lang="pug">
.main
  .home.page
    .textLogo
      h1(slot="placeholder") Black Business Scroll
  .explanationBox
    h3 Support Black Business In Spokane!
    
    .businessList
      <li v-for="business in blackbusinesses" :key="index">
       br
      .businessCard
       pre {{business.Title}}
       pre {{business.Company_Type}}
       pre <img :src="business.Image">
       pre {{business.Company_Owner}}
       pre {{business.Company_Number}}
       pre {{business.Company_Email}}
       pre {{business.Company_Address}}
       pre {{business.Company_Facebook}}
       pre {{business.Company_Site}}
       br
      </li>
      br
  p All Businesses Found on <a href="https://www.BlackSpokane.com/">BlackSpokane.com</a>
  .button-wrapper
    nuxt-link.btn(to="/") Home
</template>

<script>
import blackbusiness from '@/blackbusinesses.json'
export default {
  name: 'Home',
  data() {
    return {
      blackbusinesses: blackbusiness,
    }
  },
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
.businessList {
  color: white;
}

.businessCard {
  border-width: 2px;
  border-style: solid;
  border-color: white;
}

.explanationBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid white;
  border-width: 2px;
  padding: 30px;
  .explanationBoxBreak {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .explanationBoxBreakA {
    flex-direction: row;
    align-items: center;
    padding: 10px;
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

h3 {
  font-size: 85px;
  margin-left: 30px;
  background: green;
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

.jToday {
  padding-top: 10px;
  width: 40%;
  height: 20%;
}

.jcom {
  width: 40%;
  height: 40%;
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
</style>
