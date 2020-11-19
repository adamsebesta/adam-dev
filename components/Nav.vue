<template>
  <div>
    <i v-if="!clicked" @click="clicked = true" class="fas fa-bars bars"></i>
    <div v-if="clicked" class='nav-links'>
      <nuxt-link to="/">HOME</nuxt-link>
      <nuxt-link to="/portfolio">PORTFOLIO</nuxt-link>
      <nuxt-link to="/contact"> CONTACT</nuxt-link>
      <nuxt-link to="/about"> ABOUT</nuxt-link>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'

export default {
  name: Nav,
  data() {
    return {
      clicked: false
    }
  },
  methods: {
  },
  created() {
   
  }
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
