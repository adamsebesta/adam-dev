<template>
  <nav class="nav-bar">
    <div class="nav-logo">
      <svg
        v-if="!mobile"
        version="1.1"
        @click="showMenu"
        id="corner-logo"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="40px"
        height="40px"
        x="1"
        y="1"
        viewBox="0 0 58 58"
        xml:space="preserve"
      >
        <g>
          <polygon style="fill:#556080;" points="29,58 3,45 3,13 29,26 	" />
          <polygon style="fill:#434C6D;" points="29,58 55,45 55,13 29,26 	" />
          <polygon
            :style="{ fill: blockColor }"
            points="3,13 28,0 55,13 29,26 	"
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
      </svg>
      <i
        v-if="mobile"
        @click="showMenu"
        class="fa fa-bars nav-bars"
        aria-hidden="true"
      ></i>
    </div>
    <div class="menu" :style="{ display: menuShown ? '' : 'none' }">
      <div
        :class="
          'menu-wrapper ' +
            (page && page.location.pathname == '/' ? ' active' : '')
        "
        @click="navChange('/')"
      >
        <a class="menu__item">Home</a>
      </div>
      <div
        ref="about"
        :class="
          'menu-wrapper ' +
            (page && page.location.pathname == '/about' ? ' active' : '')
        "
        @click="navChange('/about')"
      >
        <a id="about" class="menu__item">About</a>
      </div>

      <div
        id="contact"
        :class="
          'menu-wrapper ' +
            (page && page.location.pathname == '/contact' ? ' active' : '')
        "
        @click="navChange('/contact')"
      >
        <a class="menu__item">Contact</a>
      </div>

      <div
        :class="
          'menu-wrapper ' +
            (page && page.location.pathname == '/portfolio' ? ' active' : '')
        "
        @click="navChange('/portfolio')"
      >
        <a class="menu__item">Portfolio</a>
      </div>
    </div>
    <div v-if="mobile" class="nav-placeholder"></div>
  </nav>
</template>

<script>
import anime from "animejs";

export default {
  data() {
    return {
      menuShown: false,
      page: null
    };
  },
  computed: {
    blockColor() {
      return this.menuShown ? "#3fc1d9" : "#7383BF";
      // #364cf4
    }
  },
  methods: {
    showMenu() {
      anime({
        targets: [".menu"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 750,
            value: this.menuShown ? 0 : 1
          }
        ]
      });
      if (!this.mobile) {
        anime({
          targets: ["#corner-logo"],
          easing: "easeInOutSine",
          // translateX: [
          //   {
          //     duration: 300,
          //     value: this.menuShown ? 0 : 20
          //   }
          // ],
          rotate: [
            {
              duration: 300,
              value: this.menuShown ? 0 : 90
            }
          ]
        });
      }
      setTimeout(() => {
        this.menuShown = !this.menuShown;
      }, 200);
    },
    async navChange(path) {
      if (window.location.pathname == "/") {
        let target = document.querySelectorAll(".star")[39];
        let pos = target.getBoundingClientRect();
        let that = this;
        anime.timeline({ loop: false }).add({
          targets: target,
          opacity: 0.6,
          zIndex: [{ value: [1, 5], round: true }],
          x:
            this.windowWidth / 2 -
            this.windowWidth / (this.windowWidth > 450 ? 1 : 3),
          y: this.windowHeight / 2 - this.windowHeight / 2.5,
          width: this.windowWidth / 7,
          height: this.windowHeight / 7,
          easing: "easeOutExpo",
          duration: 2000
        });
        setTimeout(() => {
          that.$router.push({
            path: path
          });
        }, 300);
      } else {
        this.$router.push({
          path: path
        });
      }
    }
  },
  created() {},
  mounted() {
    this.page = window;
    setTimeout(() => {
      if (window.location.pathname != "/" || this.windowWidth > 1025) {
        this.showMenu();
      }
    }, 750);
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  width: 100%;
  .nav-logo {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-right: 50px;
  }
  .nav-placeholder {
    width: 30px;
  }
}
.nav-bars {
  color: $lightBlue;
  cursor: pointer;
}
.menu {
  // position: absolute;
  // top: 5%;
  // left: 4%;
  // right: 0;
  // margin-left: auto;
  // margin-right: auto;
  opacity: 0;
  display: flex;
  align-items: flex-start;
  z-index: 10000;
}

.menu__item {
  color: $lightBlue;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  line-height: 1.25;
  letter-spacing: -0.025em;
  text-indent: -0.025em;
  // background: linear-gradient(45deg, #0947db, #898ce9);
  font-weight: 900;
  font-size: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  cursor: pointer;
  text-align: left;
  transition: all ease-in-out 150ms;
}

.menu-wrapper {
  padding: 1px 1px 4px 1px;
  margin-left: 3rem;
  &.active {
    // width: 100%;
    // height: 100%;
    border-bottom: 1px solid $purple;
    pointer-events: none;
    // padding: 1px 3px 1px 3px;
  }
}

.menu-wrapper {
  height: 100%;
  cursor: pointer;
}

.menu-wrapper:hover .menu__item {
  transform: translateY(-7px);
}

#corner-logo {
  cursor: pointer;
  z-index: 10;
}

@media only screen and (max-width: 1630px) {
  .menu__item {
    font-size: 14px;
  }
}
@media only screen and (max-width: 420px) {
  .nav-bars {
  }
  .menu__item {
    font-size: 13px;
    // margin: 5px;
    padding-bottom: 2px;
  }

  .menu-wrapper:hover .menu__item {
    transform: translateY(-1px);
  }
  .menu-wrapper {
    padding-bottom: 0;
    margin: 5px;
    &.active {
      // background: linear-gradient(45deg, #0947db, #898ce9);
      // padding: 1px 3px 1px 3px;
      // border-radius: 5px;
      border-bottom: 1px solid $purple;
      pointer-events: none;
    }
  }
  .nav-bar {
    .nav-logo {
      margin-right: 0;
    }
  }
  #corner-logo {
    left: 3.5%;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
