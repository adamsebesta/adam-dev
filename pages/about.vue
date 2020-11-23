<template>
  <div class="container-main">
    <!-- <span class="title-pop">
          GET IN TOUCH!
    </span> -->
    <nuxt-link to="/">
      <img class='logo-top' draggable="false" src='~static/logo clean.png'/>
      <div class='green-sqr' :style="logo? {'opacity': '100' }: {'opacity': '0'}"> </div>
    </nuxt-link>
    <Nav/>
    <div class='photo-wrapper'>
      <div class="photo-background bg1" :style="bg1? {'transform': 'translate(100px 100px'} : '' "></div>
      <div class="photo-background bg2" :style="bg2? {'transform': 'translate(30px, 30px)'} : '' "></div>
      <!-- <div class="photo-background bg3" :style="bg3? {'transform': 'translate(20px 20px'} : ''"></div> -->
      
      <div></div>
      <img class="photo-background headshot" src="~static/headshot.png" alt="" rel="preload"/>
      
    </div>
    <div class='about'>
      <p class='about-title'> ABOUT </p>
      <p class='about-desc'>
        <span>Hi! Thank you for your interest.</span>
        <br>
        <br>
        <span>I’m Adam, a Canadian / Estonian developer living in Berlin. I am a certified Microsoft Azure Developer, who is deeply interested in the cloud, and building applications with modern technologies. </span>
        <br>
        <br>
        <span>  This business began while working at a web agency here in Berlin,  and as a freelancer on Web and Mobile applications.  Now, ready to be formalized, Adam Sebesta Development is live! </span>
        <br>
        <br>
        <span>As fluid communication is a pillar of the business, understanding client expectations, and transparently portraying my capabilities, are of critical importance to me. </span>
        <br>
        <br>
        <span>Whether you are looking to develop a MVP to secure funding, or a personal use application, I would be happy to begin exploring how I can help. </span>
        <br>
        <br>
        <span>Thank you again, and I look forward to speaking with you. </span>
      </p>      
    </div>

  </div>
</template>

<script>
import Nav from '../components/Nav'

export default {
  components: {Nav},
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        { hid: 'og:title',  property: 'og:title', content: this.title },
        { hid: 'og:image', property: 'og:image', content: this.image },
      ],
    }
  },
  data() {
    return {
      background: null,
      title: 'Adam Sebesta Development | About',
      description: 'Who I am',
      image: '~/static/meta.png',
      formValues: {},
      logo: false,
      sent: false,
      bg1: false,
      bg2: false,
      bg3: false
    }
  },
  computed: {
    logicAppUrl() {
      return this.$config.logicAppUrl.replace(/\\\//g, "/");
    }
  },
  methods: {
     moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },
    triggerBackground() {
      // setTimeout(() => {
      //   this.bg3 = true;
      // }, 750);
      setTimeout(() => {
        this.bg2 = true;
      }, 1250);
      // setTimeout(() => {
      //   this.bg1 = true;
      // }, 1500);
    },
  },
  created() {
    this.moveLogo();
    this.triggerBackground();
  }
}
</script>

<style lang='scss'>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
html {
  overflow-y: scroll;
}

.photo-wrapper {
  position: absolute;
  top: 25px;
  height: 40%;
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  .photo-background {
    width: 80%;
    height: 85%;
    position: absolute;
    transition: all 1s ease;
  }
  .bg1 {
    background-color: #013011;
    z-index: 0;
  }
  .bg2{
    background-color: #013d16;
    // transform: translate(20px, 20px);
    transform: translate(68px, 65px);
    height: 82%;
    z-index: 1;
  }
  .bg3 {
    background-color: #004919;
    // transform: translate(40px, 40px);
    transform: translate(65px, 60px);
    z-index: 2;
  }
  .headshot {
    width: 82%;
    height: 92%;
    z-index: 3;
    transform: translate(67px, 53px);
    object-fit: cover;
  }
}
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
.about {
  font-weight: 300;
  width: 80%;
  // margin-left: 40px;
  text-align: center;
  position: absolute;
  top: 49%;
  color: #013d16;
  z-index: 2;
  .about-title {
    font-size: 24px;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }
  .about-desc {
    padding: 0 10%;
    margin-bottom: 60px;
    text-transform: uppercase;
    span {
      // background-color: #82ab71;
      padding: 5px
    }
    font-size: 14px;
    letter-spacing: 1px;
    text-align: center;
  }
}

@media only screen and (max-width: 1024px) {

  .about {
  font-weight: 300;
  width: 80%;
  // margin-left: 40px;
  text-align: center;
  position: absolute;
  top: 50%;
  color: #013d16;
  z-index: 2;
  .about-title {
    font-size: 24px;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }
  .about-desc {
    font-size: 16px;
    letter-spacing: 1px;
    text-align: center;
  }
}
.photo-wrapper {
  height: 40%;
  width: 50%;
  margin: 0 auto;
  padding: 25px;
}

.photo-background {
    width: 50% !important;
    height: 85% !important;
    position: absolute;
    transition: all 1s ease;
  }

  .headshot {
    object-fit: cover !important;
  }
  .bg2 {
    width: 49% !important;
    height: 82% !important;
  }

  }
@media only screen and (max-width: 420px) {
  .about {
  font-weight: 300;
  width: 80%;
  // margin-center: 40px;
  text-align: center;
  position: absolute;
  top: 47%;
  color: #013d16;
  z-index: 2;
  .about-title {
    font-size: 18px;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }
  .about-desc {
    font-size: 10px;
    letter-spacing: 1px;
    text-align: center;
    padding: 0;
  }
}
.photo-wrapper {
  height: 35%;
  width: 54%;
  top: 85px;
  .headshot {
    object-fit: cover !important;
    transform: translate(62px, 55px) !important;
  }
}

.photo-background {
    position: absolute;
    transition: all 1s ease;
    width: 50% !important;
    height: 70% !important;
  }

  .bg2 {
    width: 47% !important;
    height: 66% !important;
    // transform: translate(55px, 52px);
  }
  .bg1 {
    width: 47% !important;
    height: 69% !important;
    // transform: translate(55px, 52px);
  }
}
  
</style>
