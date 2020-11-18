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
      <img class="photo-background headshot" src="~static/headshot.png" alt=""/>
      
    </div>
    <div class='about'>
      <p class='about-title'> ABOUT </p>
      <p class='about-desc'>
        MY NAME IS ADAM, AND I AM A CANADIAN / ESTONIAN DEVELOPER LIVING IN BERLIN. <br> <br>
        FOR THE LAST TWO YEARS I HAVE BEEN SPECIALIZING IN NODE.JS, VUE.JS, AND MICROSOFT AZURE THROUGH FREELANCE, AND PROFESSIONAL PROJECTS. I AM A CONFIDENT AUTODIDACT, AND AM ABLE TO QUICKLY UNDERSTAND AND RETAIN NEW INFORMATION. 
        <br><br>
        <!-- I WORK AS A TEACHING ASSISTANT AT LE WAGON'S WEB DEVELOPMENT BOOTCAMP, AND RECENTLY HAVE COMPLETED A WEB DEVELOPMENT INTERNSHIP WITH A BERLIN WEB AGENCY -->
        AS FLUID COMMUNICATION IS IMPORTANT TO ME, I WOULD LOVE TO SCHEDULE A CALL TO FURTHER FAMILIARIZE OURSELVES WITH EACH OTHER’S SERVICES, AND DISCUSS YOUR PROJECT AND PREFERENCES IN MORE DETAIL. 
        <br><br>
        THANK YOU FOR YOUR CONSIDERATION, 
        <!-- <br>
        AND I LOOK FORWARD TO SPEAKING. -->
      </p>      
    </div>

  </div>
</template>

<script>
import Nav from '../components/Nav'

export default {
  components: {Nav},
  data() {
    return {
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
* {
  overflow: hidden;
}

.photo-wrapper {
  position: absolute;
  top: 30px;
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
    transform: translate(67px, 60px);
    z-index: 1;
  }
  .bg3 {
    background-color: #004919;
    // transform: translate(40px, 40px);
    transform: translate(65px, 60px);
    z-index: 2;
  }
  .headshot {
    width: 81%;
    height: 90%;
    z-index: 3;
    transform: translate(65px, 60px);
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
  top: 50%;
  color: #013d16;
  z-index: 2;
  .about-title {
    font-size: 24px;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }
  .about-desc {
    font-size: 14px;
    letter-spacing: 1px;
    text-align: left;
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
    text-align: left;
  }
}
.photo-wrapper {
  height: 40%;
  width: 50%;
}

.photo-background {
    width: 90%;
    height: 95%;
    position: absolute;
    transition: all 1s ease;
  }


  }
@media only screen and (max-width: 420px) {
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
    font-size: 18px;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }
  .about-desc {
    font-size: 10px;
    letter-spacing: 1px;
    text-align: left;
  }
}
.photo-wrapper {
  height: 30%;
  width: 55%;
  top: 100px;
  .headshot {
  }
}

.photo-background {
    position: absolute;
    transition: all 1s ease;
    width: 72% !important;
    height: 77% !important;
  }


  }

  

</style>
