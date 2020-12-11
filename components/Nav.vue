<template>
  <div>
    <svg version="1.1"
          @click='showMenu'
          id="corner-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          width='50px'
          height='50px'
          x='20'
          y='20'
                  
            viewBox="0 0 58 58" xml:space="preserve">
            <g>
              <polygon style="fill:#434C6D;" points="29,58 3,45 3,13 29,26 	"/>
              <polygon :style="{'fill' : blockColor}" points="29,58 55,45 55,13 29,26 	"/>
              <polygon style="fill:#7383BF;" points="3,13 28,0 55,13 29,26 	"/>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            </svg>
    <nav class="menu">
      <a @click="navAbout" class='menu__item' to="/about">About</a>
      <nuxt-link class='menu__item' to="/contact">Contact</nuxt-link>
      <nuxt-link class='menu__item' to="/portfolio">Portfolio</nuxt-link>
      <a
        href="https://www.linkedin.com/company/adam-sebesta-development"
        target="_blank"
        rel="noopener noreferrer"
        class='menu__item'
      >
        LinkedIn
      </a>
    </nav>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  data() {
    return {
      menuShown: false,
    }
  },
  computed: {
    blockColor() {
      return this.menuShown? "#364cf4" : '#556080'
    }
  },
  methods: {
    showMenu() {
      anime({
        targets: [".menu"],
        easing: "easeInOutSine",
        opacity: [
          {
            duration: 400,
            value: this.menuShown? 0 : 1
          },
        ],
      });
      anime({
        targets: ["#corner-logo"],
        easing: "easeInOutSine",
        rotate: [
          {
            duration: 400,
            value: this.menuShown? 45 : -45
          },
        ],
      });
      this.menuShown = !this.menuShown
    },
      async navAbout() {
        if (window.location.pathname == '/') {
          let target = document.querySelectorAll('.star')[79];
          let pos = target.getBoundingClientRect();
          let that = this;
          anime.timeline({loop: false})
            .add({
              targets: target,
              // x:  (this.windowWidth / 2) - 500,
              // y:  (this.windowHeight / 2) - 400,
              x: -500,
              y: -500,
              width: this.windowWidth,
              height: this.windowHeight,
              opacity: '0.2',
              easing: "easeOutExpo",
              duration: 1000,
              complete: function(anim) {
                that.$router.push({
                  path: '/about'
                })
              }
            })
          }
      }
  },
  created() {
   
  },
  mounted() {
    setTimeout(() => {
       this.showMenu()
      }, 750);
  },
}
</script>


<style>
.bars {
  font-size: 12px;
  color: #004b19;
  margin: 10px;
  position:  absolute;
  top: 50px;
  left: 5px;
  cursor: pointer;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
