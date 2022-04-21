<template>
  <div style="height: 100%">
    <Nav />
    <Nuxt />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Vue from "vue";
import global from "~/mixins/global.js";
import meta from "~/static/meta.png";
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
Vue.mixin(global);

export default {
  components: { Nav, Footer },
  name: "App",
  methods: {
    set1vh() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    },
  },
  mounted() {
    this.windowWrapper();
    this.set1vh();
    window.addEventListener("resize", this.set1vh);
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Neuzeit Grotesk";
  src: url("~static/fonts/NeuzeitGro-Bla.ttf"); /* IE9 Compat Mode */
  // src: url("~static/fonts/NeuzeitGro-Bol.ttf"); /* IE9 Compat Mode */
  src: url("~static/fonts/NeuzeitGro-Reg.ttf"); /* IE9 Compat Mode */
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Neuzeit Grotesk";
  src: url("~static/fonts/NeuzeitGro-Bol.ttf"); /* IE9 Compat Mode */
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("~static/fonts/Montserrat-Regular.ttf"); /* IE9 Compat Mode */
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("~static/fonts/Montserrat-Medium.ttf"); /* IE9 Compat Mode */
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("~static/fonts/Montserrat-SemiBold.ttf"); /* IE9 Compat Mode */
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: "Montserrat";
  src: url("~static/fonts/Montserrat-Bold.ttf"); /* IE9 Compat Mode */
  font-weight: 700;
  font-style: normal;
}

html {
  overflow: auto;
  height: 100%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  font-family: $headingFont;
  // overscroll-behavior: contain;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  // background-repeat: no-repeat;
  // background-size: cover;
  // background: #141E30;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to left, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to left, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: $background; /* fallback for old browsers */
  // background: -webkit-linear-gradient(to left, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  // background: #141E30;  /* fallback for old browsers */
  // background: -webkit-linear-gradient(to right, #243B55, #141E30);  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to right, #243B55, #141E30); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

p {
  font-family: $bodyFont;
}

.nuxt-link-exact-active {
  font-weight: bold;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  -webkit-tap-highlight-color: transparent;
}

// .button--green {
//   display: inline-block;
//   border-radius: 4px;
//   border: 1px solid #013011;
//   color: #013011;
//   text-decoration: none;
//   padding: 10px 30px;
// }

#__nuxt,
#__layout {
  height: 100%;
}
.overflow {
  overflow: hidden;
}
.page {
  padding-top: 100px;
}

.container-main {
  margin: 0 auto;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}
//

.purple {
  color: $purple;
}
.gold {
  color: $mainGold;
}

@media only screen and (max-width: 450px) {
  .nav-links {
    a {
      font-size: 11px !important;
    }
  }
  .main-btn {
    &:hover {
      color: $purple !important;
      background-color: $lightBlue !important;
    }
    &:active {
      color: $purple !important;
      background-color: $lightBlue !important;
    }
  }
  .background-center {
    height: 100%;
    width: 100%;
  }
  .main-depth {
    padding: 10px;
  }
  .page {
    padding-top: 80px;
  }
}
</style>
