<template>
  <div class='page'>
    <!-- <div class='background' :style="background? {'transform': 'translateX(0)' }: {'transform': 'translateX(800px)'}">
    </div>
     <div class='background-lower' :style="background? {'transform': 'translateX(0)' }: {'transform': 'translateX(-500px)'}">
    </div> -->
    <div class="container-main">
      <div class='logo-wrapper'>
        <img id="iphone-home" class="" draggable="false" src='~static/iphone.png' />
        <img class="logo" draggable="false" src='~static/logo text trans.png' />
        <!-- <div class="links">
          <nuxt-link class='main-btn' to="/contact">CONTACT</nuxt-link>
          <nuxt-link class='main-btn' to="/portfolio">PORTFOLIO</nuxt-link>
          <a
            href="https://www.linkedin.com/company/adam-sebesta-development"
            target="_blank"
            rel="noopener noreferrer"
            class='main-btn'
          >
            LINKEDIN
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      title: 'Adam Sebesta Development | Home',
      description: 'Web and Mobile App Development',
      image: '/meta.png'
    }
  },
  methods: {
    showBackground() {
      setTimeout(() => {
        this.background = true;
      }, 750);
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

html {
  overflow: hidden;
}
.background {
  transition: all 1.5s ease;
  z-index: -1;
  background-image: url('~static/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 90%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
}

.background-lower {
  transition: all 1.5s ease;
  z-index: -1;
  background-image: url('~static/background lower.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 70%;
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
  color: #013011;
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
  height: 150px;
  margin-left: 2%;
  margin-right: auto;
  /* margin-bottom: 10px; */
}

#iphone-home {
  margin: 0 auto;
  height: 500px;
}

@media only screen and (max-width: 1000px) {
  .logo {
    height: 86px;
  }

  .main-btn {
    font-size: 10px;
    padding: 10px 15px;
  }

  .background-lower {
    
    height: 100vh;
    bottom: -94px;
  }

  html, body {
  overflow-x: hidden;
  }
  body {
    position: relative;
  }

  .background {
    transform: translateX(200);
  }
}
@media only screen and (max-width: 600px) {
  .logo {
    height: 86px;
  }

  .main-btn {
    font-size: 10px;
    padding: 10px 15px;
  }

  .background-lower {
    
    height: 80vh;
    bottom: -94px;
  }

  html, body {
  overflow-x: hidden;
  }
  body {
    position: relative;
  }

  .background {
    transform: translateX(0);
    background-image: url('~static/background copy.png');
    width: 51%;
    height: 22vh;
  }

  .logo-wrapper {
    position: absolute;
    top: 33%;
  }
}
</style>
