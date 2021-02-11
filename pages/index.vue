<template>
  <div class="page" ref="page">
    <div
      @click="resetStars"
      class="index-replay"
      :style="{
        'pointer-events': replay ? '' : 'none',
        cursor: replay ? 'pointer' : 'none'
      }"
    >
      <i class="fa fa-play" aria-hidden="true"></i>
    </div>
    <div>
      <Banner v-if="!loading" />
      <Nav class="banner-nav" v-if="!loading" />
    </div>
    <div class="container-main">
      <div v-if="loading" class="loading-anim">
        <div class="">
          <img class="loading-logo-img" src="~static/logo.png" alt="" />
        </div>

        <!-- <div class="loading-logo">
          <p class="loading-logo-upper">Adam Sebesta</p>
          <p class="loading-logo-lower">Development</p>
        </div> -->
      </div>
      <div class="center-content">
        <div class="main-left">
          <p v-if="!mobile" class="heading">
            Your <br />
            <span class="purple"> Creative Ideas <br /></span> Brought To Life
          </p>
          <p v-if="mobile" class="heading">
            Your <br />
            <span class="purple"> Creative Ideas</span><br />
            Brought To Life
          </p>
          <div class="subheading">
            <p>
              Collaborative mobile and web development for small to large scale
              applications
            </p>
            <a class="home-btn home-btn-animated" @click="proceedContact"
              >Contact <i class="fa fa-envelope" aria-hidden="true"></i
            ></a>
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
          width="40%"
          height="40%"
          class="star"
          fill="#fff"
          viewBox="0 0 58 58"
          xml:space="preserve"
        >
          <g>
            <polygon style="fill: #cccccc" points="29,58 3,45 3,13 29,26 	" />
            <!-- <polygon style="fill: #020517" points="29,58 3,45 3,13 29,26 	" /> -->
            <polygon style="fill: #f4f4f4" points="29,58 55,45 55,13 29,26 	" />
            <polygon style="fill: #ebebeb" points="3,13 28,0 55,13 29,26 	" />
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
    <Footer class="index-footer" />
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
      title: "Adam Sebesta Development | Home",
      description: "Web and Mobile App Development",
      image: "/meta.png",
      stars: [...Array(50)],
      loading: true,
      replay: false
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
      anime({
        targets: ["#sky .star"],
        y: function() {
          return anime.random(0, that.windowHeight);
        },
        x: function() {
          return anime.random(0, that.windowWidth);
        },
        width: function() {
          return anime.random(20, 40);
        },
        height: function() {
          return anime.random(20, 40);
        },
        easing: "linear",
        duration: 2000,
        delay: anime.stagger(10)
        // complete: that.starAnim
        // easing: "easeInOutSine",
        // delay: anime.stagger(300),
        // y: [
        //   {
        //     duration: 2000,
        //     value: "5px"
        //   }
        // ],
        // opacity: [
        //   {
        //     duration: 2500,
        //     value: "0.0"
        //   }
        // ],
        // complete: function(anim) {
        //   that.spinLogo();
        //   that.toggleReplay();
        // }
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
      if (!this.mobile) {
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
      }
    },
    toggleFooter(event) {
      anime({
        targets: [".index-footer"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 500,
            value: event.deltaY < 0 ? 0 : 1
          }
        ]
      });

      // console.log("event");
      // this.showFooter;

      // anime({
      //   targets: [".star g polygon"],
      //   fill: ["#ff3d00", "#ff3d00"],
      //   delay: anime.stagger(400),
      //   easing: "easeOutExpo",
      //   duration: 1400
      // });
    },
    // showFooter() {
    // anime({
    //   targets: ["page .index-footer"],
    //   easing: "easeInOutSine",
    //   opacity: [
    //     {
    //       duration: 1000,
    //       value: 1
    //     }
    //   ]
    // });
    // },
    hideFooter() {
      anime({
        targets: [".index-footer"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 1000,
            value: [1, 0]
          }
        ]
      });
    },
    // showStars() {
    //   anime({
    //     targets: [".star"],
    //     easing: "easeInOutSine",
    //     opacity: [
    //       {
    //         duration: 1000,
    //         value: 1
    //       }
    //     ]
    //   });
    // },
    toggleReplay() {
      anime({
        targets: [".index-replay"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 400,
            value: this.replay ? 0 : 1
          }
        ],
        cursor: "pointer"
      });
      this.replay = !this.replay;
    },
    resetStars() {
      this.toggleReplay();
      let that = this;
      let stars = document.querySelectorAll(".star");
      stars.forEach(s => {
        anime.timeline({ loop: false }).add({
          targets: s,
          easing: "easeInOutSine",
          y: this.getRandomY(),
          x: this.getRandomX(),
          opacity: 0.2,
          duration: 1500
        });
      });
      setTimeout(() => {
        this.rippleStars();
      }, 1500);
    },
    shuffleStars() {}
  },
  created() {},
  mounted() {
    if (localStorage.getItem("wasVisited") === null) {
      setTimeout(() => {
        this.loading = false;
      }, 400);
    } else {
      this.loading = false;
    }
    setTimeout(() => {
      // this.showStars();
      this.riseLogo();
    }, 850);
    setTimeout(() => {
      this.rippleStars();
    }, 200);

    localStorage.setItem("wasVisited", "1");
    this.initLogo();
    window.addEventListener("wheel", this.toggleFooter);
  },
  destroyed() {
    window.removeEventListener("wheel", this.toggleFooter);
  }
};
</script>

<style lang="scss">
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
.index-footer {
  opacity: 0;
}
.index-replay {
  position: absolute;
  bottom: 5%;
  right: 110px;
  color: $lightBlue;
  font-size: 20px;
  font-weight: 600;
  opacity: 0;
  z-index: 1001;
}

.loading-anim {
  z-index: 1000;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: $background;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading-logo-img {
    width: 30%;
    margin: 0 auto;
  }
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
  display: none;
  filter: drop-shadow(10px 10px 50px rgba(0, 0, 0, 0.2));
}

.logo-img {
  min-width: 112px;
  height: 125px;
  opacity: 0;
  margin-right: 20px;
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
    letter-spacing: 1px;
    text-indent: -0.025em;
    font-weight: 600;
    opacity: 0;
  }
  .logo-lower {
    color: $purple;
    font-size: 32px;
    line-height: 1.5;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-family: $bodyFont;
    text-indent: -0.025em;
    font-weight: 600;
    margin-left: 16%;
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
  // background-color: rgb(30 54 119 / 100%);
  // border-radius: 5px;
  z-index: 1;
  justify-content: flex-end;
  margin-right: 5%;
  align-items: center;
  // flex-direction: column;
  display: flex;
  flex-direction: column;
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
  flex-direction: column;
  display: flex;
  color: $lightBlue;
  // padding: 0 10%;
  text-align: left;

  .heading {
    font-size: 70px;
    font-weight: 700;
    width: 100%;
    max-width: 480x;
    line-height: 55px;
    min-width: 400px;
  }
  .subheading {
    width: 100%;
    font-size: 12px;
    font-weight: 400;
    margin-top: 20px;
    font-family: $bodyFont;
    p {
      margin-bottom: 40px;
      font-size: 16px;
      width: 400px;
    }
  }
  .home-btn {
    background: $purple;
    color: $lightBlue;
    text-align: center;
    // border: 3px solid $purple;
    margin: 0 auto;
    margin-top: 40px;
    cursor: pointer;
    border-radius: 4px;
    padding: 15px 55px;
    font-weight: 600;
    font-size: 16px;
    transition: all ease-in-out 150ms;
    z-index: 1;
    &:hover {
      padding: 17px 58px;
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

// @media only screen and (max-width: 1000px) {
//   .logo {
//     width: 200px;
//   }

//   .main-btn {
//     font-size: 10px;
//     padding: 10px 15px;
//   }

//   html,
//   body {
//     overflow-x: hidden;
//   }
//   body {
//     position: relative;
//   }
// }

@media only screen and (max-width: 1450px) {
  .main-left {
    .heading {
      font-size: 34px;
      line-height: 37px;
    }
    .subheading {
      p {
        font-size: 14px;
      }
    }
  }
  .logo {
    .logo-upper {
      font-size: 40px;
    }
    .logo-lower {
      font-size: 22px;
    }
  }

  .device-images {
    .logo-img {
      min-width: 80px;
      height: 89px;
      opacity: 0;
      margin-right: 5px;
    }
  }
}

@media only screen and (max-width: 1130px) {
  .main-left {
    padding: 0;
    margin: 0 auto;
    width: 100%;
    text-align: left;
    .heading {
      font-size: 26px;
      line-height: 27px;
      width: 60%;
      min-width: 187px;
    }
    .subheading {
      p {
        font-size: 12px;
        width: 75%;

        font-weight: 600;
        line-height: 22px;
        min-width: unset;
      }
    }
  }

  .logo {
    min-width: 160px;
    .logo-upper {
      font-size: 24px;
    }
    .logo-lower {
      font-size: 16px;
      // margin-left: 5%;
    }
  }
}
@media only screen and (max-width: 450px) {
  .center-content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    width: 95%;
    margin-top: -40px;
  }

  .loading-anim {
    .loading-logo-img {
      margin-top: -30px;
    }
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
    width: 100%;
    text-align: center;
    .heading {
      font-size: 26px;
      line-height: 27px;
      width: 60%;
      margin: 0px auto;
      min-width: unset;
    }
    .subheading {
      p {
        font-size: 12px;
        width: 75%;
        margin: 0 auto;
        font-weight: 600;
        line-height: 22px;
        min-width: unset;
      }
    }

    .home-btn {
      background: $purple;
      height: 30px;
      color: $lightBlue;
      width: 80%;
      position: absolute;
      bottom: 10%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      // margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      font-size: 16px;
      border-radius: 5px;
      &:hover {
        padding: 30px;
      }
      i {
        font-size: 16px;
        padding-left: 7px;
        color: $lightBlue;
      }
    }
  }

  .device-images {
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding-right: 0;
    .logo-img {
      max-width: 125px;
      margin: 0 auto;
      padding-left: 2px;
    }
  }
  .background-home {
    height: 90%;
    width: 87%;
    top: 11%;
  }
  .logo {
    margin: 0;
    width: 65%;
    display: none;
    .logo-upper {
      font-size: 30px;
      letter-spacing: 1px;
    }
    .logo-lower {
      font-size: 17px;
      letter-spacing: 1px;
      margin-left: 12%;
      margin-top: -5px;
    }
  }

  .background-home {
    left: -16%;
    height: 100%;
    width: 117%;
    top: 0;
  }
  .index-replay {
    position: absolute;
    top: 40px;
    right: 25px;
    color: $lightBlue;
    font-size: 12px;
    z-index: 1001;
  }
}
</style>
