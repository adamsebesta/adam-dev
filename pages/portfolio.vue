<template>
  <div class="container-main">
    <!-- <span class="title-pop">
          GET IN TOUCH!
    </span> -->
    <nuxt-link to="/">
      <img class='logo-top' draggable="false" src='~static/logo clean.png'/>
      <div class='green-sqr' :style="logo? {'opacity': '100' }: {'opacity': '0'}"> </div>
    </nuxt-link>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
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


</style>
