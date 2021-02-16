<template>
  <div>
    <nav v-if="!mobile" class="nav-bar">
      <div class="nav-logo" @click="navChange('/')">
        <img src="logo.png" alt="" />
        <!-- <i
        v-if="mobile"
        @click="showMenu"
        class="fa fa-bars nav-bars"
        aria-hidden="true"
      ></i> -->
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
          :class="
            'menu-wrapper ' +
              (page && page.location.pathname == '/portfolio' ? ' active' : '')
          "
          @click="navChange('/portfolio')"
        >
          <a class="menu__item">Portfolio</a>
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
      </div>
    </nav>
    <nav v-if="mobile" class="nav-bar">
      <div class="nav-info-wrapper">
        <div class="nav-logo" @click="navChange('/')">
          <img src="logo-text.png" alt="" />
        </div>
        <div>
          <i
            v-if="mobile"
            @click="toggleSidebar"
            class="fa fa-bars nav-bars"
            aria-hidden="true"
          ></i>
        </div>
      </div>

      <div class="sidebar-menu">
        <div class="sidebar-banner">
          <img src="logo.png" alt="" />
          <div>
            <i
              class="fa fa-times"
              aria-hidden="true"
              @click="toggleSidebar"
            ></i>
          </div>
        </div>
        <div class="menu">
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
            :class="
              'menu-wrapper ' +
                (page && page.location.pathname == '/portfolio'
                  ? ' active'
                  : '')
            "
            @click="navChange('/portfolio')"
          >
            <a class="menu__item">Portfolio</a>
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
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  data() {
    return {
      menuShown: false,
      page: null,
      sidebarShown: false
    };
  },
  computed: {},
  methods: {
    showMenu() {
      anime({
        targets: [".menu", ".nav-logo", ".nav-bars"],
        easing: "easeInOutSine",
        translateY: [
          {
            duration: 500,
            value: ["120%", "0%"]
          }
        ],
        delay: 750
      });
    },
    toggleSidebar() {
      anime({
        targets: [".sidebar-menu"],
        easing: "easeInOutSine",

        opacity: [
          {
            duration: 750,
            value: this.sidebarShown ? ["100%", "0%"] : ["0%", "100%"]
          }
        ],
        translateY: [
          {
            duration: 750,
            value: this.sidebarShown ? ["0%", "-110%"] : ["-110%", "0%"]
          }
        ]
      });
      this.sidebarShown = !this.sidebarShown;
      // if (!this.mobile) {
      //   anime({
      //     targets: ["#corner-logo"],
      //     easing: "easeInOutSine",
      //     // translateX: [
      //     //   {
      //     //     duration: 300,
      //     //     value: this.menuShown ? 0 : 20
      //     //   }
      //     // ],
      //     rotate: [
      //       {
      //         duration: 300,
      //         value: this.menuShown ? 0 : 90
      //       }
      //     ]
      //   });
      // }
      // setTimeout(() => {
      //   this.menuShown = !this.menuShown;
      // }, 200);
    },
    async navChange(path) {
      this.$router.push({
        path: path
      });
    }
  },
  created() {},
  mounted() {
    this.page = window;
    setTimeout(() => {
      // if (window.location.pathname != "/" || this.windowWidth > 1025) {
      // this.showMenu();
      // }
    }, 750);
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  overflow: hidden;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 100px 0 100px;
  width: 100%;
  .nav-logo {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    margin-right: 50px;
    transform: translateY(100%);
    filter: grayscale(100%);
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
  display: flex;
  align-items: flex-start;
  z-index: 10000;
  transform: translateY(100%);
}

.menu__item {
  color: $grey;
  // text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  line-height: 1.25;
  text-indent: -0.025em;
  // background: linear-gradient(45deg, #0947db, #898ce9);
  font-weight: 600;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  letter-spacing: 0.5px;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  cursor: pointer;
  text-align: left;
  transition: all ease-in-out 150ms;
}

.menu-wrapper {
  padding: 1px 1px 4px 1px;
  margin-left: 2.5rem;
  &.active {
    // width: 100%;
    // height: 100%;
    border-bottom: 1px solid $grey;
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

@media only screen and (max-width: 1130px) {
  .menu__item {
    font-size: 14px;
  }
}
@media only screen and (max-width: 420px) {
  .nav-bars {
    padding-bottom: 10px;
    font-size: 18px;
    color: $mainBlue;
    transform: translateY(120%);
  }

  .nav-bar {
    width: 100%;
    padding: 0 10%;
    margin: 10% auto;
    left: 0%;
    overflow: unset;
    .nav-info-wrapper {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      align-items: center;
      .nav-logo {
        margin-right: 0;
        width: 45%;
        filter: unset;
      }
    }
  }
  #corner-logo {
    left: 3.5%;
  }

  .sidebar-menu {
    width: 100%;
    height: 100vh;
    transform: translateY(-100%);
    margin: -10%;
    padding: 50px;
    position: absolute;
    top: 0;
    background-color: $grey;
    z-index: 1000;
    color: white;
    // opacity: 0;
    .sidebar-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;
      // padding: 5px;
      width: 100%;
      img {
        width: 35%;
      }
    }
    .fa-times {
      font-size: 30px;
      z-index: 1001;
    }
    .menu {
      flex-direction: column;
      justify-content: space-between;
      height: 30%;
    }
    .menu__item {
      font-size: 36px;
      margin: 0px;
      padding-bottom: 2px;
      color: white;
    }

    .menu-wrapper:hover .menu__item {
      transform: translateY(-1px);
    }
    .menu-wrapper {
      padding-bottom: -1;
      margin: 5px;
      height: unset;
      display: flex;
      flex-direction: column;

      &.active {
        // background: linear-gradient(45deg, #0947db, #898ce9);
        // padding: 1px 3px 1px 3px;
        // border-radius: 5px;
        border-bottom: 1px solid $grey;
        pointer-events: none;
      }
    }
  }
  // .banner-nav {
  //   margin: 30px 30px !important;
  // }
}
</style>
