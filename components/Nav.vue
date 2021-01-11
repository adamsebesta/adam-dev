<template>
  <div>
    <svg
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
        <polygon style="fill:#434C6D;" points="29,58 3,45 3,13 29,26 	" />
        <polygon
          :style="{ fill: blockColor }"
          points="29,58 55,45 55,13 29,26 	"
        />
        <polygon style="fill:#7383BF;" points="3,13 28,0 55,13 29,26 	" />
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
    <nav class="menu" :style="{ display: menuShown ? '' : 'none' }">
      <div
        :class="
          'menu-wrapper ' +
            (page && page.location.pathname == '/' ? ' active' : '')
        "
      >
        <a @click="navChange('/')" class="menu__item">Home</a>
      </div>
      <div
        :class="
          'menu-wrapper ' +
            (page && page.location.pathname == '/about' ? ' active' : '')
        "
      >
        <a @click="navChange('/about')" class="menu__item">About</a>
      </div>

      <div
        :class="
          'menu-wrapper ' +
            (page && page.location.pathname == '/contact' ? ' active' : '')
        "
      >
        <a @click="navChange('/contact')" class="menu__item">Contact</a>
      </div>

      <div
        :class="
          'menu-wrapper ' +
            (page && page.location.pathname == '/portfolio' ? ' active' : '')
        "
      >
        <a @click="navChange('/portfolio')" class="menu__item">Portfolio</a>
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
      page: null
    };
  },
  computed: {
    blockColor() {
      return this.menuShown ? "#3fc1d9" : "#556080";
    }
  },
  methods: {
    showMenu() {
      anime({
        targets: [".menu"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 500,
            value: this.menuShown ? 0 : 1
          }
        ]
      });
      anime({
        targets: ["#corner-logo"],
        easing: "easeInOutSine",
        rotate: [
          {
            duration: 300,
            value: this.menuShown ? 0 : 45
          }
        ]
      });
      this.menuShown = !this.menuShown;
    },
    async navChange(path) {
      if (window.location.pathname == "/") {
        let target = document.querySelectorAll(".star")[39];
        let pos = target.getBoundingClientRect();
        let that = this;
        anime.timeline({ loop: false }).add({
          targets: target,
          opacity: 0.3,
          x: this.windowWidth / 2 - this.windowWidth / 3.2,
          y: this.windowHeight / 2 - this.windowHeight / 2.5,
          width: this.windowWidth / 10,
          height: this.windowHeight / 10,
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
    setTimeout(() => {
      this.showMenu();
    }, 750);
    this.page = window;
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
};
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  z-index: 1000;
  right: 37%;
  top: 5%;
  opacity: 0;
  display: flex;
  // flex-direction: column;
  margin: 0 0 0 1vw;
  align-items: flex-start;
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
}

.menu-wrapper {
  padding-bottom: 6px;
  margin: 0 1vw;
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
}

.menu__item:hover,
.menu__item:focus {
  opacity: 0.7;
}

#corner-logo {
  position: absolute;
  top: 4%;
  left: 1%;
  opacity: 0.8;
  cursor: pointer;
  z-index: 10;
}

@media only screen and (max-width: 420px) {
  .menu {
    top: 80px;
    left: 2.5%;
    flex-direction: column;
  }

  .menu__item {
    font-size: 14px;
    margin: 0;
  }
  .menu-wrapper {
    padding-left: 1px;
    padding-bottom: 0;
    margin: 1px;
    &.active {
      background: linear-gradient(45deg, #0947db, #898ce9);
      padding: 1px 2px 1px 2px;
      border-radius: 5px;
    }
  }

  #corner-logo {
    left: 2%;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
