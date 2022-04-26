<template>
  <div id="about" class="page about">
    <div ref="about" class="container-main-about">
      <!-- <div class="scroll-div-about">
        <div :style="{ overflow: 'hidden' }">
          <h4>Scroll</h4>
        </div>
        <div class="trail"></div>
      </div> -->
      <div class="main-wrapper">
        <div class="about-left">
          <div class="about">
            <div class="about-text about-block">
              <div class="about-headline-wrapper overflow">
                <h5 v-if="!mobile" class="about-headline-main appear appear0">
                  Adam <br />
                  Sebesta
                </h5>
                <p v-if="mobile" class="about-headline-main appear appear0">
                  Adam Sebesta
                </p>
              </div>
              <div class="about-desc-wrapper overflow">
                <p class="about-desc appear appear0">
                  <span>
                    Hello, thank you for your interest! <br />
                    I am a Canadian + Estonian Full Stack Developer currently
                    living in Berlin, Germany. Avid about the cloud and creating
                    elegant solutions, a strong proficiency in Microsoft Azure,
                    Shopify, and Nuxt.js, allows me to bring your creative ideas
                    to life. I look forward to working with you on your next
                    project.</span
                  >
                </p>
              </div>
            </div>
            <div class="about-services about-block">
              <div class="about-headline-wrapper overflow">
                <h5 class="about-headline appear appear1">Services</h5>
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
                <h5 class="about-headline appear2">Skills</h5>
              </div>
              <div class="about-skills-icons overflow">
                <img
                  v-for="i in icons"
                  :key="i[0]"
                  class="about-skills-icon appear appear2"
                  :src="require('static/icons/' + i[0])"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="about-right">
          <!-- <div class="photo-background bg0">
            <img
              class="headshot"
              src="~static/headshot.png"
              alt=""
              rel="preload"
            />
          </div>
          <div
            :class="
              'photo-background bg1' + (scrollCount != 0 ? ' scrolled' : '')
            "
            :style="{ transform: calcTransform(1) }"
          ></div>
          <div
            :class="
              'photo-background bg2' + (scrollCount != 0 ? ' scrolled' : '')
            "
            :style="{ transform: calcTransform(2) }"
          ></div> -->
          <!-- <div
            :class="'photo-background bg3' + (scrollY != 0 ? ' scrolled' : '')"
            :style="{ transform: calcTransform(3) }"
          ></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  transition: "page",
  props: { activePage: String },
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
      scrollY: 0,
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
        ["azure-dev.png", "Azure Developer Associate"],
        ["azure-fun.png", "Azure Fundamentals"],
        ["css.png", "CSS 3"],
        ["postgres.png", "PostgreSQL"],
        ["nuxt.png", "Nuxt.js"],
        ["vue.png", "Vue.js"],
        ["nativescript-vue.png", "Nativescript-Vue"],
        ["shopify.png", "Shopify"],
        ["gcp.png", "Google Cloud"],
        ["firebase.png", "Firebase"],
        ["js.png", "Javascript"],
        ["html.png", "HTML 5"],
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
    handleScroll(e) {
      let dir;

      if (event.deltaY < 0) {
        dir = "up";
      } else if (event.deltaY > 0) {
        dir = "down";
      }

      if (dir == "up" && this.scrollCount == 35) {
      }
      if (dir == "up" && this.scrollCount < 35) {
        this.scrollCount -= 1;
      }
      if (dir == "down" && this.scrollCount < 35) {
        this.scrollCount += 1;
      }

      // this.scrollCount == 0 ||
      if (this.scrollCount == 35) {
        this.$emit("enableScroll");
        console.log("enable");
        return;
      }
    },
    calcTransform(i) {
      let percent = this.scrollCount / (2 / i) + i * 1;
      return `translate(-${percent}%,-${percent}%)`;
    },
    calcTextTransform() {
      // let percent = this.scrollCount / (4 / i) + i * 2;
      return `translate(0,-${this.scrollCount * 2}%)`;
    },
  },
  mounted() {},
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
.about {
  height: unset !important;
}
.container-main-about {
  margin: 0 auto;
  min-height: 100vh;
  scroll-snap-stop: always;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main-wrapper {
  display: flex;
  display: flex;
  width: 80%;
  height: 100%;
  justify-content: center;
  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */

  &:before {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-image: url("~/static/about-background.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .about-left {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    transition: transform 300ms ease-in-out;
    .about-block {
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .about {
      font-weight: 600;
      height: 50%;
      width: 70%;
      // margin-left: 40px;
      text-align: left;
      color: $grey;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .about-desc-wrapper {
        .about-desc {
          // transform: translateY(100%);
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
        font-weight: 700;
        color: black;
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
          list-style: circle;
          &::before {
          }
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
        font-weight: 700;
        color: black;
        .about-skills-icons {
          display: flex;
          max-width: 250px;
          min-width: 230px;
          flex-wrap: wrap;
        }
        .about-skills-icon {
          // width: 20%;
          // height: 20%;
          max-height: 45px;
          max-width: 45px;
          filter: grayscale(70%);
          margin: 5px;
          &:hover {
            filter: unset;
          }
        }
      }
    }
    .about-headline-wrapper {
      font-size: 80px;
      .about-headline-main {
        // transform: translateY(100%);
        // margin-bottom: 20px;

        font-weight: 700;
        color: black;
        margin: 10px 0;
        display: flex;
        line-height: 100%;
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
}

@media only screen and (max-width: 1200px) {
  .main-wrapper {
    .about-left {
      .about {
        .about-desc-wrapper {
          .about-desc {
            font-size: 14px;
            width: 90%;
            margin: 0 auto;
          }
        }
        .about-services {
          ul {
            display: block;
            margin-left: -10px;
          }

          ul li {
            display: block;
            position: relative;
          }

          ul li:not(:last-child) {
            margin-bottom: 10px;
          }

          ul li:before {
            content: "";
            position: absolute;
            top: 1.3em;
            left: -20px;
            margin-top: -0.9em;
            background-color: #0cbaba;
            background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);

            height: 6px;
            width: 6px;
            border-radius: 50%;
          }
          ul li {
            font-size: 14px !important;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 420px) {
  .container-main-about {
    align-items: unset;
    min-height: unset;
    padding-top: 1.5rem;
    .main-wrapper {
      justify-content: flex-start;
      flex-direction: column-reverse;
      margin: 0 auto;
      top: 0;
      width: 95%;
      align-items: center;
      padding: 0 5%;
      height: 100%;
      .about-left {
        width: 100%;
        .about {
          width: 100%;
          display: flex;
          flex-direction: column;
          .about-block {
            height: unset;

            h5 {
              font-size: 28px;
            }
          }
          .about-headline-main {
            font-size: 30px;
            font-weight: 700;
            line-height: 33px;
          }
          .about-text {
            color: black;
            height: unset;
            display: block;
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

            ul {
              list-style: square;
              li {
                padding-left: 2px;
                font-size: 14px !important;
                font-family: $bodyFont;
                color: black;
                .about-services-list-item {
                  font-size: 6px;
                  vertical-align: middle;
                }
              }
            }
          }

          /* ADAM SEBESTA */

          .about-skills {
            .about-skills-icons {
              display: flex;
              max-width: 200px;
              min-width: 158px;
              flex-wrap: wrap;
            }
            .about-skills-icon {
              // width: 20%;
              // height: 20%;
              max-height: 35px;
              max-width: 35px;
              filter: grayscale(0%);
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
            color: black;
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
        display: none;
        width: 80%;
        height: 30vh;
        margin-left: 34%;
        margin-top: 28%;
        .photo-background {
          width: 55%;
          height: 60%;
          position: absolute;
          border-radius: 5px;
          min-height: 180px;
          opacity: 0.8;
        }
        .headshot {
          width: 80%;
          margin: 0 auto;
          padding: 10px;
          max-width: 280px;
          height: 100%;
          top: 50%;
          z-index: 1000000;

          object-fit: cover;
          border-radius: 15px;
        }
        .bg1 {
          background-color: rgb(126 126 126 / 29%);
          z-index: 0;
          box-shadow: -3px -2px 16px -15px #010310;
          transform: translate(-2%, -2%);
        }
        .bg2 {
          // background-color: rgba($color: #cbd4db, $alpha: 0.2);
          background-color: rgb(164 164 164 / 35%);
          transform: translate(-6%, -6%);
          box-shadow: -3px -2px 16px -15px #010310;
          z-index: -1;
        }
        .bg3 {
          // background-color: rgba($color: #3fc1d9, $alpha: 0.1);
          // background-color: rgb(13 16 39 / 91%);
          background-color: rgb(207 207 207 / 20%);
          box-shadow: -3px -2px 16px -15px #010310;
          transform: translate(-12%, -12%);
          z-index: -2;
        }
      }
    }
  }
}
</style>
