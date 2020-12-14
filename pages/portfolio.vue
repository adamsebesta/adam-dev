<template>
  <div class="container-main">
    <div class='portfolio-background'>
    
      <div class='project-wrapper'>
        <swiper class="swiper vertical" :options="swiperOptionv">
          <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          <swiper-slide>
            <div class='slide-wrapper'>
              <span class='project-title'> StreamHub| Video Dashboard </span>
              <VueSlickCarousel ref="carousel" v-bind="settings">
                <div class='project-image mac'> <img src="~/static/Streamhub.png" alt="" rel="preload"></div>
                <video id="giftwitch" playsinline autoplay muted loop tabindex="0" width = "550px" height = "550px">
                  <source src="https://res.cloudinary.com/dwtuoc2xm/video/upload/v1591956213/ezgif.com-crop_1_nq3xst.webm" type='video/webm; codecs="vp8, vorbis"' />
                </video>
                <div class='project-image'> <img src="~/static/Streamhub 1.png" alt=""></div>
              </VueSlickCarousel>
              <div class='caro-nav'>
                <div class='arrow left' v-if="caroCounter.carousel > 0" @click="setCaroNav('carousel', 'b')"></div>
                <div class='arrow right' v-if="caroCounter.carousel < 2" @click="setCaroNav('carousel', 'f')"></div>
              </div>
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class='slide-wrapper'>
              <span class='project-title'> Berlin Bytes| Homepage </span>
              <VueSlickCarousel ref="carousel1" v-bind="settings">
                <div class='project-image mac'> <img src="~/static/BerlinBytes.png" alt=""></div>
                <div class='project-image'> <img src="~/static/BB home.png" alt=""></div>
              </VueSlickCarousel>
              <div class='caro-nav'>
                <div class='arrow left' v-if="caroCounter.carousel1 > 0 " @click="setCaroNav('carousel1', 'b')"></div>
                <div class='arrow right' v-if="caroCounter.carousel1 < 1" @click="setCaroNav('carousel1', 'f')"></div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class='slide-wrapper'>
              <span class='project-title'> Berlin Bytes| BI Tool </span>
              <VueSlickCarousel ref="carousel2" v-bind="settings">
                <div class='project-image mac'> <img src="~/static/CinderellaDB.png" alt=""></div>
                <div class='project-image'> <img src="~/static/BI tool.png" alt=""></div>
                <div class='project-image'> <img src="~/static/BI tool 1.png" alt=""></div>
                <div class='project-image'> <img src="~/static/BI tool 3.png" alt=""></div>
              </VueSlickCarousel>
              <div class='caro-nav'>
                <div class='arrow left' v-if="caroCounter.carousel2 > 0" @click="setCaroNav('carousel2', 'b')"></div>
                <div class='arrow right'  v-if="caroCounter.carousel2 < 3" @click="setCaroNav('carousel2', 'f')"></div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

   </div>

    <Nav/>
   
  </div>
</template>

<script>
import Nav from '../components/Nav';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';

export default {
  components: {Nav, Swiper, SwiperSlide},
  directives: {
    swiper: directive
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        { hid: 'og:title',  property: 'og:title', content: this.title },
        { hid: 'og:image', property: 'og:image', content: this.image },
      ],
    }
  },
  data() {
    return {
      background: null,
      // img: '~/static/Streamhub.png',
      title: 'Adam Sebesta Development | Portfolio',
      description: 'My Recent Work',
      image: '~/static/meta.png',
      settings: {
        dots: false,
        arrows: false,
        swipe: false,
        edgeFriction: 0.35,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,

      },
      swiperOptionv: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          clickable: false,
          effect: 'fade',
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
        },
      formValues: {},
      logo: false,
      sent: false,
      caroCounter: {
        carousel: 0,
        carousel1: 0,
        carousel2:0
      }
    }
  },
  computed: {
  },
  methods: {
     moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },
    setCaroNav(ref, dir) {
      console.log()
      if (dir == 'f') {
        this.caroCounter[ref] += 1;
        this.$refs[ref].next();
      }
       if (dir == 'b') {
        this.caroCounter[ref] -= 1;
        this.$refs[ref].prev();
      }
    }
    
  },
  created() {
    // this.moveLogo();
    // let image = new Image(); 
    // this.image.src = '~/static/Streamhub.png'; 
  }
}
</script>

<style lang='scss'>

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



.portfolio-background {
  width: 80%;
  height: 80vh;
  display: flex;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $lightBlue;
  height: 100%;
  width: 30%;
  h2{
    font-size: 24px;
    font-weight: 00;
    letter-spacing: 3px;
    // margin-left: 40px;
    img {
      height: 15px;
    }
  }
  p{
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
  background-color: white;
  
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

.background-img {
  transition: all 1.5s ease;
  background-image: url('~static/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
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

.arrow  {
    // left: 50%;
    // position: fixed;
    // top: 50%;
    margin: 5px;
    transform: translate3d(-50%,-50%,0px);
}

// The actual arrow styles, make it an area for 50x50 for ease of use on touch devices
.arrow {
    border: 2px solid $lightBlue;
    cursor: pointer;
    height: 35px;
    width: 35px;
    border-radius: 5px;
    
    &:before {
        
        border-top: 4px solid $lightBlue;
        border-right: 4px solid $lightBlue;
        box-sizing: border-box;
        content: '';
        height: 12px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -75%, 0px) rotate(135deg);
        // Uncomment if you want it to move (probably better not to, looks weird)
        // transition: transform 0.3s;
        // will-change: transform;
        width: 12px;
    }
    
    // The 'flip' state, just on hover for ease atm
    &:hover:before {
        
       border-top: 4px solid $lightBlue;
        border-right: 4px solid $lightBlue;
    }

    &:hover {
      background-color: $purple;
    }
}
.caro-nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-container {
  background-color: $background !important;
}

.slide-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background-color: $background;
  margin-bottom: 0;
    .project-title {
      font-size: 22px;
      letter-spacing: 2px;
      font-weight: 700;
      color: $lightBlue;
  }
}

.project-image {
  img {
    width: 850px;
    height: 500px;
    margin: 0 auto;
    object-fit: contain;
    margin-top: 30px;
    padding-bottom: 10px;
    outline: none;
  }
  &:focus {
    outline: none;
  }
}

.slick-track:focus {
  outline: none  !important;
}

#giftwitch {
  width: 850px;
  height: 500px;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 10px;
  // padding: 10px;
  object-fit:contain;
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
@media only screen and (max-width: 800px) {
  .title-wrapper{
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
    object-fit: cover;
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
  object-fit:cover;
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

    &:before {
        border-top: 1px solid #001a09;
        border-right: 1px solid #001a09;
        box-sizing: border-box;
        content: '';
        height: 8px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate3d(-50%, -75%, 0px) rotate(135deg);
        // Uncomment if you want it to move (probably better not to, looks weird)
        // transition: transform 0.3s;
        // will-change: transform;
        width: 8px;
    }
  }
  .slide-wrapper {
    padding: 0;
  }
  
  .project-title {
    font-size: 12px !important;
  }
  .project-wrapper {
    margin: 0 auto !important;
    margin-left: 0;
  }

  .portfolio-background {
    width: 100%;
    display: i
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
  object-fit:contain;
}


}

</style>
