<template>
  <div>
    <nav v-if="!mobile" class="nav-bar">
      <div
        :class="
          'nav-logo desktop' +
          (page && page.location.pathname == '/' ? ' active' : '')
        "
        @click="navChange('/')"
      >
        <img src="logo.png" alt="" />
      </div>
      <div class="menu desktop">
        <!-- <div
          :class="
            'menu-wrapper ' +
            (page && page.location.pathname == '/' ? ' active' : '')
          "
          @click="navChange('/')"
        >
          <a class="menu__item">Home</a>
        </div> -->
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
        <div class="nav-logo" @click="navChange('/', home)">
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
          <!-- <div class="close-btn-wrapper">
            <i
              class="fa fa-times"
              aria-hidden="true"
              @click="toggleSidebar"
            ></i>
          </div> -->
          <div id="mdiv" @click="toggleSidebar">
            <div class="mdiv">
              <div class="md"></div>
            </div>
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
        <div class="sidebar-footer">
          <div class="">
            <span class="copyright-info"
              >© 2021 Design & Build by Adam Sebesta. <br />
              +49 015 208341820</span
            >
          </div>
          <div class="">
            <a
              href="https://www.linkedin.com/company/69564956/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a
              href="https://github.com/adamsebesta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github-alt" aria-hidden="true"></i>
            </a>
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
      sidebarShown: false,
    };
  },
  computed: {
    home() {
      return window.location.pathname == "/";
    },
  },
  methods: {
    showMenu() {
      anime({
        targets: [".menu", ".nav-logo", ".nav-bars"],
        easing: "easeInOutSine",
        translateY: [
          {
            duration: 500,
            value: ["175%", "0%"],
          },
        ],

        delay: 750,
      });
      if (this.mobile) {
        anime({
          targets: ".nav-bar",
          easing: "easeInOutSine",
          translateY: ["-100%", "0%"],
          duration: 1000,
          delay: 1000,
        });
      }
    },
    toggleSidebar() {
      anime({
        targets: [".sidebar-menu"],
        easing: "easeOutCirc",
        opacity: [
          {
            duration: this.sidebarShown ? 1000 : 500,
            value: this.sidebarShown ? ["100%", "0%"] : ["0%", "100%"],
          },
        ],
        translateY: [
          {
            duration: 1150,
            value: this.sidebarShown ? ["0%", "-100%"] : ["-100%", "0%"],
          },
        ],
      });

      anime({
        targets: [".menu__item"],
        easing: "easeOutSine",
        delay: 500,
        translateY: [
          {
            duration: 650,
            value: this.sidebarShown ? ["0%", "100%"] : ["100%", "0%"],
          },
        ],
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
    async navChange(path, home) {
      if (window.location.pathname == path && !home) {
        this.toggleSidebar();
      } else {
        this.$router.push({
          path: path,
        });
      }
    },
  },
  created() {},
  mounted() {
    this.page = window;
    setTimeout(() => {
      // if (window.location.pathname != "/" || this.windowWidth > 1025) {
      this.showMenu();
      // }
    }, 750);
  },
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
    z-index: 1;
    cursor: pointer;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    margin-right: 50px;
    transform: translateY(100%);
    // filter: grayscale(100%);
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
  z-index: -1;
  transform: translateY(175%);
}

.menu__item {
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
}
.active {
  // width: 100%;
  // height: 100%;
  // border-bottom: 1px solid $grey;
  // padding: 1px 3px 1px 3px;
  pointer-events: none;
}

.menu-wrapper {
  padding: 1px 1px 4px 1px;
  margin-left: 2.5rem;
  height: 100%;
  cursor: pointer;
  color: $grey;
  &.active {
    color: #434343;
  }
}

.menu-wrapper:hover .menu__item {
  opacity: 0.5;
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
    padding-bottom: 3px;
    font-size: 18px;
    color: $mainBlue;
    transform: translateY(175%);
  }

  .nav-bar {
    width: 100%;
    padding: 5px 5%;
    margin: 0px 15px 0 auto;
    left: 0%;
    top: 0 !important;
    overflow: unset;
    transform: translateY(-100%);
    background: white;
    box-shadow: -3px -15px 20px 0px #010310;

    .nav-info-wrapper {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      align-items: center;

      .nav-logo {
        margin-right: 0;
        width: 40%;
        filter: unset;
        z-index: 1;
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
    margin: -8% -5%;
    padding: 50px;
    position: absolute;
    top: 0;
    background-color: $grey;
    z-index: 1000;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // opacity: 0;
    .sidebar-banner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // margin-bottom: 50px;
      // padding: 5px;
      width: 100%;
      #mdiv {
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background-color: transparent;
        border: 0px solid white;
      }

      .mdiv {
        height: 20px;
        width: 2.5px;
        margin-left: 13px;
        margin-top: 5px;
        background-color: white;
        transform: rotate(45deg);
        z-index: 1;
      }

      .md {
        height: 20px;
        width: 2.5px;
        background-color: white;
        transform: rotate(90deg);
        z-index: 2;
      }

      img {
        width: 23%;
      }
    }
    .fa-times {
      font-size: 22px;
      z-index: 1001;
    }
    .sidebar-footer {
      .copyright-info,
      a {
        font-size: 12px;
      }
    }
    .menu {
      flex-direction: column;
      justify-content: space-between;
      height: 50%;
    }
    .menu__item {
      font-size: 36px;
      margin: 0px;
      padding-bottom: 2px;
      color: white;
      transform: translateY(100%);
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
      overflow: hidden;

      &.active {
        // background: linear-gradient(45deg, #0947db, #898ce9);
        // padding: 1px 3px 1px 3px;
        // border-radius: 5px;
        // border-bottom: 1px solid $grey;
        pointer-events: unset;
      }
    }
  }
  .desktop {
    display: none;
    img {
      display: none;
    }
  }
  // .banner-nav {
  //   margin: 30px 30px !important;
  // }
}
</style>
