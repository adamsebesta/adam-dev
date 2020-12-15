<template>
  <div>
    <svg version="1.1"
          @click='showMenu'
          id="corner-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          width='8vw'
          height='8vh'
          x='1'
          y='1'
                  
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
    <nav 
      class="menu"
      :style="{'display': menuShown? '' : 'none'}"
    >
      <a v-if="!this.$route.name == '/'" @click="navChange('/')" class='menu__item'>Home</a>
      <a @click="navChange('/about')" class='menu__item'>About</a>
      <a @click="navChange('/contact')" class='menu__item'>Contact</a>
      <a @click="navChange('/portfolio')" class='menu__item'>Portfolio</a>
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
      return this.menuShown? "#3fc1d9" : '#556080'
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
            value: this.menuShown? 0 : 45
          },
        ],
      });
      this.menuShown = !this.menuShown
    },
      async navChange(path) {
        if (window.location.pathname == '/') {
          let target = document.querySelectorAll('.star')[39];
          let pos = target.getBoundingClientRect();
          let that = this;
          anime.timeline({loop: false})
            .add({
              targets: target,
              opacity: 0.3,
              x:  (this.windowWidth / 2) - (this.windowWidth / 2.5),
              y:  (this.windowHeight / 2) - (this.windowHeight / 2.5), 
              width: this.windowWidth,
              height: this.windowHeight,
              easing: "easeOutExpo",
              duration: 1000,
            })
            setTimeout(()=> {
              that.$router.push({
                path: path
              })
            }, 300)
          }
          else {
             this.$router.push({
            path: path
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
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  },
}
</script>


<style lang='scss' scoped>
.menu {
	position: absolute;
  z-index: 1000;
  opacity: 0;
  top: 11%;
  left: 2%;
	display: flex;
	flex-direction: column;
	margin: 0 0 0 1vw;
	align-items: flex-start;
}

.menu__item {
  color: $lightBlue;
  text-shadow: 6px 6px 0px rgba(0,0,0,0.2);
	line-height: 1.25;
	letter-spacing: -0.025em;
	text-indent: -0.025em;
  // background: linear-gradient(45deg, #0947db, #898ce9);
  font-weight: 900;
  font-size: 1.25vw;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
  position: relative;
  cursor: pointer;
}

.menu__item:hover,
.menu__item:focus {
	color: $purple
}

.menu__item::before {
	content: '';
	width: 60%;
	height: 10%;
	background: linear-gradient(45deg, #f19872, #e86c9a);
	position: absolute;
	left: 0;
	bottom: 0;
	transform-origin: 0 0;
	transform: scale3d(0,1,1);
}

#corner-logo {
  position: absolute;
  top: 2%;
  left: 1%;
  opacity: .8;
  cursor: pointer;
  z-index: 10;
}

@media only screen and (max-width: 420px) {
  .menu {
    top: 9%;
  }
  .menu__item {
    font-size: 14px;
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
