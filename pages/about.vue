<template>
  <div class="container-main">
  
    <Nav/>
    <svg version="1.1"
      id="about-background" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      width='175vh'
      height='175vh'
      x='-400'
      y='20'
      viewBox="0 0 58 58" xml:space="preserve">
      <g>
        <polygon style="fill:#434C6D;" points="29,58 3,45 3,13 29,26 	"/>
        <polygon :style="{'fill' : '#556080'}" points="29,58 55,45 55,13 29,26 	"/>
        <polygon style="fill:#7383BF;" points="3,13 28,0 55,13 29,26 	"/>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
      <g>
      </g>
    </svg>
    <div class='main-wrapper'>
      <!-- <div class="photo-background bg1" :style="bg1? {'transform': 'translate(100px 100px'} : '' "></div>
      <div class="photo-background bg2" :style="bg2? {'transform': 'translate(30px, 30px)'} : '' "></div> -->
      <!-- <div class="photo-background bg3" :style="bg3? {'transform': 'translate(20px 20px'} : ''"></div> -->
      
      <img class="headshot" src="~static/headshot.png" alt="" rel="preload"/>
      
      <div class='about'>
        <p class='about-title'> About </p>
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

  </div>
</template>

<script>
import Nav from '../components/Nav'
import anime from 'animejs';

export default {
  components: {Nav},
  transition: "page",
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

    moveBackground() {
      anime.timeline({loop: true})
      .add({
        targets: ["#about-background"],
        easing: "linear",
        rotate: [
          {
            duration: 150000,
            value: 360
          },
        ],
      })
    },
    aboutAppear() {
      anime.timeline({loop: false})
      .add({
        targets: [".headshot"],
        easing: "easeInOutSine",
        width: [
          {
            duration: 500,
            value: '20%'
          },
        ],
        opacity: [
          {
            duration: 1200,
            value: 1
          }
        ]
      })
      .add({
        targets: [".about"],
        easing: "easeInOutSine",
        width: [
          {
            duration: 750,
            value: '55%'
          },
        ],
      }).add({
        targets: ['.about'],
        easing: 'easeInOutSine',
        opacity: 1
      })
    }
  },
  mounted() {
    this.moveBackground();
    this.aboutAppear() 
  }
}
</script>

<style lang='scss'>

.container-main {
}
.main-wrapper {
  position: absolute;
  top: 10%;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
html {
  overflow: hidden;
}

#about-background {
  opacity: .1;
  position: absolute;
}


  .headshot {
    width: 0%;
    margin-right: 20px;
    height: 50vh;
    top: 50%;
    z-index: 3;
    opacity: 0;
    object-fit: cover;
  } 

.about {
  font-weight: 300;
  opacity: 0;
  width: 0%;
  // margin-left: 40px;
  text-align: left;
  color:$lightBlue;
  z-index: 2;
  .about-title {
    letter-spacing: 3px;
    margin-bottom: 20px;
    font-weight: 800;
    color: $purple;
  }
  .about-desc {
    margin-bottom: 60px;
    // text-transform: uppercase;
    font-weight: 600;
    span {
      // background-color: #82ab71;
      padding: 5px
    }
    font-size: 2vw;
    letter-spacing: 1px;
    text-align: left;
  }
}

@media only screen and (max-width: 1024px) {


  }
@media only screen and (max-width: 420px) {
  .main-wrapper {
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 auto;
    top: 0;
    align-items: center;
    padding-top : 150px;
  }
  .headshot {
    height: 20%;
  }

}
  
</style>
