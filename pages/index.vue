<template>
  <div class="page loaderAnim" ref="page">
    <!-- @mousewheel="handleScroll" -->
    <div class="container-main">
      <Nav />
      <Socials />
      <div class="center-content">
        <div class="main-left">
          <p v-if="windowWidth > 450" class="heading">
            Your <br />
            <span class="purple"> Original Ideas</span> Brought To Life
          </p>
          <p v-if="windowWidth < 450" class="heading">
            Your
            <span class="purple"> Original Ideas</span> Brought To Life
          </p>
          <div class="subheading">
            <p>
              Collaborative mobile and web development for small to large scale
              applications
            </p>
            <a class="home-btn" @click="proceedContact">Contact me</a>
          </div>
        </div>
        <div class="main-right">
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
        </div>
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
          width="2%"
          height="2%"
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
      <div class="background-home"></div>
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
      title: "Adam Sebesta Development | Home",
      description: "Web and Mobile App Development",
      image: "/meta.png",
      num: 60,
      windowWidth: 1200,
      windowHeight: 1200,
      stars: [...Array(40)]
      // this.windowWidth > 420? [...Array(20)] :
    };
  },
  methods: {
    proceedContact() {
      document.querySelector("#contact").click();
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
            value: ["0", "1"]
          }
        ]
      });
    },
    rippleStars() {
      let that = this;
      anime.timeline({ loop: false }).add({
        targets: ["#sky .star"],
        easing: "easeInOutSine",
        delay: anime.stagger(400),
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
      anime({
        targets: [".rise1"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 1000,
            value: [0, 1]
          }
        ]
      });

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
        delay: (el, i) => 1000 + 30 * i
      });
    },
    // handleScroll() {
    //   console.log("hi");
    //   anime({
    //     targets: [".star g polygon"],
    //     fill: ["#ff3d00", "#ff3d00"],
    //     delay: anime.stagger(400),
    //     easing: "easeOutExpo",
    //     duration: 1400
    //   });
    // }
    showStars() {
      anime({
        targets: [".star"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 1000,
            value: [0, 0.3]
          }
        ]
      });
    },
    showUpper() {
      anime({
        targets: [".star"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 1000,
            value: [0, 0.3]
          }
        ]
      });
    }
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.showStars();
      this.riseLogo();
    }, 750);
    setTimeout(() => {
      this.rippleStars();
    }, 1200);
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    // window.addEventListener("scroll", this.handleScroll);
    this.initLogo();
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
// html {
//   width: 100%;
//   height: 100%;
// }
// body {
//   width: 100%;
//   height: 100%;
// }

html {
  overflow: hidden;
}

.container-main {
  margin: 0 auto;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
}

.background-home {
  background: url("~static/background home4.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 45%;
  width: 51%;
  height: 100%;
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
  opacity: 0;
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
    font-size: 60px;
    line-height: 1.25;
    letter-spacing: 3px;
    text-indent: -0.025em;
    font-weight: 700;
    opacity: 0;
  }
  .logo-lower {
    color: $purple;
    font-size: 36px;
    line-height: 1.5;
    letter-spacing: 3px;
    text-transform: uppercase;
    text-indent: -0.025em;
    font-weight: 700;
    margin-left: 14%;
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

.main-right {
  width: 50%;
  margin: 0 auto;
  z-index: 1;
  justify-content: center;
  margin-right: 5%;
  align-items: center;
  // flex-direction: column;
  display: flex;
}

.center-content {
  display: flex;
  width: 80%;
}
.main-left {
  width: 50%;
  margin: 0 auto;
  margin-left: 5%;
  z-index: 1;
  justify-content: center;
  padding: 0 50px;
  flex-direction: column;
  display: flex;
  color: $lightBlue;
  // padding: 0 10%;
  text-align: left;

  .heading {
    font-size: 50px;
    font-weight: 800;
    width: 100%;
    max-width: 400px;
    line-height: 55px;
  }
  .subheading {
    width: 100%;
    font-size: 12px;
    font-weight: 800;
    margin-top: 20px;
    p {
      margin-bottom: 40px;
      font-size: 16px;
    }
  }
  .home-btn {
    background: $purple;
    height: 60px;
    color: $lightBlue;
    width: 150px;
    text-align: center;
    border: 3px solid $purple;
    margin: 0 auto;
    margin-top: 40px;
    cursor: pointer;
    border-radius: 4px;
    padding: 5px 10px;
    font-weight: 800;
    font-size: 16px;
    &:hover {
      color: $background;
    }
  }
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
  .center-content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    width: 95%;
  }

  .main-right {
    padding: 0;
    margin: 0 auto;
    width: 90%;
    margin-bottom: 20px;
  }
  .main-left {
    padding: 0;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    .heading {
      font-size: 18px;
    }

    .home-btn {
      background: $purple;
      height: 20px;
      color: $lightBlue;
      width: 50px;
      margin: 0 auto;
      margin-top: 5px;
      padding: 3px 8px;
      font-size: 12px;
      &:hover {
        color: $background;
      }
    }
  }

  .device-images {
    justify-content: flex-end;
    width: 20%;
    height: 100%;
  }
  .background-home {
    height: 90%;
    width: 87%;
    top: 11%;
  }
  .logo {
    margin: 0;
    .logo-upper {
      font-size: 24px;
      letter-spacing: 1px;
    }
    .logo-lower {
      font-size: 14px;
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
  .background-home {
    left: 44%;
  }
}
</style>
