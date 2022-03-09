<template>
  <div class="page" ref="page">
    <div>
      <!-- <Banner /> -->
      <Nav class="banner-nav" />
    </div>
    <div ref="contMain" class="container-main">
      <div
        v-if="loading"
        :class="'half-cut ' + (entered ? 'entered' : '')"
      ></div>
      <div class="center-content">
        <div class="scroll-div">
          <div :style="{ overflow: 'hidden' }">
            <h4>Scroll</h4>
          </div>
          <div class="trail"></div>
        </div>
        <div :class="'welcome ' + (entered ? 'entered' : '')">
          <logo></logo>
          <button @click="entered = true">click here</button>
        </div>
        <div :class="'index-info ' + (entered ? 'show' : '')">
          <div class="heading will-transition">
            Your <br />
            <span class="gold"> Creative Ideas <br /> </span>
            <span> Brought To Life</span>
            <div class="lightbulb-wrapper">
              <img
                class="lightbulb will-transition"
                src="~/static/lightbulb.png"
                alt=""
              />
            </div>
          </div>
          <div class="subheading will-transition">
            <p>
              Collaborative web development for small to large scale
              applications. Highly focused on speed, responsiveness, and
              communication.
            </p>
            <div
              ref="homeBtn"
              class="home-btn home-btn-animated will-transition"
              @click=""
            >
              <div ref="homeBtnWrapper" class="wrapper">
                <span ref="homeBtnSpan">Contact</span>
                <i ref="homeBtnSpan" class="fa fa-envelope" aria-hidden="true">
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer class="index-footer" />
  </div>
</template>

<script>
import about from "./about";
import Nav from "../components/Nav";
import _ from "lodash";
import meta from "~/static/meta.png";
import global from "~/mixins/global";
import LogoAnim from "../components/LogoAnim.vue";
import Logo from "../components/Logo.vue";

export default {
  components: { LogoAnim, Logo },
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
        {
          hid: "og:image",
          property: "og:image",
          content: "https://www.asdevelopment.ca/meta.png",
        },
        {
          hid: "twitter:image",
          property: "twitter:image",
          content: "https://www.asdevelopment.ca/meta.png",
        },
      ],
    };
  },
  transition: "page",
  data() {
    return {
      entered: false,
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
      anim: false,
    };
  },
  methods: {},
  created() {},
  mounted() {
    // if (localStorage.getItem("wasVisited") === null) {
    localStorage.setItem("wasVisited", "1");
    // this.initLogo();
  },
  beforeDestroy() {},
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
  overscroll-behavior: none;
}
.index-footer {
  transform: translateY(100%);
}
.lightbulb-wrapper {
  position: absolute;
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  transform: translateX(28%) translateY(-310%);
}
.lightbulb {
  position: relative;
  width: 10%;
  height: 10%;
  transform: translateY(100%);
  transition-delay: 1100ms !important;
}

.my-path {
  fill: none;
  stroke: $mainGold;
  stroke-width: 10;
}

.half-cut {
  will-change: transform;
  z-index: 1;
  height: 100%;
  width: 50%;
  right: 0;
  margin-left: auto;
  position: absolute;
  background-color: white;
  box-shadow: 14px -6px 20px 0px #010310;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 750ms ease-in;
  &.entered {
    transform: translateX(200%);
  }
  .loading-img-wrapper {
    overflow: hidden;
    // margin-top: -10%;
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

.welcome {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  will-change: transform;
  // background-color: rgb(30 54 119 / 100%);
  // border-radius: 5px;
  z-index: 1;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  display: flex;
  flex-direction: column;
  &.entered {
    transform: translateX(100%);
    transition: transform 500ms ease-in;
  }
  .logo-img {
    min-width: 112px;
    width: 1000px;
    // transform: translateY(150%);
    // margin-right: 20px;
  }
}

.center-content {
  display: flex;
  width: 100%;
}

.index-info {
  position: absolute;
  top: 25%;
  overflow: hidden;
  width: 850px;
  margin: 0 auto;
  padding: 15px;
  margin-left: 10%;
  z-index: -1;
  justify-content: center;
  flex-direction: column;
  display: flex;
  color: $grey;
  text-align: left;
  .will-transition {
    transition: transform 750ms ease-out 300ms;
  }
  &.show {
    z-index: 1;
    .heading,
    .subheading,
    .home-btn .wrapper,
    .lightbulb-wrapper .lightbulb {
      transform: translateY(0%);
    }
  }

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
      font-size: 20px;
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

    z-index: 12;
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

@media only screen and (max-width: 1450px) {
  .index-info {
    .heading {
      font-size: 75px;
      line-height: 65px;
    }
    .subheading {
      p {
        font-size: 16px;
      }
    }
  }

  .lightbulb-wrapper {
    transform: translateX(-19%) translateY(-278%);
    .lightbulb {
      width: 8%;
    }
  }
}

@media only screen and (max-width: 1130px) {
  .index-info {
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

  .scroll-div {
    left: -10%;
  }

  .loading-anim {
    cursor: pointer;
    .loading-img-wrapper {
      margin-top: -30%;
    }
  }

  .welcome {
    padding: 0;
    margin: 0 auto;
    width: 150%;
    margin-bottom: 20px;
    .device-images {
      margin-left: 34%;
    }
  }
  .index-info {
    padding: 50px 0;
    margin: 0 auto;
    width: 100%;
    text-align: left;
    left: 0%;
    top: 15%;

    .heading {
      font-size: 70px;
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
      transform: translateX(-55%) translateY(-647%);
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

  .logo-img {
    margin: 0 auto;
    padding-left: 2px;
    margin-left: 19%;
  }
}

_::-webkit-full-page-media,
_:future,
:root .safari_only {
  color: #0000ff;
  background-color: #cccccc;
}
</style>
