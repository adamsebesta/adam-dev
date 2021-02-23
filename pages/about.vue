<template>
  <div class="page">
    <div>
      <!-- <Banner /> -->
      <Nav class="banner-nav" />
    </div>
    <div ref="contMain" class="container-main-about">
      <div class="scroll-div-about">
        <div :style="{ overflow: 'hidden' }">
          <h4>Scroll</h4>
        </div>
        <div class="trail"></div>
      </div>
      <div class="main-wrapper">
        <div class="about-left">
          <div class="about">
            <div class="about-text about-block">
              <div class="about-headline-wrapper overflow">
                <p v-if="!mobile" class="about-headline-main appear appear0">
                  Adam <br />
                  Sebesta
                </p>
                <p v-if="mobile" class="about-headline-main appear appear0">
                  Adam Sebesta
                </p>
              </div>
              <div class="about-desc-wrapper overflow">
                <p class="about-desc appear appear0">
                  <span>
                    I am a Canadian / Estonian Full Stack Developer currently
                    living in Berlin. Avid about the cloud, and creating elegant
                    solutions, my aim is to bring your creative ideas to life. I
                    look forward to working with you on your next project.</span
                  >
                </p>
              </div>
            </div>
            <div class="about-services about-block">
              <div class="about-headline-wrapper overflow">
                <p class="about-headline appear appear1">Services</p>
              </div>
              <div class="about-services-wrapper overflow">
                <ul class="about-services appear appear1">
                  <li v-for="s in services" :key="s">
                    <i
                      class="fa fa-square about-services-list-item"
                      aria-hidden="true"
                    ></i>
                    {{ s }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="about-skills about-block">
              <div class="about-headline-wrapper overflow">
                <p class="about-headline appear2">Skills</p>
              </div>
              <div class="about-skills-icons overflow">
                <img
                  v-for="i in icons"
                  :key="i[0]"
                  class="about-skills-icon appear appear2"
                  v-tooltip="i[1]"
                  :src="require('static/icons/' + i[0])"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="about-right">
          <div
            class="photo-background bg1"
            :style="bg1 ? { transform: 'translate(100px 100px' } : ''"
          >
            <img
              class="headshot"
              src="~static/headshot.png"
              alt=""
              rel="preload"
            />
          </div>
          <div
            class="photo-background bg2"
            :style="bg2 ? { transform: 'translate(30px, 30px)' } : ''"
          ></div>
          <div
            class="photo-background bg3"
            :style="bg3 ? { transform: 'translate(20px 20px' } : ''"
          ></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import anime from "animejs";
import Footer from "../components/Footer.vue";
import _ from "lodash";

export default {
  transition: "page",
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
  data() {
    return {
      background: null,
      title: "Adam Sebesta Development | About",
      description: "Who I am",
      image: "~/static/meta.png",
      formValues: {},
      logo: false,
      sent: false,
      bg1: false,
      bg2: false,
      bg3: false,
      icons: [
        ["vue.png", "Vue.js"],
        ["nativescript-vue.png", "Nativescript-Vue"],
        ["js.png", "Javascript"],
        ["ruby.png", "Ruby"],
        ["azure-dev.png", "Azure Developer Associate"],
        ["azure-fun.png", "Azure Fundamentals"],
        ["firebase.png", "Firebase"],
        ["rails.png", "Rails"],
      ],
      services: [
        "Web and Mobile Builds",
        "Shopify Implementations",
        "Architecture Consultation",
        "Live App Maintenance",
        "Refactoring",
        "Azure Deployment",
        "Tutoring",
      ],
      scrollCount: 0,
    };
  },
  computed: {},
  methods: {
    moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },
    scrollInfo(event) {
      let that = this;
      // console.log(event);
      let dir;
      if (event == "up" || event == "down") {
        dir = event;
      } else {
        dir = event.deltaY > 0 ? "down" : "up";
      }
      // console.log(this.scrollCount, this.calculateScrollValue(dir));
      anime({
        targets: [".about"],
        easing: "easeInOutExpo",
        translateY: [
          {
            duration: 1500,
            value: function () {
              return that.calculateScrollValue(dir);
            },
          },
        ],
      });
      if (dir == "down" && this.scrollCount < 2) {
        this.scrollCount++;
        anime({
          targets: [`.appear${this.scrollCount}`],
          easing: "easeInOutExpo",
          translateY: [
            {
              duration: 1800,
              value: ["-210%", "0%"],
            },
          ],
        });
        anime({
          targets: [`.appear${this.scrollCount - 1}`],
          easing: "easeInOutExpo",
          translateY: [
            {
              duration: 1800,
              value: ["0%", "210%"],
            },
          ],
        });
      }
      if (dir == "up" && this.scrollCount > 0) {
        this.scrollCount--;
        anime({
          targets: [`.appear${this.scrollCount}`],
          easing: "easeInOutExpo",
          translateY: [
            {
              duration: 1800,
              value: ["210%", "0%"],
            },
          ],
        });
        anime({
          targets: [`.appear${this.scrollCount + 1}`],
          easing: "easeInOutExpo",
          translateY: [
            {
              duration: 1800,
              value: ["0%", "-210%"],
            },
          ],
        });
      }
    },
    calculateScrollValue(dir) {
      let amount = this.mobile ? 36.1 : 34;
      let current = amount * this.scrollCount;
      if (this.scrollCount < 2 && dir == "down") {
        return [`'-${current}%'`, `-${current + amount}%`];
      }
      if (this.scrollCount > 0 && dir == "up") {
        return [`-${current}%`, `-${current - amount}%`];
      }
    },

    movePhotoBackgrounds() {
      let that = this;

      anime.timeline({ loop: false }).add({
        targets: [".bg2", ".bg3"],
        easing: "easeInOutSine",
        translateX: [
          {
            duration: 1200,
            value: function (el) {
              return that.calcuateTranslate(el, "X");
            },
          },
        ],
        translateY: [
          {
            duration: 1200,
            value: function (el) {
              return that.calcuateTranslate(el, "Y");
            },
          },
        ],
        delay: 1000,
      });
    },
    calcuateTranslate(el, axis) {
      if (axis == "Y") {
        if (el.classList.contains("bg2")) {
          return "-15%";
        } else {
          return "-30%";
        }
      } else {
        if (el.classList.contains("bg2")) {
          return "-30%";
        } else {
          return "-60%";
        }
      }
    },
    aboutAppear() {
      let that = this;
      anime
        .timeline({ loop: false })

        .add({
          targets: [".about"],
          easing: "easeInOutSine",
          width: [
            {
              duration: 600,
              value: "100%",
            },
          ],
        })
        .add({
          targets: [".about", ".about-right", ".headshot", ".bg1"],
          easing: "easeInOutSine",
          opacity: 1,
        });
    },

    scrollListenerInit() {
      let that = this;
      if (!this.mobile) {
        window.addEventListener(
          "wheel",
          _.debounce(this.scrollInfo, 750, {
            leading: true,
            trailing: false,
          })
        );
      } else {
        setTimeout(() => {
          this.$refs.contMain.addEventListener("touchstart", function (e) {
            this.touchStart = e.changedTouches[0];
          });
          this.$refs.contMain.addEventListener("touchend", function (e) {
            this.touchEnd = e.changedTouches[0];
            // determine direction
            if (this.touchEnd.screenY - this.touchStart.screenY > 0) {
              that.scrollInfo("up");
            } else if (this.touchEnd.screenY - this.touchStart.screenY < 0) {
              that.scrollInfo("down");
            }
          });
        }, 1000);
      }
    },
  },
  mounted() {
    this.aboutAppear();
    this.movePhotoBackgrounds();
    this.scrollListenerInit();
    // this.scrollInfo();
    anime({
      targets: [".about-headline-main", ".about-desc"],
      easing: "easeInOutSine",
      translateY: [
        {
          duration: 750,
          value: ["100%", "0%"],
        },
      ],
      delay: 750,
    });
    anime({
      targets: [".scroll-div-about"],
      easing: "easeInOutSine",
      bottom: [
        {
          duration: 750,
          value: "27%",
        },
      ],
      delay: 750,
    });

    // anime({
    //   targets: [".about-desc"],
    //   easing: "easeInOutSine",
    //   translateY: [
    //     {
    //       duration: 750,
    //       value: ["100%", "0%"],
    //     },
    //   ],
    //   delay: 750,
    // });
  },
};
</script>

<style lang="scss" scoped>
.container-main-about {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
}
.appear {
  transform: translateY(-210%);
}
.main-wrapper {
  display: flex;
  margin: 6% 0 2% 0;
  display: flex;
  width: 80%;
  justify-content: center;
  .about-left {
    width: 100%;
    overflow: hidden;
    .about-block {
      height: 50vh;
      margin-top: 34%;
    }
    .about {
      font-weight: 600;
      opacity: 0;
      height: 100%;
      width: 0%;
      margin-top: -15%;
      // margin-left: 40px;
      text-align: left;
      color: $grey;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .about-desc-wrapper {
        overflow: hidden;
        .about-desc {
          transform: translateY(100%);
          width: 440px;
          margin-bottom: 10px;
          font-weight: 400;
          font-family: $bodyFont;
          span {
            // background-color: #82ab71;
            padding: 0px;
          }
          font-size: 20px;

          text-align: left;
        }
      }

      .about-services {
        font-size: 105px;
        font-weight: 700;
        color: $mainGold;
        margin-bottom: 10px;
        width: 450px;
        .about-headline-wrapper {
          margin-top: -4%;
        }

        ul li {
          padding-left: 2px;
          font-size: 20px !important;
          font-family: $bodyFont;
          font-weight: 400;
          color: $grey;
          .about-services-list-item {
            font-size: 8px;
            vertical-align: middle;
            color: $mainBlue;
            margin-right: 3px;
          }
        }
      }

      /* ADAM SEBESTA */

      .about-skills {
        margin-bottom: 10px;
        font-size: 105px;
        font-weight: 700;
        color: $mainGold;
        .about-skills-icons {
          display: flex;
          max-width: 355px;
          min-width: 258px;
          flex-wrap: wrap;
        }
        .about-skills-icon {
          // width: 20%;
          // height: 20%;
          max-height: 65px;
          max-width: 65px;
          filter: grayscale(100%);
          margin: 5px;
          &:hover {
            filter: unset;
          }
        }
      }
    }
    .about-headline-wrapper {
      overflow: hidden;
      .about-headline-main {
        transform: translateY(100%);
        // margin-bottom: 20px;
        font-size: 105px;
        font-weight: 700;
        color: $mainGold;
        margin: 10px 0;
        display: flex;
        line-height: 101px;
        width: 101%;
        align-items: center;
        // text-shadow: -1px -1px 1px rgba(153, 177, 255, 0.536);
        // &:after {
        //   content: "";
        //   display: block;
        //   position: relative;
        //   width: 200px;
        //   height: 1px;
        //   margin-left: 20px;
        //   background-color: rgba($color: $mainBlue, $alpha: 0.3);
        // }
      }
    }
  }
  .about-right {
    opacity: 0;
    width: 49%;
    height: 111vh;
    margin-left: auto;
    position: relative;
    justify-content: center;
    transform: translateX(-9%);
    display: flex;
    align-items: center;
    margin-top: -45px;
    // margin-top: 5%;
    .photo-background {
      width: 100%;
      max-width: 415px;
      height: 50%;
      position: absolute;
      border-radius: 5px;
      min-height: 355px;
    }
    .bg1 {
      // background-color: rgba($color: #e9eeff, $alpha: 0.25);
      // background-color: rgb(92 99 125 / 10%);
      display: flex;
      align-items: center;
      background-color: rgb(30 41 78 / 10%);

      z-index: 0;
      opacity: 0;
      box-shadow: 0 10px 30px -15px #010310;
      transform: translate(-2%, -2%);
      .headshot {
        width: 90%;
        margin: 0 auto;
        height: 90%;
        padding: 10px;
        max-width: 280px;
        // height: 50%;
        bottom: 0%;
        z-index: 1000000;
        opacity: 0;
        object-fit: cover;
        border-radius: 15px;
      }
    }
    .bg2 {
      // background-color: rgba($color: #cbd4db, $alpha: 0.2);
      background-color: rgb(30 54 119 / 15%);
      transform: translate(-6%, -6%);
      box-shadow: 0 10px 30px -15px #010310;
      z-index: -1;
    }
    .bg3 {
      // background-color: rgba($color: #3fc1d9, $alpha: 0.1);
      // background-color: rgb(13 16 39 / 91%);
      background-color: rgba($color: $mainBlue, $alpha: 0.1);
      box-shadow: 0 10px 30px -15px #010310;
      transform: translate(-12%, -12%);
      z-index: -2;
    }
  }
}
.fa.square::before {
  vertical-align: super;
  margin-right: 2px;
}

#about-background {
  opacity: 0.1;
  position: absolute;
  z-index: -2;
}

.scroll-div-about {
  position: fixed;
  left: 3%;
  bottom: 8%;

  z-index: 1;
  transform: translateY(500%) rotate(270deg);
  overflow: hidden;
  width: 200px;
  cursor: pointer;
  h4 {
    padding: 3px 0;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 1px;
    color: $lightBlue;
    display: inline-block;
    vertical-align: middle;
  }
  .trail {
    width: 100px;
    height: 1px;
    opacity: 0.6;
    background-color: rgb(187, 187, 187);
    vertical-align: middle;
    transform: translate(-25%, -15px);
    // transform-origin: 100% 50% 0px;
    // transform: matrix(1, 0, 0, 1, 0, 0);
  }
}

@media only screen and (max-width: 1200px) {
  .main-wrapper {
    .about-left {
      .about {
        margin-top: 0;
        .about-desc-wrapper {
          .about-desc {
            font-size: 14px;
            width: 90%;
            margin: 0 auto;
          }
        }
        .about-services {
          ul li {
            font-size: 14px !important;
          }
        }
      }
    }
    .about-right {
      display: none;
    }
  }
}
@media only screen and (max-width: 420px) {
  .main-wrapper {
    justify-content: flex-start;
    flex-direction: column-reverse;
    margin: 0 auto;
    top: 0;
    width: 95%;
    align-items: center;
    padding: 50px 20px;
    .about-left {
      width: 100%;
      .about {
        width: 100%;
        .about-headline-main {
          font-size: 30px;
          font-weight: 700;
          line-height: 33px;
        }
        .about-text {
          margin-top: 20px;
        }
        .about-desc-wrapper {
          .about-desc {
            width: 100%;
            margin-bottom: 10px;
            span {
              // background-color: #82ab71;
              padding: 0px;
            }
            font-size: 14px;

            text-align: left;
          }
        }
        .about-services {
          margin-bottom: 10px;
          width: 300px;
          .about-headline-wrapper {
            margin-top: 0;
          }

          ul li {
            padding-left: 2px;
            font-size: 14px !important;
            font-family: $bodyFont;
            .about-services-list-item {
              font-size: 12px;
              vertical-align: middle;
            }
          }
        }

        /* ADAM SEBESTA */

        .about-skills {
          margin-bottom: 10px;
          .about-skills-icons {
            display: flex;
            max-width: 270px;
            min-width: 158px;
            flex-wrap: wrap;
          }
          .about-skills-icon {
            // width: 20%;
            // height: 20%;
            max-height: 45px;
            max-width: 45px;
            filter: grayscale(100%);
            margin: 5px;
            &:hover {
              filter: unset;
            }
          }
        }

        .about-headline {
          margin-bottom: 20px;
          font-size: 30px;
          font-weight: 700;
          width: 100%;
          color: $mainGold;
          margin: 10px 0;
          display: flex;
          align-items: center;
          // text-shadow: -1px -1px 1px rgba(153, 177, 255, 0.536);
          // &:after {
          //   content: "";
          //   display: block;
          //   position: relative;
          //   width: 100px;
          //   height: 1px;
          //   margin-left: 20px;
          //   background-color: rgba($color: $grey, $alpha: 0.1);
          // }
        }
      }
    }
    .about-right {
      display: flex;
      width: 80%;
      height: 30vh;
      margin-left: 28%;
      margin-top: 28%;
      .photo-background {
        width: 55%;
        height: 40%;
        position: absolute;
        border-radius: 5px;
        min-height: 180px;
      }
      .bg1 {
        // background-color: rgba($color: #e9eeff, $alpha: 0.25);
        // background-color: rgb(92 99 125 / 10%);

        background-color: rgb(30 41 78 / 29%);

        z-index: 0;
        opacity: 0;
        box-shadow: 0 10px 30px -15px #010310;
        // transform: translate(-2%, -2%);
        .headshot {
          width: 100%;
          margin: 0 auto;
          padding: 10px;
          max-width: 280px;
          height: 100%;
          top: 50%;
          z-index: 1000000;
          opacity: 0;
          object-fit: cover;
          border-radius: 15px;
        }
      }
      .bg2 {
        // background-color: rgba($color: #cbd4db, $alpha: 0.2);
        background-color: rgb(30 54 119 / 35%);
        transform: translate(-6%, -6%);
        box-shadow: 0 10px 30px -15px #010310;
        z-index: -1;
      }
      .bg3 {
        // background-color: rgba($color: #3fc1d9, $alpha: 0.1);
        // background-color: rgb(13 16 39 / 91%);
        background-color: rgba($color: $mainBlue, $alpha: 0.2);
        box-shadow: 0 10px 30px -15px #010310;
        transform: translate(-12%, -12%);
        z-index: -2;
      }
    }
  }
  .scroll-div-about {
    left: 22%;
    bottom: 10%;
  }
}
</style>
