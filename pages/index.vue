<template>
  <div class="page" ref="page">
    <div>
      <!-- <Banner /> -->
    </div>
    <div ref="contMain" class="container-main">
      <div :class="'half-cut ' + (entered ? 'entered' : '')"></div>
      <div class="center-content">
        <div :class="'welcome ' + (entered ? 'entered' : '')">
          <img class="logo" src="~/static/logo/logo-no-text.png" alt="" />
          <button @click="entered = true">click to enter</button>
        </div>
        <div :class="'index-info ' + (entered ? 'show' : '')">
          <div class="heading will-transition">
            All Your <br />
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
              applications.
              <!-- Highly focused on speed, responsiveness, and 
              communication.-->
            </p>
            <button class="portfolio-btn will-transition" @click="">
              <span ref="homeBtnSpan">Portfolio</span>
            </button>
            <button class="contact-btn will-transition" @click="">
              <span ref="homeBtnSpan">Contact</span>
              <chevron
                color="#fecf02"
                transform="translate(7px,1px) scale(0.8) rotate(90deg)"
              ></chevron>
            </button>
          </div>
          <div class="kpi-container will-transition">
            <div class="kpi-item" v-for="k in kpis">
              <p>{{ k.top }}</p>
              <p>{{ k.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import Chevron from "../components/Chevron.vue";

export default {
  components: { Chevron, LogoAnim, Logo },
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
      kpis: [
        { top: "TEST", text: "Years Experience" },
        { top: "TEST", text: "Clients Satisfied" },
        { top: "TEST", text: "Azure Certifications" },
      ],
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
  transition: transform 1200ms ease-in-out;
  &.entered {
    transform: translateX(200%);
  }
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
  height: 30%;
  margin: auto;
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
    transition: transform 1200ms ease-in-out;
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
  width: 55%;
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
    transition: transform 1250ms ease-in-out 300ms;
  }
  &.show {
    z-index: 1;
    .heading,
    .subheading,
    .portfolio-btn,
    .lightbulb-wrapper .lightbulb,
    .kpi-container {
      transform: translateY(0%);
    }
  }

  .heading {
    font-size: 60px;
    transform: translateY(350%);
    font-weight: 600;
    width: 100%;
    line-height: 90%;
    z-index: 1;
    // min-width: 400px;
    span {
      letter-spacing: -1px;
    }
  }
  .subheading {
    transform: translateY(350%);
    width: 100%;
    font-weight: 400;
    margin-top: 20px;
    font-family: $bodyFont;

    p {
      padding-bottom: 20px;
      font-size: 16px;
      width: 500px;
    }
  }
  .portfolio-btn {
    background: $mainBlue;
    color: $grey;
    border-radius: 75px;
    text-align: center;
    border: none;
    width: 100px;
    height: 40px;
    color: white;
    // margin-top: 40px;
    cursor: pointer;
    font-weight: 500;
    font-family: $headingFont;
    font-size: 12px;

    z-index: 12;
    &:hover {
      background-color: $mainBlue;
      color: #fff;
    }
    .wrapper {
      // display: flex;
      transform: translateY(150%);
    }
    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: $mainBlue;
      border-radius: 75px;
      z-index: -1;
      width: 100px;
      height: 40px;
    }
    &:hover::after {
      animation: radiate 1s;
    }
    &:hover::before {
      animation: radiate 0.75s;
    }
    @keyframes radiate {
      to {
        transform: scale(1.15);
        opacity: 0;
      }
    }
  }
  .contact-btn {
    margin-left: 1.5rem;
    background: transparent;
    border: none;
    font-weight: 500;
    font-family: $headingFont;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    position: relative;
  }
  .kpi-container {
    transform: translateY(500%);
    width: 60%;
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
    p:first-child {
      font-weight: 600;
      font-size: 20px;
    }
    p:nth-child(2) {
      font-weight: 400;
      font-size: 12px;
    }
  }
}

// @media only screen and (max-width: 1130px) {
//   .index-info {
//     width: 100%;
//     text-align: left;
//     top: 34%;
//     .heading {
//       font-size: 46px;
//       line-height: 40px;
//       width: 60%;
//       min-width: 187px;
//     }
//     .subheading {
//       p {
//         font-size: 12px;
//         // width: 75%;

//         font-weight: 600;
//         line-height: 22px;
//         min-width: unset;
//       }
//     }
//   }
//   .btn-home {
//     width: 20%;
//   }

//   .lightbulb-wrapper {
//     transform: translateX(-314px) translateY(-260%);
//     min-width: 640px;
//     .lightbulb {
//       width: 6%;
//     }
//   }
// }
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
      font-weight: 500;
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
