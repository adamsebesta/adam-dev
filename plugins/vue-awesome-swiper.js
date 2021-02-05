import Vue from 'vue';
import Swiper, {
  Swiper as SwiperClass,
  Mousewheel,
  EffectFade
} from 'swiper/core';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
SwiperClass.use([Mousewheel]);
Swiper.use([EffectFade]);
Vue.use(getAwesomeSwiper(SwiperClass));
