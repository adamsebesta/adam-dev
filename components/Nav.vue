<template>
  <div>
    <nav
      v-if="!mobile"
      :class="
        'nav-bar' +
        ($route.path == '/' ? ' home' : '') +
        (scrollPercentage > 0 ? ' scrolled' : '')
      "
    >
      <nuxt-link
        :class="'nav-logo desktop' + ($route.path == '/' ? ' active' : '')"
        :to="{ path: '/', hash: '#landing' }"
      >
        <img src="~/static/logo/logo-text.png" alt="" />
      </nuxt-link>
      <div class="menu desktop">
        <nuxt-link
          v-for="(v, k) in links"
          v-if="!v.mobileOnly"
          :key="k"
          :ref="k"
          :class="'menu__item ' + ($route.path == '/' ? ' active' : '')"
          :to="v.route"
          >{{ k }}
        </nuxt-link>
      </div>
    </nav>
    <nav v-if="mobile" class="nav-bar">
      <div class="nav-info-wrapper">
        <div class="nav-logo" @click="$router.push('/')">
          <img src="~/static/logo/logo-text.png" alt="" />
        </div>
        <button @click="toggleSidebar">
          <burger-menu></burger-menu>
        </button>
      </div>

      <div :class="'sidebar-menu' + (sidebarShown ? ' shown' : '')">
        <div class="sidebar-banner">
          <!-- <img src="~/static/logo/logo-no-text.png" alt="" /> -->
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
          <a
            v-for="(v, k) in links"
            :key="k"
            :ref="k"
            :class="'menu__item ' + ($route.path == '/' ? ' active' : '')"
            @click="handleMobileNavClick(v.route)"
          >
            {{ k }}
          </a>
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
import BurgerMenu from "~/components/BurgerMenu";
import scrollMixin from "~/mixins/scrollMixin";
export default {
  components: { BurgerMenu },
  mixins: [scrollMixin],
  data() {
    return {
      menuShown: false,
      page: null,
      sidebarShown: false,
      links: {
        home: { route: { path: "/", hash: "#landing" }, mobileOnly: true },
        about: { route: { path: "/", hash: "#about" } },
        portfolio: { route: { path: "/", hash: "#portfolio" } },
        connect: { route: { path: "/", hash: "#connect" } },
      },
    };
  },
  computed: {
    home() {
      return window.location.pathname == "/";
    },
  },
  methods: {
    handleMobileNavClick(route) {
      this.toggleSidebar();
      setTimeout(() => {
        this.$router.push(route);
      }, 500);
    },
    toggleSidebar() {
      this.sidebarShown = !this.sidebarShown;
    },
  },
  created() {},
  mounted() {
    this.pageWrapper();
    this.page = window;
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
  padding: 0px 5% 0 5%;
  width: 100%;
  height: 100px;
  background: transparent;
  &.scrolled {
    background: white;
  }
  .nav-logo {
    z-index: 1;
    cursor: pointer;
    width: 110px;
    height: 110px;
    display: flex;
    align-items: center;
    margin-right: 50px;
    // transform: translateY(100%);
    // filter: grayscale(100%);
    img {
      width: 100%;
    }
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
  height: 100%;
  align-items: center;
  z-index: -1;
  // transform: translateY(175%);
}

.menu__item {
  // text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
  // background: linear-gradient(45deg, #0947db, #898ce9);
  font-size: 12px;
  display: flex;
  text-transform: capitalize;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  cursor: pointer;
  text-align: left;
  color: black;
  font-weight: 400;
  text-decoration: none;
  padding: 0 1.5rem;
  &:last-of-type {
    padding-right: 0;
  }
  &:hover {
    opacity: 0.5;
  }
}
.active {
  // width: 100%;
  // height: 100%;
  // border-bottom: 1px solid $grey;
  // padding: 1px 3px 1px 3px;
  // pointer-events: none;
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
@media only screen and (max-width: 450px) {
  .nav-bars {
    padding-bottom: 3px;
    font-size: 18px;
    color: #47494e;
    // transform: translateY(175%);
  }

  .nav-bar {
    width: 100%;
    padding: 0px 5%;
    margin: 0px 15px 0 auto;
    left: 0%;
    top: 0 !important;
    overflow: unset;
    background: white;
    box-shadow: -3px -15px 20px 0px #010310;
    height: 80px;

    .nav-info-wrapper {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      align-items: center;
      .nav-logo {
        height: unset;
      }
      button {
        background: transparent;
        outline: none;
        border: none;
        display: flex;
      }
      .nav-logo {
        margin-right: 0;
        width: 28%;
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
    height: calc(var(--vh, 1vh) * 100);
    transform: translateY(-100%);
    padding: 50px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    z-index: 1000;
    color: #47494e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // opacity: 0;
    transition: transform 700ms ease-in-out;
    &.shown {
      transform: translateY(0);
    }
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
        width: 2px;
        margin-left: 13px;
        margin-top: 5px;
        background-color: #47494e;
        transform: rotate(45deg);
        z-index: 1;
      }

      .md {
        height: 20px;
        width: 2px;
        background-color: #47494e;
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
      color: black;
      // transform: translateY(100%);
      padding-bottom: -1;
      margin: 5px;
      height: unset;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      &:last-of-type {
        padding-right: 1.5rem;
      }
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
}
</style>
