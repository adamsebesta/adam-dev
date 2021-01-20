<template>
  <div class="page">
    <div>
      <Banner />
      <Nav class="banner-nav" />
    </div>

    <div class="container-main-about">
      <!-- <svg
        version="1.1"
        id="about-background"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="160vw"
        height="160vh"
        x="-400"
        y="20"
        viewBox="0 0 58 58"
        xml:space="preserve"
      >
        <g>
          <polygon
            style="fill:#434C6D;"
            points="29,58 3,45 3,13 29,26 "
            fill-opacity="30%"
          />
          />
          <polygon
            :style="{ fill: '#556080' }"
            points="29,58 55,45 55,13 29,26"
            fill-opacity="30%"
          />
          <polygon
            style="fill:#7383BF;"
            points="3,13 28,0 55,13 29,26"
            fill-opacity="30%"
          />
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
      </svg> -->

      <div class="main-wrapper">
        <div class="about-left">
          <div class="about">
            <div class="about-text">
              <p class="about-headline">Adam Sebesta</p>
              <p class="about-desc main-depth">
                <span>
                  I am a Canadian / Estonian Full Stack Developer currently
                  living in Berlin. Avid about the cloud, and creating elegant
                  solutions, my aim is to bring your creative ideas to life. I
                  look forward to working with you on your next project.</span
                >
              </p>
            </div>
            <div class="about-services">
              <p class="about-headline">Services</p>
              <ul class="main-depth">
                <li v-for="s in services" :key="s">
                  <i
                    class="fa fa-square about-services-list-item"
                    aria-hidden="true"
                  ></i>
                  {{ s }}
                </li>
              </ul>
            </div>
            <div class="about-skills">
              <div><p class="about-headline">Skills</p></div>
              <div class="about-skills-icons main-depth">
                <img
                  v-for="i in icons"
                  :key="i[0]"
                  class="about-skills-icon"
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
      <div class="background-center"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import anime from "animejs";
import Footer from "../components/Footer.vue";

export default {
  transition: "page",
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
        ["rails.png", "Rails"]
      ],
      services: [
        "Web and Mobile Builds",
        "Architecture Consultation",
        "Live App Maintenance",
        "Existing App Refactoring"
      ]
    };
  },
  computed: {},
  methods: {
    moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },

    moveBackground() {
      anime.timeline({ loop: true }).add({
        targets: ["#about-background"],
        easing: "linear",
        rotate: [
          {
            duration: 150000,
            value: 360
          }
        ]
      });
    },
    movePhotoBackgrounds() {
      let that = this;

      anime.timeline({ loop: false }).add({
        targets: [".bg2", ".bg3"],
        easing: "easeInOutSine",
        translateX: [
          {
            duration: 1200,
            value: function(el) {
              return that.calcuateTranslate(el, "X");
            }
          }
        ],
        translateY: [
          {
            duration: 1200,
            value: function(el) {
              return that.calcuateTranslate(el, "Y");
            }
          }
        ],
        delay: 1000
      });
    },
    calcuateTranslate(el, axis) {
      if (axis == "Y") {
        if (el.classList.contains("bg2")) {
          return "-10%";
        } else {
          return "-20%";
        }
      } else {
        if (el.classList.contains("bg2")) {
          return "-20%";
        } else {
          return "-40%";
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
              value: "100%"
            }
          ]
        })
        .add({
          targets: [".about", ".about-right", ".headshot", ".bg1"],
          easing: "easeInOutSine",
          opacity: 1
        });
    }
  },
  mounted() {
    this.moveBackground();
    this.aboutAppear();
    this.movePhotoBackgrounds();
  }
};
</script>

<style lang="scss">
.container-main-about {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.main-wrapper {
  display: flex;
  margin: 6% 0 2% 0;
  display: flex;
  width: 70%;
  justify-content: center;
  .about-left {
    width: 100%;
    .about {
      font-weight: 600;
      opacity: 0;
      height: 100%;
      width: 0%;
      // margin-left: 40px;
      text-align: left;
      color: $lightBlue;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .about-text {
        margin-top: 20px;
      }
      .about-desc {
        width: 575px;
        margin-bottom: 10px;
        font-weight: 400;
        font-family: $bodyFont;
        span {
          // background-color: #82ab71;
          padding: 0px;
        }
        font-size: 16px;

        text-align: left;
      }
      .about-services {
        margin-bottom: 10px;
        width: 450px;

        ul li {
          padding-left: 2px;
          font-size: 16px !important;
          font-family: $bodyFont;
          font-weight: 400;
          .about-services-list-item {
            font-size: 8px;
            vertical-align: middle;
            color: $purple;
            margin-right: 3px;
          }
        }
      }

      /* ADAM SEBESTA */

      .about-skills {
        margin-bottom: 10px;
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
    .about-headline {
      // margin-bottom: 20px;
      font-size: 32px;
      font-weight: 700;
      color: $lightBlue;
      margin: 10px 0;
      display: flex;
      align-items: center;
      // text-shadow: -1px -1px 1px rgba(153, 177, 255, 0.536);
      &:after {
        content: "";
        display: block;
        position: relative;
        width: 200px;
        height: 1px;
        margin-left: 20px;
        background-color: rgba($color: $purple, $alpha: 0.3);
      }
    }
  }
  .about-right {
    opacity: 0;
    width: 40%;
    position: relative;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 5%;
    .photo-background {
      width: 100%;
      height: 60%;
      position: absolute;
      border-radius: 5px;
      min-height: 355px;
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
      background-color: rgba($color: $purple, $alpha: 0.2);
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

@media only screen and (max-width: 1200px) {
  .main-wrapper {
    .about-left {
      .about {
        .about-desc {
          font-size: 14px;
          width: 420px;
        }
        .about-services {
          ul li {
            font-size: 14px !important;
          }
        }
        .about-headline {
          font-size: 30px;
          font-weight: 700;
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
        .about-text {
          margin-top: 10px;
        }
        .about-desc {
          width: 100%;
          margin-bottom: 10px;
          span {
            // background-color: #82ab71;
            padding: 0px;
          }
          font-size: 12px;

          text-align: left;
        }
        .about-services {
          margin-bottom: 10px;
          width: 300px;

          ul li {
            padding-left: 2px;
            font-size: 12px !important;
            font-family: $bodyFont;
            .about-services-list-item {
              font-size: 8px;
              vertical-align: middle;
              color: #3fc1d9;
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
          // margin-bottom: 20px;
          font-size: 16px;
          font-weight: 700;
          width: 100%;
          color: $lightBlue;
          margin: 10px 0;
          display: flex;
          align-items: center;
          // text-shadow: -1px -1px 1px rgba(153, 177, 255, 0.536);
          &:after {
            content: "";
            display: block;
            position: relative;
            width: 100px;
            height: 1px;
            margin-left: 20px;
            background-color: rgba($color: $lightBlue, $alpha: 0.1);
          }
        }
      }
    }
    .about-right {
      display: flex;
      width: 80%;
      height: 30vh;
      margin-left: 12%;
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
        background-color: rgba($color: $purple, $alpha: 0.2);
        box-shadow: 0 10px 30px -15px #010310;
        transform: translate(-12%, -12%);
        z-index: -2;
      }
    }
  }
}
</style>
