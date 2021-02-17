<template>
  <div class="page" ref="page">
    <div>
      <!-- <Banner /> -->
      <Nav class="banner-nav" />
    </div>
    <div ref="contMain" class="container-main">
      <div id="lineDrawing">
        <svg viewBox="0 0 792 512">
          <g class="lines">
            <path
              class="my-path"
              d="M296.7,240.8l-11.4,92.1h-20.7l4.9-39.2h-33.2l-4.9,39.2h-20.7l11.4-92.1h20.7l-4.8,38.9h33.2l4.8-38.9H296.7z"
            />
            <path
              class="my-path"
              d="M332.2,256.6l-2.7,22.2h26l-2,15.3h-25.9l-2.8,22.8h34.3l-2,15.9h-55l11.4-92.1h54.8l-2,15.9H332.2z"
            />
            <path
              class="my-path"
              d="M423.3,316.4l-2,16.4h-51.6l11.4-92.1h20.6l-9.4,75.6H423.3z"
            />
            <path
              class="my-path"
              d="M485.2,316.4l-2,16.4h-51.6l11.4-92.1h20.6l-9.4,75.6H485.2z"
            />
            <path
              class="my-path"
              d="M580.2,280.9c0,19.5-10,38.7-27.8,47.6c-16.6,8.3-38.7,7.5-51.7-6.9c-13-14.5-12.6-37.5-4.3-54.2
	c8.7-17.5,26.9-28.2,46.4-27.6c10.2,0.3,20.1,4.3,27,11.9C577,259.6,580.2,270.3,580.2,280.9z M559.1,281.4c0-11.3-5-23.5-17.6-25
	c-11.6-1.4-21.5,5.5-26.1,15.9c-4.5,10.2-5.8,24.5-0.8,34.7c5.3,10.6,18.5,13.1,28.6,7.9C555.3,308.6,559.1,293.9,559.1,281.4z"
            />
          </g>
        </svg>
      </div>
      <div v-if="loading" class="loading-anim">
        <div class="loading-img-wrapper">
          <img class="loading-logo-img" src="~static/logo.png" alt="" />
        </div>
      </div>
      <div class="center-content">
        <div class="scroll-div">
          <div :style="{ overflow: 'hidden' }">
            <h4>Scroll</h4>
          </div>
          <div class="trail"></div>
        </div>
        <div class="main-left">
          <div class="heading">
            Your <br />
            <span class="gold"> Creative Ideas <br /> </span>
            <span> Brought To Life</span>
            <div class="lightbulb-wrapper">
              <img class="lightbulb" src="~/static/lightbulb.png" alt="" />
            </div>
          </div>
          <div class="subheading">
            <p>
              Collaborative mobile and web development for small to large scale
              applications
            </p>
            <div class="home-btn home-btn-animated" @click="proceedContact">
              <div class="wrapper">
                <span>Contact</span>
                <i class="fa fa-envelope" aria-hidden="true"> </i>
              </div>
            </div>
          </div>
        </div>
        <div class="main-right">
          <div class="device-images">
            <img
              v-if="!mobile"
              class="logo-img"
              src="~static/logo-full.png"
              alt=""
            />
          </div>
          <img v-if="mobile" class="logo-img" src="~static/logo.png" alt="" />
        </div>
      </div>

      <!-- <div class="background-home"></div> -->
    </div>
    <Footer class="index-footer" />
  </div>
</template>

<script>
import anime from "animejs";
import about from "./about";
import Nav from "../components/Nav";
import _ from "lodash";

export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        { hid: "og:title", property: "og:title", content: this.title },
        { hid: "og:image", property: "og:image", content: this.image },
      ],
    };
  },
  transition: "page",
  data() {
    return {
      title: "Adam Sebesta Development | Home",
      description: "Web and Mobile App Development",
      image: "/meta.png",
      // stars: [...Array(50)],
      loading: true,
      step1: false,
      step2: false,
      scrollCounter: 0,
      touchStart: null,
      touchEnd: null,
      windowScroll: null,
    };
  },
  methods: {
    proceedContact() {
      document.querySelector("#contact").click();
    },
    // randomRadius() {
    //   return Math.random() * 0.7 + 5.6;
    // },
    // getRandomX() {
    //   return Math.floor(Math.random() * Math.floor(this.windowWidth))
    //     .toString()
    //     .trim();
    // },
    // getRandomY() {
    //   return Math.floor(Math.random() * Math.floor(this.windowHeight))
    //     .toString()
    //     .trim();
    // },
    // riseLogo() {
    //   anime({
    //     targets: [".logo-img"],
    //     easing: "easeInOutSine",
    //     opacity: [
    //       {
    //         duration: 2400,
    //         value: ["0", "1"]
    //       }
    //     ]
    //   });
    // },
    // rippleStars() {
    //   let that = this;
    //   anime({
    //     targets: ["#sky .star"],
    //     y: function() {
    //       return anime.random(0, that.windowHeight);
    //     },
    //     x: function() {
    //       return anime.random(0, that.windowWidth);
    //     },
    //     width: function() {
    //       return anime.random(20, 40);
    //     },
    //     height: function() {
    //       return anime.random(20, 40);
    //     },
    //     easing: "linear",
    //     duration: 2000,
    //     delay: anime.stagger(10)
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
    // });
    // },
    // spinLogo() {
    //   anime({
    //     targets: ".logo-img ",
    //     rotate: [
    //       {
    //         duration: 2000,
    //         value: 360
    //       }
    //     ],
    //     easing: "easeOutExpo"
    //   });
    // },
    // initLogo() {
    //   if (!this.mobile) {
    //     anime({
    //       targets: [".rise1"],
    //       easing: "easeInOutSine",
    //       opacity: [
    //         {
    //           duration: 1000,
    //           value: [0, 1]
    //         }
    //       ]
    //     });

    //     var textWrapper1 = document.querySelector(".rise1");
    //     textWrapper1.innerHTML = textWrapper1.textContent.replace(
    //       /\S/g,
    //       "<span class='letter'>$&</span>"
    //     );

    //     anime.timeline({ loop: false }).add({
    //       targets: ".rise1 .letter",
    //       translateY: [100, 0],
    //       translateZ: 0,
    //       opacity: [0, 1],
    //       easing: "easeOutExpo",
    //       duration: 1400,
    //       delay: (el, i) => 1000 + 30 * i
    //     });
    //   }
    // },
    // toggleFooter(event) {
    //   anime({
    //     targets: [".index-footer"],
    //     easing: "easeInOutSine",
    //     opacity: [
    //       {
    //         duration: 500,
    //         value: event.deltaY < 0 ? 0 : 1
    //       }
    //     ]
    //   });

    // console.log("event");
    // this.showFooter;

    // anime({
    //   targets: [".star g polygon"],
    //   fill: ["#ff3d00", "#ff3d00"],
    //   delay: anime.stagger(400),
    //   easing: "easeOutExpo",
    //   duration: 1400
    // });
    // },
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
    // hideFooter() {
    //   anime({
    //     targets: [".index-footer"],
    //     easing: "easeInOutSine",
    //     opacity: [
    //       {
    //         duration: 1000,
    //         value: [1, 0]
    //       }
    //     ]
    //   });
    // }
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
    // toggleReplay() {
    //   anime({
    //     targets: [".index-replay"],
    //     easing: "easeInOutSine",
    //     opacity: [
    //       {
    //         duration: 400,
    //         value: this.replay ? 0 : 1
    //       }
    //     ],
    //     cursor: "pointer"
    //   });
    //   this.replay = !this.replay;
    // },
    // resetStars() {
    //   this.toggleReplay();
    //   let that = this;
    //   let stars = document.querySelectorAll(".star");
    //   stars.forEach(s => {
    //     anime.timeline({ loop: false }).add({
    //       targets: s,
    //       easing: "easeInOutSine",
    //       y: this.getRandomY(),
    //       x: this.getRandomX(),
    //       opacity: 0.2,
    //       duration: 1500
    //     });
    //   });
    //   setTimeout(() => {
    //     this.rippleStars();
    //   }, 1500);
    // },
    translateElementsY(el, val) {
      anime({
        targets: el,
        easing: "easeInOutSine",
        translateY: [
          {
            duration: 1200,
            value: val,
          },
        ],
      });
    },
    translateElementsX(el, val) {
      anime({
        targets: el,
        easing: "easeInOutSine",
        translateX: [
          {
            duration: 1000,
            value: val,
          },
        ],
      });
    },
    scrollAnim(event) {
      // determine direction of scroll
      let dir;
      if (event == "up" || event == "down") {
        dir = event;
      } else {
        dir = event.deltaY > 0 ? "down" : "up";
      }

      this.scrollCounter++;
      if (
        dir == "down" &&
        this.step1 &&
        !this.step2 &&
        this.scrollCounter > 1
      ) {
        if (!this.mobile) {
          this.translateElementsY([".index-footer"], ["100%", "0%"]);
        }
        this.step2 = true;
      }

      if (dir == "down" && !this.step1) {
        this.translateElementsX([".main-right"], ["-55%", "70%"]);
        this.translateElementsY(
          [".main-left .heading, .main-left .subheading"],
          ["350%", "0%"]
        );
        anime({
          targets: [".home-btn .wrapper"],
          translateY: ["150%", "0"],
          duration: 650,
          delay: 500,
          easing: "easeInOutSine",
        });
        anime({
          targets: ".scroll-div",
          left: !this.mobile ? ["8", "0%"] : ["-10%", "-35%"],
          rotate: ["270deg", "270deg"],
          // translateY: ["10%", "-50%"],
          duration: 650,
          easing: "easeInOutSine",
        });
        this.translateElementsX([".loading-anim"], ["50%", "100%"]);
        this.translateElementsX(["#lineDrawing svg"], ["0%", "100%"]);
        anime({
          targets: ".lightbulb",
          translateY: ["100", "0%"],
          delay: 1000,
          duration: 650,
          easing: "easeInOutSine",
        });
        this.step1 = true;
      }
      if (dir == "up" && this.step1 && !this.step2) {
        this.translateElementsX([".main-right"], ["70%", "-55%"]);
        this.translateElementsY(
          [".main-left .heading, .main-left .subheading"],
          ["0%", "350%"]
        );
        this.translateElementsX([".loading-anim"], ["100%", "50%"]);
        anime({
          targets: ".scroll-div",
          left: !this.mobile ? ["0", "8%"] : ["-35%", "-10%"],
          rotate: ["270deg", "270deg"],
          // delay: 400,
          duration: 1000,
          easing: "easeInOutSine",
        });
        anime({
          targets: ".lightbulb",
          translateY: ["0", "100%"],
          duration: 650,
          easing: "easeInOutSine",
        });
        this.translateElementsX(["#lineDrawing svg"], ["100%", "0%"]);
        this.step1 = false;
      }
      if (dir == "up" && this.step1 && this.step2) {
        if (!this.mobile) {
          this.translateElementsY([".index-footer"], ["0%", "100%"]);
        }
        this.step2 = false;
      }
    },
    welcomeAnim() {
      setTimeout(() => {
        anime({
          targets: ".loading-anim",
          translateX: "50%",
          duration: 750,
          easing: "easeInOutSine",
          delay: 200,
        });

        anime({
          targets: ".loading-logo-img",
          translateX: "100%",
          duration: 750,
          easing: "easeInOutSine",
          delay: 0,
        });

        anime({
          targets: ".logo-img",
          translateY: ["150%", "0"],
          duration: 1000,
          easing: "easeInOutSine",
          delay: 400,
        });
        anime({
          targets: ".scroll-div",
          translateY: ["500%", "0"],
          duration: 650,
          rotate: ["270deg", "270deg"],
          easing: "easeInOutSine",
          delay: 1000,
        });
        if (this.mobile)
          document.querySelector("#lineDrawing").style.zIndex = 10;
        anime({
          targets: "#lineDrawing .lines path",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 1000,
          delay: function (el, i) {
            return i * 250;
          },
        });
      }, 1000);
    },
    scrollListenerInit() {
      let that = this;
      if (!this.mobile) {
        // this.windowScroll = function windowScroll() {
        window.addEventListener(
          "wheel",
          _.debounce(this.scrollAnim, 400, {
            leading: true,
            trailing: false,
          })
        );
      }
      // this.windowScroll();
      // window.removeEventListener("wheel", this.windowScroll);
      else {
        setTimeout(() => {
          this.$refs.contMain.addEventListener("touchstart", function (e) {
            this.touchStart = e.changedTouches[0];
          });
          this.$refs.contMain.addEventListener("touchend", function (e) {
            this.touchEnd = e.changedTouches[0];
            // determine direction
            if (this.touchEnd.screenY - this.touchStart.screenY > 0) {
              that.scrollAnim("up");
            } else if (this.touchEnd.screenY - this.touchStart.screenY < 0) {
              that.scrollAnim("down");
            }
          });
        }, 1000);
      }
    },
    removeEventListeners() {
      window.removeEventListener("wheel", this.windowScroll);
      this.$refs.contMain.removeEventListener("touchstart", function (e) {
        this.touchStart = e.changedTouches[0];
      });
      this.$refs.contMain.removeEventListener("touchend", function (e) {
        this.touchEnd = e.changedTouches[0];

        if (this.touchEnd.screenY - this.touchStart.screenY > 0) {
          console.log("scrolling up");
        } else if (this.touchEnd.screenY - this.touchStart.screenY < 0) {
          console.log("scrolling down");
        }
      });
    },
  },
  created() {},
  mounted() {
    // if (localStorage.getItem("wasVisited") === null) {
    this.welcomeAnim();
    this.scrollListenerInit();
    localStorage.setItem("wasVisited", "1");
    // this.initLogo();
  },
  beforeDestroy() {
    this.removeEventListeners();
  },
};
</script>

<style lang="scss">
.page {
}
.container-main {
  // background-color: red;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
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
  transform: translateY(100%);
}
.lightbulb-wrapper {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  transform: translateX(25%) translateY(-310%);
}
.lightbulb {
  position: relative;
  width: 10%;
  transform: translateY(100%);
}

.my-path {
  fill: none;
  stroke: $mainGold;
  stroke-width: 10;
}

#lineDrawing {
  position: absolute;
  overflow: hidden;
  left: 20%;
  top: 29%;
  width: 20%;
}

.loading-anim {
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-left: auto;
  position: absolute;
  background-color: white;
  box-shadow: 20px -13px 30px 0px #010310;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading-img-wrapper {
    overflow: hidden;
    .loading-logo-img {
      width: 30%;
      margin: 0 auto;
    }
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
  overflow: hidden;
  position: absolute;
  left: 51%;
  top: 28%;
  transform: translateX(-55%);
  width: 50%;
  margin: 0 auto;
  // background-color: rgb(30 54 119 / 100%);
  // border-radius: 5px;
  z-index: 1;
  justify-content: center;
  align-items: center;
  margin-left: 9.5%;
  // flex-direction: column;
  display: flex;
  flex-direction: column;
  .logo-img {
    min-width: 112px;
    width: 100%;
    transform: translateY(150%);
    // margin-right: 20px;
  }
}

.center-content {
  display: flex;
  width: 100%;
}
.main-left {
  position: absolute;
  top: 25%;
  overflow: hidden;
  width: 815px;
  margin: 0 auto;
  padding: 15px;
  margin-left: 10%;
  z-index: 1;
  justify-content: center;
  flex-direction: column;
  display: flex;
  color: $grey;
  // padding: 0 10%;
  text-align: left;

  .heading {
    font-size: 120px;
    transform: translateY(350%);
    font-weight: 700;
    width: 150%;
    line-height: 95px;
    z-index: 1;

    // min-width: 400px;
  }
  .subheading {
    transform: translateY(350%);
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    margin-top: 20px;
    font-family: $bodyFont;
    p {
      padding-bottom: 40px;
      font-size: 18px;
      width: 500px;
    }
  }
  .home-btn {
    background: transparent;
    color: $grey;
    overflow: hidden;
    text-align: center;
    border: 3px solid $grey;
    width: 30%;
    // margin-top: 40px;
    cursor: pointer;
    border-radius: 4px;
    padding: 15px 55px;
    font-weight: 600;
    font-family: $headingFont;
    font-size: 16px;
    transition: all ease-in-out 150ms;
    z-index: 1;
    &:hover {
      background-color: $mainBlue;
      color: #fff;
      border: 3px solid $mainBlue;
    }
    .wrapper {
      // display: flex;
      transform: translateY(150%);
    }
  }
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
      font-size: 75px;
      line-height: 65px;
    }
    .subheading {
      p {
        font-size: 14px;
      }
    }
  }

  #lineDrawing {
    left: 20%;
    top: 28.5%;
    z-index: -1;
  }
  .lightbulb-wrapper {
    transform: translateX(-21%) translateY(-278%);
    .lightbulb {
      width: 8%;
    }
  }
}

@media only screen and (max-width: 1130px) {
  .main-left {
    width: 100%;
    text-align: left;
    top: 34%;
    .heading {
      font-size: 46px;
      line-height: 40px;
      width: 60%;
      min-width: 187px;
    }
    .subheading {
      p {
        font-size: 12px;
        // width: 75%;

        font-weight: 600;
        line-height: 22px;
        min-width: unset;
      }
    }
  }
  .btn-home {
    width: 20%;
  }

  .lightbulb-wrapper {
    transform: translateX(-314px) translateY(-260%);
    min-width: 640px;
    .lightbulb {
      width: 6%;
    }
  }
}
@media only screen and (max-width: 450px) {
  .center-content {
    display: flex;
    // flex-direction: column-reverse;
    // justify-content: center;
    width: 95%;
    margin-top: -40px;
  }
  #lineDrawing {
    left: 30%;
    top: 64%;
    // z-index: 10;
    width: 40%;
  }

  .scroll-div {
    left: -10%;
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
    padding: 50px 0;
    margin: 0 auto;
    width: 100%;
    text-align: left;
    left: 0%;
    top: 13%;
    .heading {
      font-size: 74px;
      line-height: 57px;
      width: 90%;
      margin: 0px auto;
      min-width: unset;
      font-weight: 600;
    }
    .subheading {
      p {
        font-size: 14px;
        width: 75%;
        margin: 0 auto;
        font-weight: 600;
        line-height: 22px;
        min-width: unset;
        text-align: center;
      }
    }
    .lightbulb-wrapper {
      transform: translateX(-54%) translateY(-647%);
      .lightbulb {
        width: 5%;
      }
    }

    .home-btn {
      background: $mainBlue;
      height: 30px;
      color: #fff;
      width: 90%;

      margin: 0 auto;
      // margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
      font-size: 16px;
      border-radius: 5px;
      border-color: $mainBlue;
      &:hover {
        padding: 30px;
      }
      i {
        font-size: 16px;
        padding-left: 7px;
        color: #fff;
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
      margin: 0 auto;
      padding-left: 2px;
    }
  }
  .background-home {
    height: 90%;
    width: 87%;
    top: 11%;
  }
}
</style>
