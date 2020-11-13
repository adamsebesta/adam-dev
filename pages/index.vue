<template>
  <div class='page'>
    <div class='background' :style="background? {'height': '100%'}: {'height': '0'}">
    </div>
    <div class="container-main">
      <div>
        <img class="logo" draggable="false" src='~static/logo text.png' />
        <div class="links">
          <nuxt-link to="/contact"> Contact</nuxt-link>
          <a
            href="https://www.linkedin.com/company/adam-sebesta-development"
            target="_blank"
            rel="noopener noreferrer"
            class="button--grey"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      background: null
    }
  },
  methods: {
    showBackground() {
      setTimeout(() => {
        this.background = true;
      }, 2000);
    }
  },
  created() {
    this.showBackground();
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.page {
  overflow-y: hidden;
}
.background {
  transition: all 1.5s ease;
  background-image: url('~static/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: absolute;
}
.container-main {
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  display: flex;
  z-index:1;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.logo {
  height: 400px;
  margin-left: auto; 
  margin-right: auto; 
  margin-bottom: 20px;
}
</style>
