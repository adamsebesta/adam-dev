<template>
  <div class="page loaderAnim" ref="page">
    <div class="container-main">
      <Nav />
      <Socials />
      <div class="main-img-container">
        <div class="device-images">
          <!-- <img id="iphone-home" class="home-img" draggable="false" src='~static/iphone-test.png' />
            <img id="macbook-home" class="home-img" draggable="false" src='~static/macbook.png' />  -->
          <img class="logo-img" src="~static/logo.png" alt="" />
        </div>

        <div class="logo">
          <p class="logo-upper rise1">Adam Sebesta</p>
          <p class="logo-lower">Development</p>
        </div>

        <!-- <h1 class='title-subheading'>Test Text may go lore here....</h1> -->
        <div class="background-blue"></div>
      </div>
      <svg id="sky">
        <svg
          v-for="i in stars"
          :key="i"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :x="getRandomX()"
          :y="getRandomY()"
          width="3%"
          height="3%"
          class="star"
          fill="#fff"
          viewBox="0 0 58 58"
          xml:space="preserve"
        >
          <g>
            <polygon style="fill:#434C6D;" points="29,58 3,45 3,13 29,26 	" />
            <polygon style="fill:#556080;" points="29,58 55,45 55,13 29,26 	" />
            <polygon style="fill:#7383BF;" points="3,13 28,0 55,13 29,26 	" />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </svg>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import about from "./about";
import Nav from "../components/Nav";

export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        { hid: "og:title", property: "og:title", content: this.title },
        { hid: "og:image", property: "og:image", content: this.image }
      ]
    };
  },
  transition: "page",
  data() {
    return {
      adam: false,
      showFirst: true,
      background: null,
      title: "Adam Sebesta Development | Home",
      description: "Web and Mobile App Development",
      image: "/meta.png",
      num: 60,
      windowWidth: 1200,
      windowHeight: 1200,
      stars: [...Array(60)]
      // this.windowWidth > 420? [...Array(20)] :
    };
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
      return Math.floor(Math.random() * Math.floor(this.windowWidth))
        .toString()
        .trim();
    },
    getRandomY() {
      return Math.floor(Math.random() * Math.floor(this.windowHeight))
        .toString()
        .trim();
    },
    riseLogo() {
      anime({
        targets: [".logo-img"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 2400,
            value: "1"
          }
        ]
      });
    },
    rippleStars() {
      let that = this;
      anime.timeline({ loop: false }).add({
        targets: ["#sky .star"],
        easing: "easeInOutSine",
        delay: anime.stagger(300),
        y: [
          {
            duration: 2000,
            value: "5px"
          }
        ],
        opacity: [
          {
            duration: 2500,
            value: "0.0"
          }
        ],
        begin: function(anim) {
          // beginLogEl.value = "began : " + anim.began;
          console.log(anim);
        },
        complete: function(anim) {
          that.spinLogo();
        }
      });
    },
    spinLogo() {
      anime({
        targets: ".logo-img ",
        rotate: [
          {
            duration: 2000,
            value: 360
          }
        ],
        easing: "easeOutExpo"
      });
    },
    initLogo() {
      var textWrapper1 = document.querySelector(".rise1");
      textWrapper1.innerHTML = textWrapper1.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline({ loop: false }).add({
        targets: ".rise1 .letter",
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 700 + 30 * i
      });
    }
  },
  created() {
    this.showBackground();
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.initLogo();
    this.riseLogo();
    this.rippleStars();
    // this.growIphone();
  }
};
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
}

html {
  overflow: hidden;
}

.container-main {
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
}

.background-blue {
  background: url("~static/background blue.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  bottom: 100%;
  right: 100%;
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
  z-index: -1;
}

.star {
  opacity: 0.3;
}

.logo-img {
  min-width: 112px;
  height: 125px;
  opacity: 0;
}

.logo {
  // position: absolute;
  text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.2);
  z-index: 1;
  text-align: left;

  .logo-upper {
    color: $lightBlue;
    font-size: 4.7vw;
    line-height: 1.25;
    letter-spacing: 3px;
    text-indent: -0.025em;
    font-weight: 700;
  }
  .logo-lower {
    color: $purple;
    font-size: 2.4vw;
    line-height: 1.5;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-indent: -0.025em;
    font-weight: 700;
    margin-left: 18%;
    margin-top: -8px;
  }
}

.title-subheading {
  color: $lightBlue;
  font-size: 26px;
  padding-top: 10rem;
}

.rise1 .letter {
  display: inline-block;
  line-height: 1em;
}

.main-img-container {
  width: 80%;
  margin: 0 auto;
  z-index: 1;
  justify-content: center;
  padding: 0 50px;
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
  justify-content: flex-end;
  padding-right: 4%;
}

@media only screen and (max-width: 1000px) {
  .logo {
    width: 200px;
  }

  .main-btn {
    font-size: 10px;
    padding: 10px 15px;
  }

  html,
  body {
    overflow-x: hidden;
  }
  body {
    position: relative;
  }
}
@media only screen and (max-width: 420px) {
  .main-img-container {
    padding: 0;
    width: 100%;
    margin: 0 auto;
    margin-top: -50px;
    margin-left: 10px;
  }
  .device-images {
    justify-content: flex-end;
    width: 20%;
    height: 100%;
  }

  .logo {
    margin: 0;
    width: 60%;
    .logo-upper {
      font-size: 32px;
      letter-spacing: 1px;
    }
    .logo-lower {
      font-size: 18px;
      letter-spacing: 1px;
      margin-left: 15%;
      margin-top: -5px;
    }
  }
  .logo-img {
    width: 100%;
    min-width: unset;
    height: unset;
  }
}
</style>
