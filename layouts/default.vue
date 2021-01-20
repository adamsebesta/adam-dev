<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import Vue from "vue";
import global from "~/mixins/global.js";
Vue.mixin(global);

export default {
  name: "App"
};
</script>

<style lang="scss">
html {
  overflow: auto;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
  font-family: $headingFont;

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

.background-center {
  background: url("~static/background home4.png");
  background-repeat: no-repeat;
  background-size: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 80%;
  height: 100%;
  z-index: -10;
}
.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: $background;
    color: $lightBlue;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: $background;
    z-index: 1;
  }

  &[x-placement^="top"] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="bottom"] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^="right"] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^="left"] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &.popover {
    $color: #f9f9f9;

    .popover-inner {
      background: $color;
      color: $background;
      padding: 24px;
      border-radius: 5px;
      box-shadow: 0 5px 30px rgba($background, 0.1);
    }

    .popover-arrow {
      border-color: $color;
    }
  }

  &[aria-hidden="true"] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden="false"] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}

.main-depth {
  box-shadow: 0 10px 30px -15px #010310;
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: 5px;
  background-color: rgb(13 16 39 / 99%);
}
.main-btn {
  display: inline-block !important;
  cursor: pointer !important;
  border-radius: 4px !important;
  letter-spacing: 0.15em !important;
  border: 2px solid $purple !important;
  color: $purple !important;
  text-decoration: none !important;
  padding: 10px 20px;
  margin: 5px !important;
  font-weight: 600 !important;
  font-size: 14px;
  background-color: transparent !important;
  /* box-shadow: -1px 1px 2px 1px #01301177; */
  &:hover {
    color: $purple !important;
    background-color: $lightBlue !important;
  }
}

.container-main {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  z-index: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.banner-nav {
  padding: 50px 30px !important;
}

.purple {
  color: $purple;
}

@media only screen and (max-width: 420px) {
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
}
.main-depth {
  padding: 10px;
}
</style>
