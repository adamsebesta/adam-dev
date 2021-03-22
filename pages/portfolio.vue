<template tabIndex="0">
  <div class="page">
    <Nav />
    <div class="container-main" style="overflow: hidden">
      <!-- <InfoBox
        v-if="mobile"
        :text="
          mobile ? 'Tap image for more details' : 'Hover image for more details'
        "
      /> -->
      <!-- <div @click="handleSwiper" v-if="showBounce" class="arrow"></div> -->
      <div v-if="!mobile" class="grab-container">
        <div
          class="cursor-container"
          ref="cursorContainer"
          :style="{
            transform: 'translateY(' + calcYTrans + '%)'
          }"
        >
          <div class="cursor">
            <p class="number grabui-current">
              {{ mainSwiperIndex + 1 }}
            </p>
            <div class="grabui-burg">
              <div class="burg-trail one"></div>
            </div>
            <p class="number grabui-total">
              {{ totalSlides }}
            </p>
          </div>
        </div>
        <div class="timeline">
          <div class="timeline-trail timeline-trail-top"></div>
          <div class="timeline-trail timeline-trail-bot"></div>
        </div>
      </div>
      <div class="portfolio-background">
        <div class="project-wrapper">
          <swiper
            :class="'swiper ' + (mobile ? 'mobile' : '') + ' vertical'"
            ref="mySwiper"
            v-if="showSwiper"
            @ready="onSwiperRedied"
            @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
            :options="swiperOptionv"
          >
            <swiper-slide>
              <div class="slide-wrapper">
                <VueSlickCarousel ref="carousel0" v-bind="settings">
                  <div class="project-image caro0">
                    <div class="project-image-title-overlay">
                      <div
                        class="title"
                        :style="{ transform: 'translateY(-180px)' }"
                      >
                        MR Designs
                      </div>
                      <div
                        class="subtitle"
                        :style="{ transform: 'translateY(-180px)' }"
                      >
                        Mobile App
                      </div>
                    </div>
                    <div @click="infoClickHandler(0)" class="project-info-div">
                      <div
                        class="trail-wrapper"
                        :style="{ overflow: 'hidden' }"
                      >
                        <h4>{{ infoShown[0] ? "Hide" : "Info" }}</h4>
                        <div class="trail"></div>
                      </div>
                    </div>
                    <div class="project-image-overlay-wrapper">
                      <div class="project-image-overlay">
                        <div class="project-image-overlay-title-wrapper">
                          <div>
                            <p class="overlay-featured">Featured Project</p>
                            <p class="overlay-title">Muriel Revisa Designs</p>
                            <p class="overlay-subtitle main-depth">
                              Mobile travel companion app. Currently in
                              progress, details to follow shortly.
                            </p>
                            <div class="overlay-stack">
                              <p>Nativescript-Vue</p>
                              <p>Firebase</p>
                              <p></p>
                            </div>
                          </div>
                          <p class="overlay-date">(Coming Soon)</p>
                        </div>
                      </div>
                    </div>
                    <!-- <div
                      v-if="mobile"
                      @click="glassClickHandler('0')"
                      class="slide-glass mobile"
                      :style="
                        mobile ? { opacity: glassClicked['0'] ? '1' : '0' } : {}
                      "
                    >
                      <div class="glass-title-wrapper main-depth">
                        <div>
                          <p class="glass-title">Muriel Revisa Designs</p>
                          <p class="glass-subtitle">Travel App</p>
                        </div>
                        <p class="glass-date">(Coming Soon)</p>
                      </div>
                      <div class="glass-icons main-depth">
                        <img
                          v-tooltip="'Nativescript-Vue'"
                          src="~/static/icons/nativescript-vue.png"
                          alt=""
                        />
                        <img
                          v-tooltip="'Firebase'"
                          src="~/static/icons/firebase.png"
                          alt=""
                        />
                      </div>
                      <div class="glass-project-type">Mobile</div>
                    </div> -->
                    <img
                      v-if="!mobile"
                      src="~/static/construction.png"
                      alt=""
                      rel="preload"
                      :style="'cursor:default'"
                    />
                    <img
                      v-if="mobile"
                      src="~/static/construction mobile.png"
                      alt=""
                      rel="preload"
                    />
                  </div>
                </VueSlickCarousel>
              </div>
            </swiper-slide>
            <swiper-slide
              :style="{
                transform: !mobile ? 'translate(0px,5%)' : 'translate(0px, 0%)'
              }"
            >
              <div class="slide-wrapper">
                <VueSlickCarousel ref="carousel1" v-bind="settings">
                  <div class="project-image mac caro1">
                    <div class="project-image-title-overlay">
                      <div class="title">Berlin Bytes</div>
                      <div class="subtitle">Web App</div>
                    </div>
                    <div @click="infoClickHandler(1)" class="project-info-div">
                      <div
                        class="trail-wrapper"
                        :style="{ overflow: 'hidden' }"
                      >
                        <h4>{{ infoShown[1] ? "Hide" : "Info" }}</h4>
                      </div>
                      <div class="trail"></div>
                    </div>
                    <div class="project-image-overlay-wrapper">
                      <div class="project-image-overlay">
                        <div class="project-image-overlay-title-wrapper">
                          <div>
                            <p class="overlay-featured">Featured Project</p>
                            <p class="overlay-title">Berlin Bytes</p>
                            <p class="overlay-subtitle main-depth">
                              BI tool to assist leadership and project managers
                              visualize and manipulate company data.
                            </p>
                            <div class="overlay-stack">
                              <p>Vue</p>
                              <p>Postgres</p>
                              <p>ZingChart</p>
                            </div>
                          </div>
                          <p class="overlay-date">October 2020</p>
                        </div>
                      </div>
                    </div>
                    <!-- <div
                      v-if="mobile"
                      @click="glassClickHandler('1')"
                      class="slide-glass desktop"
                      :style="
                        mobile ? { opacity: glassClicked['1'] ? '1' : '0' } : {}
                      "
                    >
                      <div class="glass-title-wrapper main-depth">
                        <div>
                          <p class="glass-title">Berlin Bytes</p>
                          <p class="glass-subtitle">
                            Business Intelligence Tool
                          </p>
                        </div>
                        <p class="glass-date">October 2020</p>
                      </div>
                      <div class="glass-icons main-depth">
                        <img
                          v-tooltip="'Vue'"
                          src="~/static/icons/vue.png"
                          alt=""
                        />
                        <img
                          v-tooltip="'Postgres'"
                          src="~/static/icons/postgres.png"
                          alt=""
                        />
                        <img
                          v-tooltip="'ZingChart'"
                          src="~/static/icons/zingchart.png"
                          alt=""
                        />
                      </div>
                      <div class="glass-project-type">Web</div>
                    </div> -->
                    <img
                      v-if="!mobile"
                      src="~/static/BB Tool.png"
                      @click="slideClick(1)"
                      alt=""
                    />
                    <img
                      v-if="mobile"
                      src="~/static/BB Tool mobile.png"
                      alt=""
                    />
                  </div>
                  <div v-if="!mobile" class="project-image">
                    <img
                      src="~/static/BI tool.png"
                      @click="slideClick(1)"
                      alt=""
                    />
                  </div>
                  <div v-if="!mobile" class="project-image">
                    <img
                      src="~/static/BI tool 3.png"
                      @click="slideClick(1)"
                      alt=""
                    />
                  </div>
                </VueSlickCarousel>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-wrapper">
                <VueSlickCarousel ref="carousel2" v-bind="settings">
                  <div class="project-image caro2">
                    <div class="project-image-title-overlay">
                      <div class="title">Berlin Bytes</div>
                      <div class="subtitle">Landing Page</div>
                    </div>
                    <div @click="infoClickHandler(2)" class="project-info-div">
                      <div
                        class="trail-wrapper"
                        :style="{ overflow: 'hidden' }"
                      >
                        <h4>{{ infoShown[2] ? "Hide" : "Info" }}</h4>
                      </div>
                      <div class="trail"></div>
                    </div>
                    <div class="project-image-overlay-wrapper">
                      <div class="project-image-overlay">
                        <div class="project-image-overlay-title-wrapper">
                          <div>
                            <p class="overlay-featured">Featured Project</p>
                            <p class="overlay-title">Berlin Bytes</p>
                            <p class="overlay-subtitle main-depth">
                              Implementation of design for Berlin Bytes company
                              landing page.
                            </p>
                            <div class="overlay-stack">
                              <p>HTML</p>
                              <p>CSS</p>
                              <p>Javascript</p>
                            </div>
                          </div>
                          <p class="overlay-date">September 2020</p>
                        </div>
                      </div>
                    </div>
                    <!-- <div
                      v-if="mobile"
                      @click="glassClickHandler('2')"
                      class="slide-glass desktop"
                      :style="
                        mobile ? { opacity: glassClicked['2'] ? '1' : '0' } : {}
                      "
                    >
                      <div class="glass-title-wrapper main-depth">
                        <div>
                          <p class="glass-title">Berlin Bytes</p>
                          <p class="glass-subtitle">Homepage</p>
                        </div>
                        <p class="glass-date">September 2020</p>
                      </div>
                      <div class="glass-icons main-depth">
                        <img
                          v-tooltip="'HTML'"
                          src="~/static/icons/html.png"
                          alt=""
                        />
                        <img
                          v-tooltip="'CSS'"
                          src="~/static/icons/css.png"
                          alt=""
                        />
                        <img
                          v-tooltip="'Javascript'"
                          src="~/static/icons/js.png"
                          alt=""
                        />
                      </div>
                      <div class="glass-project-type">Web</div>
                    </div> -->
                    <img
                      v-if="!mobile"
                      src="~/static/BerlinBytes.png"
                      @click="slideClick(2)"
                      alt=""
                    />
                    <img
                      v-if="mobile"
                      src="~/static/BerlinBytes mobile.png"
                      alt=""
                    />
                  </div>
                  <div class="project-image" v-if="!mobile">
                    <img
                      src="~/static/BB home.png"
                      @click="slideClick(2)"
                      alt=""
                    />
                  </div>
                </VueSlickCarousel>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-wrapper">
                <VueSlickCarousel ref="carousel3" v-bind="settings">
                  <div class="project-image mac caro3">
                    <div class="project-image-title-overlay">
                      <div class="title">Streamhub</div>
                      <div class="subtitle">Web App</div>
                    </div>
                    <div @click="infoClickHandler(3)" class="project-info-div">
                      <div
                        class="trail-wrapper"
                        :style="{ overflow: 'hidden' }"
                      >
                        <h4>{{ infoShown[3] ? "Hide" : "Info" }}</h4>
                      </div>
                      <div class="trail"></div>
                    </div>
                    <div class="project-image-overlay-wrapper">
                      <div class="project-image-overlay">
                        <div
                          class="project-image-overlay-title-wrapper"
                          :style="
                            windowWidth > 1350 ? { 'margin-top': '-6%' } : ''
                          "
                        >
                          <div>
                            <p class="overlay-featured">Featured Project</p>
                            <p class="overlay-title">Streamhub</p>
                            <p class="overlay-subtitle main-depth">
                              With a focus on intuitive UI (1-click login), and
                              a clean, refined design, the app consolidates all
                              of a users followed streamers from Twitch, Mixer,
                              and Youtube Gaming into one hub.
                            </p>
                            <div class="overlay-stack">
                              <p>Ruby</p>
                              <p>Rails</p>
                              <p>Postgres</p>
                            </div>
                          </div>
                          <p class="overlay-date">July 2020</p>
                        </div>
                      </div>
                    </div>
                    <!-- <div
                      v-if="mobile"
                      @click="glassClickHandler('3')"
                      class="slide-glass desktop"
                      :style="
                        mobile ? { opacity: glassClicked['3'] ? '1' : '0' } : {}
                      "
                    >
                      <div class="glass-title-wrapper main-depth">
                        <div>
                          <p class="glass-title">Streamhub</p>
                          <p class="glass-subtitle">Video Dashboard</p>
                        </div>
                        <p class="glass-date">July 2020</p>
                      </div>
                      <div class="glass-icons main-depth">
                        <img
                          v-tooltip="'Ruby'"
                          src="~/static/icons/ruby.png"
                          alt=""
                        />
                        <img
                          v-tooltip="'Rails'"
                          src="~/static/icons/rails.png"
                          alt=""
                        />
                        <img
                          v-tooltip="'Postgres'"
                          src="~/static/icons/postgres.png"
                          alt=""
                        />
                      </div>
                      <div class="glass-project-type">Web</div>
                    </div> -->
                    <img
                      v-if="!mobile"
                      src="~/static/Streamhub.png"
                      @click="slideClick(3)"
                      alt=""
                      rel="preload"
                    />
                    <img
                      v-if="mobile"
                      src="~/static/Streamhub mobile.png"
                      alt=""
                      rel="preload"
                    />
                  </div>
                  <video
                    id="giftwitch"
                    v-if="!mobile"
                    playsinline
                    autoplay
                    muted
                    loop
                    tabindex="0"
                    @click="slideClick(3)"
                  >
                    <source
                      src="https://res.cloudinary.com/dwtuoc2xm/video/upload/v1591956213/ezgif.com-crop_1_nq3xst.webm"
                      type='video/webm; codecs="vp8, vorbis"'
                    />
                  </video>
                  <div class="project-image" v-if="!mobile">
                    <img
                      src="~/static/Streamhub 1.png"
                      v-if="!mobile"
                      @click="slideClick(3)"
                      alt=""
                    />
                  </div>
                </VueSlickCarousel>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- <div class="background-center" :style="{ width: '70%' }"></div> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import { Swiper, SwiperSlide, directive, EffectFade } from "vue-awesome-swiper";
import anime from "animejs";

export default {
  components: { Nav, Swiper, SwiperSlide },
  directives: {
    swiper: directive
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        { hid: "og:title", property: "og:title", content: this.title },
        { hid: "og:image", property: "og:image", content: this.image }
      ]
    };
  },
  data() {
    return {
      background: null,
      showSwiper: null,
      title: "Adam Sebesta Development | Portfolio",
      description: "My Recent Work",
      image: "~/static/meta.png",
      settings: {
        dots: true,
        // arrows: true,
        swipe: false,
        edgeFriction: 0.35,
        infinite: false,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      swiperOptionv: {
        direction: "vertical",
        // effect: "coverflow",
        // coverflowEffect: {
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true
        // },
        slidesPerView: 1,
        spaceBetween: 160,
        clickable: false,
        simulateTouch: false,
        speed: 1200,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        }
      },
      formValues: {},
      logo: false,
      sent: false,
      showBounce: true,
      caroCounter: {
        // carousel0: { counter: 0, limit: 2 },
        carousel1: { counter: 0, limit: 2 },
        carousel2: { counter: 0, limit: 1 },
        carousel3: { counter: 0, limit: 2 }
      },
      mainSwiperIndex: 0,
      totalSlides: null,
      infoShown: { 0: null, 1: null, 2: null, 3: null }
    };
  },
  computed: {
    swiper() {
      if (this.$refs.mySwiper) {
        return this.$refs.mySwiper.$swiper;
      }
    },
    calcYTrans() {
      return (
        (this.mainSwiperIndex / this.totalSlides) * (this.windowHeight / 1.3)
      );
    }
  },
  methods: {
    moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },
    slideClick(ref) {
      let key = "carousel" + ref;
      let caro = this.caroCounter[key];
      if (!this.mobile && caro.counter < caro.limit) {
        this.$refs[key].next();
        caro.counter++;
      } else {
        this.$refs[key].goTo(0);
        caro.counter = 0;
      }
    },
    handleSwiper() {
      this.swiper.slideTo(this.swiper.activeIndex + 1, 300, false);
      if (this.swiper.activeIndex == this.swiper.slides.length - 1) {
        this.showBounce = false;
      }
      this.mainSwiperIndex = this.swiper.activeIndex;
    },
    removeTooltipsOnScroll() {
      // let tooltip = document.querySelector(".v-tooltip-open");
      let popover = document.querySelector(".tooltip");

      popover.style.visibility = "hidden";
      // popover.style.visibility = "visible";

      console.log(popover);
    },
    onSwiperSlideChangeTransitionStart(index) {
      // this.removeTooltipsOnScroll();
      let dir = this.mainSwiperIndex < index.activeIndex ? "down" : "up";
      this.mainSwiperIndex = index.activeIndex;
      this.toggleTitle(index.activeIndex, dir);
      // this.toggleTitle(index.activeIndex, dir == "down" ? "up" : "down");
      if (index.activeIndex == index.slides.length - 1) {
        this.showBounce = false;
      } else {
        this.showBounce = true;
      }
      // if info pane is shown, rehide when scrolling
      let openInfo =
        dir == "down" ? this.mainSwiperIndex - 1 : this.mainSwiperIndex + 1;
      if (this.infoShown[openInfo]) {
        this.infoClickHandler(openInfo);
      }
    },
    onSwiperRedied() {
      anime({
        targets: ".project-wrapper",
        opacity: [
          {
            duration: 2000,
            value: [0, 1]
          }
        ],
        easing: "easeOutExpo"
      });
    },
    // glassClickHandler(key) {
    //   this.glassClicked[key] = !this.glassClicked[key];
    // },
    translateTitle(tar, val) {
      anime({
        targets: [`${tar} .title`, `${tar} .subtitle`],
        translateY: [
          {
            duration: this.mobile ? 1200 : 1600,
            value: val
          }
        ],
        easing: "easeInOutExpo"
      });
    },
    upscrollAnim(key) {
      let targetClass = ".caro" + key;
      let targetClassNext = ".caro" + (key + 1);
      this.translateTitle(targetClass, ["180", "0px"]);
      this.translateTitle(targetClassNext, ["0px", "-180"]);
    },
    downscrollAnim(key) {
      let targetClass = ".caro" + key;
      let targetClassNext = ".caro" + (key - 1);
      this.translateTitle(targetClass, ["-180px", "0px"]);
      this.translateTitle(targetClassNext, ["0px", "180px"]);
    },
    toggleTitle(key, dir) {
      if (dir == "up") {
        this.upscrollAnim(key);
      }
      if (dir == "down") {
        this.downscrollAnim(key);
      }
    },
    infoClickHandler(key) {
      let targetClass = ".caro" + key;
      if (!this.mobile) {
        anime({
          targets: [`${targetClass} .project-info-div .trail-wrapper`],
          translateY: [
            {
              duration: 1000,
              value: this.infoShown[key] ? "0px" : "100px"
            }
          ],
          easing: "easeOutExpo",
          delay: 100
        });
      }

      this.translateTitle(
        targetClass,
        this.infoShown[key] ? ["-180px", "0px"] : ["0px", "-180px"]
      );

      anime({
        targets: [`${targetClass} .trail`],
        translateX: [
          {
            duration: 1000,
            value: ["35%", "35%"]
          }
        ],
        translateY: this.infoShown[key] ? ["85px", "-15px"] : ["-15px", "85px"],
        easing: "easeOutExpo",
        delay: 100
      });
      anime({
        targets: `${targetClass} .project-image-overlay`,
        translateY: [
          {
            duration: this.mobile ? 750 : 1000,
            value: this.infoShown[key] ? ["50%", "350%"] : ["350%", "50%"]
          }
        ],
        easing: this.infoShown[key] ? "easeInExpo" : "easeOutExpo",
        delay: this.infoShown[key] ? 0 : 800
      });
      this.infoShown[key] = !this.infoShown[key];
    }
  },
  created() {},

  mounted() {
    setTimeout(() => {
      if (this.mobile) {
        this.swiperOptionv.speed = 250;
      }
      this.showSwiper = true;
    }, 250);
    setTimeout(() => {
      this.toggleTitle(0, "down");
      this.totalSlides = this.swiper.slides.length;
    }, 750);
  }
};
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

img {
  -moz-user-select: none; /* These user-select properties are inheritable, used to prevent text selection */
  -webkit-user-select: none;
  -ms-user-select: none; /* From IE10 only */
  user-select: none; /* Not valid CSS yet, as of July 2012 */

  -webkit-user-drag: none; /* Prevents dragging of images/divs etc */
  user-drag: none;
}

.scroll-more {
  font-size: 16px;
  position: absolute;
  font-size: 14px;
  bottom: 5%;
  left: 48%;

  z-index: 10;
}

.portfolio-background {
  width: 80%;
  height: 80vh;
  display: flex;
  z-index: 1;
}

.nav-wrapper {
  position: relative;
}
.title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $mainGold;
  height: 100%;
  width: 30%;
  h2 {
    font-size: 24px;
    font-weight: 00;

    // margin-left: 40px;
    img {
      height: 15px;
    }
  }
  p {
    margin-top: 5px;
  }
  img {
  }
}

.left {
  transform: rotate(90deg) !important;
}

.right {
  transform: rotate(270deg) !important;
}
.project-wrapper {
  width: 90%;
  max-width: 1300px;
  height: 100%;
  margin-left: 40px;
  background-color: transparent;
  opacity: 0;
}

// .project-background {
//   background-color: white;
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   margin-left: auto;
// }

.project-desc {
  width: 100%;
  height: 45%;
}

.project-photos {
  width: 100%;
  height: 45%;
}

.small {
  padding: 10px 30px !important;
}

.logo-top {
  position: absolute;
  margin-top: 20px;
  margin-left: 10px;
  top: 10px;
  left: 10px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 25px;
  z-index: 2;
}

// .example-3d {
//     width: 100%;
//     height: 400px;
//     padding-top: 50px;
//     padding-bottom: 50px;
//   }

.mac {
  object-fit: contain;
}

.slick-prev,
.slick-next,
.slick-prev:before,
.slick-next:before {
  font-size: 26px !important;
  display: none;
}

.arrow,
.arrow:before {
  position: absolute;
  left: 50%;
}

.arrow {
  width: 30px;
  height: 30px;
  top: 90%;
  margin: -20px 0 0 -20px;
  -webkit-transform: translateX(-15px) rotate(45deg);
  border-left: none;
  border-top: none;
  border-right: 2px #fff5 solid;
  z-index: 10000;
  cursor: pointer;
  border-bottom: 2px #fff5 solid;
}

.arrow:before {
  content: "";
  width: 20px;
  height: 20px;
  top: 50%;
  margin: -10px 0 0 -10px;
  border-left: none;
  border-top: none;
  border-right: 1px #fff5 solid;
  border-bottom: 1px #fff5 solid;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: arrow;
}
@keyframes arrow {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-10px, -10px);
  }
}

.grab-container {
  height: 60%;
  width: 90px;
  position: absolute;
  top: 20%;
  right: 10%;
  z-index: 100;
  // cursor: move;
  // cursor: -webkit-grab;
  // cursor: grab;
  // opacity: 0;
  // visibility: hidden;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  .timeline {
    position: absolute;
    height: 100%;
    width: 1px;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    .timeline-trail {
      width: 100%;
      position: absolute;
      height: 100%;
      background-color: $grey;
    }
  }
  .cursor-container {
    width: 100%;
    height: 88px;
    position: relative;
    background-color: $background;
    z-index: 1;
    transition: all 1000ms ease-out;
    .cursor {
      width: 100%;
      height: 18px;
      text-align: center;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-6%);
      position: absolute;
      margin: auto;
      bottom: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      .grabui-current {
        transform-origin: 50% 50% 0px;
        transform: matrix(1, 0, 0, 1, 15, -15);
        margin-top: 15px;
      }
      .grabui-total {
        transform-origin: 50% 50% 0px;
        transform: matrix(1, 0, 0, 1, -15, 15);
      }
      .grabui-burg {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: 16px;
        height: 1px;
        transform: matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, 0);

        .burg-trail {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: $grey;
        }
      }
      .number {
        width: 32px;
        height: 20px;
        color: $grey;
        -webkit-transition: color 0.25s;
        transition: color 0.25s;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 1px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}

.swiper-container {
  background-color: transparent !important;
  z-index: 1;
}
// .swiper-wrapper {
//   transition: all 500ms ease-in-out !important;
// }

.slide-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: transparent;
  margin-bottom: 0;

  .mobile {
    width: 500px;
    height: 500px;
    padding: 3rem 5rem;
  }
  .desktop {
    width: 700px;
    height: 500px;
    padding: 3rem 6rem;
  }
  //   .slide-glass {
  //     box-shadow: 0 10px 30px -15px #010310;
  //     margin: 0 auto;
  //     background-color: #0e1331;
  //     z-index: 1;
  //     position: absolute;
  //     top: 50%;
  //     left: 50%;
  //     transform: translate(-50%, -50%);
  //     border-radius: 10px;
  //     display: flex;
  //     flex-direction: column;
  //     opacity: 0;
  //     justify-content: space-between;
  //     transition: all 250ms ease-in;
  //     transition-delay: 0.1s;
  //     &:hover {
  //       opacity: 1;
  //       // box-shadow: -5px 5px #0f0f17;
  //     }
  //     .glass-title-wrapper {
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: space-between;
  //       align-items: center;
  //       color: $mainGold;
  //       font-size: 24px;
  //       line-height: normal;
  //       .glass-subtitle {
  //         font-size: 18px;
  //         color: $grey;
  //         font-family: $bodyFont;
  //         font-weight: 400;
  //       }
  //       .glass-date {
  //         font-size: 18px;
  //         color: $grey;
  //         font-family: $bodyFont;
  //         font-weight: 400;
  //       }
  //     }
  //     .glass-icons {
  //       display: flex;
  //       width: 100%;
  //       margin: 0 auto;
  //       justify-content: center;
  //       img {
  //         height: 120px;
  //         width: 120px;
  //       }
  //     }
  //     .glass-project-type {
  //       color: $grey;
  //       font-size: 20px;
  //       opacity: 0.3;
  //       font-family: $bodyFont;
  //     }
  //   }
  //   .project-title {
  //     font-size: 22px;
  //     font-weight: 700;
  //     color: $mainGold;
  //     width: 50%;
  //     margin: 0 auto;
  //     margin-bottom: 5px;

  //     // background: linear-gradient(45deg, #f19872, #e86c9a);
  //   }
}
.project-image-title-overlay {
  color: $mainGold;
  width: 540px;
  cursor: default;
  pointer-events: none;
  position: absolute;
  top: 40%;
  left: 8%;
  text-align: left;
  overflow: hidden;
  z-index: 1;
  .title {
    // transform: translateY(-120px);
    font-size: 90px;
    font-weight: 700;
  }
  .subtitle {
    // transform: translateY(-120px);
    color: $grey;
    font-weight: 700;
    font-size: 22px;
  }
}
.project-info-div {
  position: absolute;
  z-index: 1;
  bottom: 5%;
  left: 15%;
  transform: rotate(270deg);
  /* overflow: hidden; */
  width: 10%;
  // width: 0;
  cursor: pointer;
  text-align: left;
  h4 {
    padding: 3px 0;
    font-size: 16px;
    letter-spacing: 1px;
    color: $grey;
    display: inline-block;
    vertical-align: middle;
  }
  .trail {
    width: 80%;
    height: 1px;
    opacity: 0.4;
    background-color: #fff8;
    vertical-align: middle;
    transform: translate(35%, -15px);
    will-change: transform;
    // transform-origin: 100% 50% 0px;
    // transform: matrix(1, 0, 0, 1, 0, 0);
  }
}

.project-image-overlay-wrapper {
  overflow: hidden;
  height: 88%;
  position: absolute;
  top: 0%;
  left: 8%;
  width: 50%;
  text-align: left;
  will-change: transform;
  .project-image-overlay {
    transform: translateY(350%);
    z-index: 1;

    // position: absolute;
    top: 45%;
    // left: 8%;
    // width: 50%;
    // text-align: left;
    .overlay-featured {
      color: $grey;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .overlay-title {
      color: $mainGold;
      margin-bottom: 10px;
      font-size: 30px;
    }
    .overlay-subtitle {
      color: $white;
      font-family: $bodyFont;
      font-size: 18px;
      font-weight: 400;
      min-width: 450px;
    }
    .overlay-stack {
      display: flex;
      width: 60%;
      margin-right: auto;
      color: $white;
      justify-content: space-between;
      margin-top: 20px;
      font-size: 12px;
    }
    .overlay-date {
      margin-top: 10px;
      color: $grey;
      font-size: 16px;
    }
  }
}

.project-image {
  position: relative;
  width: 85% !important;
  img {
    cursor: e-resize;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: contain;
    padding-bottom: 10px;
    outline: none;
    z-index: -1;
  }
  &:focus {
    outline: none;
  }
}

.slick-track:focus {
  outline: none !important;
}

#giftwitch {
  margin: 0 auto;
  // padding: 10px;
  object-fit: contain;
  width: 80% !important;
  cursor: e-resize;
}

.swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    text-align: center;
    font-weight: bold;
    font-size: 10 * 2;
    background-color: transparent;
    background-position: center;
    background-size: cover;
    color: black;
  }
}

.swiper-pagination {
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: black;
  }
}
//   }

@media only screen and (min-width: 1700px) {
  .arrow {
    left: 49%;
  }
}
@media only screen and (max-width: 1400px) {
  .title-wrapper {
    display: none;
  }

  .portfolio-background {
    background-color: transparent;
    width: 100%;
  }

  .project-image-title-overlay {
    left: 15%;
    .title {
      font-size: 54px;
    }
    .subtitle {
      font-size: 15px;
    }
  }
  .grab-container {
    display: none;
  }
  .project-image-overlay-wrapper {
    left: 10%;
    .project-image-overlay {
      // transform: translateY(25%);
      .project-image-overlay-title-wrapper {
        margin-top: 10%;
        .overlay-featured {
          font-size: 14px;
        }
        .overlay-title {
          font-size: 24px;
        }
        .overlay-subtitle {
          font-size: 12px;
        }
        .overlay-date {
          font-size: 12px;
        }
      }
    }
  }

  .project-image {
    img {
      width: 90%;
      height: 90%;
      min-width: 800px;
      margin: 0 auto;
      margin-top: 50px;
      padding-bottom: 10px;
    }
  }

  #giftwitch {
    width: 650px;
    height: 400px;
    margin: 0 auto;
    margin-top: 50px;
    padding-bottom: 10px;
    // padding: 10px;
    object-fit: cover;
  }

  .project-title {
    font-size: 16px !important;
  }

  .logo-small {
    height: 70px;
  }

  .portfolio-background {
    width: 100%;
  }
}

@media only screen and (max-width: 420px) {
  .arrow {
    height: 20px;
    width: 20px;
    margin-left: 2%;
  }

  .slick-prev {
    transform: translate(20px, -19px);
    z-index: 1;
  }

  .slick-next {
    transform: translate(-28px, -18px);
    z-index: 1;
  }

  .slide-wrapper {
    padding: 0;
    // margin-top: 13%;
  }

  .project-wrapper {
    margin: 0 auto !important;
    margin-left: 0;
    width: 100%;
  }
  .project-info-div {
    bottom: 8%;
    width: 20%;
    left: 9%;
    transform: rotate(0deg);
  }
  .portfolio-background {
    width: 100%;
    margin-top: -20px;
  }

  .project-image-overlay-wrapper {
    width: 70%;
    margin-top: 10%;
    .project-image-overlay {
      .overlay-subtitle {
        font-weight: 600;
        max-width: 252px;
        min-width: unset;
      }
    }
  }
  .project-image {
    width: 100% !important;
    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      min-width: unset;
      object-fit: contain;
      margin-top: 10px;
      padding-bottom: 10px;
    }
  }

  #giftwitch {
    width: 375px;
    height: 250px;
    margin: 0 auto;
    margin-top: 10px;
    padding-bottom: 10px;
    // padding: 10px;
    object-fit: contain;
  }
  .slick-dots {
    display: none;
  }
}
// IOS SAFARI ONLY
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .mobile {
      .swiper-slide {
        width: calc(100% - 20px) !important;
        margin: 0 auto;
        // margin-bottom: 300px !important;
      }
    }
  }
}

// @media screen and (min-color-index: 0) and(-webkit-min-device-pixel-ratio:0) {
//   .swiper {
//     .swiper-slide {
//       height: 450px !important;
//       margin-bottom: 250px !important;
//     }
//   }
/*
      Define here the CSS styles applied only to Safari browsers
      (any version and any device)
     */
// }
</style>
