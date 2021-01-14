<template>
  <div class="page">
    <Nav />
    <div class="container-main">
      <div @click="handleSwiper" v-if="showBounce" class="arrow"></div>
      <div class="portfolio-background">
        <div class="project-wrapper">
          <swiper
            class="swiper vertical"
            ref="mySwiper"
            @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
            :options="swiperOptionv"
          >
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <swiper-slide>
              <div class="slide-wrapper">
                <VueSlickCarousel ref="carousel" v-bind="settings">
                  <div class="project-image">
                    <div
                      @click="glassClickHandler('1')"
                      class="slide-glass mobile"
                      :style="
                        windowWidth < 425
                          ? { opacity: glassClicked['1'] ? '1' : '0' }
                          : {}
                      "
                    >
                      <div class="glass-title-wrapper">
                        <div>
                          <p class="glass-title">Muriel Revisa Designs</p>
                          <p class="glass-subtitle">Travel App</p>
                        </div>
                        <p class="glass-date">(Coming Soon)</p>
                      </div>
                      <div class="glass-icons">
                        <img
                          v-tooltip="'Nativescript'"
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
                    </div>
                    <img src="~/static/construction.png" alt="" rel="preload" />
                  </div>
                </VueSlickCarousel>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-wrapper">
                <VueSlickCarousel ref="carousel" v-bind="settings">
                  <div class="project-image mac">
                    <div
                      @click="glassClickHandler('1')"
                      class="slide-glass desktop"
                      :style="
                        windowWidth < 425
                          ? { opacity: glassClicked['1'] ? '1' : '0' }
                          : {}
                      "
                    >
                      <div class="glass-title-wrapper">
                        <div>
                          <p class="glass-title">Muriel Revisa Designs</p>
                          <p class="glass-subtitle">Travel App</p>
                        </div>
                        <p class="glass-date">(Coming Soon)</p>
                      </div>
                      <div class="glass-icons">
                        <img
                          v-tooltip="'Nativescript'"
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
                    </div>
                    <img src="~/static/Streamhub.png" alt="" rel="preload" />
                  </div>
                  <video
                    id="giftwitch"
                    playsinline
                    autoplay
                    muted
                    loop
                    tabindex="0"
                    width="550px"
                    height="550px"
                  >
                    <source
                      src="https://res.cloudinary.com/dwtuoc2xm/video/upload/v1591956213/ezgif.com-crop_1_nq3xst.webm"
                      type='video/webm; codecs="vp8, vorbis"'
                    />
                  </video>
                  <div class="project-image">
                    <img src="~/static/Streamhub 1.png" alt="" />
                  </div>
                </VueSlickCarousel>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div class="slide-wrapper">
                <span class="project-title">
                  <span class="left">Berlin Bytes </span>
                  <i class="fa fa-square middle" aria-hidden="true"></i>
                  <span class="right"> Homepage </span>
                </span>
                <VueSlickCarousel ref="carousel1" v-bind="settings">
                  <div class="project-image mac">
                    <img src="~/static/BerlinBytes.png" alt="" />
                  </div>
                  <div class="project-image">
                    <img src="~/static/BB home.png" alt="" />
                  </div>
                </VueSlickCarousel>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="slide-wrapper">
                <span class="project-title">
                  <span class="left">Berlin Bytes </span>
                  <i class="fa fa-square middle" aria-hidden="true"></i>
                  <span class="right"> Business Intelligence Tool </span>
                </span>
                <VueSlickCarousel ref="carousel2" v-bind="settings">
                  <div class="project-image mac">
                    <img src="~/static/CinderellaDB.png" alt="" />
                  </div>
                  <div class="project-image">
                    <img src="~/static/BI tool.png" alt="" />
                  </div>
                  <div class="project-image">
                    <img src="~/static/BI tool 1.png" alt="" />
                  </div>
                  <div class="project-image">
                    <img src="~/static/BI tool 3.png" alt="" />
                  </div>
                </VueSlickCarousel>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="background-center"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";

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
      title: "Adam Sebesta Development | Portfolio",
      description: "My Recent Work",
      image: "~/static/meta.png",
      settings: {
        dots: false,
        arrows: true,
        swipe: false,
        edgeFriction: 0.35,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      swiperOptionv: {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        clickable: false,
        effect: "fade",
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
        carousel: 0,
        carousel1: 0,
        carousel2: 0
      },
      mainSwiperIndex: 0,
      glassClicked: {
        1: null
      },
      windowHeight: 1200,
      windowWidth: 1200
    };
  },
  computed: {
    swiper() {
      if (this.$refs.mySwiper) {
        return this.$refs.mySwiper.$swiper;
      }
    }
  },
  methods: {
    moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },
    handleSwiper() {
      this.swiper.slideTo(this.swiper.activeIndex + 1, 300, false);
      if (this.swiper.activeIndex == this.swiper.slides.length - 1) {
        this.showBounce = false;
      }
    },
    onSwiperSlideChangeTransitionStart(index) {
      this.mainSwiperIndex = index.activeIndex;
      if (index.activeIndex == index.slides.length - 1) {
        this.showBounce = false;
      } else {
        this.showBounce = true;
      }
    },
    glassClickHandler(key) {
      this.glassClicked[key] = !this.glassClicked[key];
    }
  },
  created() {
    // this.moveLogo();
    // let image = new Image();
    // this.image.src = '~/static/Streamhub.png';
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
};
</script>

<style lang="scss">
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
html {
  overflow: hidden;
}

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
  color: $lightBlue;
  z-index: 10;
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
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
  color: $lightBlue;
  height: 100%;
  width: 30%;
  h2 {
    font-size: 24px;
    font-weight: 00;
    letter-spacing: 3px;
    // margin-left: 40px;
    img {
      height: 15px;
    }
  }
  p {
    margin-top: 5px;
    letter-spacing: 2px;
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
  height: 100%;
  margin-left: 40px;
  background-color: transparent;
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
  border-right: 2px #fff solid;
  z-index: 1;
  cursor: pointer;
  border-bottom: 2px #fff solid;
}

.arrow:before {
  content: "";
  width: 20px;
  height: 20px;
  top: 50%;
  margin: -10px 0 0 -10px;
  border-left: none;
  border-top: none;
  border-right: 1px #fff solid;
  border-bottom: 1px #fff solid;
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

.swiper-container {
  background-color: transparent !important;
  z-index: 1;
}

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
    width: 400px;
    height: 500px;
  }
  .desktop {
    width: 700px;
    height: 500px;
  }
  .slide-glass {
    margin: 0 auto;
    background-color: rgba($color: #1c1f35, $alpha: 0.98);
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 3rem 6rem;
    opacity: 0;
    justify-content: space-between;
    transition: all 250ms ease-in;
    &:hover {
      opacity: 1;
    }
    .glass-title-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      color: $lightBlue;
      font-size: 26px;
      line-height: normal;
      .glass-subtitle {
        font-size: 20px;
      }
      .glass-date {
        font-size: 20px;
      }
    }
    .glass-icons {
      display: flex;
      width: 100%;
      margin: 0 auto;
      justify-content: center;
      img {
        height: 120px;
        width: 120px;
      }
    }
    .glass-project-type {
      color: $lightBlue;
      font-size: 26px;
      opacity: 0.3;
    }
  }
  .project-title {
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: 700;
    color: $lightBlue;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 5px;
    .middle {
      color: #3fc1d9;
      font-size: 11px;
      vertical-align: middle;
      margin-top: -2px;
    }
    // background: linear-gradient(45deg, #f19872, #e86c9a);
  }
}

.project-image {
  position: relative;
  img {
    width: 850px;
    height: 500px;
    margin: 0 auto;
    object-fit: contain;
    padding-bottom: 10px;
    outline: none;
  }
  &:focus {
    outline: none;
  }
}

.slick-track:focus {
  outline: none !important;
}

#giftwitch {
  width: 850px;
  height: 500px;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 10px;
  // padding: 10px;
  object-fit: contain;
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
@media only screen and (max-width: 800px) {
  .title-wrapper {
    display: none;
  }

  .portfolio-background {
    background-color: transparent;
    width: 100%;
  }

  .project-image {
    img {
      width: 650px;
      height: 400px;
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

  .slide-wrapper {
    .slide-glass {
      padding: 2rem 2rem;
      height: 300px;

      &:hover {
        opacity: 1;
      }
      .glass-title-wrapper {
        font-size: 12px;
        line-height: normal;
        .glass-subtitle {
          font-size: 10px;
        }
        .glass-date {
          font-size: 12px;
        }
      }
      .glass-icons {
        img {
          height: 60px;
          width: 60px;
        }
      }
      .glass-project-type {
        font-size: 12px;
      }
    }
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
    .project-title {
      font-size: 13px !important;
      letter-spacing: 1px;
      width: 90%;
      .middle {
        font-size: 6px;
      }
    }
  }

  .project-wrapper {
    margin: 0 auto !important;
    margin-left: 0;
  }

  .portfolio-background {
    width: 100%;
    margin-top: -20px;
  }

  .project-image {
    img {
      width: 375px;
      height: 250px;
      margin: 0 auto;
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
}
</style>
