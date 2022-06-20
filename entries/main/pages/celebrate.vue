<template lang="pug">
.main
  .home.page
    .textLogo
      h1(slot="placeholder") Celebrate
  .explanationBox
    h3 Celebrating At Work
    .explanationBoxBreak
    <img class="monPic" alt="monument" src="@/assets/images/juneteenthworkpic.jpeg">
      br
      p Recognizing Juneteenth in the workplace supports corporate diversity ideals and sends a signal that the company is truly dedicated to its diverse employee base.
      br
      br
    <ul>
    <li>Decorate a conference room, lobby or workspace with a Juneteenth theme to acknowledge the day's celebration. Bring the group together for refreshments and an explanation of Juneteenth.</li>
    <li>Discuss company diversity initiatives and ensure employees that race and gender will never be barriers to their progress within the company.</li>
    <li>Bring in a guest speaker. Make this an important date on the corporate calendar.</li>
    </ul>
      br
      br
      h3 Celebrating In Your Community 
    .explanationBoxBreakA
      br
      br
      <img class="jcom" alt="community" src="@/assets/images/communitypic1.jpeg">
    <ul>
    <li> Rally local organizations to unite and collaborate on a special event in honor of Juneteenth. (Public discussion, outdoor concert, etc.)</li>
    <li> Encourage your libraries, post offices, city hall to host Juneteenth displays.</li>
    <li>Host a community-wide prayer moment. Juneteenth Healing Circle. Everyone join hands a say a prayer of thankfulness and problem solving. Invite government and business leaders to participate.</li>
      </ul>
  .button-wrapper
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
  mounted() {},
  methods: {
    causeError() {
      this.$log('PLEASE ')
      throw new Error('ERROR')
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
  background: #d80a0a;
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
.placeholder {
  font-size: 100px;
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
