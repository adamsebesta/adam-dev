import Vue from 'vue';
import { Swiper as SwiperClass, Mousewheel } from 'swiper/core';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
SwiperClass.use([Mousewheel]);
Vue.use(getAwesomeSwiper(SwiperClass));