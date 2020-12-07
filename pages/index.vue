<template>
  <div class='page loaderAnim' ref='page' >
    <div class="container-main">
         <nav class="menu">
           <a @click="navAbout" class='menu__item' to="/about">About</a>
          <nuxt-link class='menu__item' to="/contact">Contact</nuxt-link>
          <nuxt-link class='menu__item' to="/portfolio">Portfolio</nuxt-link>
          <a
            href="https://www.linkedin.com/company/adam-sebesta-development"
            target="_blank"
            rel="noopener noreferrer"
            class='menu__item'
          >
            LinkedIn
          </a>
        </nav>
        <div class="main-img-container">
          <!-- <div class='device-images'>
            <img id="iphone-home" class="home-img" draggable="false" src='~static/iphone.png' />
            <img id="macbook-home" class="home-img" draggable="false" src='~static/macbook.png' />
          </div> -->
          
         <div class='logo'>
           <p class="logo-upper rise1">Adam Sebesta</p>
           <p class="logo-lower">Development</p>
         </div>

			
        </div>
        <svg id="sky">
          <svg v-for="i in stars" :key='i'  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                :x='getRandomX()'
                :y='getRandomY()'
                width='25px'
                height='25px'
                class='star'
          viewBox="0 0 58 58" xml:space="preserve">
          <g>
            <polygon style="fill:#434C6D;" points="29,58 3,45 3,13 29,26 	"/>
            <polygon style="fill:#556080;" points="29,58 55,45 55,13 29,26 	"/>
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
        </svg> 

        <div id="shootingstars">
          
            <div
              v-for="s in shootStars"
              class="wish"
              :style="{
                left: `${getRandomY()}px`,
                top: `${getRandomX()}px`
              }"
              :key="s"
            />
        </div>



        <!-- <div class="links">
          <nuxt-link class='main-btn' to="/contact">CONTACT</nuxt-link>
          <nuxt-link class='main-btn' to="/portfolio">PORTFOLIO</nuxt-link>
          <a
            href="https://www.linkedin.com/company/adam-sebesta-development"
            target="_blank"
            rel="noopener noreferrer"
            class='main-btn'
          >
            LINKEDIN
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
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
      adam: false,
      showFirst: true,
      background: null,
      title: 'Adam Sebesta Development | Home',
      description: 'Web and Mobile App Development',
      image: '/meta.png',
      num: 60,
      windowWidth: 1200,
      windowHeight: 1200,
      stars: [...Array(80)],
      shootStars: [...Array(60)]
    }
  },
  methods: {
    showBackground() {
      setTimeout(() => {
        this.background = true;
      }, 750);
    },
    randomRadius() {
      return Math.random() * 0.7 + 5.6;
      },
    getRandomX() {
      return Math.floor(Math.random() * Math.floor(this.windowWidth)).toString();
    },
    getRandomY() {
      return Math.floor(Math.random() * Math.floor(this.windowHeight)).toString();
    },
    rippleStars() {
      anime({
        targets: ["#sky .star"],
        easing: "linear",
        delay: anime.stagger(500),
        opacity: [
          {
            duration: 700,
            value: "0.5"
          },
        ],
        // translateX: 3
      });
  },
    starryNight() {
      anime({
        targets: ["#sky .star"],
         width: [
          {
            duration: 100,
            value: "130px"
          },
          {
            duration: 100,
            value: "150px"
          }
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 2000 * i
      });
    },
    async growIphone() {

      const animation = anime.timeline();
      
      animation.add({
        targets: ["#iphone-home", "#macbook-home"],
        easing: "easeInOutSine",
        loop: false,
        translateX: [{
          duration: 2000, 
          value:"-25vw"
        }],
        translateY: [{
          duration: 2000, 
          value:"-30vh"
        }]
      });
      //  animation.add({
      //   targets: ["#iphone-home", "#macbook-home"],
      //   easing: "easeInOutSine",
      //   loop: false,
      //   height: [{
      //     duration: 1000, 
      //     value:"10%"
      //   }],
      // });
      
  },
    initLogo() {
      var textWrapper1 = document.querySelector('.rise1');
      textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({loop: false})
        .add({
          targets: '.rise1 .letter',
          translateY: [100,0],
          translateZ: 0,
          opacity: [0,1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 700 + 30 * i
        })
    },
    navAbout() {
      let target = document.querySelectorAll('.star')[3];
      let pos = target.getBoundingClientRect();
      console.log(pos)
      anime.timeline({loop: false})
        .add({
          targets: target,
          width: 500,
          height: 500,
          x:  pos.x <  (this.windowWidth / 2)? pos.x + (this.windowWidth / 2): (this.windowWidth / 2) - pos.x , 
          y:  pos.y <  (this.windowWidth / 2)? pos.y + (this.windowWidth / 2): (this.windowWidth / 2) - pos.y , 
          easing: "easeOutExpo",
          duration: 2400,
          // delay: (el, i) => 700 + 30 * i
        })
    }

   
  },
  created() {
    this.showBackground();
  },
  mounted() {
    this.initLogo();
    this.starryNight();
    this.rippleStars();
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    // this.growIphone();
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    }
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
  overflow: hidden;
}
.container-main {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  z-index:1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.animation-wrapper {
  width: 100%;
  height: 30%;
  margin: 0 auto;
    span {
    display: block;
    font-size: 50px;
    margin-bottom: 1em;
  }
}

#sky {
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#shootingstars {
  margin: 0;
  z-index: -1;
  padding: 0;
  width: 150vh;
  height: 100vw;
  position: fixed;
  overflow: hidden;
  transform: translatex(calc(50vw - 50%)) translatey(calc(50vh - 50%))
    rotate(120deg);
}

.wish {
  height: 10px;
  top: 300px;
  width: 30px;
  margin: 0;
  opacity: 0;
  padding: 0;
  background-color: $purple;
  position: absolute;
  background: linear-gradient(-45deg, $purple, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px $purple);
  overflow: hidden;
}

.logo {
  width: 100%;
  margin: 0 auto;
  // position: absolute;  
  text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
  z-index: 1;
  font-family: $bodyText;
  
  .logo-upper {
    color: $lightBlue;
    font-size: 66px;
    line-height: 1.25;
    // letter-spacing: -0.025em;
    text-indent: -0.025em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
  }
  .logo-lower {
    color: $purple;
    font-size: 46px;
    line-height: 1.25;
    // letter-spacing: -0.025em;
    text-indent: -0.025em;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
}


.rise1 .letter {
  display: inline-block;
  line-height: 1em;
}

.main-img-container {
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  justify-content: center;
  padding: 0  50px; 
  align-items: center;
  // flex-direction: column;
  display: flex;
}
#iphone-home {
  z-index: 1;
  width: 5%;
  
  // filter: drop-shadow(2px 10px 4px black);
}

#macbook-home {
  z-index: 1;
  width: 14%;
  // filter: drop-shadow(2px 10px 4px black);
}

.device-images {
  display: flex;
  justify-content: center;
}

.menu {
	position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
	display: flex;
	flex-direction: column;
	margin: 0 0 0 1vw;
	font-size: 4vw;
	align-items: flex-start;
}

.menu__item {
  color: $lightBlue;
  text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
	line-height: 1.25;
	letter-spacing: -0.025em;
	text-indent: -0.025em;
	font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	position: relative;
}

.menu__item:hover,
.menu__item:focus {
	color: $purple
}

.menu__item::before {
	content: '';
	width: 60%;
	height: 10%;
	background: linear-gradient(45deg, #f19872, #e86c9a);
	position: absolute;
	left: 0;
	bottom: 0;
	transform-origin: 0 0;
	transform: scale3d(0,1,1);
}

@media only screen and (max-width: 1000px) {
  .logo {
    width:200px;
  }

  .main-btn {
    font-size: 10px;
    padding: 10px 15px;
  }

  .background-lower {
    
    height: 100vh;
    bottom: -94px;
  }

  html, body {
  overflow-x: hidden;
  }
  body {
    position: relative;
  }

}
@media only screen and (max-width: 600px) {
  .logo {
    height: 86px;
  }

  .main-btn {
    font-size: 10px;
    padding: 10px 15px;
  }

  .background-lower {
    
    height: 80vh;
    bottom: -94px;
  }

  html, body {
  overflow-x: hidden;
  }
  body {
    position: relative;
  }


  .logo-wrapper {
    position: absolute;
    top: 33%;
  }
}
</style>
