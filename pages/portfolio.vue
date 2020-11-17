<template>
  <div class="container-main">
    <div class='portfolio-background'>
     <div class='title-wrapper'>
       <!-- <img src="~/static/headshot.png" alt=""> -->
      <h2> PORTFOLIO </h2>
     </div>
    <div class='project-wrapper'>
      <swiper class="swiper vertical" :options="swiperOptionv">
        <swiper-slide>
          <div class='slide-wrapper'>
            <span class='project-title'> Berlin Bytes BI Tool </span>
            <VueSlickCarousel v-bind="settings">
              <div><div class='project-image'> <img src="~/static/BI tool.png" alt=""></div></div>
              <div><h3>2</h3></div>
            </VueSlickCarousel>
          </div>
        </swiper-slide>
        <swiper-slide>Berlin Bytes Homepage</swiper-slide>
        <swiper-slide>Streamhub</swiper-slide>
        <div class="swiper-pagination swiper-pagination-v" slot="pagination"></div>
      </swiper>
      <!-- <div class='project-desc'>

      </div>
      <div class='project-photos'>
       <p></p>
      </div> -->
    </div>

   </div>
    <!-- <span class="title-pop">
          GET IN TOUCH!
    </span> -->
    <nuxt-link to="/">
      <img class='logo-top' draggable="false" src='~static/logo clean.png'/>
      <div class='green-sqr' :style="logo? {'opacity': '100' }: {'opacity': '0'}"> </div>
    </nuxt-link>
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
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      },
      swiperOptionv: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 30,
          effect: 'fade',
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination-v',
            clickable: false
          }
        },
      formValues: {},
      logo: false,
      sent: false
    }
  },
  computed: {
    logicAppUrl() {
      return this.$config.logicAppUrl.replace(/\\\//g, "/");
    }
  },
  methods: {
     moveLogo() {
      setTimeout(() => {
        this.logo = true;
      }, 750);
    },

    
  },
  created() {
    this.moveLogo();
  }
}
</script>

<style lang='scss'>

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
* {
  overflow: hidden;
}


.logo-small {
  height: 100px;
  margin: 0 auto;
  margin-bottom: 25px;
  z-index: 10;
}

.green-sqr {
  transition: all 1.5s ease;
  height: 38px;
  width: 38px;
  position: absolute;
  top: 11px;
  left: 10px;
  background-color: #82ab71;
}

.portfolio-background {
  width: 80%;
  height: 80vh;
  background-color: #001a09;
  display: flex;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  height: 100%;
  width: 30%;
  font-family:
    'arial',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  h2{
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 5px;
  }
  p{
    margin-top: 5px;
    letter-spacing: 2px;
  }
  img {
  }
}

.project-wrapper {
  width: 70%;
  height: 100%;
  background-color: white;
}

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


.slide-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
    .project-title {
      font-size: 46px;
      letter-spacing: 5px;
      color: #013011;
      font-family:  'arial',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    }
  }

.project-image {
  img {
    
  }
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


</style>
